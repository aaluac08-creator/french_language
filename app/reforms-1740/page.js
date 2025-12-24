'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { ReformCard, AnalysisCard, BirthCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const Reforms1740Page = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-8 text-secondary">
                1740 : L'Orthographe Respire Enfin
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <ReformCard>
                <div className="text-3xl font-bold text-primary mb-2">1740</div>
                <div className="text-xl text-text">L'Académie change officiellement <em className="font-mono">-ois</em> en <em className="font-mono">-ais</em></div>
              </ReformCard>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.6}>
              <p className="text-xl mt-8 text-text">
                Mais l'Académie n'était pas <em className="text-accent">totalement</em> réactionnaire. En 1740, ils ont fait quelque chose de radical : <strong className="text-primary">ils ont simplifié l'orthographe</strong>.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* S-Consonant Reform Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Le <em className="font-mono">s</em> préconsonantique disparaît</h2>
          </SlideUp>
          
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                Des centaines de mots ont perdu leur <em className="font-mono text-primary">s</em> muet devant les consonnes, remplacé par un accent circonflexe :
              </p>
              
              <img
                src="/images/e.jpg"
                alt="Animation montrant le S remplacé par l'accent circonflexe"
                className="w-full max-w-3xl mx-auto rounded-lg mb-8"
                width={800}
                height={600}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-surface/50 rounded-lg">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="font-mono text-2xl mb-2">escole</div>
                    <div className="text-3xl font-bold text-muted">→</div>
                    <div className="font-mono text-2xl font-bold text-primary">école</div>
                  </div>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="font-mono text-2xl mb-2">estre</div>
                    <div className="text-3xl font-bold text-muted">→</div>
                    <div className="font-mono text-2xl font-bold text-accent">être</div>
                  </div>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="font-mono text-2xl mb-2">fenestre</div>
                    <div className="text-3xl font-bold text-muted">→</div>
                    <div className="font-mono text-2xl font-bold text-secondary">fenêtre</div>
                  </div>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="font-mono text-2xl mb-2">hostel</div>
                    <div className="text-3xl font-bold text-muted">→</div>
                    <div className="font-mono text-2xl font-bold text-primary">hôtel</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Other Simplifications */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Autres simplifications</h2>
          </SlideUp>
          
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-6 p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-xl">advocat</div>
                  <div className="text-2xl font-bold text-muted">→</div>
                  <div className="font-mono text-xl font-bold text-primary">avocat</div>
                </div>
                
                <div className="flex items-center justify-center gap-6 p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-xl">obmettre</div>
                  <div className="text-2xl font-bold text-muted">→</div>
                  <div className="font-mono text-xl font-bold text-accent">omettre</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Analysis Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SlideUp duration={1} delay={0.2}>
              <AnalysisCard>
                <p className="text-lg">
                  C'était un compromis. L'Académie éliminait les lettres vraiment inutiles tout en préservant l'orthographe étymologique ailleurs. Le résultat ? Un système à mi-chemin entre la rationalité phonétique et le conservatisme étymologique.
                </p>
              </AnalysisCard>
            </SlideUp>
            
            <div className="mt-8 text-center">
              <BirthCard>
                <p className="text-xl">
                  <strong className="text-secondary">Le français moderne était né</strong> — avec toutes ses contradictions.
                </p>
              </BirthCard>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Context */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <h3 className="text-2xl font-bold font-display mb-4 text-text">L'héritage des réformes de 1740</h3>
              <p className="text-lg text-text">
                Ces réformes ont jeté les bases de l'orthographe française moderne que nous connaissons aujourd'hui.
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
                Les Lumières
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment le français est devenu la langue internationale de la diplomatie.
              </p>
              
              <Link 
                href="/enlightenment" 
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

export default Reforms1740Page;