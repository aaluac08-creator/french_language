'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { StatBox, Note } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const ColonialExpansionPage = () => {
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
                L'Expansion Coloniale
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary">19ème-20ème siècles</h2>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                Alors que la France construisait son empire à travers l'Afrique, l'Asie et les Amériques, le français est devenu une langue mondiale — mais avec une tournure.
              </p>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.6}>
              <img
                src="/images/EmpireFrench.png"
                alt="Carte montrant l'empire colonial français à son apogée"
                className="w-full max-w-full md:max-w-[70%] mx-auto rounded-lg"
                width={560}
                height={420}
              />
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SlideUp duration={1} delay={0.2}>
              <p className="text-xl mb-8 text-text">
                Dans chaque colonie, le français a absorbé des mots locaux et s'est adapté aux contextes locaux. Le français parlé à Dakar n'était pas le même que le français parlé à Montréal, qui différait du français parlé à Paris.
              </p>
            </SlideUp>
          </div>
        </div>
      </section>
      
      {/* Regional Varieties */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Les Variétés Régionales</h2>
          </SlideUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Quebec French */}
            <FadeIn duration={1} delay={0.3}>
              <Card className="p-6 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 border border-blue-500/50">
                <h3 className="text-2xl font-bold font-display mb-4 text-blue-400">Le Français québécois</h3>
                
                <img
                  src="/images/quebec.jpg"
                  alt="Paysage/drapeau du Québec"
                  className="w-full rounded-lg mb-4"
                  width={600}
                  height={400}
                />
                
                <p className="mb-4 text-text">
                  Isolé de la France après 1763, le français québécois a préservé des formes plus anciennes de prononciation et de vocabulaire tout en empruntant aussi à l'anglais :
                </p>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong className="text-primary">fin de semaine</strong> (weekend)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span><strong className="text-accent">magasiner</strong> (faire du shopping, de l'anglais "magazine/store")</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Prononciation plus ancienne préservée qui a disparu en France</span>
                  </li>
                </ul>
              </Card>
            </FadeIn>
            
            {/* African French */}
            <FadeIn duration={1} delay={0.4}>
              <Card className="p-6 bg-gradient-to-br from-green-500/15 to-emerald-500/15 border border-green-500/50">
                <h3 className="text-2xl font-bold font-display mb-4 text-green-400">Le Français africain</h3>
                
                <img
                  src="/images/africa.jpg"
                  alt="Continent africain avec les régions francophones mises en évidence"
                  className="w-full rounded-lg mb-4"
                  width={600}
                  height={400}
                />
                
                <p className="mb-4 text-text">
                  Le français s'est mélangé avec les langues indigènes à travers le continent, créant des variétés uniques :
                </p>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Emprunts aux langues locales pour la nourriture, la culture, les pratiques sociales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Rythmes et modèles d'intonation différents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Nouvelles expressions et idiomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>Devenu une langue neutre permettant à différents groupes ethniques de communiquer</span>
                  </li>
                </ul>
              </Card>
            </FadeIn>
            
            {/* Caribbean French */}
            <FadeIn duration={1} delay={0.5}>
              <Card className="p-6 bg-gradient-to-br from-purple-500/15 to-pink-500/15 border border-purple-500/50">
                <h3 className="text-2xl font-bold font-display mb-4 text-purple-400">Le Français caribéen</h3>
                
                <img
                  src="/images/caribean.jpg"
                  alt="Îles des Caraïbes"
                  className="w-full rounded-lg mb-4"
                  width={600}
                  height={400}
                />
                
                <p className="mb-4 text-text">
                  Le français s'est mélangé avec les langues africaines apportées par les personnes asservies, créant des créoles basés sur le français :
                </p>
                
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Créole haïtien</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Créole martiniquais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Créole guadeloupéen</span>
                  </li>
                </ul>
                
                <Note>
                  <p className="text-text">
                    Ce sont des langues distinctes avec du vocabulaire français mais une grammaire influencée par l'africain
                  </p>
                </Note>
              </Card>
            </FadeIn>
            
            {/* Indochinese French */}
            <FadeIn duration={1} delay={0.6}>
              <Card className="p-6 bg-gradient-to-br from-amber-500/15 to-orange-500/15 border border-amber-500/50">
                <h3 className="text-2xl font-bold font-display mb-4 text-amber-400">Le Français indochinois</h3>
                
                <img
                  src="/images/indochina.jpg"
                  alt="Carte du Vietnam/Laos/Cambodge"
                  className="w-full rounded-lg mb-4"
                  width={600}
                  height={400}
                />
                
                <p className="text-text">
                  Au Vietnam, au Laos et au Cambodge, le français est devenu la langue de l'administration et de l'éducation, laissant des influences durables même après l'indépendance.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Global Reach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SlideUp duration={1} delay={0.2}>
              <StatBox>
                <div className="text-4xl font-bold text-purple-400 mb-2">1945</div>
                <div className="text-xl text-text mb-4">Le français était parlé sur cinq continents</div>
              </StatBox>
              
              <div className="mt-8">
                <ul className="space-y-3">
                  <li className="text-lg text-text">C'était la deuxième langue de la diplomatie internationale après l'anglais</li>
                  <li className="text-lg text-text">Il était enseigné dans les écoles du monde entier</li>
                </ul>
              </div>
              
              <Card className="p-6 mt-8 bg-gradient-to-br from-red-500/15 to-orange-500/15 border-red-500/50">
                <p className="text-lg text-center">
                  Mais la décolonisation a tout changé.
                </p>
              </Card>
            </SlideUp>
          </div>
        </div>
      </section>
      
      {/* Additional Context */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <p className="text-lg text-text mb-6">
                L'expansion coloniale a profondément transformé la langue française, créant des variétés régionales uniques qui continuent d'évoluer aujourd'hui.
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
                Le Défi Moderne
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment le français fait face à l'anglais dans le monde moderne.
              </p>
              
              <Link 
                href="/modern-challenge" 
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

export default ColonialExpansionPage;