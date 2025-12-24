'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { CritiqueCard, ResolutionCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const SpellingMadnessPage = () => {
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
                Quand l'Orthographe est Devenue Folle
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                Voici où les choses deviennent vraiment bizarres. Au moyen français, <strong className="text-primary">l'orthographe et la prononciation ont divorcé</strong>.
              </p>
            </FadeIn>
            
          </div>
        </div>
      </section>
      
      {/* Etymological Spellings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Les orthographes étymologisantes</h2>
          </SlideUp>
          
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                Les scribes, obsédés par le latin, ont commencé à ajouter des lettres muettes pour refléter l'étymologie — même quand ces lettres n'étaient jamais prononcées.
              </p>
              
              
              <div className="space-y-6 mb-8">
                <div className="flex flex-wrap justify-center items-center gap-4 p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-lg">dote</div>
                  <div className="text-2xl font-bold text-muted">→</div>
                  <div className="font-mono text-lg">doubte</div>
                  <div className="text-2xl font-bold text-muted">→</div>
                  <div className="font-mono text-lg font-bold text-primary">doute</div>
                  <div className="text-sm text-muted ml-4">à cause du latin <em className="text-accent">dubium</em></div>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-4 p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-lg">povre</div>
                  <div className="text-2xl font-bold text-muted">→</div>
                  <div className="font-mono text-lg font-bold text-accent">pauvre</div>
                  <div className="text-sm text-muted ml-4">à cause du latin <em className="text-primary">pauper</em></div>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-4 p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-lg">tens</div>
                  <div className="text-2xl font-bold text-muted">→</div>
                  <div className="font-mono text-lg font-bold text-secondary">temps</div>
                  <div className="text-sm text-muted ml-4">à cause du latin <em className="text-primary">tempus</em></div>
                </div>
              </div>
              
              <p className="text-lg mb-6 text-text">
                Le <em className="font-mono text-primary">h</em> s'est généralisé partout — <em className="text-secondary">heure</em>, <em className="text-accent">homme</em>, <em className="text-primary">huile</em> — même quand il n'avait jamais été prononcé en latin vulgaire.
              </p>
              
              <CritiqueCard>
                <p className="text-lg">
                  <strong className="text-secondary">C'était de la folie étymologique.</strong> Les érudits réécrivaient l'orthographe pour refléter ce qu'ils <em className="text-accent">pensaient</em> être les origines latines, créant le gouffre entre l'écrit et le parlé qui torture les apprenants de français encore aujourd'hui.
                </p>
              </CritiqueCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* The OI Problem Section */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Le problème du OI</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                Le son écrit <em className="font-mono text-primary">oi</em> était en pleine crise d'identité.
              </p>
              
              
              <p className="text-lg mb-8 text-text">
                Au 17ème siècle, il se prononçait [we] dans certains mots et [e] dans d'autres (surtout les terminaisons de l'imparfait et du conditionnel). Le peuple disait [e], les érudits insistaient sur [we].
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-surface/50 rounded-lg">
                  <h3 className="text-xl font-semibold text-secondary mb-4">Prononciation Populaire</h3>
                  <div className="font-mono text-lg font-bold">François</div>
                  <div className="text-muted">[frɑ̃'sɛ]</div>
                </div>
                
                <div className="flex items-center justify-center text-3xl font-bold text-primary">
                  VS
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg">
                  <h3 className="text-xl font-semibold text-accent mb-4">Prononciation Puriste</h3>
                  <div className="font-mono text-lg font-bold">François</div>
                  <div className="text-muted">[frɑ̃'swɛ]</div>
                </div>
              </div>
              
              <ResolutionCard>
                <h3 className="text-2xl font-bold text-center mb-4">Résolution de 1835</h3>
                <p className="text-lg">
                  Finalement, l'Académie a capitulé en 1835, changeant l'orthographe de <em className="text-primary">Français</em> en <strong className="text-secondary">Français</strong> là où le son était [e]. Mais dans d'autres mots comme <em className="text-accent">loi</em>, <em className="text-primary">moi</em>... la prononciation [wa] a persisté.
                </p>
              </ResolutionCard>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Additional Context */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <h3 className="text-2xl font-bold font-display mb-4 text-text">L'héritage de la folie orthographique</h3>
              <p className="text-lg text-text">
                Cette divergence entre orthographe et prononciation est l'une des caractéristiques les plus déroutantes du français moderne.
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
                La Renaissance
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment le 16ème siècle a tout changé pour la langue française.
              </p>
              
              <Link 
                href="/renaissance" 
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

export default SpellingMadnessPage;