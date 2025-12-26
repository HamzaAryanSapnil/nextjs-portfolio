"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectDetailsModal } from "./ProjectDetailsModal";

interface ProjectCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
  backendUrl?: string;
  backendCodeUrl?: string;
  index?: number;
  fullDescription?: string;
  features?: string[];
  frontendStack?: string[];
  backendStack?: string[];
  services?: string[];
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      delay: i * 0.15, 
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const overlayVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" } 
  },
};

const textSlideUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageScaleVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export function ProjectCard({
  image,
  title,
  description,
  technologies,
  liveUrl,
  codeUrl,
  backendUrl,
  backendCodeUrl,
  index = 0,
  fullDescription,
  features,
  frontendStack,
  backendStack,
  services,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        custom={index}
        className="w-full"
      >
        <Card className="overflow-hidden group relative border border-border shadow-sm hover:shadow-lg transition-all duration-300 neon-border h-[500px] sm:h-[550px]">
          {/* Image Container */}
          <div className="relative h-64 sm:h-72 overflow-hidden">
            <motion.div
              variants={imageScaleVariants}
              initial="rest"
              whileHover="hover"
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

            {/* Overlay Effect with View Details Button */}
            <motion.div
              initial="hidden"
              whileHover="visible"
              variants={overlayVariants}
              className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
            >
              <motion.div variants={textSlideUp} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/20 text-primary px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {technologies.length > 3 && (
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded-md text-xs font-medium">
                      +{technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="text-xs bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Eye size={14} className="mr-1" />
                        View Details
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                  {liveUrl && liveUrl !== "#" && (
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
                  {codeUrl && codeUrl !== "#" && (
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
          <motion.div 
            className="p-6 space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index || 0) * 0.1 + 0.3 }}
          >
            <motion.h3 
              className="text-lg font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index || 0) * 0.1 + 0.4, duration: 0.4 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-sm text-muted-foreground line-clamp-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index || 0) * 0.1 + 0.5, duration: 0.4 }}
            >
              {description}
            </motion.p>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index || 0) * 0.1 + 0.6 + i * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
              {technologies.length > 4 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index || 0) * 0.1 + 0.8, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                >
                  +{technologies.length - 4}
                </motion.span>
              )}
            </div>
          </motion.div>
        </Card>
      </motion.div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        project={{
          image,
          title,
          description: fullDescription || description,
          technologies,
          liveUrl,
          codeUrl,
          backendUrl,
          backendCodeUrl,
          features,
          frontendStack,
          backendStack,
          services,
        }}
      />
    </>
  );
}
