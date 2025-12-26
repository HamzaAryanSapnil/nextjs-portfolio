"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  loop?: boolean;
  loopDelay?: number;
}

export default function TypewriterText({
  text,
  speed = 100,
  delay = 0,
  className = "",
  loop = true,
  loopDelay = 3000,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (!isDeleting && currentIndex < text.length) {
      // Typing
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (!isDeleting && currentIndex >= text.length) {
      // Finished typing, wait then start deleting
      if (loop) {
        const waitTimer = setTimeout(() => {
          setIsDeleting(true);
        }, loopDelay);

        return () => clearTimeout(waitTimer);
      }
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, speed / 2);

      return () => clearTimeout(timer);
    } else if (isDeleting && displayedText.length === 0) {
      // Finished deleting, reset
      setIsDeleting(false);
      setCurrentIndex(0);
    }
  }, [currentIndex, text, speed, isStarted, isDeleting, displayedText, loop, loopDelay]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

