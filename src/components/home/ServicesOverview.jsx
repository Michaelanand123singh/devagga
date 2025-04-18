import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'

const servicesData = [
  {
    id: 1,
    title: "Custom Character Animation",
    description: "Bring your characters to life with fluid, expressive animation tailored to your brand.",
    icon: "🎭",
    src: "/Character2.png"
  },
  {
    id: 2,
    title: "CMS",
    description: "Enhance storytelling with dynamic motion graphics and visual effects that capture attention.",
    icon: "✨",
    src: "/Character.png"
  },
  {
    id: 3,
    title: "Content Production",
    description: "Communicate complex ideas through engaging animated explainers that educate and inspire.",
    icon: "🎓",
    src: "/assets/images/services/explainer-video.jpg"
  },
  {
    id: 4,
    title: "Commercial Animation",
    description: "Elevate marketing campaigns with eye-catching animations that showcase your products.",
    icon: "📈",
    src: "/assets/images/services/commercial-animation.jpg"
  }
]

const ServicesOverview = () => {
  const [activeService, setActiveService] = useState(servicesData[0])
  
  return (
    <section className="py-12 bg-dark">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Core Services</h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Comprehensive animation services to bring your creative visions to life
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="bg-dark-light rounded-lg p-4 h-full">
                <h3 className="text-xl font-bold mb-4 gradient-text">Services</h3>
                <ul className="space-y-2">
                  {servicesData.map(service => (
                    <li key={service.id}>
                      <button
                        onClick={() => setActiveService(service)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${
                          activeService.id === service.id 
                            ? 'bg-primary/20 text-white' 
                            : 'hover:bg-dark-light/80 text-gray-300'
                        }`}
                      >
                        <span className="text-lg mr-2">{service.icon}</span>
                        <span className="font-medium text-sm">{service.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Button to="/services" size="sm">View All</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-2">
            <AnimatedSection animation="fadeLeft" delay={0.4}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-dark-light rounded-lg overflow-hidden h-full flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5 h-48 md:h-auto relative">
                    <img 
                      src={activeService.src}
                      alt={activeService.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-l from-transparent to-dark-light/50"></div>
                  </div>
                  <div className="p-4 md:w-3/5">
                    <h3 className="text-xl font-bold mb-2">{activeService.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{activeService.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center text-xs text-gray-300">
                        <span className="text-xs mr-1 text-primary-light">✓</span>
                        Custom approach
                      </div>
                      <div className="flex items-center text-xs text-gray-300">
                        <span className="text-xs mr-1 text-primary-light">✓</span>
                        High-quality
                      </div>
                      <div className="flex items-center text-xs text-gray-300">
                        <span className="text-xs mr-1 text-primary-light">✓</span>
                        Fast turnaround
                      </div>
                      <div className="flex items-center text-xs text-gray-300">
                        <span className="text-xs mr-1 text-primary-light">✓</span>
                        Unlimited revisions
                      </div>
                    </div>
                    <Button 
                      to={`/services#${activeService.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      variant="outline"
                      size="sm"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview