'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground, PronunciationDisplay, MorphingText } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { DidYouKnowCard, AnalysisCard, StatBoxCard, ConclusionCard } from '@/components/ui/special-cards';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

const GreatShiftPage = () => {
  const [activeSound, setActiveSound] = useState('u');

  const soundExamples = {
    u: { latin: 'murus [mu-rus]', french: 'mur [myr]' },
    t: { latin: 'vida', oldFrench: 'vie' },
    accent: { latin: 'mú-ri', oldFrench: 'mur', french: 'mur' }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <ParallaxBackground speed={-0.2}>
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-accent/10"></div>
        </ParallaxBackground>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-accent">
                La Grande Mutation Phonétique
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                Mais quelque chose d'étrange se passait dans les bouches des Gaulois quand ils parlaient latin. Les sons eux-mêmes commençaient à changer.
              </p>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.6}>
              <Image
                src="/images/mutation.webp"
                alt="Schéma de la bouche montrant le passage de [u] → [y]"
                width={900}
                height={600}
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                priority
              />
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Sound Shift Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">
              Le [u] devient [y]
            </h2>
          </SlideUp>
          
          <div className="max-w-5xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-surface/50 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-2">Latin</h3>
                  <PronunciationDisplay 
                    word="murus" 
                    pronunciation="mu-rus" 
                    className="text-center"
                  />
                </div>
                
                <div className="flex items-center justify-center text-2xl font-bold text-muted">
                  →
                </div>
                
                <div className="text-center p-4 bg-surface/50 rounded-lg">
                  <h3 className="font-semibold text-accent mb-2">Italien</h3>
                  <PronunciationDisplay 
                    word="muro" 
                    pronunciation="mu-ro" 
                    className="text-center"
                  />
                </div>
                
                <div className="text-center p-4 bg-surface/50 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Espagnol</h3>
                  <PronunciationDisplay 
                    word="muro" 
                    pronunciation="mu-ro" 
                    className="text-center"
                  />
                </div>
                
                <div className="text-center p-4 bg-surface/50 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-2">Latin</h3>
                  <PronunciationDisplay 
                    word="murus" 
                    pronunciation="mu-rus" 
                    className="text-center"
                  />
                </div>
                
                <div className="flex items-center justify-center text-2xl font-bold text-muted">
                  →
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-primary/50">
                  <h3 className="font-semibold text-primary mb-2">Français</h3>
                  <PronunciationDisplay 
                    word="mur" 
                    pronunciation="myr" 
                    className="text-center"
                  />
                </div>
                
                <div aria-hidden="true" />
              </div>
              
              <p className="text-lg text-center text-text mb-8">
                Le son [u] s'est déplacé vers l'avant de la bouche, devenant [y] - ce son unique qui fait que les anglophones ont du mal à prononcer « tu » correctement.
              </p>
            </FadeIn>
            
            <div className="mt-12">
              <DidYouKnowCard title="Pourquoi?" variant="question">
                <p>
                  Peut-être une trace de la langue gauloise. Peut-être juste l'évolution naturelle. Mais ce changement s'est produit dans presque toute la France, nord et sud, transformant le paysage sonore du latin.
                </p>
              </DidYouKnowCard>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consonant Disappearance Section */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">
              Les consonnes disparaissent
            </h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
                <div className="text-center p-4 bg-surface/50 rounded-lg">
                  <div className="text-lg font-semibold">Latin</div>
                  <div className="text-xl font-bold text-secondary">vida</div>
                </div>
                
                <div className="text-2xl font-bold text-muted">→</div>
                
                <div className="text-center p-4 bg-surface/50 rounded-lg">
                  <div className="text-lg font-semibold">Le [t] devient [ð]</div>
                </div>
                
                <div className="text-2xl font-bold text-muted">→</div>
                
                <div className="text-center p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-primary/50">
                  <div className="text-lg font-semibold">Ancien français</div>
                  <div className="text-xl font-bold text-primary">vie</div>
                </div>
              </div>
              
              <StatBoxCard>
                <p className="text-lg">
                  Au moment du <em className="text-secondary">Chanson de Roland</em>, les scribes avaient même arrêté d'écrire ce [ð] fantôme — il était devenu trop faible pour compter.
                </p>
              </StatBoxCard>

              <p className="mt-6 text-lg text-text">
                Ces exemples illustrent le processus de modification (sonorisation/adoucissement) ou d'omission d'une consonne située entre deux voyelles :
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-surface/60 bg-surface/40 shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 bg-gradient-to-r from-primary/20 via-surface/60 to-secondary/20 text-text">
                  <div className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-primary">
                    Latin
                  </div>
                  <div className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-secondary">
                    Ancien Français
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-surface/40">
                  {[
                    { latin: 'víta', old: 'vide (devenu vie)' },
                    { latin: 'sapére', old: 'savér (devenu savoir)' },
                    { latin: 'debère', old: 'devoir' },
                    { latin: 'secúrum', old: 'seür (devenu sûr)' },
                    { latin: 'a(u)gústum', old: 'aost (devenu août)' },
                    { latin: 'fédem', old: 'fei (devenu foi)' },
                  ].map((item, index) => (
                    <React.Fragment key={index}>
                      <div
                        className={`px-4 py-3 text-text ${
                          index % 2 === 0 ? 'bg-surface/30' : 'bg-surface/10'
                        }`}
                      >
                        <span className="font-mono text-primary/90">{item.latin}</span>
                      </div>
                      <div
                        className={`px-4 py-3 text-text ${
                          index % 2 === 0 ? 'bg-surface/30' : 'bg-surface/10'
                        }`}
                      >
                        {item.old}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Germanic Accent Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">
              L'accent germanique
            </h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl text-center mb-8 text-text">
                Mais le changement le plus dramatique est venu des Francs germaniques. Leur façon de parler — avec un <strong className="text-primary">accent tonique fort</strong> sur la première syllabe — a commencé à dévorer les syllabes non accentuées à la fin des mots.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-surface/50 rounded-lg">
                  <div className="mb-4 text-center">
                    <span className="block text-lg font-semibold text-secondary">Latin</span>
                    <span className="block text-lg font-bold">mú-ri</span>
                  </div>
                  <div className="text-center text-2xl font-bold text-primary">↓</div>
                  <div className="mt-4 text-center">
                    <span className="text-lg font-bold">mur</span>
                  </div>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg">
                  <div className="mb-4 text-center">
                    <span className="block text-lg font-semibold text-accent">Latin</span>
                    <span className="block text-lg font-bold">pór-ta</span>
                  </div>
                  <div className="text-center text-2xl font-bold text-primary">↓</div>
                  <div className="mt-4 text-center">
                    <span className="text-lg font-bold">por-te</span>
                  </div>
                </div>
              </div>
              
              <ConclusionCard>
                <p className="text-xl text-center">
                  Les syllabes finales tombaient comme des feuilles en automne. Le français devenait plus court, plus percutant — <strong className="text-accent">une langue sculptée par l'accent germanique</strong>.
                </p>
              </ConclusionCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Additional Germanic Influence */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SlideUp duration={1} delay={0.2}>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-primary">L'héritage germanique</h3>
                <p className="text-lg text-text">
                  L'influence des Francs germaniques sur le français va bien au-delà de la suppression des syllabes finales. Elle a façonné la musique même de la langue française que nous connaissons aujourd'hui.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>
      
      {/* Next Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display mb-6 text-text">
                La Naissance du Roman
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez le moment où le latin parlé est devenu reconnaissable comme une nouvelle langue.
              </p>
              
              <Link 
                href="/birth-of-romance" 
                className="inline-block bg-gradient-to-r from-accent to-primary text-white font-semibold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg"
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

export default GreatShiftPage;
