'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import Navigation from '@/components/Navigation';

export default function Error({ error, reset }) {
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
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-primary">
                Une erreur s'est produite
              </h1>
            </FadeIn>

            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                Une erreur s'est produite lors du chargement de cette partie du voyage linguistique.
              </p>
            </FadeIn>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <FadeIn duration={1} delay={0.6}>
                <button
                  onClick={() => reset()}
                  className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg"
                >
                  Réessayer
                </button>
              </FadeIn>

              <FadeIn duration={1} delay={0.8}>
                <Link
                  href="/"
                  className="bg-gradient-to-r from-secondary to-accent text-white font-semibold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg"
                >
                  Retourner au voyage →
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}