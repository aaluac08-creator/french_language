'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { InsightCard, LogicCard, StatBoxCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const GreatTransformationPage = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 text-accent">
                La Grande Transformation
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary">
                11ème-14ème siècles
              </h2>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                Du 11ème au 14ème siècle, le français a subi un relooking radical. Imaginez une chenille entrant dans un cocon en ancien français et émergeant en moyen français — fondamentalement changée.
              </p>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.6}>
              <img
                src="/images/Butterfly.jpg"
                alt="Schéma de métamorphose de la chenille au papillon"
                className="w-full mx-auto rounded-lg max-w-full md:max-w-[35%] h-auto"
                width={280}
                height={210}
              />
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Side-by-Side Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Ancien Français vs Moyen Français</h2>
          </SlideUp>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <FadeIn duration={1} delay={0.3}>
                <Card className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/50">
                  <h3 className="text-2xl font-bold font-display mb-4 text-red-400">Ancien Français</h3>
                  <h4 className="text-lg text-muted mb-4">9ème-13ème siècles</h4>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Système à deux cas (sujet vs. objet, comme le latin)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Ordre des mots flexible (comme le latin)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Formes verbales complexes avec de nombreux modèles irréguliers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Voyelles nasales qui commencent tout juste à émerger</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>Affriquées complexes : [dz], [dʒ], [ts], [tʃ]</span>
                    </li>
                  </ul>
                </Card>
              </FadeIn>
              
              <div className="text-4xl font-bold text-center text-primary flex justify-center items-center h-full">
                →
              </div>
              
              <FadeIn duration={1} delay={0.4}>
                <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/50">
                  <h3 className="text-2xl font-bold font-display mb-4 text-green-400">Moyen Français</h3>
                  <h4 className="text-lg text-muted mb-4">14ème-16ème siècles</h4>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Le système des cas s'effondre entièrement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Ordre fixe Sujet-Verbe-Objet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Grammaire simplifiée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Perte de nombreuses consonnes finales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>La prononciation et l'orthographe commencent à diverger</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Les affriquées se simplifient en fricatives : [z], [ʒ], [s], [ʃ]</span>
                    </li>
                  </ul>
                </Card>
              </FadeIn>
            </div>
            
            <div className="mt-12 text-center">
              <InsightCard>
                <p className="text-xl">
                  La langue devenait plus analytique, moins fléchie — <strong className="text-primary">échangeant la complexité grammaticale du latin pour l'élégance simple du français</strong>.
                </p>
              </InsightCard>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Collapse Section */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">L'effondrement des cas</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                Par le 14ème siècle, le système à deux cas était mort. Pourquoi ? Parce que le <strong className="text-primary">-s flexionnel final avait cessé d'être prononcé</strong>.
              </p>
              
              <img
                src="/images/s.jpg"
                alt="Schéma montrant le -s qui s'efface jusqu'au silence"
                className="w-full max-w-2xl mx-auto rounded-lg mb-8"
                width={800}
                height={600}
              />
              
              <LogicCard>
                <p className="text-lg">
                  Si vous ne pouvez pas entendre la différence entre <em className="text-primary">li murs</em> (sujet) et <em className="text-accent">le mur</em> (objet), pourquoi s'embêter avec la distinction ? Les formes obliques se sont généralisées, devenant les formes singulières que nous utilisons aujourd'hui.
                </p>
              </LogicCard>
              
              <div className="mt-8">
                <StatBoxCard>
                  <p className="text-lg">
                    En 1461, le poète François Villon a essayé d'écrire en « ancien français » et s'est complètement trompé sur le système des cas. <strong className="text-secondary">En seulement 150 ans, la mémoire grammaticale s'était évaporée.</strong>
                  </p>
                </StatBoxCard>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* R Disappearance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Le [r] final disparaît</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                À la fin du 14ème siècle, quelque chose d'étrange s'est produit : le <strong className="text-primary">[r] final des infinitifs a cessé d'être prononcé</strong>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-lg font-bold text-secondary">chanter</div>
                  <div className="text-muted">[ʃɑ̃'te]</div>
                </div>
                
                <div className="p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-lg font-bold text-accent">finir</div>
                  <div className="text-muted">[fi'ni]</div>
                </div>
                
                <div className="p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-lg font-bold text-primary">recevoir</div>
                  <div className="text-muted">[rəsə'vwa]</div>
                </div>
              </div>
              
              <p className="text-lg mb-8 text-text">
                Cela a créé une confusion temporaire — comment distinguer un agent en <em className="font-mono">-eur</em> d'un adjectif en <em className="font-mono">-eux</em> si vous ne prononciez pas le [r] ?
              </p>
              
              <Card className="p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/50">
                <p className="text-lg">
                  Mais la langue s'est adaptée. Elle trouve toujours un moyen.
                </p>
              </Card>
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
                L'Orthographe Devient Folle
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment l'orthographe et la prononciation ont divorcé au moyen français.
              </p>
              
              <Link 
                href="/spelling-madness" 
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

export default GreatTransformationPage;