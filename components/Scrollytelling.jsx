'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// FadeIn component for scroll-triggered animations
const FadeIn = ({ children, className = '', duration = 1, delay = 0, ...props }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const tween = gsap.fromTo(
      element,
      { 
        opacity: 0,
        y: 20 
      },
      { 
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
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
  }, [duration, delay]);

  return (
    <div ref={elementRef} className={className} {...props}>
      {children}
    </div>
  );
};

// SlideUp component for scroll-triggered animations
const SlideUp = ({ children, className = '', duration = 1, delay = 0, ...props }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const tween = gsap.fromTo(
      element,
      { 
        opacity: 0,
        y: 40 
      },
      { 
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
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
  }, [duration, delay]);

  return (
    <div ref={elementRef} className={className} {...props}>
      {children}
    </div>
  );
};

// ParallaxBackground component
const ParallaxBackground = ({ children, speed = -0.5, className = '', ...props }) => {
  const elementRef = useRef(null);

  useEffect(() => {
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
    >
      {children}
    </div>
  );
};

// StickySection component
const StickySection = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`relative w-full ${className}`}
      style={{ 
        height: '100vh',
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

export { FadeIn, SlideUp, ParallaxBackground, StickySection };
