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
import { createBlog } from "@/services/admin/blogsManagement";

import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

interface CreateBlogFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}
// export interface IBlog {
//   id: string;
//   title: string;
//   slug: string;
//   description: string;
//   content: string;
//   category: string;
//   tags: string[];
//   featuredImage: string;
//   createdAt: string;
//   updatedAt: string;
// }
export default function CreateBlogFormDialog({
  open,
  onClose,
  onSuccess,
}: CreateBlogFormDialogProps) {
  const [state, formAction, pending] = useActionState(createBlog, null);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (state && state?.success) {
      toast.success(state.message);
      onSuccess();
      onClose();
    } else if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state, onSuccess, onClose]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Blog</DialogTitle>
        </DialogHeader>

        <form action={formAction} className="space-y-4">
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
              required
            />
            <InputFieldError field="title" state={state} />
          </Field>

          <Field>
            <FieldLabel htmlFor="category">Category</FieldLabel>
            <Input
              id="category"
              name="category"
              type="text"
              placeholder="Category"
              required
            />
            <InputFieldError field="title" state={state} />
          </Field>

          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Input
              id="description"
              name="description"
              type="text"
              placeholder="Description"
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
              required
            />
            <InputFieldError field="content" state={state} />
          </Field>

          <Field>
            <FieldLabel htmlFor="file">Upload Image</FieldLabel>

            <Input id="file" name="file" type="file" accept="image/*" />
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
              {pending ? "Saving..." : "Save Blog"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
