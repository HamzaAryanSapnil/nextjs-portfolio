// components/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IBlog } from "@/types/blogs.interface";

interface BlogCardProps {
  blog: IBlog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const img = blog.featuredImage ?? "/placeholder-600x400.png";

  return (
    <Card className="overflow-hidden">
      {img && (
        <div className="relative w-full h-44 md:h-48">
          <Image
            src={img}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}

      <CardContent className="p-4 md:p-6">
        <CardHeader>
          <CardTitle>{blog.title}</CardTitle>
        </CardHeader>

        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
              {blog.description ?? "No description available."}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {blog.tags?.slice(0, 4).map((t) => (
                <Badge key={t} variant="outline" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <div className="shrink-0 ml-4 self-center">
            <Link href={`/blogs/${blog.slug}`}>
             
                <Button size="sm">Read</Button>
             
            </Link>
          </div>
        </div>

        <div className="mt-3 text-xs text-muted-foreground">
          <span>Category: {blog.category ?? "General"}</span>
        </div>
      </CardContent>
    </Card>
  );
}
