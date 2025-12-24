'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { ResultCard, AnalysisCard, PurposeCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const ModernInnovationsPage = () => {
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
                Les Innovations Modernes
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                Pendant que l'Académie se bat contre les anglicismes, le français lui-même continue d'innover de façons surprenantes.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Innovation 1: Vowel Length Disappears */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">La longueur des voyelles disparaît</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                À la fin du 19ème siècle, la distinction de longueur entre les voyelles finales toniques suivies d'un <em className="font-mono text-primary">e</em> muet et celles qui ne l'étaient pas a disparu.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 p-6 bg-surface/50 rounded-lg">
                <div className="text-center">
                  <div className="font-mono text-xl font-bold text-secondary">fini</div>
                  <div className="text-muted">[fini]</div>
                </div>
                <div className="text-3xl font-bold text-primary">vs</div>
                <div className="text-center">
                  <div className="font-mono text-xl font-bold text-accent">finie</div>
                  <div className="text-muted">[fini]</div>
                </div>
              </div>
              
              <p className="text-lg mb-6 text-text">
                Autrefois prononcés différemment, maintenant identiques
              </p>
              
              <p className="text-lg text-text mb-6">
                Le [l] mouillé s'est largement transformé en [j] :
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 bg-surface/50 rounded-lg">
                <div className="font-mono text-lg text-secondary">bouteille</div>
                <div className="text-xl font-bold text-muted">autrefois</div>
                <div className="text-muted">[bu'tɛʎə]</div>
                <div className="text-3xl font-bold text-primary">→</div>
                <div className="text-muted">maintenant</div>
                <div className="font-mono text-lg text-accent">[bu'tɛjə]</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Innovation 2: Nasals Merge */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Les nasales fusionnent</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              
              <p className="text-xl mb-8 text-text">
                Les deux sons nasaux [œ̃] (comme dans <em className="font-mono text-secondary">un</em>) et [ɛ̃] (comme dans <em className="font-mono text-accent">vin</em>) sont en train de fusionner pour de nombreux locuteurs, qui n'utilisent que [ɛ̃].
              </p>
              
              <ResultCard>
                <p className="text-lg">
                  <strong className="text-primary">Résultat ?</strong> <em className="text-secondary">Brun</em> et <em className="text-accent">brin</em> se prononcent maintenant de la même façon pour la plupart des Français.
                </p>
              </ResultCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Innovation 3: Narrative Imperfect */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">L'imparfait narratif</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl text-center mb-8 text-text">
                Au 19ème siècle, les écrivains ont commencé à utiliser l'imparfait d'une nouvelle façon — <strong className="text-primary">pour narrer une succession d'événements</strong>, un rôle qui appartenait traditionnellement au passé simple.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-surface/50 rounded-lg text-center">
                  <h3 className="text-xl font-semibold text-secondary mb-4">Ancien style :</h3>
                  <p className="font-mono text-lg text-primary mb-2">Le lendemain il quitta Paris.</p>
                  <p className="text-sm text-muted">passé simple = action complète</p>
                </div>
                
                <div className="flex items-center justify-center text-3xl text-primary">
                  →
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg text-center">
                  <h3 className="text-xl font-semibold text-accent mb-4">Nouveau style :</h3>
                  <p className="font-mono text-lg text-secondary mb-2">Le lendemain il quittait Paris.</p>
                  <p className="text-sm text-muted">imparfait = action complète et narrative</p>
                </div>
              </div>
              
              <AnalysisCard>
                <p className="text-lg text-center">
                  C'était une innovation stylistique qui ajoutait de la nuance et de la subtilité à la narration française.
                </p>
              </AnalysisCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Innovation 4: Reprise and Inversion */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">La reprise et l'inversion</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                Pour gérer l'ordre des mots fixe Sujet-Verbe-Objet, le français a développé de nouveaux outils stylistiques :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-surface/50 rounded-lg">
                  <h3 className="text-xl font-semibold text-secondary mb-4">La reprise :</h3>
                  <p className="font-mono text-lg text-primary">Cet homme, je l'ai vu.</p>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg">
                  <h3 className="text-xl font-semibold text-accent mb-4">L'inversion stylistique :</h3>
                  <p className="font-mono text-lg text-secondary">Alors surgit le héros.</p>
                </div>
              </div>
              
              <PurposeCard>
                <p className="text-lg">
                  Ces dispositifs brisaient la monotonie de SVO-SVO-SVO et ajoutaient du rythme et de l'emphase à la prose.
                </p>
              </PurposeCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Additional Context */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <p className="text-lg text-text mb-6">
                Ces innovations linguistiques montrent que le français continue d'évoluer, même dans les domaines les plus fondamentaux de la grammaire et de la phonétique.
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
                La Renaissance Africaine
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment l'avenir du français se trouve peut-être en Afrique.
              </p>
              
              <Link 
                href="/african-renaissance" 
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

export default ModernInnovationsPage;