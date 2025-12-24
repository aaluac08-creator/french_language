'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { InsightCard, StatBoxCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const BirthOfRomancePage = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-12 text-primary">
                La Naissance du Roman
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/50">
                <CardContent className="p-8">
                  <div className="text-2xl font-bold text-secondary mb-2">842 après J.-C.</div>
                  <div className="text-xl text-text">Les Serments de Strasbourg — Premier texte « français » enregistré</div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Narrative Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn duration={1} delay={0.2}>
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-1/2">
                  <p className="text-xl text-text mb-6">
                    Au 9ème siècle, le latin parlé dans ce qui est maintenant la France avait tellement changé qu'il était à peine reconnaissable. Les voyelles avaient évolué, les terminaisons de mots avaient disparu, et des sons entièrement nouveaux avaient émergé.
                  </p>
                  
                  <p className="text-xl text-text">
                    Quand deux des petits-fils de Charlemagne-Charles le Chauve et Louis le Germanique-ont prêté leurs fameux serments à Strasbourg, ils n'ont pas utilisé le latin. Ils ont utilisé ce que les linguistes appellent l'<strong className="text-primary">ancien français</strong>-une langue que le peuple commun pouvait réellement comprendre.
                  </p>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src="/images/Serments_de_Strasbourg.jpg"
                    alt="Illustration d'un manuscrit médiéval des Serments de Strasbourg"
                    className="w-full rounded-lg h-auto"
                    width={400}
                    height={300}
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Oath Display Section */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SlideUp duration={1} delay={0.2}>
              <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">
                Voici à quoi cela ressemblait :
              </h2>
              
              <div className="relative p-8 bg-surface/50 rounded-lg border border-surface/50 mb-6">
                <div className="absolute top-4 left-4 text-sm font-mono text-muted">Manuscrit de 842</div>
                <blockquote className="text-2xl font-serif italic text-center text-secondary my-8">
                  « Pro Deo amur et pro christian poblo et nostro commun salvament... »
                </blockquote>
              </div>
              
              <div className="p-6 bg-surface/60 rounded-lg border border-surface/50">
                <div className="flex items-start">
                  <span className="font-semibold text-accent mr-3">Traduction :</span>
                  <p className="text-lg text-text">« Pour l'amour de Dieu et pour le peuple chrétien et notre salut commun... »</p>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>
      
      {/* Insight Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn duration={1} delay={0.2}>
              <InsightCard>
                <p className="text-xl text-center">
                  Ce n'est pas tout à fait du latin. Ce n'est pas tout à fait du français moderne. C'est quelque chose entre les deux — un adolescent linguistique qui trouve sa voix.
                </p>
              </InsightCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Linguistic Analysis Section */}
      <section className="py-20 bg-surface/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-lg text-text mb-6 leading-relaxed">
                Les Serments de Strasbourg (842) marquent la transition du latin vers l'ancien français à travers des changements phonétiques et grammaticaux majeurs. Le signe le plus flagrant de cette évolution est l'amuissement des mots : les syllabes finales disparaissent, comme on le voit dans amúr et salvamént, tandis que des mots tels que nóstro et póblo conservent une voyelle de soutien uniquement pour permettre la prononciation de groupes de consonnes complexes. Sur le plan structurel, le texte s'éloigne de la complexité latine pour adopter un système bicasuel simplifié, utilisant un cas oblique unique pour marquer la possession ou accompagner les prépositions. Bien que l'orthographe rappelle encore le latin, ces mutations profondes prouvent que la langue était déjà devenue une véritable langue vernaculaire.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Additional Context */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mt-12 text-center">
              <StatBoxCard>
                <p className="text-2xl">
                  Les Serments de Strasbourg marquent le moment où le latin parlé est devenu une langue distincte — le français.
                </p>
              </StatBoxCard>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display mb-6 text-text">
                L'Ancien Français
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez la grammaire complexe que vous ne reconnaîtriez pas du français moderne.
              </p>
              
              <Link 
                href="/old-french-grammar" 
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

export default BirthOfRomancePage;