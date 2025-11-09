// components/ClientButton.tsx
"use client";

import React from "react";

import { toggleMobileMenu } from "@/redux/slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook/useRedux";

export default function ClientButton() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((s) => s.ui.isMobileMenuOpen);

  return (
    <button
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="md:hidden p-2 rounded-lg focus:outline-none"
      onClick={() => dispatch(toggleMobileMenu())}
    >
      {/* Simple icon (you can replace with lucide/react icons) */}
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <div className="w-6 h-6 relative">
        <span
          className={`block h-0.5 w-6 transform transition ${
            isOpen ? "rotate-45 translate-y-2" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 my-1 transition ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 transform transition ${
            isOpen ? "-rotate-45 -translate-y-2" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
}
