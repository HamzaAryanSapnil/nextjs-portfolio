import AboutMe from "@/components/modules/Home/About";
import { BlogSection } from "@/components/modules/Home/Blog";
import Hero from "@/components/modules/Home/Hero";
import { Projects } from "@/components/modules/Home/Project";
import Skills from "@/components/modules/Home/Skills";

import { serverFetch } from "@/lib/server-fetch";
import { IBlog } from "@/types/blogs.interface";

export const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, cart functionality, and payment processing integration.",
    image:
      "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, task assignment, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?q=80&w=1974&auto=format&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "3",
    title: "Personal Finance Dashboard",
    description:
      "An interactive dashboard for tracking expenses, income, and financial goals with data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Chart.js", "Firebase"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "4",
    title: "Blog Platform",
    description:
      "A content management system with markdown support, user authentication, and comment functionality.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "5",
    title: "Real-time Chat Application",
    description:
      "A messaging platform with private and group chats, file sharing, and notification system.",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2069&auto=format&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "6",
    title: "Weather Forecast App",
    description:
      "A location-based weather application with 7-day forecasts, weather alerts, and interactive maps.",
    image:
      "https://images.unsplash.com/photo-1530563885674-66db50a1af19?q=80&w=2069&auto=format&fit=crop",
    technologies: ["React", "OpenWeatherAPI", "Leaflet", "Geolocation"],
    liveUrl: "#",
    codeUrl: "#",
  },
];


export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}




export default async function Home() {
  // fetch blogs
  const blogsRes = await serverFetch.get("/blogs", {cache: "no-store"});
  const blogsJson = await blogsRes.json().catch(() => null);
  
  

  

  const blogs: IBlog[] = Array.isArray(blogsJson?.data) ? blogsJson.data : [];
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills enableAnimations={true} heading="Technical Skills" />
      <Projects projects={projects} showViewAll viewAllUrl="/projects" />;
      <BlogSection posts={blogs}  />
     
    </>
  );
}
