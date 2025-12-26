/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/blog/BlogCard";

import { getAllBlogs } from "@/services/admin/blogsManagement";

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="space-y-8 pb-10 container mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">All Blogs</h1>
        <p className="text-muted-foreground text-sm">
          Explore all published blogs.
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.length > 0 ? (
          blogs.map((blog : any) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p className="text-muted-foreground">No blogs found.</p>
        )}
      </div>
    </div>
  );
}
