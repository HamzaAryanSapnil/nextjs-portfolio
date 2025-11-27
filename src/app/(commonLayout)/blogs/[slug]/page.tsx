import { serverFetch } from "@/lib/server-fetch";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { IBlog } from "@/types/blogs.interface";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await serverFetch.get(`/blogs/${slug}`);

  if (!res.ok) return notFound();

  const result = await res.json();
  const blog: IBlog = result.data;

  return (
    <div className="mx-auto container space-y-10 pb-16">
      {/* Hero Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border">
        <Image
          src={blog?.featuredImage as string}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Header */}
      <div className="space-y-4">
        <Badge variant="secondary" className="capitalize w-fit">
          {blog.category}
        </Badge>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          {blog.title}
        </h1>

        <p className="text-sm text-muted-foreground">
          Published on {format(new Date(blog.createdAt), "PPP")}
        </p>
      </div>

      {/* Blog Content */}
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        {/* You may use any markdown renderer, here is MDXRemote placeholder */}
        <Markdown remarkPlugins={[remarkGfm]}>{blog.content}</Markdown>
      </article>
    </div>
  );
}
