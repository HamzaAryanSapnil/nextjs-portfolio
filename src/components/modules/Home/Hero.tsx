"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, MessageCircle, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import TypewriterText from "./TypewriterText";

export interface LinkButton {
  text: string;
  href?: string;
  onClick?: () => void;
}

export interface HeroProps {
  subtitle?: string;
  name?: string;
  greeting?: string;
  description?: string;
  primaryButton?: LinkButton | null;
  socialLinks?: {
    email?: string;
    whatsapp?: string;
    linkedin?: string;
    github?: string;
  };
  profileImage?: string | StaticImageData;
  backgroundImage?: string | StaticImageData;
}

const textContainer = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Hero({
  subtitle = "Full-Stack MERN Developer",
  name = "Hamza Aryan Sapnil",
  greeting = "Hello! I'm",
  description = "I'm a passionate full-stack web developer with expertise in building modern, responsive, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I create seamless digital experiences that solve real-world problems.",
  primaryButton = {
    text: "Get Resume",
    href: "/Hamza Aryan Sapnil Resume.docx.pdf",
  },
  socialLinks = {
    email: "hamzaswapnil@gmail.com",
    whatsapp: "https://wa.me/8801303539006",
    linkedin: "https://www.linkedin.com/in/hamzaaryansapnil/",
    github: "https://github.com/HamzaAryanSapnil",
  },
  profileImage = "/profile.png",
}: HeroProps) {
  // Handle resume download
  const handleResumeDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (primaryButton?.href) {
      window.open(primaryButton.href, "_blank");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#1a1a1a] dark:bg-[#0f0f0f] overflow-hidden"
    >
      {/* Background Ripple Effect - Subtle */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-15 z-0"
        style={
          {
            "--cell-border-color": "rgba(255, 255, 255, 0.1)",
            "--cell-fill-color": "rgba(255, 255, 255, 0.03)",
            "--cell-shadow-color": "rgba(255, 255, 255, 0.05)",
          } as React.CSSProperties
        }
      >
        <BackgroundRippleEffect rows={10} cols={30} cellSize={48} />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center min-h-[calc(100vh-200px)]">
            {/* Left Section - Text Content */}
            <motion.div
              className="space-y-6 lg:space-y-8"
              variants={textContainer as Variants}
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={textItem as Variants}
                className="text-white text-xl lg:text-2xl font-serif"
              >
                {greeting}
              </motion.p>

              <motion.h1
                variants={textItem as Variants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight"
              >
                <span className="block md:inline">
                  {name.split(" ").slice(0, -1).join(" ")}
                </span>
                <span className="block md:inline md:ml-2 relative">
                  <span className="relative z-10">
                    <TypewriterText
                      text={name.split(" ").slice(-1)[0]}
                      speed={150}
                      delay={500}
                      className="inline-block"
                      loop={true}
                      loopDelay={4000}
                    />
                  </span>
                  <svg
                    className="absolute bottom-0 left-0 w-full h-3 text-gray-600/50"
                    viewBox="0 0 200 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0 10 Q 50 5, 100 10 T 200 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                variants={textItem as Variants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                {subtitle}
              </motion.p>

              {description && (
                <motion.p
                  variants={textItem as Variants}
                  className="text-gray-400 text-base lg:text-lg font-sans max-w-2xl"
                >
                  {description}
                </motion.p>
              )}

              {/* Buttons */}
              <motion.div
                variants={textItem as Variants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                {primaryButton && (
                  <Button
                    onClick={handleResumeDownload}
                    className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-6 py-6 text-base font-medium group"
                  >
                    {primaryButton.text}
                    <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  </Button>
                )}
              </motion.div>
            </motion.div>

            {/* Right Section - Image and Social Icons */}
            <motion.div
              className="relative flex justify-center lg:justify-end items-center z-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative z-20">
                {/* Portrait Image */}
                <div className="relative w-64 h-[400px] sm:w-72 sm:h-[450px] md:w-[650px] md:h-[500px] lg:w-96 lg:h-[600px] mx-auto">
                  <Image
                    src={profileImage}
                    alt="Profile"
                    fill
                    className="object-cover object-center rounded-lg"
                    priority
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 650px, (max-width: 1024px) 384px, 384px"
                  />
                </div>

                {/* Social Media Icons - Right Side */}
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block z-30 pointer-events-none">
                  {/* Social Icons */}
                  <div
                    className="relative flex flex-col gap-5 items-center pointer-events-auto"
                    style={{ right: "8px" }}
                  >
                    {socialLinks.email && (
                      <Link
                        href={`mailto:${socialLinks.email}`}
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg z-10 hover:scale-110"
                        style={{ backgroundColor: "#EA4335" }}
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5 text-white" />
                      </Link>
                    )}

                    {socialLinks.whatsapp && (
                      <Link
                        href={socialLinks.whatsapp}
                        target="_blank"
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg z-10 hover:scale-110"
                        style={{ backgroundColor: "#25D366" }}
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="h-5 w-5 text-white" />
                      </Link>
                    )}

                    {socialLinks.linkedin && (
                      <Link
                        href={socialLinks.linkedin}
                        target="_blank"
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg z-10 hover:scale-110"
                        style={{ backgroundColor: "#0077B5" }}
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="h-5 w-5 text-white" />
                      </Link>
                    )}

                    {socialLinks.github && (
                      <Link
                        href={socialLinks.github}
                        target="_blank"
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg z-10 hover:scale-110"
                        style={{ backgroundColor: "#181717" }}
                        aria-label="GitHub"
                      >
                        <FaGithub className="h-5 w-5 text-white" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
