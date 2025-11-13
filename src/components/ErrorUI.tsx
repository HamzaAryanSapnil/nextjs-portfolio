// components/ErrorUI.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Mail } from "lucide-react";

interface Props {
  title?: string;
  message?: string;
  reset?: (() => void) | null;
}

export default function ErrorUI({
  title = "Oops — something went wrong",
  message,
  reset,
}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/10 p-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-2xl"
      >
        <Card className="border border-border shadow-xl">
          <CardContent className="p-6 flex flex-col lg:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                <AlertTriangle size={28} />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <p className="text-sm text-muted-foreground mb-4">
                {message ??
                  "An unexpected error occurred. Try refreshing or contact support."}
              </p>

              <div className="flex items-center gap-3">
                {reset ? (
                  <Button onClick={() => reset()} variant="default">
                    Retry
                  </Button>
                ) : (
                  <Link href="/" passHref>
                    <Button variant="default">Go home</Button>
                  </Link>
                )}

                <a
                  href={`mailto:hello@example.com?subject=Bug report: ${encodeURIComponent(
                    title
                  )}&body=${encodeURIComponent(message ?? "")}`}
                  className="inline-flex items-center gap-2"
                >
                  <Button variant="ghost" size="sm">
                    <Mail size={16} />
                    Report
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
