'use client';



import React from 'react';

import Link from 'next/link';

import { FadeIn, SlideUp, ParallaxBackground, FloatingWords, MorphingText } from '@/components/EnhancedScrollytelling';

import { Card, CardContent } from '@/components/ui/card';

import { DidYouKnowCard } from '@/components/ui/special-cards';

import Image from 'next/image';
import Navigation from '@/components/Navigation';



const GallicGhostsPage = () => {

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

                Les FantÃ´mes du Gaulois

              </h1>

            </FadeIn>

            

            <FadeIn duration={1} delay={0.4}>

              <p className="text-xl md:text-2xl mb-8 text-text">

                Le gaulois a peut-Ãªtre disparu, mais il a laissé ses traces partout dans le français moderne.

              </p>

            </FadeIn>

            

            <FadeIn duration={1} delay={0.6}>
              <Image
                src="/images/gauls_society.jpg"
                alt="Illustration de paysans gaulois avec charrues et moutons"
                width={900}
                height={600}
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                priority
              />
            </FadeIn>
          </div>

        </div>

      </section>

      

      {/* Word Cloud Section */}

      <section className="py-20">

        <div className="container mx-auto px-4">

          <SlideUp duration={1} delay={0.2}>

            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">

              Visualisation : Mots gaulois qui flottent et se transforment

            </h2>

          </SlideUp>

          

          <FadeIn duration={1.5} delay={0.3}>

            <FloatingWords 

              words={[

                "raie", "charrue", "mouton", "ruche",

                "cheval", "char", "braies", "chemise",

                "blé", "orge", "chêne", "sapin",

                "montagne", "village", "bourg"

              ]}

              className="mb-16"

            />

          </FadeIn>

          

          <div className="max-w-4xl mx-auto">

            <SlideUp duration={1} delay={0.4}>

              <h3 className="text-2xl font-semibold text-primary mb-6">Du sol et de la ferme :</h3>

              <ul className="space-y-3 mb-8">

                <li className="flex items-start">

                  <span className="text-secondary mr-3">•</span>

                  <span className="text-lg"><strong className="text-primary">raie</strong> (sillon) - pour labourer les champs</span>

                </li>

                <li className="flex items-start">

                  <span className="text-secondary mr-3">•</span>

                  <span className="text-lg"><strong className="text-primary">charrue</strong> - l'outil qui creuse la terre</span>

                </li>

                <li className="flex items-start">

                  <span className="text-secondary mr-3">•</span>

                  <span className="text-lg"><strong className="text-primary">mouton</strong> - l'animal qui paissait sur les collines gauloises</span>

                </li>

                <li className="flex items-start">

                  <span className="text-secondary mr-3">•</span>

                  <span className="text-lg"><strong className="text-primary">ruche</strong> - oÃ¹ les abeilles gauloises faisaient leur miel</span>

                </li>

              </ul>

              

              <h3 className="text-2xl font-semibold text-accent mb-6">Des mots qui ont conquis l'Empire :</h3>

              <ul className="space-y-3">

                <li className="flex items-start">

                  <span className="text-accent mr-3">•</span>

                  <span className="text-lg"><strong className="text-primary">cheval</strong> - si utile que mÃªme les Romains l'ont adopté</span>

                </li>

                <li className="flex items-start">

                  <span className="text-accent mr-3">•</span>

                  <span className="text-lg"><strong className="text-primary">char</strong> - le wagon gaulois</span>

                </li>

                <li className="flex items-start">

                  <span className="text-accent mr-3">•</span>

                  <span className="text-lg"><strong className="text-primary">braies</strong> - les pantalons que les Gaulois portaient</span>

                </li>

                <li className="flex items-start">

                  <span className="text-accent mr-3">•</span>

                  <span className="text-lg"><strong className="text-primary">chemise</strong> - la tunique simple du peuple</span>

                </li>

              </ul>

            </SlideUp>

          </div>

        </div>

      </section>

      

      {/* Insight Card Section */}

      <section className="py-20 bg-surface/30">

        <div className="container mx-auto px-4">

          <div className="max-w-3xl mx-auto">

            <FadeIn duration={1} delay={0.2}>

              <Card className="p-8">

                <CardContent className="p-0">

                  <p className="text-xl text-text">

                    Chaque fois que vous parlez de votre <strong>cheval</strong> ou de votre <strong>charrue</strong>, vous parlez un peu de gaulois. Ces mots ont survécu parce qu'ils décrivaient des réalités que le latin des villes ne pouvait pas capturer — <strong className="text-primary">la vie rude et pratique de la campagne</strong>.

                  </p>

                </CardContent>

              </Card>

            </FadeIn>

          </div>

        </div>

      </section>

      

      {/* Additional Illustrations */}

      <section className="py-20">

        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <FadeIn duration={1} delay={0.2}>
              <Image
                src="/images/horse.jpg"
                alt="Guerrier gaulois à cheval"
                width={420}
                height={600}
                className="w-full h-auto max-w-[420px] mx-auto rounded-lg shadow-lg"
              />
              <p className="text-center mt-4 text-muted">Le cheval, mot d'origine gauloise</p>
            </FadeIn>
            

            <FadeIn duration={1} delay={0.3}>
              <Image
                src="/images/beehive.jpg"
                alt="Illustration de ruche"
                width={800}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-center mt-4 text-muted">La ruche, un autre mot gaulois</p>
            </FadeIn>
          </div>

        </div>

      </section>

      

      {/* Did You Know Section */}

      <section className="py-20 bg-surface/30">

        <div className="container mx-auto px-4">

          <div className="max-w-3xl mx-auto">

            <SlideUp duration={1} delay={0.2}>

              <DidYouKnowCard>

                <p>

                  Les linguistes appellent ces mots des "substrats" - des mots d'une langue ancienne qui survivent dans une langue plus récente. Le français en est plein, bien que la plupart des locuteurs ne le sachent pas.

                </p>

              </DidYouKnowCard>

            </SlideUp>

          </div>

        </div>

      </section>

      

      {/* Next Section */}

      <section className="py-20">

        <div className="container mx-auto px-4">

          <SlideUp duration={1} delay={0.2}>

            <div className="max-w-4xl mx-auto text-center">

              <h2 className="text-3xl font-bold font-display mb-6 text-text">

                La Grande Mutation Phonétique

              </h2>

              <p className="text-xl text-muted mb-8">

                Découvrez comment les sons eux-mêmes ont commencé à changer dans les bouches des Gaulois.

              </p>

              

              <Link 

                href="/great-shift" 

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



export default GallicGhostsPage;
