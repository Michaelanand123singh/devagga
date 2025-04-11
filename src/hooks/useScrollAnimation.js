import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for scroll-triggered animations
 * 
 * @param {Object} options - Animation options
 * @param {string} options.animation - Animation type ('fadeIn', 'slideUp', 'scale', etc.)
 * @param {Object} options.animationParams - GSAP animation parameters
 * @param {Object} options.triggerParams - ScrollTrigger parameters
 * @param {Array} dependencies - Dependency array for useEffect
 * @returns {Object} - Ref to attach to the element
 */
const useScrollAnimation = (options = {}, dependencies = []) => {
  const {
    animation = 'fadeIn',
    animationParams = {},
    triggerParams = {}
  } = options;
  
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    let tl;
    let scrollTrigger;
    
    // Default animation parameters
    const defaultAnimParams = {
      duration: 0.8,
      ease: 'power3.out'
    };
    
    // Default trigger parameters
    const defaultTriggerParams = {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none'
    };
    
    // Combined parameters
    const finalAnimParams = { ...defaultAnimParams, ...animationParams };
    const finalTriggerParams = { ...defaultTriggerParams, ...triggerParams };
    
    // Create timeline
    tl = gsap.timeline({
      scrollTrigger: finalTriggerParams
    });
    
    // Apply animation based on type
    switch (animation) {
      case 'fadeIn':
        tl.from(element, {
          opacity: 0,
          y: 30,
          ...finalAnimParams
        });
        break;
        
      case 'slideUp':
        tl.from(element, {
          opacity: 0,
          y: 60,
          ...finalAnimParams
        });
        break;
        
      case 'slideLeft':
        tl.from(element, {
          opacity: 0,
          x: 60,
          ...finalAnimParams
        });
        break;
        
      case 'slideRight':
        tl.from(element, {
          opacity: 0,
          x: -60,
          ...finalAnimParams
        });
        break;
        
      case 'scale':
        tl.from(element, {
          opacity: 0,
          scale: 0.8,
          ...finalAnimParams
        });
        break;
        
      case 'stagger':
        // For staggered children animations
        const children = element.children;
        tl.from(children, {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          ...finalAnimParams
        });
        break;
        
      default:
        tl.from(element, {
          opacity: 0,
          y: 30,
          ...finalAnimParams
        });
    }
    
    // Cleanup function
    return () => {
      if (tl) tl.kill();
      if (scrollTrigger) scrollTrigger.kill();
    };
  }, [animation, ...dependencies]);
  
  return elementRef;
};

export default useScrollAnimation;