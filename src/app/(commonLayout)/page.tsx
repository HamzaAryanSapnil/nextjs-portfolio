import AboutMe from "@/components/modules/Home/About";
import Hero from "@/components/modules/Home/Hero";
import { Projects } from "@/components/modules/Home/Project";
import Skills from "@/components/modules/Home/Skills";

const myProjects = [
  {
    id: "1",
    image: "/projects/p1.jpg",
    title: "Next.js Portfolio",
    description: "Personal portfolio built with Next.js 16 and Shadcn UI.",
    technologies: ["Next.js", "Shadcn", "Framer Motion"],
    liveUrl: "https://myportfolio.vercel.app",
    codeUrl: "https://github.com/yourname/portfolio",
  },
  {
    id: "2",
    image: "/projects/p2.jpg",
    title: "E-commerce Dashboard",
    description:
      "Admin dashboard for managing products, orders, and analytics.",
    technologies: ["React", "Redux Toolkit", "TailwindCSS"],
    liveUrl: "https://ecom-admin.vercel.app",
    codeUrl: "https://github.com/yourname/ecom-admin",
  },
];


export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills enableAnimations={true} heading="Technical Skills" />
      <Projects projects={myProjects} showViewAll viewAllUrl="/projects" />;
    </>
  );
}
