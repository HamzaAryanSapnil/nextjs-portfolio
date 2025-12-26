"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Languages,
  BookOpen,
  Monitor,
  Server,
  Layers,
  Brain,
} from "lucide-react";
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
  } | null;
  profileCard?: {
    image?: string | StaticImageData;
    name?: string;
    title?: string;
  };
  showGradientGlow?: boolean;
}

const serviceCategories = [
  { icon: Monitor, title: "Frontend Development", count: "15+ Projects" },
  { icon: Server, title: "Backend Development", count: "12+ Projects" },
  { icon: Layers, title: "Full Stack Apps", count: "10+ Projects" },
  { icon: Brain, title: "AI Integration", count: "3+ Projects" },
];

const statistics = [
  { value: "15+", label: "Projects Completed" },
  { value: "20+", label: "Technologies Learned" },
  { value: "10+", label: "Full Stack Apps" },
  { value: "5+", label: "Months Learning" },
];

export default function AboutMe({
  sectionLabel = "About Me",
  heading = ["Who I Am", "What I Do"],
  profileCard = {
    image: about ?? "/profile.jpg",
    name: "Hamza Aryan Sapnil",
    title: "Full-Stack MERN Developer",
  },
  showGradientGlow = true,
}: AboutMeProps) {
  return (
    <section
      id="about"
      className="relative bg-background py-20 sm:py-24 md:py-32 "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {serviceCategories.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg neon-border group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {service.count}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Profile Card, Statistics & Info Cards */}
          <div className="space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center lg:justify-start"
            >
              <Card className="relative w-full max-w-md bg-card border-border border overflow-hidden rounded-2xl shadow-xl neon-border">
                {showGradientGlow && (
                  <div className="absolute -inset-1 bg-linear-to-r from-primary/20 via-foreground/10 to-muted-foreground/20 blur-md rounded-2xl -z-10 neon-glow" />
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

            {/* Statistics Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 neon-border group"
                >
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-primary group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 space-y-3 neon-border group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all drop-shadow-[0_0_5px_rgba(59,130,246,0.4)]" />
                <h3 className="text-lg font-semibold text-foreground">
                  Current Focus & Learning
                </h3>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  • <span className="text-foreground">AI Implementation:</span>{" "}
                  Learning to integrate LLMs via OpenRouter SDK to build
                  context-aware web applications.
                </p>
                <p>
                  •{" "}
                  <span className="text-foreground">Workflow Automation:</span>{" "}
                  Learning to build automated pipelines and AI Agents using the
                  n8n engine.
                </p>
              </div>
            </motion.div>
          </div>

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
              <p>
                I&apos;m a Full Stack MERN Developer specializing in Next.js and
                React.js. I build responsive, modern, and scalable web
                applications that focus on user experience. I work with both
                frontend and backend technologies to create complete solutions.
              </p>
              <p>
                Currently, I&apos;m exploring AI integration in web
                applications. I&apos;m familiar with OpenRouter SDK for
                integrating AI models into websites, though I&apos;m still
                learning and improving in this area. I&apos;m also learning n8n
                engine to build workflow automation and AI agents. My personal
                projects reflect my interest in learning new technologies and
                applying them to solve real problems.
              </p>
              <p>
                I&apos;m looking for an entry-level position where I can apply
                my skills and continue learning from experienced developers
                while contributing to meaningful projects.
              </p>
            </motion.div>

            {/* Education & Languages */}
            <motion.div
              variants={textItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-6 space-y-3 neon-border group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all drop-shadow-[0_0_5px_rgba(59,130,246,0.4)]" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Education
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground font-medium">HSC (Science)</p>
                  <p className="text-sm text-muted-foreground">
                    Gopalpur Government College
                  </p>
                  <p className="text-sm text-muted-foreground">
                    GPA: 4.78 · 2019–2021
                  </p>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded-xl p-6 space-y-3 neon-border group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Languages className="h-5 w-5 text-primary group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all drop-shadow-[0_0_5px_rgba(59,130,246,0.4)]" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Languages
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground">
                    <span className="font-medium">Bengali</span> — Native
                  </p>
                  <p className="text-foreground">
                    <span className="font-medium">English</span> — Basic
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
