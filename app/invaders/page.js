'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideUp, ParallaxBackground } from '@/components/EnhancedScrollytelling';
import { Card, CardContent } from '@/components/ui/card';
import { DidYouKnowCard, StatBoxCard } from '@/components/ui/special-cards';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Navigation from '@/components/Navigation';

const InvadersPage = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-primary">
                Les Envahisseurs qui ont Façonné une Langue
              </h1>
            </FadeIn>
            
            <FadeIn duration={1} delay={0.4}>
              <p className="text-xl md:text-2xl mb-8 text-text">
                Le français ne s'est pas développé dans l'isolement. Vague après vague, les envahisseurs ont laissé leurs empreintes linguistiques.
              </p>
            </FadeIn>
            
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SlideUp duration={1} delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-center mb-12 text-text">
              Ligne de Temps Interactive
            </h2>
          </SlideUp>
          
          <div className="space-y-16">
            {/* Franks Event */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <FadeIn duration={1} delay={0.3}>
                <img
                  src="/images/tours.png"
                  alt="Tribus germaniques entrant en Gaule"
                  className="w-full rounded-lg"
                  width={600}
                  height={400}
                />
              </FadeIn>
              
              <div>
                <SlideUp duration={1} delay={0.4}>
                  <div className="text-2xl font-bold font-display text-secondary mb-3">5ème siècle</div>
                  <h3 className="text-3xl font-bold font-display mb-4 text-primary">Les Francs</h3>
                  
                  <p className="text-lg mb-4 text-text">
                    Les tribus germaniques ont déferlé du nord, et quand la poussière s'est calmée, elles avaient donné à la France son nom. Mais leur contribution allait bien plus loin que ça.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-accent mb-3">Des centaines de mots allemands infiltrés :</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['guerre', 'blanc', 'jardin', 'gagner', 'bleu'].map((word, index) => (
                      <span key={index} className="px-3 py-2 bg-surface/50 rounded-full border border-surface/50 text-primary">
                        {word}
                      </span>
                    ))}
                  </div>
                  
                  <DidYouKnowCard>
                    <p>
                      Chaque fois qu'un Français dit « j'ai gagné » ou s'occupe de son jardin, il parle un peu de germanique.
                    </p>
                  </DidYouKnowCard>
                </SlideUp>
              </div>
            </div>
            
            {/* Vikings Event */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:order-2">
                <SlideUp duration={1} delay={0.4}>
                  <div className="text-2xl font-bold font-display text-secondary mb-3">9ème siècle</div>
                  <h3 className="text-3xl font-bold font-display mb-4 text-accent">Les Vikings</h3>
                  
                  <p className="text-lg mb-4 text-text">
                    Quand les raiders nordiques ont terrorisé les côtes, ils ont finalement fait quelque chose d'inattendu : ils se sont installés. Le roi de France leur a donné la Normandie, et ils ont donné au français leur vocabulaire maritime.
                  </p>
                  
                  <p className="text-lg mb-2 text-text">
                    Des mots comme <strong className="text-primary">flotte</strong> et <strong className="text-primary">hune</strong> viennent du vieux norrois.
                  </p>
                  
                  <p className="text-lg text-text">
                    Même certains noms de lieux — comme Harfleur et Honfleur — font écho à leurs origines scandinaves.
                  </p>
                </SlideUp>
              </div>
              
              <div className="lg:order-1">
                <FadeIn duration={1} delay={0.3}>
                  <img
                    src="/images/vikings.jpg"
                    alt="Drakkars vikings sur la côte française"
                    className="w-full rounded-lg"
                    width={600}
                    height={400}
                  />
                </FadeIn>
              </div>
            </div>
            
            {/* Norman Conquest Event */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <FadeIn duration={1} delay={0.3}>
                <img
                  src="/images/Norman.webp"
                  alt="Illustration à la manière de la Tapisserie de Bayeux de la conquête normande"
                  className="w-full rounded-lg"
                  width={600}
                  height={400}
                />
              </FadeIn>
              
              <div>
                <SlideUp duration={1} delay={0.4}>
                  <div className="text-2xl font-bold font-display text-secondary mb-3">1066</div>
                  <h3 className="text-3xl font-bold font-display mb-4 text-secondary">La Conquête Normande</h3>
                  
                  <p className="text-lg mb-4 text-text">
                    C'est là que les choses deviennent vraiment intéressantes. Quand Guillaume le Conquérant a envahi l'Angleterre, le français est devenu la langue du pouvoir de l'autre côté de la Manche pendant les 300 années suivantes.
                  </p>
                  
                  <StatBoxCard>
                    <div className="text-4xl font-bold text-center mb-2">300 ans</div>
                    <p className="text-center text-lg">
                      de domination linguistique française en Angleterre
                    </p>
                  </StatBoxCard>
                  
                  <p className="text-lg mt-4 text-text">
                    L'anglais a absorbé des milliers de mots français pendant cette période — c'est pourquoi les anglophones peuvent généralement reconnaître le vocabulaire français. Mais l'influence allait dans les deux sens. Le français normand a développé son propre caractère, distinct du français parlé à Paris.
                  </p>
                </SlideUp>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Context */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn duration={1} delay={0.2}>
              <h2 className="text-3xl font-bold font-display mb-8 text-text">L'héritage des envahisseurs</h2>
              <p className="text-xl text-text mb-8">
                Chaque vague d'invasion a laissé sa marque sur la langue française, enrichissant son vocabulaire et influençant sa structure.
              </p>

              <div className="mt-8 bg-surface/50 rounded-lg p-6 border border-surface/50 text-left">
                <h3 className="text-2xl font-bold font-display mb-4 text-primary text-center">Comment l'accent germanique a transformé le latin en français</h3>

                <p className="mb-4 text-text">
                  L'accent expiratoire intense des Francs a agi comme une presse hydraulique sur le latin parlé en Gaule du Nord, écrasant les syllabes environnantes tout en étirant les voyelles accentuées jusqu'à ce qu'elles se "brisent" en diphtongues complexes.
                </p>

                <h4 className="text-xl font-semibold mb-3 text-secondary text-center">Le mécanisme de l'accent germanique</h4>

                <p className="mb-4 text-text">
                  Quand les Francs ont adopté le latin, ils ont apporté leurs habitudes de prononciation, appliquant un accent puissant sur certaines syllabes. Les conséquences furent drastiques :
                </p>

                <div className="mb-4 ml-6 space-y-2">
                  <p className="text-text"><strong className="text-primary">• Effondrement des syllabes faibles</strong><br />
                  Les syllabes avant et après l'accent disparaissaient ou se réduisaient drastiquement. Dans le nord de la France, toutes les syllabes finales non accentuées ont disparu (sauf le [ə] neutre et quelques voyelles nécessaires pour supporter des groupes de consonnes).</p>

                  <p className="text-text"><strong className="text-primary">• Étirement des voyelles accentuées</strong><br />
                  Les voyelles accentuées en position « libre » (en fin de syllabe) s'allongeaient considérablement, se transformant en diphtongues — une caractéristique définitoire de l'ancien français.</p>
                </div>

                <h4 className="text-xl font-semibold mb-3 text-secondary text-center">L'impact géographique</h4>

                <p className="mb-4 text-text">
                  Cette transformation n'était pas uniforme :
                </p>

                <div className="mb-4 ml-6 space-y-2">
                  <p className="text-text"><strong className="text-secondary">Nord vs Sud :</strong> Là où les Germains étaient nombreux, le changement fut radical, créant la langue d'oïl. Au sud, avec moins d'influence germanique, l'occitan conserva les voyelles latines presque intactes.</p>

                  <p className="text-text"><strong className="text-secondary">Un nouveau vernaculaire :</strong> Vers 813, ces changements avaient tellement altéré la langue qu'elle ne pouvait plus s'appeler latin. L'Église la reconnut officiellement comme rustica romana lingua — la première reconnaissance du français comme langue distincte.</p>

                  <p className="text-text"><strong className="text-secondary">Vocabulaire germanique :</strong> Parallèlement aux changements phonétiques, des centaines de mots germaniques entrèrent dans la langue (guerre, hache, jardin), l'éloignant encore plus de ses cousines méditerranéennes.</p>
                </div>

                <p className="text-text font-medium">
                  <strong className="text-primary">Résultat :</strong> L'accent germanique n'a pas simplement modifié le latin — il l'a refondu en une langue nouvelle, avec une structure rythmique et grammaticale entièrement différente.
                </p>
              </div>
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
                La Grande Transformation
              </h2>
              <p className="text-xl text-muted mb-8">
                Découvrez comment le français a subi un relooking radical entre le 11ème et le 14ème siècle.
              </p>
              
              <Link 
                href="/great-transformation" 
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

export default InvadersPage;