import { useEffect, useRef, useState } from 'react'
import AnimatedSection from '../common/AnimatedSection'

const AboutUs = () => {
  const sectionRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Sample images array - replace with your actual image paths
  const images = [
    '/Hero/a.jpg',
    '/Hero/b.jpg',
    '/Hero/c.jpg',
    '/1.jpg',
    '/2D.jpg',
    '/3D.jpg',
    '/about.jpg',
    '/Character.png',
    '/sky.png',
  ]

  // Calculate total number of slides
  const totalSlides = Math.max(0, Math.ceil(images.length / 3))

  // Function to navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  // Function to navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkMobile()
    
    // Add resize listener to adjust for orientation changes
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Desktop mouse move effect
    const handleMouseMove = (e) => {
      if (isMobile) return // Skip effect on mobile

      const { left, top, width, height } = section.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height
      
      section.style.backgroundImage = `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          rgb(106, 73, 176) 0%,
          rgb(24, 17, 43) 50%,
          #0f172a 100%
        )
      `
    }

    // Mobile touch effect
    const handleTouch = (e) => {
      if (!isMobile) return
      
      const touch = e.touches[0]
      const { left, top, width, height } = section.getBoundingClientRect()
      const x = (touch.clientX - left) / width
      const y = (touch.clientY - top) / height
      
      section.style.backgroundImage = `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          rgb(106, 73, 176) 0%,
          rgb(24, 17, 43) 50%,
          #0f172a 100%
        )
      `
    }

    // Subtle animation for mobile when not touching
    const setupMobileAnimation = () => {
      if (!isMobile) return
      
      // Create a gentle pulsing gradient effect for mobile
      let step = 0
      const animateGradient = () => {
        if (!isMobile || !section) return
        
        step += 0.005
        const x = 0.5 + Math.sin(step) * 0.2
        const y = 0.5 + Math.cos(step) * 0.2
        
        section.style.backgroundImage = `
          radial-gradient(
            circle at ${x * 100}% ${y * 100}%,
            rgb(106, 73, 176) 0%,
            rgb(24, 17, 43) 50%,
            #0f172a 100%
          )
        `
        
        mobileAnimationFrame = requestAnimationFrame(animateGradient)
      }
      
      let mobileAnimationFrame = requestAnimationFrame(animateGradient)
      
      return () => {
        cancelAnimationFrame(mobileAnimationFrame)
      }
    }
    
    let cleanupMobileAnimation
    
    if (isMobile) {
      cleanupMobileAnimation = setupMobileAnimation()
      section.addEventListener('touchmove', handleTouch)
    } else {
      window.addEventListener('mousemove', handleMouseMove)
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      section.removeEventListener('touchmove', handleTouch)
      if (cleanupMobileAnimation) cleanupMobileAnimation()
    }
  }, [isMobile])

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-dark-light relative overflow-hidden transition-all duration-500 ease-out"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 1) 50%, rgba(15, 23, 42, 0.95) 100%)',
        backgroundSize: '100% 100%',
      }}
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-primary-dark blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary blur-3xl animate-pulse" 
             style={{animationDuration: '8s', animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
      
        
        {/* Image Slider */}
        <div className="relative">
          {/* Main Slider */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Render slides in groups of 3 */}
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 flex gap-4">
                    {images.slice(slideIndex * 3, slideIndex * 3 + 3).map((image, imgIndex) => (
                      <div key={imgIndex} className="w-1/3 px-2">
                        <div className="relative rounded-lg overflow-hidden shadow-xl h-64 md:h-96 group">
                          <img 
                            src={image} 
                            alt={`Team member ${slideIndex * 3 + imgIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default AboutUs