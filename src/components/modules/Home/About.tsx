"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import { Quote } from "lucide-react";
import { textItem, textParent } from "@/types/variants.types";
import about from "@/assets/images/about.jpg";

export interface AboutMeProps {
  sectionLabel?: string;
  heading?: string[];
  descriptionParagraphs?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  profileCard?: {
    image?: string | StaticImageData;
    name?: string;
    title?: string;
  };
  showGradientGlow?: boolean;
}

export default function AboutMe({
  sectionLabel = "About Me",
  heading = ["Crafting Digital Experiences with Code and", "Creativity"],
  descriptionParagraphs = [
    "I'm a passionate full-stack web developer with expertise in building modern, responsive, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I create seamless digital experiences that solve real-world problems.",
    "My journey in web development started 5 years ago, and since then, I've worked on numerous projects ranging from small business websites to complex web applications. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.",
  ],
  testimonial = {
    quote:
      "Hamza consistently delivers exceptional web solutions that exceed expectations. His technical expertise combined with his creative approach makes him a valuable asset to any project.",
    author: "Sarah Johnson",
    role: "Tech Lead at DevInnovate",
  },
  profileCard = {
    image: about ?? "/profile.jpg",
    name: "Hamza Aryan Sapnil",
    title: "Full-Stack Web Developer",
  },
  showGradientGlow = true,
}: AboutMeProps) {
  return (
    <section
      id="about"
      className="relative bg-background py-20 sm:py-24 md:py-32 "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center lg:justify-start"
        >
          <Card className="relative w-full max-w-md bg-card border-border border overflow-hidden rounded-2xl shadow-xl">
            {showGradientGlow && (
              <div className="absolute -inset-1 bg-linear-to-r from-primary/20 via-foreground/10 to-muted-foreground/20 blur-md rounded-2xl -z-10" />
            )}
            <CardContent className="p-0">
              <div className="relative w-full aspect-5/3 overflow-hidden">
                <Image
                  src={profileCard.image ?? ""}
                  alt={profileCard.name ?? "Profile"}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-primary/95 px-6 py-5 text-primary-foreground">
                <h3 className="text-sm font-medium">{profileCard.name}</h3>
                <p className="text-xs opacity-80">{profileCard.title}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          variants={textParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {/* Section Label */}
          <motion.div
            variants={textItem}
            className="flex items-center gap-3 sm:gap-4"
          >
            <div className="bg-primary h-[3px] w-12 rounded-full" />
            <p className="uppercase text-sm text-muted-foreground font-medium tracking-wide">
              {sectionLabel}
            </p>
          </motion.div>

          {/* Heading */}
          <motion.div variants={textItem} className="space-y-2">
            {heading.map((line, i) => (
              <h2
                key={i}
                className="text-3xl sm:text-4xl md:text-[34px] font-bold text-foreground leading-tight"
              >
                {line}
              </h2>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            variants={textItem}
            className="space-y-6 text-muted-foreground text-base leading-relaxed"
          >
            {descriptionParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          {/* Testimonial */}
          {testimonial && (
            <motion.div
              variants={textItem}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex gap-4 sm:gap-6">
                <div className="text-primary mt-1">
                  <Quote className="size-6" />
                </div>
                <div className="space-y-3">
                  <p className="text-foreground italic leading-relaxed text-sm sm:text-base">
                    “{testimonial.quote}”
                  </p>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
