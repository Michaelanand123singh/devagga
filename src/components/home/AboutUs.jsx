import AnimatedSection from '../common/AnimatedSection'
import { useEffect, useRef } from 'react'

const AboutUs = () => {
  const sectionRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

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
  }, [])

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
        <AnimatedSection animation="fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Who We Are: A Passion for Storytelling and Cutting-Edge Tech
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeRight" delay={0.2}>
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                We're a creative company fueled by a passion for storytelling that goes beyond the ordinary. Our expert team 
                consists of talented artists, innovative storytellers, skilled animators, and technical experts who
                merge the latest technology to deliver unique creative experiences.
              </p>
              <p>
                Our diverse portfolio showcases a wide range of styles, from playful and whimsical to sleek and sophisticated.
                We believe in the power of animation to captivate, educate, and inspire audiences across various platforms and industries.
              </p>
              <p>
                What sets us apart is our commitment to understanding your vision, goals, and audience. We don't just create animations; 
                we craft stories that connect, engage, and leave lasting impressions.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeLeft" delay={0.4}>
            <div className="relative rounded-lg overflow-hidden shadow-xl h-96">
              <img 
                src="/about.jpg" 
                alt="Our team collaborating" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Our Creative Team</h3>
                <p className="text-gray-300">Passionate storytellers and technical wizards</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default AboutUs