import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Accessibility utility functions
export const focusStyles = "focus:outline-none focus:ring-2 focus:ring-primary/50";

// Animation utility functions
export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
};

// Color contrast checker utility
export const getContrastRatio = (color1, color2) => {
  // Implementation for calculating contrast ratio
  // This would be used to ensure WCAG compliance
};