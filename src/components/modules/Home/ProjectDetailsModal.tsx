"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectDetails {
  image: string | StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
  backendUrl?: string;
  backendCodeUrl?: string;
  features?: string[];
  frontendStack?: string[];
  backendStack?: string[];
  services?: string[];
}

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectDetails;
}

export function ProjectDetailsModal({
  isOpen,
  onOpenChange,
  project,
}: ProjectDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-base">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Project Image */}
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-4">
            {project.frontendStack && project.frontendStack.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Frontend Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.frontendStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {project.backendStack && project.backendStack.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Backend Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.backendStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {project.services && project.services.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Services & Integrations</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* All Technologies */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="default" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex gap-3">
              {project.liveUrl && project.liveUrl !== "#" && (
                <Button asChild className="flex-1">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Frontend Live
                  </Link>
                </Button>
              )}
              {project.backendUrl && project.backendUrl !== "#" && (
                <Button asChild variant="secondary" className="flex-1">
                  <Link
                    href={project.backendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Backend API
                  </Link>
                </Button>
              )}
            </div>
            <div className="flex gap-3">
              {project.codeUrl && project.codeUrl !== "#" && (
                <Button asChild variant="outline" className="flex-1">
                  <Link
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    Frontend Code
                  </Link>
                </Button>
              )}
              {project.backendCodeUrl && project.backendCodeUrl !== "#" && (
                <Button asChild variant="outline" className="flex-1">
                  <Link
                    href={project.backendCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    Backend Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

