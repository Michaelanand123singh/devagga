import { useState, useEffect } from 'react';

/**
 * Custom hook to track window size
 * @returns {Object} width and height of window
 */
const useWindowSize = () => {
  // Initialize with undefined to trigger a first render
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

/**
 * Custom hook to detect if the screen is a specific breakpoint
 * @returns {Object} Breakpoint detection for responsive design
 */
export const useBreakpoint = () => {
  const { width } = useWindowSize();
  
  return {
    isMobile: width ? width < 768 : false,
    isTablet: width ? width >= 768 && width < 1024 : false,
    isDesktop: width ? width >= 1024 : false,
    isLargeDesktop: width ? width >= 1440 : false,
  };
};

/**
 * Custom hook to detect scroll position
 * @returns {number} Current scroll position
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Call handler right away to update scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return scrollPosition;
};

/**
 * Custom hook to detect if an element is in viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} [ref, isIntersecting] - Ref to attach to element and boolean if visible
 */
export const useInView = (options = {}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useState(null)[0];
  
  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);
    
    observer.observe(ref);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);
  
  return [ref, isIntersecting];
};

export default useWindowSize;