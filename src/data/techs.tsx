// src/data/techs.tsx
"use client";
import React from "react";
import svgPaths from "@/assets/svg/skills-svg";

/** Types */
export interface Tech {
  id: string;
  name: string;
  logo: React.ReactNode;
  shadowColor?: string; // optional for subtle glow/shadow
}

/**
 * Official-ish brand colours used here (reasonable, recognisable picks)
 * - Next.js: black (#000)
 * - React: #61DAFB
 * - Redux: #764ABC
 * - TypeScript: #3178C6
 * - Node: #43853D
 * - Express: #000 (monochrome)
 * - PostgreSQL: #336791
 * - Prisma: #2A82FF (approx)
 * - MongoDB: #47A248
 * - REST / generic: #F97316 (orange)
 */

/* --- Frontend tech list --- */
export const defaultFrontendTech: Tech[] = [
  {
    id: "next",
    name: "Next.js",
    shadowColor: "#ffffff22",
    logo: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 64 64"
        role="img"
        aria-label="Next.js"
      >
        <path d={svgPaths.p2abae00} fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: "react",
    name: "React",
    shadowColor: "#61DAFB22",
    logo: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 64 64"
        role="img"
        aria-label="React"
      >
        <path d={svgPaths.pc224000} fill="#61DAFB" />
      </svg>
    ),
  },
  {
    id: "redux",
    name: "Redux",
    shadowColor: "#764ABC22",
    logo: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 64 64"
        role="img"
        aria-label="Redux"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 24 2 C 16.832 2 11 10.292328 11 20.486328 C 11 25.752514 12.564938 30.494647 15.060547 33.859375 A 3.5 3.5 0 0 0 18.5 38 A 3.5 3.5 0 1 0 18.5 31 A 3.5 3.5 0 0 0 17.931641 31.050781 C 16.143565 28.387233 15 24.611465 15 20.486328 C 15 12.633328 19.122 6 24 6 C 28.119 6 31.689125 10.7375 32.703125 16.9375 C 34.125125 17.3455 35.541688 17.897453 36.929688 18.564453 C 36.251687 9.2704531 30.712 2 24 2 z M 22.5 17 A 3.5 3.5 0 1 0 22.5 24 A 3.5 3.5 0 0 0 25.640625 22.041016 C 28.890379 21.837485 32.64609 22.840116 36.113281 24.917969 C 42.973281 29.030969 46.703812 36.223047 44.257812 40.623047 C 43.453812 42.069047 42.005359 43.108953 40.068359 43.626953 C 37.279359 44.372953 33.859234 43.993672 30.490234 42.638672 C 29.421234 43.632672 28.245891 44.565828 26.962891 45.423828 C 30.290891 47.104828 33.8105 47.996094 37.0625 47.996094 C 38.4725 47.996094 39.833516 47.830234 41.103516 47.490234 C 44.110516 46.685234 46.410906 44.982406 47.753906 42.566406 C 51.337906 36.117406 47.127922 26.858281 38.169922 21.488281 C 33.907448 18.931871 29.185543 17.753815 25.035156 18.09375 A 3.5 3.5 0 0 0 22.5 17 z M 9.1601562 23.324219 C 2.0791563 28.795219 -0.95795312 36.799406 2.2480469 42.566406 C 3.5910469 44.982406 5.8914375 46.685234 8.8984375 47.490234 C 10.169438 47.830234 11.527453 47.996094 12.939453 47.996094 C 16.739453 47.996094 20.910031 46.789672 24.707031 44.513672 C 28.954867 41.96696 32.09575 38.543722 33.876953 34.962891 C 35.628054 34.772138 37 33.301038 37 31.5 C 37 29.57 35.43 28 33.5 28 C 31.57 28 30 29.57 30 31.5 C 30 32.040225 30.132082 32.546629 30.351562 33.003906 C 28.907628 35.978686 26.213448 38.945387 22.650391 41.082031 C 18.354391 43.658031 13.599641 44.609953 9.9316406 43.626953 C 7.9956406 43.108953 6.5481406 42.069047 5.7441406 40.623047 C 3.8101406 37.143047 5.7462969 31.923469 10.029297 27.855469 C 9.6182969 26.415469 9.3241562 24.899219 9.1601562 23.324219 z"
          fill="#764ABC"
        />
      </svg>
    ),
  },
  {
    id: "ts",
    name: "TypeScript",
    shadowColor: "#3178C622",
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 64 64" role="img" aria-label="TS">
        <path d={svgPaths.p1d302a80} fill="#3178C6" />
      </svg>
    ),
  },
];

/* --- Backend tech list --- */
export const defaultBackendTech: Tech[] = [
  {
    id: "node",
    name: "Node.js",
    shadowColor: "#43853D22",
    logo: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 64 64"
        role="img"
        aria-label="Node.js"
      >
        <path d={svgPaths.p367f0a80} fill="#43853D" />
      </svg>
    ),
  },
  {
    id: "express",
    name: "Express.js",
    shadowColor: "#ffffff22",
    logo: (
      <svg
        viewBox="0 0 48 48"
        width="30"
        height="30"
        role="img"
        aria-label="Express"
      >
        <path
          fill="#ffffff"
          d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"
        />
        <path
          fill="#ffffff"
          d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"
        />
      </svg>
    ),
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    shadowColor: "#33679122",
    logo: (
      <svg
        viewBox="0 0 48 48"
        width="30"
        height="30"
        role="img"
        aria-label="Postgres"
        className="brightness-110"
      >
        <path fill="#4A9BD6" d={svgPaths.p2cac340} />
      </svg>
    ),
  },
  {
    id: "prisma",
    name: "Prisma",
    shadowColor: "#2A82FF22",
    logo: (
      <svg
        viewBox="0 0 24 24"
        width="30"
        height="30"
        role="img"
        aria-label="Prisma"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.636-.7626-1.128-.8076-.4924-.045-1.003.196-1.359.557L2.863 7.1915c-.284.2778-.444.6518-.444 1.042v13.499c0 .645.523 1.167 1.167 1.167.322 0 .624-.13.834-.359l16.177-14.327c.28-.248.36-.651.197-1.001l-1.388-2.839zm-2.736 2.024L5.776 21.4309V9.2152l13.2947-2.389-2.4 13.4826z"
          fill="#2D3748"
        />
        <path
          d="M19.0708 19.3088L5.776 21.4309V9.2152l13.2947-2.389-2.4 13.4826z"
          fill="#0C344B"
        />
        <path
          d="M19.0708 19.3088L5.776 21.4309V9.2152l13.2947-2.389-2.4 13.4826z"
          fill="#5C9EFF"
        />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    shadowColor: "#47A24822",
    logo: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 64 64"
        role="img"
        aria-label="MongoDB"
      >
        <path d={svgPaths.p1f24300} fill="#47A248" />
      </svg>
    ),
  },
  {
    id: "rest",
    name: "REST",
    shadowColor: "#F9731622",
    logo: (
      <svg className="w-8 h-8" viewBox="0 0 64 64" role="img" aria-label="REST">
        <path d={svgPaths.p2e580400} fill="#F97316" />
      </svg>
    ),
  },
];

export default { defaultFrontendTech, defaultBackendTech };
