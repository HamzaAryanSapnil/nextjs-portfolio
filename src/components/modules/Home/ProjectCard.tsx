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
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const textSlideUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
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
      <Card className="overflow-hidden group relative border border-border shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-52 sm:h-64 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
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

          {/* Overlay Effect */}
          <motion.div
            initial="hidden"
            whileHover="visible"
            variants={overlayVariants}
            className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
          >
            <motion.div variants={textSlideUp} className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <div className="flex gap-3">
                {liveUrl && (
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="text-xs"
                  >
                    <Link
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Live
                    </Link>
                  </Button>
                )}
                {codeUrl && (
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="text-xs"
                  >
                    <Link
                      href={codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} className="mr-1" />
                      Code
                    </Link>
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <CardContent className="p-6 space-y-4">
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
        </CardContent>
      </Card>
    </motion.div>
  );
}
