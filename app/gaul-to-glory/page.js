'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground, StickySection } from '@/components/Scrollytelling';
import { Card } from '@/components/ui/card';
import { DidYouKnowCard } from '@/components/ui/special-cards';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

const GaulToGloryPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <ParallaxBackground speed={-0.2}>
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-primary/10"></div>
        </ParallaxBackground>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-primary">
                De la Gaule à la Gloire
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                Avant que la France ne soit la France, c'était la Gaule. Et avant que le français ne soit le français, c'était du latin — mais pas le latin que vous pourriez penser.
              </p>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.6}>
              <Image
                src="/images/gauls.png"
                alt="Gaulois rassemblés dans un village"
                width={675}
                height={450}
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                priority
              />
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Sticky Scroll Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:sticky lg:top-20 lg:self-start">
              <FadeIn duration={1} delay={0.2}>
                <Image
                  src="/images/vulgar.webp"
                  alt="Détail d'une inscription en latin vulgaire"
                  width={900}
                  height={600}
                  className="w-full rounded-lg shadow-lg"
                />
              </FadeIn>
            </div>
            
            <div>
              <SlideUp duration={1} delay={0.3}>
                <h2 className="text-3xl font-bold font-display mb-6 text-secondary">
                  Le tournant latin
                </h2>
                
                <p className="text-lg mb-4 text-text">
                  Quand les légions romaines ont marché sur la Gaule vers 50 avant notre ère, elles ont apporté plus que des épées et des sandales. Elles ont apporté une langue qui allait transformer tout un continent.
                </p>
                
                <p className="text-lg mb-6 text-text">
                  Mais voici la surprise : <strong className="text-primary">le latin qui a évolué en français n'était pas la prose polie de Cicéron</strong> — c'était le latin rugueux et tumultueux des soldats, des marchands et des fermiers.
                </p>
                
                <DidYouKnowCard>
                  <p>
                    Pensez à la différence entre l'anglais shakespearien et la langue qu'on entendrait dans un pub. Le latin vulgaire (vulgaire signifiant « du peuple commun ») était désordonné, pratique et en constante évolution.
                  </p>
                </DidYouKnowCard>
              </SlideUp>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Sections */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-text">
              Le Mélange Linguistique
            </h2>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn duration={1} delay={0.3}>
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Le Latin Vulgaire</h3>
                <p className="text-muted mb-4">
                  Parlé par les soldats, les colons et les commerçants romains, ce latin était très différent du latin classique des écrivains.
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Phonétique simplifiée</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Flexion réduite</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Vocabulaire adapté au quotidien</span>
                  </li>
                </ul>
              </Card>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-accent">L'Influence Gauloise</h3>
                <p className="text-muted mb-4">
                  Le gaulois, la langue celtique locale, a également laissé des traces importantes.
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Mots pour les réalités locales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Influence sur la phonétique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Structures grammaticales</span>
                  </li>
                </ul>
              </Card>
            </FadeIn>
          </div>
          
          <div className="mt-16 text-center">
            <FadeIn duration={1} delay={0.5}>
              <Image
                src="/images/gaul_map.jpg"
                alt="Carte des régions de la Gaule"
                  width={300}
                  height={188}
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Next Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display mb-6 text-text">
                Les Fantômes du Gaulois
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment les traces du gaulois persistent encore aujourd'hui dans le français moderne.
              </p>
              
              <Link 
                href="/gallic-ghosts" 
                className="inline-block bg-gradient-to-r from-secondary to-accent text-white font-semibold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Continuer le Voyage →
              </Link>
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
};

export default GaulToGloryPage;
