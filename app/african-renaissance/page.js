'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { ConclusionCard, OwnershipCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const AfricanRenaissancePage = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-secondary">
                La Renaissance Africaine
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text italic">
                Voici la surprise : <strong className="text-primary">l'avenir du français pourrait se trouver en Afrique, pas en France</strong>.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Staggering Numbers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Les chiffres sont stupéfiants</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1.5} delay={0.3}>
              <img
                src="/images/2022.jpg"
                alt="Animation montrant des chiffres qui s'incrémentent rapidement"
                className="w-full max-w-3xl mx-auto rounded-lg mb-8"
                width={800}
                height={600}
              />
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-surface/50 rounded-lg">
                  <div className="text-center md:text-right">
                    <div className="text-2xl font-bold text-blue-400">1945</div>
                    <div className="text-muted">dernière guerre mondiale</div>
                  </div>
                  <div className="text-3xl font-bold text-primary">→</div>
                  <div className="text-center md:text-left">
                    <div className="text-3xl font-bold text-secondary">60 millions</div>
                    <div className="text-muted">de francophones (plupart en Europe)</div>
                  </div>
                </div>
                
                <div className="text-4xl font-bold text-primary">→</div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-gradient-to-br from-green-500/15 to-emerald-500/15 rounded-lg border border-green-500/50">
                  <div className="text-center md:text-right">
                    <div className="text-2xl font-bold text-blue-400">Aujourd'hui</div>
                    <div className="text-muted">données actuelles</div>
                  </div>
                  <div className="text-3xl font-bold text-primary">→</div>
                  <div className="text-center md:text-left">
                    <div className="text-4xl font-bold text-green-400">300+ millions</div>
                    <div className="text-muted">~60% vivent en Afrique</div>
                  </div>
                </div>
                
                <div className="text-4xl font-bold text-primary">→</div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-lg border border-purple-500/50">
                  <div className="text-center md:text-right">
                    <div className="text-2xl font-bold text-blue-400">2050</div>
                    <div className="text-muted">projection</div>
                  </div>
                  <div className="text-3xl font-bold text-primary">→</div>
                  <div className="text-center md:text-left">
                    <div className="text-4xl font-bold text-purple-400">700 millions</div>
                    <div className="text-muted">85% vivront en Afrique</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* African Context */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Le contexte africain</h2>
          </SlideUp>
          
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl mb-8 text-text">
                L'Afrique subsaharienne a la population la plus jeune et à la croissance la plus rapide de la planète. Dans des pays comme la République démocratique du Congo, le Sénégal, la Côte d'Ivoire et le Mali, le français ne survit pas seulement — il prospère.
              </p>
              
              <img
                src="/images/sign.jpg"
                alt="Carte montrant les pays africains francophones et la démographie jeune"
                className="w-full rounded-lg max-w-full md:max-w-[50%] h-auto mx-auto"
                width={400}
                height={300}
              />
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Not Your Grandmother's French */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Mais ce n'est pas le français de votre grand-mère</h2>
          </SlideUp>
          
          <div className="max-w-5xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-xl text-center mb-8 text-text">
                Les artistes, musiciens et écrivains africains transforment la langue :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-surface/50 rounded-lg text-center">
                  <img
                    src="/images/congolese.jpg"
                    alt="Musiciens de rumba congolaise"
                    className="w-full rounded-lg mb-4"
                    width={600}
                    height={400}
                  />
                  <p className="text-lg text-text">
                    Les chanteurs de rumba congolais mélangent le français avec le lingala
                  </p>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg text-center">
                  <img
                    src="/images/senegal.jpg"
                    alt="Rappeurs sénégalais"
                    className="w-full rounded-lg mb-4"
                    width={600}
                    height={400}
                  />
                  <p className="text-lg text-text">
                    Les rappeurs sénégalais alternent entre le français et le wolof
                  </p>
                </div>
                
                <div className="p-6 bg-surface/50 rounded-lg text-center">
                  <img
                    src="/images/aya.jpg"
                    alt="Romanciers ivoiriens"
                    className="w-full rounded-lg mb-4"
                    width={600}
                    height={400}
                  />
                  <p className="text-lg text-text">
                    Les romanciers ivoiriens créent de nouvelles expressions inconnues à Paris
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* African French Features */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Les caractéristiques du français africain</h2>
          </SlideUp>
          
          <div className="max-w-3xl mx-auto">
            <FadeIn duration={1} delay={0.3}>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-secondary mr-3">•</span>
                  <span>Vocabulaire et expressions locales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">•</span>
                  <span>Rythmes et modèles d'intonation différents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">•</span>
                  <span>L'alternance codique comme outil créatif</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3">•</span>
                  <span>Nouvelles structures grammaticales</span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Beyond Control */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SlideUp duration={1} delay={0.2}>
              <ConclusionCard>
                <p className="text-lg">
                  L'Académie française ne peut pas contrôler cette évolution. La France non plus. La langue qui a commencé comme du latin vulgaire parlé par des soldats romains en Gaule est transformée par la jeunesse, les artistes et les innovateurs africains.
                </p>
              </ConclusionCard>
            </SlideUp>
            
            <div className="mt-8 text-center">
              <OwnershipCard>
                <p className="text-xl">
                  Le français n'est plus seulement la langue de la France — <strong className="text-secondary">il appartient au monde</strong>.
                </p>
              </OwnershipCard>
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
                L'avenir du français est entre les mains des jeunes Africains qui transforment la langue à travers la musique, la littérature et les médias.
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
                L'Héritage
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez l'héritage de cette incroyable aventure linguistique.
              </p>
              
              <Link 
                href="/legacy" 
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

export default AfricanRenaissancePage;