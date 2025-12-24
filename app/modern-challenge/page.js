'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { StatBox, HopeCardSpecial } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const ModernChallengePage = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 text-accent">
                Le Défi Moderne
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary">20ème-21ème siècles</h2>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                Aujourd'hui, le français fait face à un nouvel envahisseur : l'anglais.
              </p>
            </FadeIn>
            
          </div>
        </div>
      </section>
      
      {/* The Challenge */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SlideUp duration={1} delay={0.2}>
              <p className="text-xl text-center mb-8 text-text">
                La langue qui dominait autrefois les cours européennes se bat maintenant pour maintenir sa pertinence dans un monde globalisé et anglophone. Le pouvoir économique et culturel américain a fait de l'anglais la langue par défaut des affaires, de la technologie et de la communication internationale.
              </p>
            </SlideUp>
          </div>
        </div>
      </section>
      
      {/* Anglicism Invasion */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">L'invasion des anglicismes</h2>
          </SlideUp>
          
          <div className="max-w-5xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl text-center mb-8 text-text">
                La Révolution industrielle a apporté la première vague massive de mots anglais — ironiquement, beaucoup étaient des mots français que l'anglais avait empruntés des siècles auparavant et que le français réempruntait maintenant.
              </p>
              
              
              <div className="space-y-8">
                <div className="p-6 bg-surface/50 rounded-lg">
                  <h3 className="text-xl font-semibold text-secondary mb-4">Termes ferroviaires (19ème siècle) :</h3>
                  <div className="flex flex-wrap gap-3">
                    {["rail", "tender", "ticket", "tunnel"].map((word, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/50">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg">
                  <h3 className="text-xl font-semibold text-accent mb-4">Sport (fin 19ème-début 20ème) :</h3>
                  <div className="flex flex-wrap gap-3">
                    {["match", "record", "sport", "tennis"].map((word, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/50">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-red-500/15 to-orange-500/15 rounded-lg border border-red-500/50">
                  <h3 className="text-xl font-semibold text-primary mb-4">Technologie moderne (20ème-21ème) :</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      {word: "email", alt: "courriel"},
                      {word: "weekend", alt: "fin de semaine"},
                      {word: "smartphone", alt: null},
                      {word: "hashtag", alt: "mot-dièse"},
                      {word: "marketing", alt: null},
                      {word: "parking", alt: null}
                    ].map((item, index) => (
                      <span 
                        key={index} 
                        className={`px-3 py-1 rounded-full border ${
                          item.alt 
                            ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/50" 
                            : "bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/50"
                        }`}
                      >
                        {item.word} {item.alt && <span className="text-xs text-muted">(ou {item.alt})</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Paris Street Scene */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Promenez-vous dans Paris...</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                Promenez-vous dans Paris et vous verrez :
              </p>
              
              <img
                src="/images/weekend.jpg"
                alt="Panneaux de rue parisiens avec des mots anglais"
                className="w-full rounded-lg mb-8 max-w-full md:max-w-[40%] h-auto mx-auto"
                width={320}
                height={240}
              />
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                {["Le weekend", "Un email", "Le marketing", "Un smartphone", "Le parking"].map((sign, index) => (
                  <div key={index} className="p-4 bg-surface/50 rounded-lg border border-surface/50">
                    <span className="font-mono text-primary">{sign}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-text">
                L'Académie française crée frénétiquement des alternatives françaises, mais les francophones les ignorent souvent.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Hope Section */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SlideUp duration={1} delay={0.2}>
              <StatBox>
                <div className="text-5xl font-bold text-green-400 mb-2">300 millions</div>
                <div className="text-xl text-text">Francophones dans le monde (et en croissance)</div>
              </StatBox>
              
              <div className="mt-8">
                <HopeCardSpecial>
                  <p className="text-xl">
                    Pourtant, le français ne meurt pas. Il évolue, s'adapte et trouve une nouvelle vie dans des endroits inattendus.
                  </p>
                </HopeCardSpecial>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>
      
      {/* Additional Context */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <img
                src="/images/francophone.jpg"
                alt="Graphique montrant la croissance des locuteurs du français dans le monde"
                className="w-full rounded-lg mx-auto max-w-full md:max-w-[40%] h-auto"
                width={320}
                height={240}
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
                Les Innovations Modernes
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment le français continue d'innover de façons surprenantes.
              </p>
              
              <Link 
                href="/modern-innovations" 
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

export default ModernChallengePage;