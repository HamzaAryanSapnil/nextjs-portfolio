import AboutMe from "@/components/modules/Home/About";
import { BlogSection } from "@/components/modules/Home/Blog";
import Hero from "@/components/modules/Home/Hero";
import { Projects } from "@/components/modules/Home/Project";
import Skills from "@/components/modules/Home/Skills";
import { Footer } from "@/components/shared/Footer";

const projects = [
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


const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js and TypeScript",
    description:
      "A comprehensive guide to setting up a new project with Next.js and TypeScript, including best practices and common pitfalls to avoid.",
    category: "Web Development",
    date: "June 15, 2023",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1530563885674-66db50a1af19?q=80&w=2069&auto=format&fit=crop",
    slug: "getting-started-nextjs-typescript",
  },
  {
    id: "2",
    title: "Building Scalable APIs with Node.js and Express",
    description:
      "Learn how to design and implement RESTful APIs that can handle high traffic and scale efficiently as your application grows.",
    category: "Backend",
    date: "May 22, 2023",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1530563885674-66db50a1af19?q=80&w=2069&auto=format&fit=crop",
    slug: "building-scalable-apis-nodejs-express",
  },
  {
    id: "3",
    title: "MongoDB vs PostgreSQL: Choosing the Right Database",
    description:
      "A detailed comparison of MongoDB and PostgreSQL, highlighting their strengths, weaknesses, and ideal use cases for different projects.",
    category: "Databases",
    date: "April 10, 2023",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1530563885674-66db50a1af19?q=80&w=2069&auto=format&fit=crop",
    slug: "mongodb-vs-postgresql-comparison",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills enableAnimations={true} heading="Technical Skills" />
      <Projects projects={projects} showViewAll viewAllUrl="/projects" />;
      <BlogSection posts={blogPosts}  />
      <Footer/>
    </>
  );
}
