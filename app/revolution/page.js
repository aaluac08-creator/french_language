'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { RevolutionaryView, FerryLaws, Conclusion } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const RevolutionPage = () => {
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
                Révolution et Modernisation
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                La Révolution française n'a pas seulement renversé les rois — elle a démocratisé la langue.
              </p>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.6}>
              <div className="inline-block p-6 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-lg border border-red-500/50">
                <div className="text-2xl md:text-3xl font-bold text-center mb-2">Liberté, Égalité, Fraternité</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Language Survey Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">L'enquête de l'abbé Grégoire (1794)</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <img
                src="/images/map.jpg"
                alt="Graphique montrant la répartition des langues"
                className="w-full rounded-lg mb-8 max-w-full md:max-w-[50%] h-auto mx-auto"
                width={400}
                height={300}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-gradient-to-br from-red-500/15 to-orange-500/15 rounded-lg border border-red-500/50">
                  <div className="text-4xl font-bold text-red-400 mb-2">3 millions</div>
                  <div className="text-lg text-text">sur 28 millions pouvaient parler le français correct</div>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg">
                  <p className="text-lg text-text">
                    La plupart des gens dans la France rurale ne pouvaient pas comprendre le français parisien du tout.
                  </p>
                </div>
              </div>
              
              <RevolutionaryView>
                <p className="text-lg">
                  Les révolutionnaires voyaient cela comme un problème. Comment pourrait-on avoir l'égalité si les citoyens ne pouvaient pas se comprendre ? Comment pourrait-on diffuser les idées révolutionnaires si les paysans parlaient des langues différentes ?
                </p>
              </RevolutionaryView>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Revolutionary Vocabulary */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Un nouveau vocabulaire pour leur nouveau monde</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn duration={1.5} delay={0.3}>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["citoyen", "république", "liberté", "égalité", "fraternité", "guillotine", "département", "sans-culotte", "Terreur"].map((word, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-3 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full border border-red-500/50 text-lg font-medium"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Education Reform */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">La vraie révolution linguistique</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <FerryLaws className="mb-8">
                <h3 className="text-2xl font-bold font-display mb-4 text-blue-400">Les lois sur l'éducation de Jules Ferry (1881-1882)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✅</span>
                    <span>Enseignement primaire gratuit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✅</span>
                    <span>Obligatoire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✅</span>
                    <span>Entièrement en français</span>
                  </li>
                </ul>
              </FerryLaws>
              
              <img
                src="/images/ecole.jpg"
                alt="Écoliers français dans une salle de classe du XIXe siècle"
                className="w-full mx-auto rounded-lg mb-8 max-w-full md:max-w-[50%] h-auto"
                width={400}
                height={300}
              />
              
              <div className="space-y-6">
                <div className="p-6 bg-surface/50 rounded-lg">
                  <p className="text-lg text-center text-text">
                    <strong className="text-primary">En deux générations</strong>, les langues régionales ont commencé à disparaître.
                  </p>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg">
                  <p className="text-lg text-center text-text">
                    <strong className="text-accent">En 1900</strong>, la plupart des enfants français pouvaient parler le français standard.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Conclusion>
                  <p className="text-lg text-center">
                    L'unification linguistique qui avait pris des siècles ailleurs s'est produite en France en quelques décennies.
                  </p>
                </Conclusion>
              </div>
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
                src="/images/revolution.jpg"
                alt="Scènes de la Révolution française"
                className="w-full rounded-lg mb-6 max-w-full md:max-w-[50%] h-auto mx-auto"
                width={400}
                height={300}
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
                La Réforme de 1835
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment la bataille du OI a été résolue.
              </p>
              
              <Link 
                href="/reform-1835" 
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

export default RevolutionPage;