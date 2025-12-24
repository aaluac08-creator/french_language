'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { LessonCardFeatured, SurvivalCard, FutureCard, CelebrationCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const LegacyPage = () => {
  const forceCardStyles = [
    'bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-amber-400/60 text-amber-100',
    'bg-gradient-to-br from-emerald-500/20 to-lime-500/10 border-emerald-400/60 text-emerald-100',
    'bg-gradient-to-br from-sky-500/20 to-cyan-500/10 border-sky-400/60 text-sky-100',
    'bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 border-violet-400/60 text-violet-100',
    'bg-gradient-to-br from-rose-500/20 to-red-500/10 border-rose-400/60 text-rose-100',
    'bg-gradient-to-br from-teal-500/20 to-emerald-500/10 border-teal-400/60 text-teal-100',
    'bg-gradient-to-br from-indigo-500/20 to-blue-500/10 border-indigo-400/60 text-indigo-100',
    'bg-gradient-to-br from-orange-500/20 to-amber-500/10 border-orange-400/60 text-orange-100'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Featured Quote */}
      <section className="min-h-screen flex items-center justify-center relative">
        <ParallaxBackground speed={-0.2}>
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-accent/10"></div>
        </ParallaxBackground>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-accent">
                L'Héritage : Une Rivière Sans Fin
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <Card className="p-8 bg-gradient-to-br from-purple-500/15 to-pink-500/15 border-2 border-purple-500/50">
                <CardContent className="p-0">
                  <blockquote className="text-xl italic text-text">
                    « L'histoire de la langue française est comme une rivière taillée dans la roche latine, initialement chaotique et façonnée par des glaciers germaniques (les changements phonologiques). Plus tard, des ingénieurs (les grammairiens) ont construit des canaux étroits et des écluses (codification et règles de grammaire) pour contrôler son débit et maintenir une profondeur et une vitesse standard, pourtant la rivière continue de ramasser de nouveaux sédiments (mots d'emprunt et expressions familières) du paysage environnant, créant parfois des écarts entre les cartes officielles (langue écrite) et son cours réel, quotidien (langue parlée). »
                  </blockquote>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* The Full Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Le Voyage Complet</h2>
          </SlideUp>
          
          <div className="max-w-5xl mx-auto">
            <FadeIn duration={2} delay={0.3}>
              
              <div className="space-y-6">
                {[
                  { date: "52 avant J.-C.", event: "Les soldats romains apportent le latin vulgaire en Gaule" },
                  { date: "5ème siècle", event: "Les Francs germaniques ajoutent leur couche linguistique ; le [u] devient [y] ; les consonnes intervocaliques disparaissent" },
                  { date: "842 après J.-C.", event: "Les Serments de Strasbourg — premier texte reconnaissable en « français »" },
                  { date: "11ème-13ème siècles", event: "L'ancien français développe un système à deux cas et des alternances vocaliques complexes" },
                  { date: "13ème siècle", event: "Les affriquées [dz], [dʒ], [ts], [tʃ] commencent à se simplifier" },
                  { date: "14ème siècle", event: "Le système des cas s'effondre ; le [r] final des infinitifs disparaît" },
                  { date: "14ème-16ème siècles", event: "Les orthographes étymologisantes créent le gouffre entre l'écrit et le parlé" },
                  { date: "16ème siècle", event: "Explosion du vocabulaire de la Renaissance" },
                  { date: "17ème siècle", event: "Standardisation et l'Académie française ; le [R] uvulaire émerge ; [oi] devient [wa]" },
                  { date: "1740", event: "L'Académie supprime le <em>s</em> préconsonantique, simplifiant l'orthographe" },
                  { date: "18ème siècle", event: "La langue des Lumières, parlée par les élites européennes" },
                  { date: "1789", event: "Démocratisation révolutionnaire" },
                  { date: "1835", event: "L'Académie change <em>-ois</em> en <em>-ais</em> où prononcé [e]" },
                  { date: "19ème siècle", event: "Expansion coloniale, diffusion mondiale ; influx massif d'anglicismes ; l'imparfait narratif" },
                  { date: "Fin 19ème siècle", event: "La longueur des voyelles disparaît ; [l] mouillé devient [j]" },
                  { date: "20ème siècle", event: "Décolonisation, compétition avec l'anglais ; les nasales fusionnent" },
                  { date: "21ème siècle", event: "Renaissance africaine, transformation numérique", highlight: true }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border ${
                      item.highlight 
                        ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/70' 
                        : 'bg-surface/50 border-surface/50'
                    }`}
                  >
                    <span className="font-bold text-primary mr-3">{item.date}</span>
                    <span className="text-text">{item.event}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Forces That Shaped French */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">Les Forces du Changement</h2>
          </SlideUp>
          
          <div className="max-w-6xl mx-auto">
            <FadeIn duration={1.5} delay={0.3}>
              <p className="text-xl text-center mb-12 text-text">
                Du latin à l'ancien français, des Lumières à TikTok, le français s'est montré remarquablement résilient. Il a été façonné par :
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                {[
                  "Les mots gaulois pour le sol et les animaux",
                  "Les changements phonétiques du latin vulgaire",
                  "L'accent tonique germanique qui a dévoré les syllabes",
                  "Les tribus germaniques",
                  "Les raiders nordiques",
                  "Les conquérants normands",
                  "Les artistes italiens",
                  "Les grammairiens qui ont figé la langue dans l'ambre",
                  "Les philosophes des Lumières",
                  "Les idéalistes révolutionnaires",
                  "Les administrateurs coloniaux",
                  "Les innovateurs africains"
                ].map((force, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border text-center text-sm ${forceCardStyles[index % forceCardStyles.length]}`}
                    >
                      {force}
                    </div>
                  ))}
              </div>
              
              <p className="text-xl text-center text-text mb-8">
                La prononciation a changé. La grammaire s'est simplifiée. Le vocabulaire a explosé. Mais le français perdure, s'adapte et évolue.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Key Lesson */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SlideUp duration={1} delay={0.2}>
              <LessonCardFeatured>
                <blockquote className="text-xl italic text-center">
                  « Une langue n'est pas seulement des mots et de la grammaire. C'est de l'histoire, de la culture et de l'identité — en constante évolution, toujours changeante, jamais terminée. »
                </blockquote>
              </LessonCardFeatured>
            </SlideUp>
            
            <div className="mt-8 text-center">
              <p className="text-xl text-text">
                C'est la vraie leçon du français. Les langues ne sont pas des pièces de musée à préserver inchangées. Ce sont des systèmes vivants et respirants qui reflètent les gens qui les parlent.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final Message */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SlideUp duration={1} delay={0.2}>
              <p className="text-xl text-center mb-8 text-text">
                Alors la prochaine fois que vous entendrez quelqu'un s'inquiéter des mots anglais « corrompant » le français, ou l'Académie française émettant des avertissements sévères sur la pureté linguistique, rappelez-vous :
              </p>
              
              <SurvivalCard>
                <ul className="space-y-3 text-center">
                  <li className="text-lg">Le français a survécu à la perte du système des cas latin</li>
                  <li className="text-lg">Il a survécu à la disparition des consonnes intervocaliques</li>
                  <li className="text-lg">Il a survécu aux orthographes étymologisantes folles</li>
                  <li className="text-lg">Il a survécu aux Romains, aux Francs, aux Vikings, aux Normands, aux révolutionnaires et aux colonisateurs</li>
                </ul>
                <p className="text-2xl font-bold text-center mt-4 text-primary">
                  <strong>Il survivra à l'anglais aussi.</strong>
                </p>
              </SurvivalCard>
              
              <div className="mt-8">
                <FutureCard>
                  <p className="text-lg text-center">
                    La langue qui émerge pourrait ne pas être le français de Molière ou de Victor Hugo. Mais ce sera du français néanmoins — façonné par ses locuteurs, adapté à leurs besoins, vivant avec leurs voix.
                  </p>
                </FutureCard>
              </div>
              
              <div className="mt-8">
                <CelebrationCard>
                  <p className="text-xl text-center">
                    Et c'est quelque chose qui mérite d'être célébré.
                  </p>
                </CelebrationCard>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>
      
      {/* Outro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.3}>
              <p className="text-2xl font-bold text-primary mb-4">Le voyage continue...</p>
              <p className="text-xl text-secondary mb-4">300 millions de locuteurs et ça compte</p>
              <p className="text-lg text-accent">La rivière coule toujours</p>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Credits */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SlideUp duration={1} delay={0.2}>
              <h2 className="text-2xl font-bold font-display mb-4 text-text">Crédits & Sources</h2>
              <p className="text-lg text-text">
                Basé sur « Histoire de la langue française » de Peter Rickard et le voyage linguistique du latin vulgaire à la francophonie mondiale.
              </p>
            </SlideUp>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SlideUp duration={1} delay={0.2}>
              <Link 
                href="/" 
                className="inline-block bg-gradient-to-r from-accent to-primary text-white font-semibold py-4 px-10 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Retour au Début →
              </Link>
            </SlideUp>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegacyPage;
