import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ReduxProvider from "@/redux/provider/ReduxProvider";
import { Toaster } from "@/components/ui/sonner";
import LogoutSuccessToast from "@/components/shared/LogoutSuccessToast";
import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import { Display } from "next/dist/compiled/@next/font";

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
  title: "Hamza Aryan Sapnil - Portfolio",
  description:
    "Welcome to my portfolio website where I showcase my projects and skills.",
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
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster position="top-right" richColors />
            <LoginSuccessToast />
            <LogoutSuccessToast />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
