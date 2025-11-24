"use client";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";
import { deleteBlog } from "@/services/admin/blogsManagement";
import { IBlog } from "@/types/blogs.interface";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { blogsColumns } from "./BlogsColumn";

interface BlogTableProps {
  blogs: IBlog[];
}

const BlogsTable = ({ blogs }: BlogTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [deletingBlog, setDeletingBlog] =
    useState<IBlog | null>(null);
  const [isDeletingDialog, setIsDeletingDialog] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (blog: IBlog) => {
    router.push(`/blogs/${blog.slug}`);
  };

  const handleDelete = (blog: IBlog) => {
    setDeletingBlog(blog);
  };

  const confirmDelete = async () => {
    if (!deletingBlog) return;

    setIsDeletingDialog(true);
    const result = await deleteBlog(deletingBlog.id);
    setIsDeletingDialog(false);
    if (result.success) {
      toast.success(result.message || "Blog deleted successfully");
      setDeletingBlog(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete blog");
    }
  };

  return (
    <>
      <ManagementTable
        data={blogs}
        columns={blogsColumns}
        onDelete={handleDelete}
        onView={handleView}
        getRowKey={(blog) => blog.id}
        emptyMessage="No blogs found"
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingBlog}
        onOpenChange={(open) => !open && setDeletingBlog(null)}
        onConfirm={confirmDelete}
        title="Delete Blog"
        description={`Are you sure you want to delete ${deletingBlog?.title}? This action cannot be undone.`}
        isDeleting={isDeletingDialog}
      />
    </>
  );
};

export default BlogsTable;
