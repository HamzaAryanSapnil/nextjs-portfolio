// src/components/Skills.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { defaultFrontendTech, defaultBackendTech, Tech } from "@/data/techs";
import svgPaths from "@/assets/svg/skills-svg";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Brain, Zap } from "lucide-react";

/* Types */
export interface SkillCardData {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SkillsProps {
  sectionLabel?: string;
  heading?: string;
  description?: string[];
  skillCards?: SkillCardData[];
  frontendTechnologies?: Tech[];
  backendTechnologies?: Tech[];
  enableAnimations?: boolean;
}

/* Skill Levels Mapping */
const skillLevels: Record<string, number> = {
  "Next.js": 85,
  React: 85,
  "React.js": 85,
  Redux: 80,
  "RTK Query": 80,
  TypeScript: 80,
  "Tailwind CSS": 85,
  Shadcn: 80,
  "HTML/CSS": 90,
  HTML: 90,
  CSS: 90,
  "JavaScript (ES6)": 85,
  JavaScript: 85,
  "Express.js": 80,
  Express: 80,
  REST: 80,
  "REST API": 80,
  "Node.js": 75,
  Node: 75,
  Mongoose: 75,
  Prisma: 75,
  MongoDB: 70,
  PostgreSQL: 70,
};

/* Learning Skills - Skills user is currently learning/planning to learn */
const learningSkills: Array<{
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}> = [
  {
    id: "openrouter",
    name: "OpenRouter SDK",
    description:
      "AI Implementation - Learning to integrate LLMs via OpenRouter SDK",
    icon: <Brain className="w-6 h-6" />,
    category: "AI Integration",
  },
  {
    id: "n8n",
    name: "n8n Engine",
    description:
      "Workflow Automation - Building automated pipelines and AI Agents",
    icon: <Zap className="w-6 h-6" />,
    category: "Automation",
  },
];

/* Variants */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: "easeOut" },
  },
};
const cardHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, y: -6, transition: { duration: 0.28 } },
};
const circularSkillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    y: -8,
    transition: { duration: 0.3 },
  },
};

/* Default skill cards (kept simple) */
const defaultSkillCards: SkillCardData[] = [
  {
    id: "frontend",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d={svgPaths.p11d16a80}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Frontend Development",
    description:
      "Responsive, accessible UIs using React, Next.js and modern CSS.",
  },
  {
    id: "backend",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d={svgPaths.pc21c880}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Backend Development",
    description:
      "APIs, auth and server logic with Node, Express, and TypeScript.",
  },
  {
    id: "database",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d={svgPaths.p11feba00}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Databases",
    description: "Relational & NoSQL design, queries and optimisation.",
  },
];

/* Small subcomponents */
function SkillCard({
  card,
  enableAnimations,
}: {
  card: SkillCardData;
  enableAnimations: boolean;
}) {
  return (
    <motion.div
      layout
      className="bg-card rounded-2xl p-5 sm:p-6 border border-border shadow-sm neon-border group hover:border-primary/50 transition-all duration-300"
      variants={enableAnimations ? fadeInUpVariants : undefined}
      initial={enableAnimations ? "hidden" : undefined}
      whileInView={enableAnimations ? "visible" : undefined}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={enableAnimations ? "hover" : undefined}
    >
      <motion.div
        variants={enableAnimations ? cardHoverVariants : undefined}
        initial="rest"
        whileHover="hover"
        className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/60 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all drop-shadow-[0_0_5px_rgba(59,130,246,0.4)]"
      >
        {card.icon}
      </motion.div>
      <h3 className="text-[17px] font-semibold text-foreground mb-2">
        {card.title}
      </h3>
      <p className="text-[13.5px] leading-6 text-muted-foreground">
        {card.description}
      </p>
    </motion.div>
  );
}

/* Circular Skill Item with Progress Bar */
function CircularSkillItem({
  tech,
  level,
  enableAnimations,
}: {
  tech: Tech;
  level: number;
  enableAnimations: boolean;
}) {
  // Fix icon visibility for dark backgrounds (Next.js, Express, Prisma, PostgreSQL)
  const needsVisibilityFix = ["next", "express", "prisma", "postgres"].includes(
    tech.id
  );
  const iconWithFix = needsVisibilityFix ? (
    <div className="relative">
      <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm" />
      <div className="relative bg-white/5 rounded-lg p-1">{tech.logo}</div>
    </div>
  ) : (
    tech.logo
  );

  return (
    <motion.div
      className="flex flex-col items-center gap-3 group"
      variants={circularSkillVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={enableAnimations ? "hover" : undefined}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Circular Container with Icon */}
      <div className="relative w-24 h-24 rounded-full bg-card border-2 border-border flex items-center justify-center neon-border group-hover:border-primary/50 transition-all duration-300">
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div
          className="relative z-10 w-12 h-12 flex items-center justify-center"
          style={{
            filter: tech.shadowColor
              ? `drop-shadow(0 0 8px ${tech.shadowColor.replace("22", "60")})`
              : undefined,
          }}
        >
          {iconWithFix}
        </div>
      </div>

      {/* Percentage */}
      <div className="text-2xl font-bold text-foreground group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all drop-shadow-[0_0_4px_rgba(59,130,246,0.4)]">
        {level}%
      </div>

      {/* Skill Name */}
      <span className="text-sm font-medium text-foreground text-center">
        {tech.name}
      </span>

      {/* Progress Bar */}
      <div className="w-full max-w-[100px] mt-1">
        <Progress value={level} className="h-1.5" />
      </div>
    </motion.div>
  );
}

/* Main component */
export default function Skills({
  sectionLabel = "My Skills",
  heading = "Technical Expertise & Capabilities",
  description = [
    "I've developed a diverse skill set that allows me to handle all aspects of web development, from UI to backend.",
  ],
  skillCards = defaultSkillCards,
  frontendTechnologies = defaultFrontendTech,
  backendTechnologies = defaultBackendTech,
  enableAnimations = true,
}: SkillsProps) {
  // Combine all technologies for circular display
  const allTechnologies = [
    ...frontendTechnologies.map((tech) => ({
      tech,
      level: skillLevels[tech.name] || 75,
    })),
    ...backendTechnologies.map((tech) => ({
      tech,
      level: skillLevels[tech.name] || 75,
    })),
  ];

  return (
    <section
      id="skills"
      className="bg-background w-full py-16 md:py-20 lg:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={enableAnimations ? "hidden" : undefined}
          whileInView={enableAnimations ? "visible" : undefined}
          viewport={{ once: true, margin: "-80px" }}
          variants={enableAnimations ? containerVariants : undefined}
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-[3px] rounded-full w-12 bg-primary" />
            <p className="uppercase text-xs tracking-wide text-muted-foreground font-medium">
              {sectionLabel}
            </p>
            <div className="h-[3px] rounded-full w-12 bg-primary" />
          </motion.div>

          <motion.h2
            variants={fadeInUpVariants}
            className="text-2xl sm:text-3xl md:text-[30px] font-bold text-foreground text-center"
          >
            {heading}
          </motion.h2>

          <motion.div
            variants={fadeInUpVariants}
            className="text-center text-sm sm:text-[14px] text-muted-foreground max-w-2xl mx-auto"
          >
            {description.map((p, i) => (
              <p key={i} className="leading-7">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            variants={enableAnimations ? containerVariants : undefined}
          >
            {skillCards.map((card) => (
              <SkillCard
                key={card.id}
                card={card}
                enableAnimations={enableAnimations}
              />
            ))}
          </motion.div>

          {/* Circular Skills Display */}
          <motion.div variants={fadeInUpVariants} className="mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {allTechnologies.map(({ tech, level }) => (
                <CircularSkillItem
                  key={tech.id}
                  tech={tech}
                  level={level}
                  enableAnimations={enableAnimations}
                />
              ))}
            </div>
          </motion.div>

          {/* Currently Learning Section */}
          <motion.div variants={fadeInUpVariants} className="mt-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <BookOpen className="h-5 w-5 text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Currently Learning
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {learningSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-card border border-border rounded-xl p-6 space-y-4 neon-border group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all drop-shadow-[0_0_5px_rgba(59,130,246,0.4)]">
                      {skill.icon}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {skill.category}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
