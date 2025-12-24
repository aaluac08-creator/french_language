// app/providers.js
'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import ErrorBoundary from '@/components/ErrorBoundary';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export function Providers({ children }) {
  // Initialize ScrollTrigger after component mounts to avoid SSR issues
  useEffect(() => {
    // Ensure ScrollTrigger is properly set up
    gsap.defaults({ ease: "power2.out" });
  }, []);

  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
}