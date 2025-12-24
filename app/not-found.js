'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import Navigation from '@/components/Navigation';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="min-h-screen flex items-center justify-center relative">
        <ParallaxBackground speed={-0.2}>
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-primary/10"></div>
        </ParallaxBackground>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <h1 className="text-6xl md:text-8xl font-bold font-display mb-6 text-primary">
                404
              </h1>
            </FadeIn>

            <FadeIn duration={1} delay={0.4}>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-secondary">
                Page introuvable
              </h2>
            </FadeIn>

            <FadeIn duration={1} delay={0.6}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                Oups ! La page que vous cherchez semble s'être perdue dans l'évolution de la langue française.
              </p>
            </FadeIn>

            <FadeIn duration={1} delay={0.8}>
              <Link
                href="/"
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Retourner au voyage →
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}