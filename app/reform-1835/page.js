'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { ReformCard, VictoryCard, BalanceCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const Reform1835Page = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Reform Card */}
      <section className="min-h-screen flex items-center justify-center relative">
        <ParallaxBackground speed={-0.2}>
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-secondary/10"></div>
        </ParallaxBackground>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-8 text-secondary">
                1835 : La Bataille du OI est Finie
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <ReformCard>
                <div className="text-3xl font-bold text-primary mb-2">1835</div>
                <div className="text-xl text-text">L'Académie change officiellement <em className="font-mono">-ois</em> en <em className="font-mono">-ais</em></div>
              </ReformCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Resolution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">La Résolution</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                Après des siècles de confusion, l'Académie française a finalement capitulé. Là où <em className="font-mono text-primary">oi</em> se prononçait [e], ils ont changé l'orthographe en <strong className="text-accent">ai</strong>.
              </p>
              
              
              <div className="space-y-6 mb-8">
                <div className="flex flex-wrap justify-center items-center gap-6 p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-2xl">François</div>
                  <div className="text-3xl font-bold text-muted">→</div>
                  <div className="font-mono text-2xl font-bold text-primary">Français</div>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-6 p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-2xl">j'avois</div>
                  <div className="text-3xl font-bold text-muted">→</div>
                  <div className="font-mono text-2xl font-bold text-accent">j'avais</div>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-6 p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-2xl">Anglois</div>
                  <div className="text-3xl font-bold text-muted">→</div>
                  <div className="font-mono text-2xl font-bold text-secondary">Anglais</div>
                </div>
                
                <div className="mt-6 p-4 bg-surface/50 rounded-lg">
                  <p className="text-lg text-text">
                    Toutes les terminaisons d'imparfait : <em className="font-mono text-primary">-ois</em> → <strong className="text-accent">-ais</strong>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Victory for the People */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SlideUp duration={1} delay={0.2}>
              <VictoryCard>
                <p className="text-xl">
                  C'était une reconnaissance que <strong className="text-primary">le peuple avait raison</strong>. La prononciation populaire [e] était légitime. L'orthographe devait suivre — au moins partiellement.
                </p>
              </VictoryCard>
            </SlideUp>
          </div>
        </div>
      </section>
      
      {/* Caveat Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Mais...</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                Mais dans d'autres mots (<em className="font-mono text-primary">loi</em>, <em className="font-mono text-accent">moi</em>, <em className="font-mono text-secondary">roi</em>), le <em className="font-mono text-primary">oi</em> est resté, et avec lui, la prononciation [wa].
              </p>
              
              <BalanceCard>
                <p className="text-lg">
                  Le français moderne avait trouvé son équilibre bizarre entre tradition et réforme.
                </p>
              </BalanceCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Additional Context */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <p className="text-lg text-text mb-6">
                Cette réforme de 1835 a marqué un tournant important dans l'évolution de l'orthographe française, établissant un équilibre entre tradition et modernité.
              </p>
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
                L'Expansion Coloniale
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment le français est devenu une langue mondiale.
              </p>
              
              <Link 
                href="/colonial-expansion" 
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

export default Reform1835Page;