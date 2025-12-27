import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ReduxProvider from "@/redux/provider/ReduxProvider";
import { Toaster } from "@/components/ui/sonner";
import LogoutSuccessToast from "@/components/shared/LogoutSuccessToast";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import { Display } from "next/dist/compiled/@next/font";
import { Suspense } from "react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const geistSans = Ubuntu({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"] as ("300" | "400" | "500" | "700")[],
  display: "swap" as Display,
});

const geistMono = Ubuntu({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"] as ("300" | "400" | "500" | "700")[],
  display: "swap" as Display,
  style: ["normal", "italic"] as ("normal" | "italic")[],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://nextjs-portfolio-delta-three.vercel.app"
  ),
  title: {
    default: "Hamza Aryan Sapnil - Full-Stack MERN Developer | Portfolio",
    template: "%s | Hamza Aryan Sapnil",
  },
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
  authors: [{ name: "Hamza Aryan Sapnil" }],
  creator: "Hamza Aryan Sapnil",
  publisher: "Hamza Aryan Sapnil",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Hamza Aryan Sapnil - Portfolio",
    title: "Hamza Aryan Sapnil - Full-Stack MERN Developer",
    description:
      "Full-Stack MERN Developer specializing in Next.js, React.js, and TypeScript. Building modern, scalable web applications with expertise in Express.js, PostgreSQL, Prisma, and AI integration.",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Hamza Aryan Sapnil - Full-Stack MERN Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Aryan Sapnil - Full-Stack MERN Developer",
    description:
      "Full-Stack MERN Developer specializing in Next.js, React.js, and TypeScript. Building modern, scalable web applications.",
    images: ["/profile.png"],
    creator: "@hamzaaryansapnil",
  },
  alternates: {
    canonical: "/",
  },
  category: "Portfolio",
  other: {
    // Google Search Console verification
    // Replace 'YOUR_VERIFICATION_CODE' with the actual code from Google Search Console
    "google-site-verification":
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
            <Toaster position="top-right" richColors />
            <Suspense>
              <LoginSuccessToast />
              <LogoutSuccessToast />
            </Suspense>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
