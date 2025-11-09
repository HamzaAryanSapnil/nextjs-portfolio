"use client";

import React from "react";

import { motion, Variants } from "framer-motion";

import svgPaths from "@/assets/svg/skills-svg";

/* --- Types --- */
export interface SkillCardData {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Tech {
  id: string;
  name: string;
  logo: React.ReactNode;
  shadowColor?: string;
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

/* --- Variants (type-safe) --- */
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
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

const techIconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.36, ease: "easeOut" },
  },
  hover: {
    scale: 1.08,
    rotate: [0, -4, 4, -2, 0],
    transition: { duration: 0.5 },
  },
};

/* --- Icon components (kept small & reusable) --- */
const FrontendIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden>
    <path
      d={svgPaths.p11d16a80}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d={"M3 9H21"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 21V9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BackendIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden>
    <path
      d={svgPaths.pc21c880}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d={svgPaths.p138a0cf0}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6H6.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden>
    <path
      d={svgPaths.p11feba00}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d={svgPaths.p1b1afa80}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* --- Default data --- */
const defaultSkillCards: SkillCardData[] = [
  {
    id: "frontend",
    icon: <FrontendIcon />,
    title: "Frontend Development",
    description:
      "Responsive, accessible UIs using React, Next.js and modern CSS.",
  },
  {
    id: "backend",
    icon: <BackendIcon />,
    title: "Backend Development",
    description: "APIs and server logic with Node, Express and TypeScript.",
  },
  {
    id: "database",
    icon: <DatabaseIcon />,
    title: "Databases",
    description: "Relational & NoSQL design, queries and optimization.",
  },
];

const defaultFrontendTech: Tech[] = [
  {
    id: "next",
    name: "Next.js",
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 64 64">
        <path d={svgPaths.p2abae00} />
      </svg>
    ),
  },
  {
    id: "react",
    name: "React",
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 64 64">
        <path d={svgPaths.pc224000} />
      </svg>
    ),
  },
  {
    id: "redux",
    name: "Redux",
    logo: (
      <svg
        className="w-8 h-8 my-auto mx-auto"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
    
      >
        <path d="M 24 2 C 16.832 2 11 10.292328 11 20.486328 C 11 25.752514 12.564938 30.494647 15.060547 33.859375 A 3.5 3.5 0 0 0 18.5 38 A 3.5 3.5 0 1 0 18.5 31 A 3.5 3.5 0 0 0 17.931641 31.050781 C 16.143565 28.387233 15 24.611465 15 20.486328 C 15 12.633328 19.122 6 24 6 C 28.119 6 31.689125 10.7375 32.703125 16.9375 C 34.125125 17.3455 35.541688 17.897453 36.929688 18.564453 C 36.251687 9.2704531 30.712 2 24 2 z M 22.5 17 A 3.5 3.5 0 1 0 22.5 24 A 3.5 3.5 0 0 0 25.640625 22.041016 C 28.890379 21.837485 32.64609 22.840116 36.113281 24.917969 C 42.973281 29.030969 46.703812 36.223047 44.257812 40.623047 C 43.453812 42.069047 42.005359 43.108953 40.068359 43.626953 C 37.279359 44.372953 33.859234 43.993672 30.490234 42.638672 C 29.421234 43.632672 28.245891 44.565828 26.962891 45.423828 C 30.290891 47.104828 33.8105 47.996094 37.0625 47.996094 C 38.4725 47.996094 39.833516 47.830234 41.103516 47.490234 C 44.110516 46.685234 46.410906 44.982406 47.753906 42.566406 C 51.337906 36.117406 47.127922 26.858281 38.169922 21.488281 C 33.907448 18.931871 29.185543 17.753815 25.035156 18.09375 A 3.5 3.5 0 0 0 22.5 17 z M 9.1601562 23.324219 C 2.0791563 28.795219 -0.95795312 36.799406 2.2480469 42.566406 C 3.5910469 44.982406 5.8914375 46.685234 8.8984375 47.490234 C 10.169438 47.830234 11.527453 47.996094 12.939453 47.996094 C 16.739453 47.996094 20.910031 46.789672 24.707031 44.513672 C 28.954867 41.96696 32.09575 38.543722 33.876953 34.962891 C 35.628054 34.772138 37 33.301038 37 31.5 C 37 29.57 35.43 28 33.5 28 C 31.57 28 30 29.57 30 31.5 C 30 32.040225 30.132082 32.546629 30.351562 33.003906 C 28.907628 35.978686 26.213448 38.945387 22.650391 41.082031 C 18.354391 43.658031 13.599641 44.609953 9.9316406 43.626953 C 7.9956406 43.108953 6.5481406 42.069047 5.7441406 40.623047 C 3.8101406 37.143047 5.7462969 31.923469 10.029297 27.855469 C 9.6182969 26.415469 9.3241562 24.899219 9.1601562 23.324219 z"></path>
      </svg>
    ),
  },

  {
    id: "ts",
    name: "TypeScript",
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 64 64">
        <path d={svgPaths.p1d302a80} />
      </svg>
    ),
  },
];

const defaultBackendTech: Tech[] = [
  {
    id: "node",
    name: "Node.js",
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 64 64">
        <path d={svgPaths.p367f0a80} />
      </svg>
    ),
  },
  {
    id: "express",
    name: "Express.js",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 48 48"
      >
        <path
          fill="#212121"
          d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"
        ></path>
        <path
          fill="#212121"
          d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"
        ></path>
      </svg>
    ),
  },
  {
    id: "postgres",
    name: "PostgreSQL and Prisma",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 48 48"
      >
        <path
          fill="#fff"
          d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"
        ></path>
        <path
          fill="#0277bd"
          d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"
        ></path>
        <path
          fill="#0277bd"
          d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"
        ></path>
        <path
          fill="#0277bd"
          d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"
        ></path>
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 64 64">
        <path d={svgPaths.p1f24300} />
      </svg>
    ),
  },
  {
    id: "rest",
    name: "REST",
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 64 64">
        <path d={svgPaths.p2e580400} />
      </svg>
    ),
  },
];

/* --- Small subcomponents --- */
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
      transition={{ layout: { duration: 0.25 } }}
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
        style={{ background: "var(--card)" }}
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

/* --- Main component --- */
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
              className="space-y-6 border-r-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-primary">
                  <FrontendIcon />
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

            <motion.div variants={fadeInUpVariants} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-primary">
                  <BackendIcon />
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

/* --- Named exports (optional) --- */
export {
  FrontendIcon,
  BackendIcon,
  DatabaseIcon,
  defaultSkillCards,
  defaultFrontendTech,
  defaultBackendTech,
};
