"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
  index?: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
  }),
};

export function ProjectCard({
  image,
  title,
  description,
  technologies,
  liveUrl,
  codeUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index}
    >
      <Card className="overflow-hidden group hover:shadow-md transition-all duration-300">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
          </motion.div>
        </div>

        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="flex gap-3">
              {liveUrl && (
                <Button asChild size="sm" variant="outline">
                  <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </Link>
                </Button>
              )}
              {codeUrl && (
                <Button asChild size="sm" variant="ghost">
                  <Link
                    href={codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    <Github size={14} />
                    Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
