"use client";
import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { updateBlog } from "@/services/admin/blogsManagement";
import { IBlog } from "@/types/blogs.interface";
import Image from "next/image";

import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

interface EditBlogFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  blog: IBlog;
}

export default function EditBlogFormDialog({
  open,
  onClose,
  onSuccess,
  blog,
}: EditBlogFormDialogProps) {
  const [state, formAction, pending] = useActionState(updateBlog, null);

  // image state can be a URL string or null (no preview)
  const [slug, setSlug] = useState<string>(blog.slug ?? "");
  const [image, setImage] = useState<string | null>(blog.featuredImage ?? null);

  useEffect(() => {
    if (state && state?.success) {
      toast.success(state.message);
      onSuccess();
      onClose();
    } else if (state && !state.success) {
      toast.error(state.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  // helper for file input change — typed event
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // create preview URL (will be revoked by browser on unload)
      const previewUrl = URL.createObjectURL(file);
      setImage(previewUrl);
    } else {
      // no file selected — fall back to null
      setImage(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit This Blog</DialogTitle>
        </DialogHeader>

        <form
          action={formAction}
          className="space-y-4"
          encType="multipart/form-data"
        >
          <input type="hidden" name="id" value={blog.id} />

          <Field>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input
              id="title"
              name="title"
              type="text"
              onChange={(e) =>
                setSlug(
                  e.target.value.trim().replace(/\s+/g, "-").toLowerCase()
                )
              }
              placeholder="Title"
              defaultValue={blog.title}
              required
            />
            <InputFieldError field="title" state={state} />
          </Field>

          <Field>
            <FieldLabel htmlFor="slug">Slug</FieldLabel>
            <Input
              id="slug"
              name="slug"
              placeholder="Slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
            <InputFieldError field="slug" state={state} />
          </Field>

          <Field>
            <FieldLabel htmlFor="category">Category</FieldLabel>
            <Input
              id="category"
              name="category"
              type="text"
              placeholder="Category"
              defaultValue={blog.category}
              required
            />
            <InputFieldError field="category" state={state} />
          </Field>

          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Input
              id="description"
              name="description"
              type="text"
              placeholder="Description"
              defaultValue={blog.description}
              required
            />
            <InputFieldError field="description" state={state} />
          </Field>

          <Field>
            <FieldLabel htmlFor="content">Content</FieldLabel>
            <Input
              id="content"
              name="content"
              type="text"
              placeholder="Content"
              defaultValue={blog.content as string}
              required
            />
            <InputFieldError field="content" state={state} />
          </Field>

          {/* Preview: show newly selected image if any, otherwise show existing featuredImage */}
          {(image ?? blog.featuredImage) && (
            <div className="flex items-center justify-center">
              <Image
                src={image ?? blog.featuredImage!}
                alt="Blog Image"
                width={200}
                height={200}
                className="object-cover object-center w-64 h-52 rounded-md"
              />
            </div>
          )}

          <Field>
            <FieldLabel htmlFor="file">Upload Image</FieldLabel>

            <input
              id="file"
              name="file"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <InputFieldError field="file" state={state} />
          </Field>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={pending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={pending}>
              {pending ? "Editing..." : "Edit Blog"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
