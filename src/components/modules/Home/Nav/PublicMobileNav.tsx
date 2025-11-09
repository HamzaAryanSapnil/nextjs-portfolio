// components/PublicMobileNav.tsx
"use client";

import React from "react";


import { setMobileMenuOpen } from "@/redux/slice";
import { navItems } from "@/components/shared/PublicNav";
import { useAppDispatch, useAppSelector } from "@/redux/hook/useRedux";

export default function PublicMobileNav() {
  const dispatch = useAppDispatch();
  const isMobileMenuOpen = useAppSelector((s) => s.ui.isMobileMenuOpen);

  if (!isMobileMenuOpen) return null;

  return (
    <div className="md:hidden bg-background/95 backdrop-blur-md fixed inset-x-0 top-[64px] z-40">
      <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            onClick={(e) => {
              // close mobile menu on click
              dispatch(setMobileMenuOpen(false));
            }}
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={() => dispatch(setMobileMenuOpen(false))}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-full"
        >
          Login
        </button>
      </nav>
    </div>
  );
}
