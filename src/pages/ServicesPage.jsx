import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import AnimatedSection from '../components/common/AnimatedSection'
import Button from '../components/common/Button'
import Animation2D from '../components/services/Animation2D'
import Animation3D from '../components/services/Animation3D'
import IndustryCard from '../components/services/IndustryCard'
import { servicesData } from '../data/servicesData'

// Custom scroll-triggered animation component
const ScrollReveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.7, 
            ease: [0.25, 0.1, 0.25, 1],
            delay 
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const ServicesPage = () => {
  // Using state to manage the specialized services
  const [specializedServices, setSpecializedServices] = useState([])
  
  // Using state to manage the industries data
  const [industries, setIndustries] = useState([
    {
      id: 'entertainment',
      title: 'Entertainment',
      icon: '🎬',
      description: 'We create compelling animation content for films, TV shows, and digital media platforms.',
      features: ['Character Animation', 'Scene Design', 'Storytelling', 'Visual Effects']
    },
    {
      id: 'education',
      title: 'Education',
      icon: '🎓',
      description: 'We develop educational animations that make complex concepts accessible and engaging.',
      features: ['Explainer Videos', 'Interactive Elements', 'Course Visualizations', 'Concept Illustrations']
    },
    {
      id: 'gaming',
      title: 'Gaming',
      icon: '🎮',
      description: 'We create character animations, cutscenes, and visual effects for games across platforms.',
      features: ['Character Animation', 'Environment Design', 'Cutscene Development', 'UI Animation']
    },
    {
      id: 'marketing',
      title: 'Marketing',
      icon: '📢',
      description: 'We produce animated content that helps brands tell their story and engage their audience.',
      features: ['Promotional Videos', 'Logo Animation', 'Social Media Content', 'Product Demonstrations']
    }
  ])

  // Effect to initialize specialized services data
  useEffect(() => {
    // Check if servicesData exists and has specializedServices
    if (servicesData && servicesData.specializedServices) {
      setSpecializedServices(servicesData.specializedServices)
    } else {
      // Fallback data in case the import doesn't work as expected
      setSpecializedServices([
        {
          id: 'char-design',
          title: 'Character Design',
          icon: '👤',
          description: 'Custom character design that brings personality and life to your animated projects.'
        },
        {
          id: 'motion-graphics',
          title: 'Motion Graphics',
          icon: '✨',
          description: 'Eye-catching motion graphics for presentations, advertisements, and digital content.'
        },
        {
          id: 'vfx',
          title: 'Visual Effects',
          icon: '💥',
          description: 'Stunning visual effects that enhance storytelling and create immersive experiences.'
        },
        {
          id: 'storyboarding',
          title: 'Storyboarding',
          icon: '📋',
          description: 'Detailed storyboarding services to visualize your narrative before production.'
        },
        {
          id: 'compositing',
          title: 'Compositing',
          icon: '🔀',
          description: 'Seamless integration of different visual elements to create cohesive final outputs.'
        },
        {
          id: 'rigging',
          title: 'Character Rigging',
          icon: '🤖',
          description: 'Professional rigging to prepare characters for smooth and realistic animation.'
        }
      ])
    }
  }, []) // Empty dependency array means this runs once on component mount
  
  return (
    <div className="pt-20 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-dark-light py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/10 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h1 className="text-center mb-8 text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-secondary-light">
              Our Animation Services
            </h1>
            <p className="text-xl md:text-2xl text-center text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From concept to execution, we offer comprehensive animation services tailored to your unique vision.
              Our expertise spans multiple styles, techniques, and industries.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center mb-16 text-3xl md:text-4xl font-bold">Animation Expertise</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-16">
            <ScrollReveal delay={0.2}>
              <div className="bg-dark-light rounded-2xl p-6 md:p-8 h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-dark/20">
                <Animation2D />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="bg-dark-light rounded-2xl p-6 md:p-8 h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-secondary-dark/20">
                <Animation3D />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 md:py-32 bg-dark-light relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-dark to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-center mb-6 text-3xl md:text-4xl font-bold">Specialized Animation Services</h2>
            <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg md:text-xl">
              Beyond our core 2D and 3D animation capabilities, we offer a range of specialized services
              to meet your specific creative needs.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {specializedServices.map((service, index) => (
              <ScrollReveal key={service.id} delay={0.1 * index}>
                <div className="bg-dark p-6 md:p-8 rounded-xl h-full border border-gray-800 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.03] hover:border-primary-light/30 hover:shadow-lg hover:shadow-primary-dark/10">
                  <div className="text-4xl mb-4 bg-dark-light inline-block p-3 rounded-lg text-primary-light">{service.icon}</div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center mb-6 text-3xl md:text-4xl font-bold">Specialized Services Across Industries</h2>
            <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg md:text-xl">
              We tailor our animation expertise to meet the unique requirements of various industries.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.id} delay={0.1 * index}>
                <div className="group">
                  <IndustryCard 
                    industry={industry.title} 
                    description={industry.description} 
                    icon={industry.icon}
                    features={industry.features || []}
                    className="h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-primary-dark/20"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-secondary-dark opacity-80"></div>
        <div className="absolute inset-0 bg-[url('/images/texture.png')] mix-blend-overlay opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Bring Your Vision to Life?</h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
              Contact us today to discuss your project and discover how our animation services can help you achieve your creative goals.
            </p>
            <Button 
              to="/contact" 
              size="lg"
              className="px-10 py-5 text-lg backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage