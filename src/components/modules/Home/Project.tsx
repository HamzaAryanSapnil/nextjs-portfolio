"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";

export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
}

interface ProjectsProps {
  projects: Project[];
  showHeader?: boolean;
  showViewAll?: boolean;
  viewAllUrl?: string;
  maxProjects?: number;
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export function Projects({
  projects,
  showHeader = true,
  showViewAll = true,
  viewAllUrl = "#",
  maxProjects,
}: ProjectsProps) {
  const displayedProjects = maxProjects
    ? projects.slice(0, maxProjects)
    : projects;

  return (
    <section className="w-full py-20 px-4" id="projects">
      <div className="container mx-auto">
        {showHeader && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
            className="text-center mb-16 space-y-4"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-primary text-sm font-medium">
                My Projects
              </span>
              <div className="h-1 w-12 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Featured Work & Projects
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-6">
              Explore a selection of my recent work that highlights design and
              development excellence.
            </p>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} liveUrl="#" codeUrl="#" />
          ))}
        </motion.div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10"
          >
            {/* <Link
              href={viewAllUrl}
              className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity text-sm font-medium"
            >
              View All Projects
              <ArrowRight size={16} />
            </Link> */}
          </motion.div>
        )}
      </div>
    </section>
  );
}
