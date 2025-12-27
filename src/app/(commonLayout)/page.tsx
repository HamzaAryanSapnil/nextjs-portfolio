import type { Metadata } from "next";
import AboutMe from "@/components/modules/Home/About";
import Hero from "@/components/modules/Home/Hero";
import { Projects } from "@/components/modules/Home/Project";
import Skills from "@/components/modules/Home/Skills";
import Contact from "@/components/modules/Home/Contact";
import StructuredData from "@/components/shared/StructuredData";

// Force static generation for homepage
export const dynamic = "force-static";
export const revalidate = false; // Static page, no revalidation

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: "Hamza Aryan Sapnil - Full-Stack MERN Developer | Portfolio",
  description:
    "Full-Stack MERN Developer specializing in Next.js, React.js, and TypeScript. Building modern, scalable web applications. Expert in Express.js, PostgreSQL, Prisma, and AI integration. Based in Tangail, Dhaka, Bangladesh.",
  keywords: [
    "Hamza Aryan Sapnil",
    "Full-Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Developer Bangladesh",
    "Express.js Developer",
    "PostgreSQL Developer",
    "Prisma ORM",
    "AI Integration",
    "OpenRouter SDK",
    "n8n Automation",
    "Portfolio",
    "Web Development",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer Bangladesh",
    "Tangail Developer",
    "Dhaka Developer",
  ],
  openGraph: {
    title: "Hamza Aryan Sapnil - Full-Stack MERN Developer",
    description:
      "Full-Stack MERN Developer specializing in Next.js, React.js, and TypeScript. Building modern, scalable web applications with expertise in Express.js, PostgreSQL, Prisma, and AI integration.",
    url: "/",
    siteName: "Hamza Aryan Sapnil - Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Hamza Aryan Sapnil - Full-Stack MERN Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Aryan Sapnil - Full-Stack MERN Developer",
    description:
      "Full-Stack MERN Developer specializing in Next.js, React.js, and TypeScript. Building modern, scalable web applications.",
    images: ["/profile.png"],
  },
  alternates: {
    canonical: "/",
  },
};

import travelBuddyImage from "@/assets/images/travelBuddy.jpg";
import healthCareImage from "@/assets/images/healthCare.png";

export const projects = [
  {
    id: "1",
    title: "Travel Buddy",
    description:
      "A comprehensive full-stack travel planning and collaboration platform that combines AI-powered planning capabilities with robust collaboration features.",
    image: travelBuddyImage,
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Shadcn UI",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "OpenRouter SDK",
      "Google Meet",
      "imgBB",
    ],
    liveUrl: "https://travel-buddy-frontend-kohl.vercel.app",
    codeUrl: "https://github.com/HamzaAryanSapnil/travel-buddy-frontend",
    backendUrl: "https://travel-buddy-backend-nine.vercel.app",
    backendCodeUrl: "https://github.com/HamzaAryanSapnil/travel-buddy-backend",
    fullDescription:
      "Travel Buddy is a comprehensive full-stack travel planning and collaboration platform designed to revolutionize how people plan, organize, and collaborate on their travel adventures. Built as a portfolio project, Travel Buddy demonstrates expertise in modern web development technologies. The platform leverages advanced AI technology to generate personalized travel itineraries, making trip planning effortless and enjoyable. With robust collaboration features, travelers can invite friends, share ideas, and plan trips together with seamless real-time communication. The application integrates multiple third-party services including Stripe for subscription management, Google Meet for virtual meetups, and imgBB for image storage. Built with scalability and performance in mind, Travel Buddy uses server-side rendering, static page generation, and optimized caching strategies to deliver a fast and responsive user experience.",
    features: [
      "AI-Powered Planning - Generate personalized travel itineraries using advanced AI technology (OpenRouter SDK with Gemini 2.0 Flash). Interactive chat-based assistant helps create detailed day-by-day plans tailored to preferences and budget.",
      "Collaborative Itinerary - Build detailed day-by-day itineraries with activities, times, locations, and descriptions. Drag-and-drop reordering, activity categories, and seamless collaboration with travel companions.",
      "Smart Expense Tracking - Track and split expenses effortlessly among travel companions. Categorize expenses, track who paid what, view expense summaries with charts, and ensure transparent financial management.",
      "Media Gallery - Upload and organize multiple images for your travel plans. Create beautiful media galleries to share trip memories with friends and fellow travelers using imgBB integration.",
      "Meetup Coordination - Schedule meetups for travel plans with RSVP functionality. Integrated Google Meet links for virtual coordination and real-time status updates.",
      "Join Request System - Request to join public travel plans or invite members to your own plans. Flexible member role management (OWNER, ADMIN, MEMBER, VIEWER) with approval workflow.",
      "Real-time Notifications - Stay updated with real-time notifications for trip invitations, join requests, meetup RSVPs, and other important travel-related events.",
      "Subscription Management - Flexible monthly and yearly subscription plans with Stripe integration. Manage subscription status, view payment history, and cancel or resume subscriptions as needed.",
      "Admin Dashboard - Comprehensive admin features including user management, travel plans oversight, subscription monitoring, payment analytics with charts, and complete administrative control over platform content.",
      "Profile Management - Create comprehensive profiles with bio, location, interests, and visited countries. Upload profile images and showcase travel experiences.",
      "Dashboard Overview - Personal dashboard with travel statistics, recent activity, upcoming meetups, top travel plans, and visual analytics to track travel journey.",
    ],
    frontendStack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Shadcn UI",
      "Radix UI",
      "Lucide React Icons",
      "Recharts",
    ],
    backendStack: [
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "RESTful API",
      "JWT Authentication",
      "Server Actions",
      "Zod Validation",
      "React Hook Form",
    ],
    services: [
      "Stripe Payment Integration",
      "OpenRouter SDK (AI Integration - Gemini 2.0 Flash)",
      "Google Meet Integration",
      "imgBB (Image Storage)",
      "JWT Token Management",
      "Resend (Email Service)",
      "Cloudinary (Media Storage)",
    ],
  },
  {
    id: "2",
    title: "NEXTMED - Health Care Management",
    description:
      "A comprehensive full-stack healthcare management platform that bridges the gap between patients and healthcare providers through innovative technology solutions.",
    image: healthCareImage,
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Shadcn UI",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Stripe",
      "AI Integration",
      "Cloudinary",
    ],
    liveUrl: "https://health-care-management-nextjs.vercel.app",
    codeUrl:
      "https://github.com/HamzaAryanSapnil/health-care-management-nextjs",
    backendUrl: "https://health-care-prisma.onrender.com",
    backendCodeUrl: "https://github.com/HamzaAryanSapnil/health-care-prisma",
    fullDescription:
      "NEXTMED is a comprehensive full-stack healthcare management platform built with Next.js 16 and TypeScript. The platform connects patients with healthcare providers, enabling seamless appointment booking, AI-powered doctor matching, video consultations, and complete health record management. Built as a portfolio project, NEXTMED demonstrates expertise in modern web development, including server-side rendering, RESTful API integration, role-based access control, and secure authentication systems. The platform serves three distinct user roles—Patients, Doctors, and Administrators—each with tailored dashboards and functionalities. The application leverages cutting-edge technologies including Next.js App Router, React Server Actions, Zod validation, Shadcn UI components, and integrates with external services like Stripe for payments and AI services for intelligent doctor recommendations.",
    features: [
      "Admin Dashboard & Analytics - Comprehensive system-wide statistics including total appointments, patients, doctors, admins, payments, and revenue tracking with visual charts and graphs.",
      "User Management - Complete user management system for doctors, patients, and admins. Create, update, delete, and manage user profiles with search and filter capabilities.",
      "Appointment Management - View and manage all appointments across the platform. Filter by status, view details, and update appointment statuses for complete oversight.",
      "Schedule Management - Create and manage available time slots for doctors. Control when patients can book appointments and maintain schedule availability.",
      "Specialty Management - Add, update, and manage medical specialties. Organize doctors by specialties for better patient navigation and search functionality.",
      "Practice Dashboard (Doctor) - View practice statistics including total appointments, patients served, reviews received, and revenue earned with visual analytics.",
      "Prescription Management - Create digital prescriptions for patients. Include medications, dosages, and instructions. View prescription history and manage all prescriptions in one place.",
      "Appointment Booking (Patient) - Browse doctors, view profiles, and book appointments easily. Select time slots, make payments, and track appointment status all in one place.",
      "AI Doctor Suggestions - Get AI-powered doctor recommendations based on symptoms. Receive personalized suggestions for the best-matched doctors in the network.",
      "Prescription Access - View all prescriptions received from doctors. Access detailed medication information, dosages, and instructions anytime, anywhere.",
      "Health Records - Manage medical history and health records. Store lab reports, track vital signs, and visualize health trends over time.",
      "Reviews & Ratings - Share experience by leaving reviews and ratings for doctors. Help other patients make informed decisions about their healthcare choices.",
      "Payment Integration - Secure payment processing using Stripe. Pay for appointments and services seamlessly with multiple payment options available.",
      "Video Consultations - Consult with doctors through secure video calls. Access healthcare services from the comfort of home without physical visits.",
    ],
    frontendStack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Shadcn UI",
      "Radix UI",
      "Zod Validation",
      "Recharts",
    ],
    backendStack: [
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "RESTful API",
      "JWT Authentication",
      "Server Actions",
      "Cookie-based Auth",
      "Token Refresh",
      "Role-based Access Control",
    ],
    services: [
      "Stripe Payment Integration",
      "AI Integration (Doctor Recommendations)",
      "Cloudinary (Image Storage)",
      "JWT Token Management",
      "Email Services",
      "PostgreSQL Database",
    ],
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
  return (
    <>
      <StructuredData />
      <Hero />
      <AboutMe />
      <Skills enableAnimations={true} heading="Technical Skills" />
      <Projects projects={projects} showViewAll viewAllUrl="/projects" />;
      {/* <BlogSection posts={blogs?.data || []} /> */}
      <Contact />
    </>
  );
}
