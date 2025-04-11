import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Fade in animation for elements
 * @param {HTMLElement} element - The element to animate
 * @param {Object} options - Animation options
 */
export const fadeInAnimation = (element, options = {}) => {
  const defaultOptions = {
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: "power3.out",
    delay: 0
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  gsap.from(element, mergedOptions);
};

/**
 * Staggered fade in animation for multiple elements
 * @param {HTMLElement[]} elements - The elements to animate
 * @param {Object} options - Animation options
 */
export const staggeredFadeIn = (elements, options = {}) => {
  const defaultOptions = {
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: "power3.out",
    stagger: 0.2,
    delay: 0
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  gsap.from(elements, mergedOptions);
};

/**
 * Initialize scroll trigger animations
 * @param {HTMLElement} element - Element to trigger animation
 * @param {Function} animation - Animation function to run
 * @param {Object} options - ScrollTrigger options
 */
export const initScrollTrigger = (element, animation, options = {}) => {
  const defaultOptions = {
    trigger: element,
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none"
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  ScrollTrigger.create({
    ...mergedOptions,
    onEnter: () => animation(element)
  });
};

/**
 * Parallax effect for background elements
 * @param {HTMLElement} element - Element to apply parallax effect to
 * @param {number} speed - Parallax speed (0-1)
 */
export const parallaxEffect = (element, speed = 0.5) => {
  gsap.to(element, {
    y: () => -window.scrollY * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
};

/**
 * Text reveal animation for headings
 * @param {HTMLElement} element - Text element to animate
 */
export const textRevealAnimation = (element) => {
  // Split text into spans if needed
  const text = element.textContent;
  element.innerHTML = '';
  
  const chars = text.split('');
  chars.forEach(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    element.appendChild(span);
  });
  
  gsap.from(element.children, {
    opacity: 0,
    y: 20,
    rotateX: -90,
    stagger: 0.03,
    duration: 0.8,
    ease: "back.out"
  });
};

/**
 * Loading animation with custom loader
 * @param {HTMLElement} container - Container element
 * @param {Function} onComplete - Callback when animation completes
 */
export const loadingAnimation = (container, onComplete) => {
  const tl = gsap.timeline({
    onComplete: () => {
      if (typeof onComplete === 'function') {
        onComplete();
      }
    }
  });
  
  tl.to(container, {
    duration: 0.5,
    opacity: 1
  }).to(container, {
    duration: 0.5,
    opacity: 0,
    delay: 0.8
  });
  
  return tl;
};

/**
 * Create a hover animation for interactive elements
 * @param {HTMLElement} element - Element to apply hover effect to
 */
export const createHoverAnimation = (element) => {
  const enterAnimation = () => {
    gsap.to(element, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  
  const leaveAnimation = () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  
  element.addEventListener('mouseenter', enterAnimation);
  element.addEventListener('mouseleave', leaveAnimation);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('mouseenter', enterAnimation);
    element.removeEventListener('mouseleave', leaveAnimation);
  };
};