'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground, PronunciationDisplay } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { StatBoxCard, HistoricalNote, VictoryCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const EnlightenmentPage = () => {
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
                La Langue des Lumières
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-secondary">18ème siècle</h2>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <blockquote className="text-2xl italic text-text border-l-4 border-accent pl-6 mx-4">
                « Au 18ème siècle, si vous vouliez être pris au sérieux en Europe — que vous soyez un aristocrate russe, un philosophe prussien ou un gentilhomme anglais — vous parliez français. »
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* International Prestige */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">La Langue Internationale</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                Le français est devenu la langue internationale de la diplomatie, de la philosophie et de la haute culture.
              </p>
              
              <img
                src="/images/salon.JPG"
                alt="Carte montrant l'influence française dans les cours européennes"
                className="w-full rounded-lg mb-8 max-w-full md:max-w-[40%] h-auto mx-auto"
                width={320}
                height={240}
              />
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Uvular R Section */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Le [R] uvulaire émerge</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                Mais même pendant que le français conquérait l'Europe, il changeait à Paris. Le <strong className="text-primary">[r] roulé traditionnel</strong> commençait à être remplacé par le <strong className="text-accent">[R] uvulaire grasseyé</strong> — le son guttural caractéristique du français moderne.
              </p>
              
              <video
                src="/images/r.mov"
                alt="Schéma montrant la position de la bouche pour [R] uvulaire"
                className="w-full mx-auto rounded-lg mb-8 max-w-full sm:max-w-[50%] md:max-w-[30%] lg:max-w-[20%] h-auto"
                width={160}
                height={120}
                controls
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-surface/50 rounded-lg">
                  <h3 className="text-xl font-semibold text-secondary mb-4">[r] roulé</h3>
                  <PronunciationDisplay 
                    word="Roule" 
                    pronunciation="rolled-R sound" 
                    className="justify-center"
                  />
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg">
                  <h3 className="text-xl font-semibold text-accent mb-4">[R] uvulaire</h3>
                  <PronunciationDisplay 
                    word="Grasseye" 
                    pronunciation="guttural-R sound" 
                    className="justify-center"
                  />
                </div>
              </div>
              
              <StatBoxCard>
                <p className="text-lg">
                  Au moment de la Révolution, environ <strong className="text-secondary">un quart de la population parisienne</strong> utilisait ce nouveau [R].
                </p>
              </StatBoxCard>
              
              <div className="mt-6">
                <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/50">
                  <p className="text-lg">
                    Molière, écrivant au 17ème siècle, décrivait encore l'ancien [r] roulé.
                  </p>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* OI Triumph Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Le [wa] triomphe</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                En même temps, le son écrit <em className="font-mono text-primary">oi</em> se stabilisait enfin sur <strong className="text-accent">[wa]</strong> dans le parler parisien standard.
              </p>
              
              <img
                src="/images/wa.png"
                alt="Animation montrant l'affrontement entre [we], [e] et [wa], avec la victoire de [wa]"
                className="w-full max-w-2xl mx-auto rounded-lg mb-8"
                width={600}
                height={400}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-lg font-bold text-secondary">droit</div>
                  <div className="text-muted">[drwa]</div>
                </div>
                
                <div className="p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-lg font-bold text-accent">croire</div>
                  <div className="text-muted">[krwar]</div>
                </div>
                
                <div className="p-4 bg-surface/50 rounded-lg">
                  <div className="font-mono text-lg font-bold text-primary">soyons</div>
                  <div className="text-muted">[swajɔ̃]</div>
                </div>
              </div>
              
              <Card className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/70">
                <p className="text-lg">
                  Le débat entre [we], [e], et [wa] était terminé. <strong className="text-secondary">[wa] avait gagné</strong> — donnant au français l'un de ses sons les plus distinctifs.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Philosophers Context */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <img
                  src="/images/voltaire.jpg"
                  alt="Portrait de Voltaire"
                  className="w-full rounded-lg"
                  width={400}
                  height={500}
                />
                <img
                  src="/images/rousseau.jpg"
                  alt="Portrait de Rousseau"
                  className="w-full rounded-lg"
                  width={400}
                  height={500}
                />
                <img
                  src="/images/Diderot.jpg"
                  alt="Portrait de Diderot"
                  className="w-full rounded-lg"
                  width={400}
                  height={500}
                />
              </div>
              
              <h3 className="text-2xl font-bold font-display mb-4 text-text">Les philosophes des Lumières</h3>
              <p className="text-lg text-text">
                Voltaire, Rousseau, Diderot et les autres philosophes parlaient et écrivaient en français — la langue des idées nouvelles.
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
                Révolution
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment la Révolution française a démocratisé la langue.
              </p>
              
              <Link 
                href="/revolution" 
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

export default EnlightenmentPage;