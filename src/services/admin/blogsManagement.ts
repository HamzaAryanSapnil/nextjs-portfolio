/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

import { serverFetch } from "@/lib/server-fetch";
import { createBlogZodSchema } from "@/zod/blogs.validation";

import { zodValidator } from "@/lib/zodValidator";

export async function createBlog(_prevState: any, formData: FormData) {
  try {
    const payload = {
      title: formData.get("title"),
      slug: formData.get("slug"),
      description: formData.get("description"),
      content: formData.get("content"),
      category: formData.get("category"),
      tags: formData?.getAll("tags"),
      featuredImage: formData.get("featuredImage"),
    };

    if (zodValidator(payload, createBlogZodSchema).success === false) {
      return zodValidator(payload, createBlogZodSchema);
    }

    const validatedPayload = zodValidator(payload, createBlogZodSchema).data;

    const response = await serverFetch.post("/blogs/create-blog", {
      body: validatedPayload,
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
export async function getSingleBlogs() {
  try {
    const response = await serverFetch.get("/specialties");
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

export async function updateBlog(id: string) {
  try {
    const response = await serverFetch.delete(`/specialties/${id}`);
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
