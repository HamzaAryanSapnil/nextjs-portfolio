import { Variants, EasingFunction } from "framer-motion";

// Define easing function explicitly
const easeInOut: EasingFunction = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Type-safe Variants
export const textItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut, // ✅ use EasingFunction instead of number[]
    },
  },
};
export const textParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};
