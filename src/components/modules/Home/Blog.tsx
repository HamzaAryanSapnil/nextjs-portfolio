"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IBlog } from "@/types/blogs.interface";
import BlogCard from "../blog/BlogCard";
import Link from "next/link";

interface BlogSectionProps {
  posts: IBlog[];
  label?: string;
  title?: string;
  description?: string;
  showViewAll?: boolean;
  onViewAll?: () => void;
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

function SectionHeader({
  label,
  title,
  description,
}: {
  label?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="text-center mb-8 sm:mb-12 space-y-4">
      <div className="flex items-center justify-center gap-3">
        <div className="h-[3px] w-12 bg-primary rounded-full" />
        <span className="text-sm text-primary font-medium">{label}</span>
        <div className="h-[3px] w-12 bg-primary rounded-full" />
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
        {title}
      </h2>
      <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-6">
        {description}
      </p>
    </div>
  );
}

export function BlogSection({
  posts,
  label = "My Blogs",
  title = "Latest Articles & Insights",
  description = "I share my knowledge and experiences through articles covering web development, programming tips, and industry trends.",
  showViewAll = true,
  onViewAll,
}: BlogSectionProps) {
  console.log("Posts from blog.tsx: ", posts)
  return (
    <section
      id="blogs"
      className="py-20 px-4 bg-secondary/30"
      aria-labelledby="blog-section-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
        >
          <SectionHeader
            label={label}
            title={title}
            description={description}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {posts.map((post, i) => (
            <BlogCard key={post?.id} blog={post} />
          ))}
        </motion.div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            {/* <Link href="/blogs">
              <Button variant="ghost">
                <span className="inline-flex items-center gap-2">
                  <span>View All Articles</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link> */}
          </motion.div>
        )}
      </div>
    </section>
  );
}
