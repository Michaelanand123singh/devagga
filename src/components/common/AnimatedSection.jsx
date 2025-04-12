import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeIn', 
  delay = 0,
  duration = 0.5,
  once = true
}) => {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)
  
  // Animation variants
  const animationVariants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration } }
    },
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration } }
    },
    fadeDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0, transition: { duration } }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0, transition: { duration } }
    },
    fadeRight: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0, transition: { duration } }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration } }
    }
  }
  
  // Choose the animation or default to fadeIn
  const selectedAnimation = animationVariants[animation] || animationVariants.fadeIn
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        threshold: 0.1
      }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once])
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection