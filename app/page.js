'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/Scrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

const HomePage = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParallaxBackground speed={-0.3}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/30 to-background"></div>
        </ParallaxBackground>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Le Voyage Linguistique
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary">
                Comment le Français a Conquis le Monde
              </h2>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.6}>
              <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto">
                Des soldats romains aux innovateurs africains — 2 000 ans d'évolution linguistique
              </p>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.8}>
              <Link 
                href="/gaul-to-glory" 
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Commencer le Voyage →
              </Link>
            </FadeIn>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted" size={32} />
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-primary">
                Une Aventure Épique à Travers les Siècles
              </h2>
              <p className="text-xl text-muted">
                Suivez le parcours extraordinaire du français, de ses racines latines à son avenir africain
              </p>
            </div>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <SlideUp duration={1} delay={0.3}>
              <Card className="bg-surface/50 border border-surface/50 p-6 h-full">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-3 text-secondary">Origines Gauloises</h3>
                  <p className="text-muted">
                    Découvrez comment le latin vulgaire s'est transformé en français à travers les invasions germaniques et les changements phonétiques.
                  </p>
                </CardContent>
              </Card>
            </SlideUp>
            
            <SlideUp duration={1} delay={0.4}>
              <Card className="bg-surface/50 border border-surface/50 p-6 h-full">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-3 text-accent">Évolution et Standardisation</h3>
                  <p className="text-muted">
                    Suivez la transformation du français à travers les siècles, de l'Ancien Français à l'établissement de l'Académie française.
                  </p>
                </CardContent>
              </Card>
            </SlideUp>
            
            <SlideUp duration={1} delay={0.5}>
              <Card className="bg-surface/50 border border-surface/50 p-6 h-full">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Avenir Mondial</h3>
                  <p className="text-muted">
                    Explorez comment le français continue d'évoluer aujourd'hui, avec une renaissance en Afrique et de nouvelles influences mondiales.
                  </p>
                </CardContent>
              </Card>
            </SlideUp>
          </div>
          
          <SlideUp duration={1} delay={0.6}>
            <div className="text-center">
              <Image
                src="/images/river.png"
                alt="Visualisation abstraite du langage coulant comme des rivières sur une carte"
                width={300}
                height={175}
                className="w-full max-w-[384px] mx-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </SlideUp>
        </div>
      </section>
      
      {/* Timeline Preview */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">
              Voyage à Travers les Ères
            </h2>
          </SlideUp>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              {[
                { era: "52 av. J.-C.", event: "Arrivée du latin vulgaire en Gaule", description: "Les légions romaines apportent le latin vulgaire, base du futur français" },
                { era: "5ème siècle", event: "Invasions germaniques", description: "Les Francs apportent leur influence linguistique et phonétique" },
                { era: "842 ap. J.-C.", event: "Serments de Strasbourg", description: "Premier texte reconnaissable en « français »" },
                { era: "14ème siècle", event: "Effondrement du système des cas", description: "Le français moyen émerge avec une grammaire simplifiée" },
                { era: "17ème siècle", event: "Fondation de l'Académie française", description: "Début de la standardisation et de la codification" },
                { era: "21ème siècle", event: "Renaissance africaine", description: "L'avenir du français se trouve de plus en plus en Afrique" }
              ].map((item, index) => (
                <FadeIn key={index} duration={1} delay={0.2 * index}>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="md:w-1/4">
                      <div className="text-2xl font-bold font-display text-primary">{item.era}</div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold text-secondary">{item.event}</h3>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-text">
                Prêt pour l'Aventure ?
              </h2>
              <p className="text-xl text-muted mb-8">
                Plongez dans l'histoire fascinante du français, une langue qui continue de vivre, de changer et de s'épanouir.
              </p>
              <Link 
                href="/gaul-to-glory" 
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold py-4 px-10 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Commencer l'Exploration →
              </Link>
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
