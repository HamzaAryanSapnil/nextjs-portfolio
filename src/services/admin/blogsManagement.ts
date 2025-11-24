/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

import { serverFetch } from "@/lib/server-fetch";
import {
  CreateBlogZodSchema,
  createBlogZodSchema,
  updateBlogZodSchema,
  UpdateBlogZodSchema,
} from "@/zod/blogs.validation";

import { zodValidator } from "@/lib/zodValidator";

export async function createBlog(_prevState: any, formData: FormData) {
  try {
    const payload: CreateBlogZodSchema = {
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      description: formData.get("description") as string,
      content: formData.get("content") as string,
      category: formData.get("category") as string,
    };

    const file = formData.get("file");

    if (file && file instanceof File && file.size > 0) {
      const file = formData.get("file");
      console.log("file from inside if block: ", file);
      const formDataImage = new FormData();
      formDataImage.append("image", file as Blob);

      const responseImage = await fetch(`${process.env.IMGBB_API}`, {
        method: "POST",
        body: formDataImage,
      });

      const resultImage = await responseImage.json();
      const imageLink = resultImage?.data?.image?.url;
      console.log(imageLink);
      if (!imageLink) {
        throw new Error("Image upload failed");
      }

      const blogData: CreateBlogZodSchema = {
        title: formData.get("title") as string,
        slug: formData.get("slug") as string,
        description: formData.get("description") as string,
        content: formData.get("content") as string,
        category: formData.get("category") as string,
        featuredImage: imageLink,
      };
      if (zodValidator(blogData, createBlogZodSchema).success === false) {
        return zodValidator(blogData, createBlogZodSchema);
      }
      const validatedPayload = zodValidator(blogData, createBlogZodSchema).data;
      const response = await serverFetch.post("/blogs/create-blog", {
        body: JSON.stringify(validatedPayload),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      return result;
    }

    if (zodValidator(payload, createBlogZodSchema).success === false) {
      return zodValidator(payload, createBlogZodSchema);
    }

    const validatedPayload = zodValidator(payload, createBlogZodSchema).data;

    const response = await serverFetch.post("/blogs/create-blog", {
      body: JSON.stringify(validatedPayload),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
}

export async function getAllBlogs() {
  try {
    const response = await serverFetch.get("/blogs");
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
}
export async function getSingleBlogs(slug: string) {
  try {
    const response = await serverFetch.get(`/blogs/${slug}`);
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
}

export async function updateBlog(_prevState: any, formData: FormData) {
  try {
    // Build a partial payload from provided formData values (only include present/ non-empty)
    const partialPayload: Partial<UpdateBlogZodSchema> = {};
  const id = formData.get("id") as string;
    const title = formData.get("title");
    const slug = formData.get("slug");
    const description = formData.get("description");
    const content = formData.get("content");
    const category = formData.get("category");

    if (title && typeof title === "string" && title.trim() !== "") {
      partialPayload.title = title.trim();
    }
    if (slug && typeof slug === "string" && slug.trim() !== "") {
      partialPayload.slug = slug.trim();
    }
    if (
      description &&
      typeof description === "string" &&
      description.trim() !== ""
    ) {
      partialPayload.description = description.trim();
    }
    if (content && typeof content === "string" && content.trim() !== "") {
      partialPayload.content = content.trim();
    }
    if (category && typeof category === "string" && category.trim() !== "") {
      partialPayload.category = category.trim();
    }

    // Handle file upload if present
    const fileEntry = formData.get("file");
    if (fileEntry && fileEntry instanceof File && fileEntry.size > 0) {
      const fd = new FormData();
      fd.append("image", fileEntry as Blob);

      const imgbbRes = await fetch(process.env.IMGBB_API as string, {
        method: "POST",
        body: fd,
      });

      if (!imgbbRes.ok) {
        const text = await imgbbRes.text().catch(() => "");
        throw new Error(
          `Image upload failed: ${imgbbRes.status} ${imgbbRes.statusText} ${text}`
        );
      }

      const imageJson = await imgbbRes.json();
      const imageLink = imageJson?.data?.image?.url;

      if (!imageLink) {
        throw new Error(
          "Image upload succeeded but did not return a usable URL"
        );
      }

      // set featuredImage to uploaded URL
      partialPayload.featuredImage = imageLink;
    }

    // If nothing to update (empty payload) -> return early
    if (Object.keys(partialPayload).length === 0) {
      return {
        success: false,
        message: "Nothing to update. Provide at least one field.",
      };
    }

    // Validate using zod (partial schema)
    const validation = zodValidator(partialPayload, updateBlogZodSchema);
    if (validation.success === false) {
      return validation;
    }

    const validatedPayload = validation.data as UpdateBlogZodSchema;

    // Send PATCH request
    const response = await serverFetch.patch(`/blogs/${id}`, {
      body: JSON.stringify(validatedPayload),
      headers: { "Content-Type": "application/json" },
    });

    // handle non-ok responses gracefully
    let result;
    try {
      result = await response.json();
    } catch {
      // if response is not JSON
      if (!response.ok) {
        throw new Error(
          `Update failed: ${response.status} ${response.statusText}`
        );
      }
      result = { success: true };
    }

    return result;
  } catch (error: any) {
    console.error("updateBlog error:", error);
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error?.message ?? String(error)
          : "Something went wrong",
    };
  }
}



export async function deleteBlog(id: string) {
  try {
    const response = await serverFetch.delete(`/blogs/${id}`);
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong"
      }`,
    };
  }
}
