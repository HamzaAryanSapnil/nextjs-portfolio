"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string | StaticImageData;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      variants={cardVariants}
      className="group"
      aria-labelledby={`blog-${post.id}-title`}
    >
      <Card className="overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.35 }}
            className="relative w-full h-full"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        </div>

        {/* Content */}
        <CardContent className="p-6 space-y-4">
          {/* Category */}
          <span className="inline-block px-3 py-1 rounded-md bg-accent text-accent-foreground text-xs">
            {post.category}
          </span>

          {/* Title */}
          <h3
            id={`blog-${post.id}-title`}
            className="text-lg font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors"
          >
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-muted-foreground text-xs pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Read more */}
          <div className="pt-3">
            <Button asChild variant="link" size="sm">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}
