'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground, FloatingWords } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteCard, SuccessCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const RenaissancePage = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 text-primary">
                La Révolution de la Renaissance
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                Le 16ème siècle a tout changé.
              </p>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.6}>
              <img
                src="/images/gutenberg.webp"
                alt="Presse à imprimer de Gutenberg"
                className="w-full mx-auto rounded-lg max-w-full md:max-w-[52%] h-auto"
                width={416}
                height={312}
              />
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Revolution Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">La Révolution Culturelle</h2>
          </SlideUp>
          
          <div className="max-w-5xl mx-auto">
            <FadeIn duration={1.5} delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="p-6 bg-surface/50 rounded-lg text-center">
                  <div className="text-4xl mb-4">📖</div>
                  <p className="text-lg">L'imprimerie de Gutenberg est arrivée</p>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <p className="text-lg">Les explorateurs ont découvert de nouveaux mondes</p>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg text-center">
                  <div className="text-4xl mb-4">📜</div>
                  <p className="text-lg">Les érudits ont redécouvert les textes grecs et romains anciens</p>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <p className="text-lg">Les artistes ont révolutionné la peinture et la sculpture</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Vocabulary Explosion */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">L'Explosion du Vocabulaire</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1.5} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                Et le français ? Le français a explosé avec un nouveau vocabulaire.
              </p>
              
              <FloatingWords 
                words={[
                  "architecture", "perspective", "banque", "festival",
                  "design", "artiste", "concert", "ballet",
                  "grotesque", "moustache", "escapade", "charlatan",
                  "cascade", "balcon"
                ]}
                className="mb-8"
              />
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Italian Influence Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">L'influence italienne</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <img
                  src="/images/medici.jpg"
                  alt="Portraits de Catherine de Médicis et Marie de Médicis"
                  className="w-full md:w-1/2 rounded-lg"
                  width={600}
                  height={400}
                />

                <div>
                  <p className="text-lg text-text">
                    L'influence italienne était particulièrement forte — Catherine de Médicis et Marie de Médicis, reines de France, ont apporté la culture de la Renaissance et les mots italiens à la cour française.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Scholarly Borrowings */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Termes techniques empruntés au latin et au grec</h2>
          </SlideUp>
          
          <div className="max-w-2xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4">
                {["anatomie", "encyclopédie", "mathématiques", "physique"].map((term, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-3 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg border border-secondary/30 text-lg font-medium"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Poet Quote Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SlideUp duration={1} delay={0.2}>
              <QuoteCard>
                <blockquote className="text-xl italic">
                  Des poètes comme Joachim du Bellay ont soutenu que le français pouvait être aussi sophistiqué que le latin ou l'italien — ils avaient juste besoin de l'enrichir, de lui donner le vocabulaire pour discuter de philosophie, de science et d'art.
                </blockquote>
              </QuoteCard>
            </SlideUp>
            
            <div className="mt-8">
              <SuccessCard>
                <p className="text-lg text-center">
                  Leur projet a réussi. À la fin du 16ème siècle, le français avait les outils lexicaux pour exprimer tout ce que le latin pouvait — et plus encore.
                </p>
              </SuccessCard>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Context */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <p className="text-lg text-text mb-6">
                La Renaissance a profondément transformé la culture française, apportant de nouvelles idées, de nouveaux mots et de nouvelles façons de penser.
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
                La Standardisation
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment l'Académie française a été fondée pour standardiser la langue.
              </p>
              
              <Link 
                href="/standardization" 
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

export default RenaissancePage;