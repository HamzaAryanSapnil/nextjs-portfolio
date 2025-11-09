"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import { toggleMobileMenu } from "@/redux/slice";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/hook/useRedux";

export default function ClientButton() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((s) => s.ui.isMobileMenuOpen);

  const handleToggle = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="md:hidden relative"
      onClick={handleToggle}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <X size={24} />
          </motion.span>
        ) : (
          <motion.span
            key="menu"
            initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Menu size={24} />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
