/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";



import { setMobileMenuOpen } from "@/redux/slice";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/hook/useRedux";
import { navItems } from "@/components/shared/PublicNav";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoutBtn from "@/components/shared/LogoutBtn";

interface PublicMobileNavProps {
  accessToken?: string
}
export default function PublicMobileNav({ accessToken }: PublicMobileNavProps) {
  const dispatch = useAppDispatch();
  const isMobileMenuOpen = useAppSelector((s) => s.ui.isMobileMenuOpen);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          key="mobile-nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-background/95 backdrop-blur-md fixed inset-x-0 top-16 z-40"
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                whileHover={{ x: 4 }}
                onClick={() => dispatch(setMobileMenuOpen(false))}
              >
                {item.label}
              </motion.a>
            ))}

            {accessToken ? (
              <LogoutBtn />
            ) : (
              <Link href="/login">
                <Button className=" rounded-md text-sm font-medium transition-colors">
                  Login
                </Button>
              </Link>
            )}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
