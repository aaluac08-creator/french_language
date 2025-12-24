'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { FoundingCard, VisionCard, AcademyRole, IronyCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const StandardizationPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Founding Card */}
      <section className="min-h-screen flex items-center justify-center relative">
        <ParallaxBackground speed={-0.2}>
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-primary/10"></div>
        </ParallaxBackground>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-12 text-primary">
                L'Âge de la Standardisation
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <FoundingCard>
                <div className="text-3xl font-bold text-secondary mb-2">1635</div>
                <div className="text-xl text-text">L'Académie française est fondée</div>
              </FoundingCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Richelieu's Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">La Vision de Richelieu</h2>
          </SlideUp>
          
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <FadeIn duration={1} delay={0.3}>
                <img
                  src="/images/Richelieu.jpg"
                  alt="Portrait du cardinal de Richelieu"
                  className="w-full lg:w-3/5 rounded-lg"
                  width={1536}
                  height={2048}
                />
              </FadeIn>
              
              <div className="w-full lg:w-3/5">
                <SlideUp duration={1} delay={0.4}>
                  <p className="text-2xl font-display text-center mb-6 text-secondary italic">
                    Une France, un roi, une langue
                  </p>
                  
                  <VisionCard>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 text-xl">❌</span>
                        <span className="text-lg">Plus de dialectes régionaux désordonnés</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 text-xl">❌</span>
                        <span className="text-lg">Plus de chaos linguistique</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 text-xl">✅</span>
                        <span className="text-lg">Une langue unifiée et contrôlée</span>
                      </li>
                    </ul>
                  </VisionCard>
                </SlideUp>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academy Section */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">L'Académie française</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                En 1635, il a établi l'Académie française — un groupe d'élite d'érudits chargés de créer un dictionnaire, d'établir des règles de grammaire et de décider ce qui était du « bon » français et ce qui ne l'était pas.
              </p>
              
              <img
                src="/images/dictionary.jpg"
                alt="Premier dictionnaire de l'Académie française (1694)"
                className="w-2/5 rounded-lg mb-8 mx-auto"
                width={128}
                height={96}
              />
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-amber-500/15 to-orange-500/15 rounded-lg border border-amber-500/50">
                  <div className="text-4xl font-bold text-amber-400">60 ans</div>
                  <div className="text-lg text-text">de travail pour publier le premier dictionnaire en 1694</div>
                </div>
              </div>
              
              <AcademyRole>
                <h3 className="text-2xl font-bold font-display mb-4 text-accent">L'Académie est devenue la gardienne de la pureté linguistique</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>Ils ont standardisé l'orthographe, même quand elle ne correspondait pas à la prononciation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>Ils ont décidé quels mots étaient acceptables et lesquels ne l'étaient pas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span>Ils ont créé des règles de grammaire strictes</span>
                  </li>
                </ul>
              </AcademyRole>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Irony Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">L'Ironie</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <IronyCard>
                <h3 className="text-2xl font-bold mb-4">L'Ironie</h3>
                <p className="text-lg">
                  Mais voici l'ironie : pendant que l'Académie essayait de figer le français dans l'ambre, la langue continuait à évoluer dans les rues, les salons et les colonies d'un empire en expansion. La langue, il s'avère, ne respecte pas l'autorité.
                </p>
              </IronyCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Additional Context */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <img
                src="/images/academie.jpg"
                alt="Académie française building"
                className="w-2/5 rounded-lg mx-auto"
                width={128}
                height={96}
              />
              <p className="mt-4 text-muted">L'emblématique bâtiment de l'Académie française</p>
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
                Les Réformes de 1740
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment l'Académie a finalement simplifié l'orthographe.
              </p>
              
              <Link 
                href="/reforms-1740" 
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg"
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

export default StandardizationPage;