'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { WarningCard, InsightCard, DidYouKnowCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const OldFrenchGrammarPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <ParallaxBackground speed={-0.2}>
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-secondary/10"></div>
        </ParallaxBackground>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-secondary">
                L'Ancien Français : Une Grammaire que Vous Ne Reconnaîtriez Pas
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                Imaginez essayer de lire le français du 11ème siècle. Même si vous êtes francophone natif, vous seriez perdu.
              </p>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.6}>
              <img
                src="/images/11st.jpg"
                alt="Page de manuscrit médiéval en ancien français"
                className="w-full max-w-2xl mx-auto rounded-lg"
                width={800}
                height={600}
              />
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Two-Case System Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">
              Le système à deux cas
            </h2>
          </SlideUp>
          
          <div className="max-w-5xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl text-center mb-8 text-text">
                Contrairement à l'italien, l'espagnol ou le portugais, l'ancien français a conservé un <strong className="text-primary">système à deux cas</strong> du latin — une façon de montrer qui fait l'action et qui la subit.
              </p>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-surface/50 border border-surface/50 rounded-lg">
                  <thead>
                    <tr className="bg-surface/70">
                      <th className="p-4 text-left text-secondary">Cas</th>
                      <th className="p-4 text-left text-secondary">Fonction</th>
                      <th className="p-4 text-left text-secondary">Exemple: "mur"</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-surface/30">
                      <td className="p-4">Nominatif singulier</td>
                      <td className="p-4">(sujet)</td>
                      <td className="p-4 font-mono font-bold text-primary">li murs</td>
                    </tr>
                    <tr className="border-t border-surface/30">
                      <td className="p-4">Oblique singulier</td>
                      <td className="p-4">(objet)</td>
                      <td className="p-4 font-mono font-bold text-accent">le mur</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-lg text-text">
                Vous deviez changer la terminaison selon la fonction du mot dans la phrase. C'était comme une trace fantôme du latin, s'accrochant au français médiéval.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Warning Section */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn duration={1} delay={0.2}>
              <WarningCard>
                <p className="text-lg text-center">
                  Mais ce système était condamné. Dès le 13ème siècle, il commençait à s'effondrer.
                </p>
              </WarningCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Vowel Alternation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">
              L'alternance vocalique des verbes
            </h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl text-center mb-8 text-text">
                Les verbes de l'ancien français faisaient quelque chose de bizarre. Les changements sonores réguliers avaient créé <strong className="text-primary">deux formes différentes du même verbe</strong> :
              </p>
              
              <div className="bg-surface/50 p-6 rounded-lg border border-surface/50 mb-8">
                <h3 className="text-2xl font-semibold text-secondary mb-4">Le verbe <em className="font-mono">ovrer</em> (travailler) :</h3>
                
                <div className="flex flex-wrap items-center justify-between p-4 bg-surface/70 rounded-lg mb-4">
                  <div className="flex-1 min-w-[200px]">
                    <span className="text-muted mr-2">3ème personne singulier :</span>
                    <span className="font-mono font-bold text-primary">uevre</span> <span className="text-muted">[avec diphtongue]</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-between p-4 bg-surface/70 rounded-lg">
                  <div className="flex-1 min-w-[200px]">
                    <span className="text-muted mr-2">1ère personne pluriel :</span>
                    <span className="font-mono font-bold text-accent">ovrons</span> <span className="text-muted">[sans diphtongue]</span>
                  </div>
                </div>
              </div>
              
              <DidYouKnowCard title="Pourquoi ?" variant="question">
                <p className="text-slate-700">
                  Parce que l'accent tonique tombait sur la racine dans « uevre » (créant une diphtongue), mais sur la terminaison dans « ovrons » (gardant la voyelle simple).
                </p>
              </DidYouKnowCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Conclusion Section */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn duration={1} delay={0.2}>
              <InsightCard>
                <p className="text-xl text-center">
                  C'était logique — <strong className="text-primary">si vous compreniez les règles de diphtongaison</strong>. Mais pour les générations futures ? Un cauchemar grammatical.
                </p>
              </InsightCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Additional Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-text mb-6">
              L'Ancien Français présentait une complexité grammaticale qui rendait l'apprentissage et l'utilisation de la langue très difficile. Ces systèmes grammaticaux ont progressivement été abandonnés au fil des siècles pour aboutir à la structure plus simple du français moderne.
            </p>
          </div>
        </div>
      </section>
      
      {/* Next Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display mb-6 text-text">
                Les Envahisseurs
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment les invasions successives ont façonné la langue française.
              </p>
              
              <Link 
                href="/invaders" 
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

export default OldFrenchGrammarPage;
