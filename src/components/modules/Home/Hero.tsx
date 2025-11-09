"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export interface LinkButton {
  text: string;
  href?: string;
  onClick?: () => void;
}

export interface HeroProps {
  subtitle?: string;
  name?: string;
  greeting?: string;
  description?: string[];
  primaryButton?: LinkButton | null;
  secondaryButton?: LinkButton | null;
  socialLinks?: { github?: string; linkedin?: string; twitter?: string };
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
  subtitle = "Full-Stack Web Developer",
  name = "Hamza Aryen Sapnil",
  greeting = "Hi, I'm",
  description = [
    "I build exceptional and accessible digital experiences for the web, focusing",
    "on clean code and modern development practices.",
  ],
  primaryButton = { text: "View My Work", href: "#work" },
  secondaryButton = { text: "Contact Me", href: "#contact" },
  socialLinks = { github: "#", linkedin: "#", twitter: "#" },
  profileImage = "/profile.png",
  backgroundImage = "/hero-bg.jpg",
}: HeroProps) {
  const router = useRouter();

  // Smooth internal navigation
  const handleNavigate = (btn?: LinkButton | null, e?: React.MouseEvent) => {
    if (!btn || !btn.href) return;
    e?.preventDefault();

    if (btn.href.startsWith("#")) {
      const el = document.getElementById(btn.href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(btn.href);
    }
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-linear-to-b from-background via-background to-secondary/30"
    >
      {/* Background */}
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        priority
        className="object-cover object-center opacity-5 -z-10"
      />

      {/* Glow overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background/95 via-background/80 to-background/70" />

      <Card className="container  mx-auto bg-background/80 backdrop-blur-xl border border-border/40 shadow-xl rounded-3xl">
        <CardContent className="flex flex-col lg:flex-row items-center gap-10 p-10 lg:p-16">
          {/* Left Section */}
          <motion.div
            className="flex-1 space-y-6"
            variants={textContainer as Variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={textItem as Variants}>
              <p className="text-sm text-primary tracking-wide font-medium uppercase">
                {subtitle}
              </p>
            </motion.div>

            <motion.h1
              variants={textItem as Variants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            >
              <span className="block text-muted-foreground">{greeting}</span>
              <span className="bg-linear-to-r from-primary to-foreground bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>

            <motion.div
              variants={textItem as Variants}
              className="text-muted-foreground space-y-2 max-w-2xl text-lg leading-relaxed"
            >
              {description.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={textItem as Variants}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              {primaryButton && (
                <Button
                  asChild
                  onClick={(e) => handleNavigate(primaryButton, e)}
                  className="group"
                >
                  <Link href={primaryButton.href ?? "#"}>
                    {primaryButton.text}
                    <motion.span
                      className="inline-flex items-center ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.8,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </Link>
                </Button>
              )}
              {secondaryButton && (
                <Button
                  variant="outline"
                  asChild
                  onClick={(e) => handleNavigate(secondaryButton, e)}
                >
                  <Link href={secondaryButton.href ?? "#"}>
                    {secondaryButton.text}
                  </Link>
                </Button>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={textItem as Variants}
              className="flex items-center gap-4 pt-4"
            >
              {socialLinks.github && (
                <Link
                  href={socialLinks.github}
                  target="_blank"
                  aria-label="GitHub"
                  className="hover:text-foreground text-muted-foreground transition"
                >
                  <Github size={20} />
                </Link>
              )}
              {socialLinks.linkedin && (
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  aria-label="LinkedIn"
                  className="hover:text-foreground text-muted-foreground transition"
                >
                  <Linkedin size={20} />
                </Link>
              )}
              {socialLinks.twitter && (
                <Link
                  href={socialLinks.twitter}
                  target="_blank"
                  aria-label="Twitter"
                  className="hover:text-foreground text-muted-foreground transition"
                >
                  <Twitter size={20} />
                </Link>
              )}
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-border shadow-2xl">
              <Image
                src={profileImage}
                alt="Profile photo"
                fill
                className="object-cover object-center"
              />
              <motion.div
                className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </section>
  );
}
