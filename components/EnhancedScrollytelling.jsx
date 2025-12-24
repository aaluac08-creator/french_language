'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Enhanced FadeIn component with stagger effect
const FadeIn = ({ children, className = '', duration = 1, delay = 0, stagger = false, ...props }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const element = elementRef.current;
    if (!element) return;

    let tween;

    if (stagger) {
      // For staggered animations, target children
      const children = element.children;
      tween = gsap.fromTo(
        children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          stagger: 0.2,
          delay: delay,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            // Add accessibility improvements
            onRefresh: (self) => {
              if (self && self.animation) {
                if (self.isActive || self.progress > 0) {
                  self.animation.progress(1);
                } else {
                  self.animation.progress(0).pause();
                }
              }
            }
          }
        }
      );
    } else {
      tween = gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            // Add accessibility improvements
            onRefresh: (self) => {
              if (self && self.animation) {
                if (self.isActive || self.progress > 0) {
                  self.animation.progress(1);
                } else {
                  self.animation.progress(0).pause();
                }
              }
            }
          }
        }
      );
    }

    return () => {
      if (tween && tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      if (tween) {
        tween.kill();
      }
    };
  }, [duration, delay, stagger]);

  return (
    <div
      ref={elementRef}
      className={className}
      {...props}
      // Add accessibility attributes
      aria-label={props['aria-label'] || 'Animated content'}
      role="region"
    >
      {children}
    </div>
  );
};

// Enhanced SlideUp component
const SlideUp = ({ children, className = '', duration = 1, delay = 0, ...props }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const element = elementRef.current;
    if (!element) return;

    const tween = gsap.fromTo(
      element,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          // Add accessibility improvements
          onRefresh: (self) => {
            if (self && self.animation) {
              if (self.isActive || self.progress > 0) {
                self.animation.progress(1);
              } else {
                self.animation.progress(0).pause();
              }
            }
          }
        }
      }
    );

    return () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    };
  }, [duration, delay]);

  return (
    <div
      ref={elementRef}
      className={className}
      {...props}
      // Add accessibility attributes
      aria-label={props['aria-label'] || 'Animated content'}
      role="region"
    >
      {children}
    </div>
  );
};

// ParallaxBackground component
const ParallaxBackground = ({ children, speed = -0.5, className = '', ...props }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const element = elementRef.current;
    if (!element) return;

    let rafId = null;
    let latestY = window.scrollY;

    const update = () => {
      rafId = null;
      element.style.transform = `translateY(${latestY * speed}px)`;
    };

    const handleScroll = () => {
      latestY = window.scrollY;
      if (rafId === null) {
        rafId = requestAnimationFrame(update);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={`absolute inset-0 ${className}`}
      style={{ zIndex: -1 }}
      {...props}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};

// StickySection component with enhanced functionality
const StickySection = ({ children, className = '', height = '100vh', ...props }) => {
  return (
    <div 
      className={`relative w-full ${className}`}
      style={{ 
        height: height,
        position: 'sticky',
        top: 0,
      }}
      {...props}
    >
      <div className="h-full w-full sticky top-0">
        {children}
      </div>
    </div>
  );
};

// TextReveal component for typewriter effect
const TextReveal = ({ text, duration = 2, delay = 0, ...props }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const element = elementRef.current;
    if (!element) return;

    const tween = gsap.to(element, {
      duration: duration,
      text: text,
      delay: delay,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    return () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    };
  }, [text, duration, delay]);

  return (
    <div
      ref={elementRef}
      className="overflow-hidden inline-block"
      {...props}
      aria-label={text}
      role="text"
    >
      &nbsp;
    </div>
  );
};

// WordTransform component for showing language evolution
const WordTransform = ({ from, to, duration = 3, delay = 0, ...props }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const element = elementRef.current;
    if (!element) return;

    const tl = gsap.timeline({
      delay: delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.to(element, {
      duration: duration / 3,
      text: from
    })
      .to(element, {
        duration: duration / 3,
        text: from + " →"
      })
      .to(element, {
        duration: duration / 3,
        text: to
      });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [from, to, duration, delay]);

  return (
    <span
      ref={elementRef}
      className="font-mono font-bold text-primary"
      {...props}
      aria-label={`Transformation from ${from} to ${to}`}
      role="text"
    >
      &nbsp;
    </span>
  );
};

// TimelineScrub component for interactive timeline
const TimelineScrub = ({ events, className = '', ...props }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    // Animate each event
    events.forEach((event, index) => {
      tl.to(
        `.event-${index}`,
        { 
          opacity: 1, 
          scale: 1.05,
          duration: 0.5,
          ease: 'power2.inOut'
        },
        index * 0.1
      );
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [events]);

  return (
    <div ref={containerRef} className={`relative ${className}`} {...props}>
      <div className="space-y-12">
        {events.map((event, index) => (
          <div 
            key={index}
            className={`event-${index} flex flex-col md:flex-row items-center gap-6 opacity-30 scale-95 transition-all duration-500`}
          >
            <div className="md:w-1/4">
              <div className="text-2xl font-bold font-display text-primary">{event.date}</div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold text-secondary">{event.title}</h3>
              <p className="text-muted">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// MorphingText component for language changes
const MorphingText = ({ texts, duration = 5, className = '', ...props }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If we have more than one text, cycle through them
    let intervalId;

    if (texts.length > 1) {
      let index = 0;
      const stepDuration = duration / texts.length / 2;
      const intervalMs = (duration * 1000) / texts.length;
      gsap.set(element, { text: texts[index] });

      intervalId = setInterval(() => {
        const nextIndex = (index + 1) % texts.length;
        gsap.to(element, {
          duration: stepDuration,
          text: texts[index],
          onComplete: () => {
            gsap.to(element, {
              duration: stepDuration,
              text: texts[nextIndex]
            });
          }
        });
        index = nextIndex;
      }, intervalMs);
    } else {
      // If only one text, animate it in
      const tween = gsap.to(element, {
        duration: duration,
        text: texts[0],
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      return () => {
        if (tween.scrollTrigger) {
          tween.scrollTrigger.kill();
        }
        tween.kill();
      };
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      gsap.killTweensOf(element);
    };
  }, [texts, duration]);

  return (
    <span 
      ref={elementRef} 
      className={`font-mono font-bold ${className}`}
      {...props}
    >
      &nbsp;
    </span>
  );
};

// FloatingWords component for word clouds
const FloatingWords = ({ words, className = '', ...props }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.floating-word');
    const tweens = [];

    words.forEach((word, index) => {
      // Random positions and animations
      const enterTween = gsap.fromTo(
        word,
        {
          x: gsap.utils.random(-100, 100),
          y: gsap.utils.random(-100, 100),
          opacity: 0,
          scale: 0.5
        },
        {
          x: gsap.utils.random(-50, 50),
          y: gsap.utils.random(-50, 50),
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: container,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
      tweens.push(enterTween);

      // Make them float gently
      const floatTween = gsap.to(word, {
        y: '-=10',
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
        }
      });
      tweens.push(floatTween);
    });

    return () => {
      tweens.forEach((tween) => {
        if (tween.scrollTrigger) {
          tween.scrollTrigger.kill();
        }
        tween.kill();
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative flex flex-wrap justify-center items-center gap-4 ${className}`}
      style={{ minHeight: '300px' }}
      {...props}
    >
      {words.map((word, index) => (
        <span 
          key={index} 
          className="floating-word text-lg md:text-xl font-medium px-3 py-2 rounded-full bg-surface/60 border border-surface/50"
        >
          {word}
        </span>
      ))}
    </div>
  );
};

// PronunciationDisplay for showing pronunciations
const PronunciationDisplay = ({ word, pronunciation, className = '', ...props }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const element = elementRef.current;
    if (!element) return;

    const tween = gsap.fromTo(
      element,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
      tween.kill();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`inline-flex flex-col items-center ${className}`}
      {...props}
      aria-label={`Pronunciation of ${word} is ${pronunciation}`}
      role="region"
    >
      <span className="text-xl font-bold">{word}</span>
      <span className="text-sm text-muted font-mono" aria-hidden="true">[{pronunciation}]</span>
    </div>
  );
};

export { 
  FadeIn, 
  SlideUp, 
  ParallaxBackground, 
  StickySection, 
  TextReveal, 
  WordTransform, 
  TimelineScrub,
  MorphingText,
  FloatingWords,
  PronunciationDisplay
};
