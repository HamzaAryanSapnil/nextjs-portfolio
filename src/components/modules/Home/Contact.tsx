"use client";

import { Mail, Phone, ArrowRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { Card } from "@/components/ui/card";

interface ContactProps {
  email?: string;
  phone?: string;
  whatsapp?: string;
  linkedin?: string;
  github?: string;
}

export default function Contact({
  email = "hamzaswapnil@gmail.com",
  phone = "01303539006",
  whatsapp = "https://wa.me/8801303539006",
  linkedin = "https://www.linkedin.com/in/hamzaaryansapnil/",
  github = "https://github.com/HamzaAryanSapnil",
}: ContactProps) {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 md:p-12 lg:p-16 bg-card border-border neon-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Section - Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-wider">
                  GET IN TOUCH
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Elevate your brand with Me
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Have a project in mind, a question, or just want to say hello?
                  Feel free to reach out! I&apos;m always open to discussing.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-[#EA4335] hover:bg-secondary hover:scale-[1.02] hover:translate-x-1 transition-all duration-300 group neon-border"
                >
                  <div
                    className="p-3 rounded-lg transition-colors group-hover:opacity-90"
                    style={{ backgroundColor: "#EA4335" }}
                  >
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-base font-medium text-foreground">
                      {email}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-[#EA4335] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-[#25D366] hover:bg-secondary hover:scale-[1.02] hover:translate-x-1 transition-all duration-300 group neon-border"
                >
                  <div
                    className="p-3 rounded-lg transition-colors group-hover:opacity-90"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="text-base font-medium text-foreground">
                      {phone}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-[#0077B5] hover:bg-secondary hover:scale-[1.02] hover:translate-x-1 transition-all duration-300 group neon-border"
                >
                  <div
                    className="p-3 rounded-lg transition-colors group-hover:opacity-90"
                    style={{ backgroundColor: "#0077B5" }}
                  >
                    <FaLinkedin className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-base font-medium text-foreground">
                      Connect with me
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-[#0077B5] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-[#181717] hover:bg-secondary hover:scale-[1.02] hover:translate-x-1 transition-all duration-300 group neon-border"
                >
                  <div
                    className="p-3 rounded-lg transition-colors group-hover:opacity-90"
                    style={{ backgroundColor: "#181717" }}
                  >
                    <FaGithub className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-base font-medium text-foreground">
                      View my repositories
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-[#181717] group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="lg:pl-8">
              <ContactForm />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
