// src/components/Skills.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { defaultFrontendTech, defaultBackendTech, Tech } from "@/data/techs";
import svgPaths from "@/assets/svg/skills-svg";

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
const techIconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.36 } },
  hover: {
    scale: 1.06,
    rotate: [0, -4, 4, -2, 0],
    transition: { duration: 0.5 },
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
      className="bg-card rounded-2xl p-5 sm:p-6 border border-border shadow-sm"
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
        className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/60 text-primary mb-4"
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

function TechItem({
  tech,
  enableAnimations,
}: {
  tech: Tech;
  enableAnimations: boolean;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      variants={techIconVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={enableAnimations ? "hover" : undefined}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
        style={{
          background: "var(--card)",
          boxShadow: tech.shadowColor
            ? `0 6px 20px ${tech.shadowColor}`
            : undefined,
        }}
        aria-hidden
      >
        <div className="w-10 h-10">{tech.logo}</div>
      </div>
      <span className="text-xs font-medium text-foreground text-center">
        {tech.name}
      </span>
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
  return (
    <section
      id="skills"
      className="bg-secondary/30 w-full py-16 md:py-20 lg:py-28"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              variants={fadeInUpVariants}
              className="space-y-6 border-r-2 pr-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-primary">
                  {/* simple frontend icon */}
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d={svgPaths.p11d16a80}
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[17px] font-semibold text-foreground">
                  Frontend Technologies
                </h3>
              </div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                variants={enableAnimations ? containerVariants : undefined}
              >
                {frontendTechnologies.map((tech) => (
                  <TechItem
                    key={tech.id}
                    tech={tech}
                    enableAnimations={enableAnimations}
                  />
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUpVariants} className="space-y-6 pl-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-primary">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d={svgPaths.pc21c880}
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-[17px] font-semibold text-foreground">
                  Backend Technologies
                </h3>
              </div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                variants={enableAnimations ? containerVariants : undefined}
              >
                {backendTechnologies.map((tech) => (
                  <TechItem
                    key={tech.id}
                    tech={tech}
                    enableAnimations={enableAnimations}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
