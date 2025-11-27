import BlogCard from "@/components/modules/blog/BlogCard";
import { serverFetch } from "@/lib/server-fetch";
import { IBlog } from "@/types/blogs.interface";

export default async function BlogsPage() {
  const res = await serverFetch.get("/blogs");
  const data = await res.json();

  const blogs: IBlog[] = data?.data || [];

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
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p className="text-muted-foreground">No blogs found.</p>
        )}
      </div>
    </div>
  );
}
