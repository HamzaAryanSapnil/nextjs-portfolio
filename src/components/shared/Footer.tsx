"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import svgPaths from "@/assets/svg/footer-svg";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "instagram";
}

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

interface FooterProps {
  brandName?: string;
  tagline?: string;
  quickLinks?: FooterLink[];
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
  copyrightYear?: number;
  copyrightName?: string;
  showPrivacyPolicy?: boolean;
  showTermsOfService?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function SocialIcon({
  type,
}: {
  type: "github" | "linkedin" | "twitter" | "instagram";
}) {
  const iconMap = {
    github: (
      <>
        <path
          d={svgPaths.p1c2b2f40}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p106a6a60}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    linkedin: (
      <>
        <path
          d={svgPaths.p204bd7c0}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.pad25e80}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p127a4d00}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
    twitter: (
      <path
        d={svgPaths.pba1780}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    instagram: (
      <>
        <path
          d={svgPaths.p299a6200}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p3cad6d80}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.125 4.875H13.1325"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  };

  return (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
      {iconMap[type]}
    </svg>
  );
}

export function Footer({
  brandName = "Hamza",
  tagline = "A passionate full-stack web developer...",
  quickLinks = [
    { label: "About Me", href: "#about" },
    { label: "My Skills", href: "#skills" },
    { label: "My Projects", href: "#projects" },
    { label: "My Blogs", href: "#blogs" },
  ],
  contactInfo = {
    email: "hamza@example.com",
    phone: "+123 456 7890",
    location: "San Francisco, California, USA",
  },
  socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: "github" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  ],
  copyrightYear = 2025,
  copyrightName = "Hamza",
  showPrivacyPolicy = true,
  showTermsOfService = true,
}: FooterProps) {
  return (
    <motion.footer
      className="
        bg-card 
        text-card-foreground 
        border-t 
        border-border
        py-16 px-4
      "
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 "
          variants={fadeUp}
        >
          {/* Brand Section */}
          <motion.div variants={fadeUp} className="space-y-6 lg:justify-self-start">
            <div className="flex items-center gap-0.5 text-2xl font-bold">
              <span>{brandName}</span>
              <span className="text-accent">.</span>
            </div>

            <p className="text-muted-foreground">{tagline}</p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10 rounded-full 
                    bg-secondary 
                    text-secondary-foreground
                    hover:bg-secondary/70 
                    transition-colors 
                    flex items-center justify-center
                  "
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SocialIcon type={social.icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} className="space-y-4 lg:justify-self-center">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    block 
                    text-muted-foreground 
                    hover:text-foreground 
                    transition-colors
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp} className="space-y-4 lg:justify-self-end">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>{contactInfo.email}</p>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.location}</p>
            </div>
          </motion.div>
        </motion.div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <motion.div
          variants={fadeUp}
          className="
            flex flex-col md:flex-row 
            justify-between items-center gap-4 
            text-sm text-muted-foreground
          "
        >
          <p>
            © {copyrightYear} {copyrightName}. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {showPrivacyPolicy && (
              <Link href="#privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
            )}

            {showPrivacyPolicy && showTermsOfService && <span>•</span>}

            {showTermsOfService && (
              <Link href="#terms" className="hover:text-foreground">
                Terms of Service
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
