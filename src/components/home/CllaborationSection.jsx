import { useState, useEffect, useRef } from 'react'
import AnimatedSection from '../common/AnimatedSection'

// CountUp component for animating statistics
const CountUp = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const startTime = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    // Reset when end value changes
    setCount(0)
    startTime.current = null
    
    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp
      const progress = timestamp - startTime.current
      
      if (progress < duration) {
        // Easing function for smoother animation
        const easeOutQuad = (t) => t * (2 - t)
        const easedProgress = easeOutQuad(progress / duration)
        setCount(Math.floor(easedProgress * end))
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    
    frameRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, duration])
  
  return (
    <span className="text-4xl font-bold text-primary-light mr-2">
      {prefix}{count}{suffix}
    </span>
  )
}

const CollaborationSection = () => {
  // IntersectionObserver to start animations when visible
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    if (statsRef.current) {
      observer.observe(statsRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  // Force visibility in development for testing
  useEffect(() => {
    // You can comment this out in production
    // This ensures animations work during development
    setIsVisible(true)
  }, [])

  const collaborationItems = [
    {
      title: 'Collaboration',
      description: 'We build open communication and creative partnerships, working closely with you to realize your vision.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: 'Communication',
      description: 'Clear and regular communication throughout the project, enabling a smooth collaboration and iterative process.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      title: 'Execution',
      description: 'We utilize project management methodologies and efficient workflows to ensure timely delivery of your animation project.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      )
    }
  ]
  
  const stats = [
    { value: 87, label: 'Client Retention Rate', suffix: '%' },
    { value: 95, label: 'On-Time Delivery', suffix: '%' },
    { value: 500, label: 'Projects Completed', prefix: '', suffix: '+' }
  ]
  
  return (
    <section className="section bg-dark py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-center mb-4 text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Collaborative Partnerships,</span> Seamless Execution
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
            We believe in creating lasting relationships based on trust, clear communication, and exceptional results.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {collaborationItems.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="fadeUp"
              delay={index * 0.2}
              className="bg-dark-light p-8 rounded-lg border border-gray-700 hover:border-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-primary-light mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-light transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="mt-16" ref={statsRef}>
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Our Collaborative Approach</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10">
              Our process is built on transparency, accountability, and excellence. Here's why clients continue to choose us:
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  {index > 0 && <div className="hidden md:block w-px h-16 bg-gray-700 mx-6"></div>}
                  <div className="flex items-center mb-2">
                    {isVisible ? (
                      <CountUp 
                        end={stat.value} 
                        prefix={stat.prefix || ''} 
                        suffix={stat.suffix || ''} 
                      />
                    ) : (
                      <span className="text-4xl font-bold text-primary-light mr-2">
                        {stat.prefix || ''}0{stat.suffix || ''}
                      </span>
                    )}
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <button className="bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollaborationSection