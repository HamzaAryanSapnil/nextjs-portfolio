// components/PublicNav.tsx
"use client";

import Link from "next/link";
import ClientNavHeader from "./ClientNavHeader";

import React from "react";

import { setIsScrolled } from "@/redux/slice";
import { useAppDispatch } from "@/redux/hook/useRedux";
import ClientButton from "../modules/Home/Nav/ClientButton";
import PublicMobileNav from "../modules/Home/Nav/PublicMobileNav";
import { ModeToggle } from "../toggle-theme";
import { Button } from "../ui/button";

export const navItems = [
  {
    label: "About Me",
    href: "#about",
  },
  {
    label: "My Skills",
    href: "#skills",
  },
  {
    label: "My Projects",
    href: "#projects",
  },
  {
    label: "My Blogs",
    href: "#blogs",
  },
];

export default function PublicNav() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      dispatch(setIsScrolled(window.scrollY > 10));
    };
    handleScroll(); // set initial
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <ClientNavHeader>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#" className="text-xl md:text-2xl font-bold text-primary">
          Hamza<span className="">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center  space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover: transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link href="/login">
            <Button className=" rounded-md text-sm font-medium transition-colors">
              Login
            </Button>
          </Link>

          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <ClientButton />
      </div>

      {/* Mobile Navigation */}
      <PublicMobileNav />
    </ClientNavHeader>
  );
}
