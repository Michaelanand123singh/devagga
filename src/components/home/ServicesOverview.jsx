import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'

const servicesData = [
  {
    id: 1,
    title: "Custom Character Animation",
    description: "Bring your characters to life with fluid, expressive animation tailored to your brand's personality and story needs.",
    icon: "🎭",
    src: "/Character2.png" // Fixed space in filename
  },
  {
    id: 2,
    title: "Motion Graphics & VFX",
    description: "Enhance your visual storytelling with dynamic motion graphics and stunning visual effects that capture attention.",
    icon: "✨",
    src: "/Character.png"
  },
  {
    id: 3,
    title: "Explainer & Educational Videos",
    description: "Communicate complex ideas with clarity through engaging animated explainers that educate and inspire your audience.",
    icon: "🎓",
    src: "/assets/images/services/explainer-video.jpg"
  },
  {
    id: 4,
    title: "Commercial & Marketing Animation",
    description: "Elevate your marketing campaigns with eye-catching animations that showcase your products and services.",
    icon: "📈",
    src: "/assets/images/services/commercial-animation.jpg"
  }
]

const ServicesOverview = () => {
  const [activeService, setActiveService] = useState(servicesData[0])
  
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Animation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of animation services to bring your creative visions to life
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="bg-dark-light rounded-xl p-6 h-full">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Services</h3>
                <ul className="space-y-4">
                  {servicesData.map(service => (
                    <li key={service.id}>
                      <button
                        onClick={() => setActiveService(service)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${
                          activeService.id === service.id 
                            ? 'bg-primary/20 text-white' 
                            : 'hover:bg-dark-light/80 text-gray-300'
                        }`}
                      >
                        <span className="text-2xl mr-3">{service.icon}</span>
                        <span className="font-medium">{service.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button to="/services">View All Services</Button>
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
                  className="bg-dark-light rounded-xl overflow-hidden h-full"
                >
                  <div className="h-64 relative">
                    <img 
                      src={activeService.src} // Changed from activeService.image to activeService.src
                      alt={activeService.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{activeService.title}</h3>
                    <p className="text-gray-300 mb-6">{activeService.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      <li className="flex items-center text-gray-300">
                        <span className="w-5 h-5 mr-2 text-primary-light">✓</span>
                        Custom approach for your brand
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-5 h-5 mr-2 text-primary-light">✓</span>
                        High-quality production
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-5 h-5 mr-2 text-primary-light">✓</span>
                        Fast turnaround times
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-5 h-5 mr-2 text-primary-light">✓</span>
                        Unlimited revisions
                      </li>
                    </ul>
                    <Button to={`/services#${activeService.title.toLowerCase().replace(/\s+/g, '-')}`} variant="outline">
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