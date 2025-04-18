import { useState } from 'react'
import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'

const TechniquesShowcase = () => {
  const [activeTab, setActiveTab] = useState('motion')
  
  const techniques = [
    {
      id: 'motion',
      title: 'Motion Capture',
      description: 'We utilize innovative motion capture techniques, including optical systems, to capture natural movement and translate it into fluid animations.',
      image: '/Hero/a.jpg',
      features: [
        'Advanced 3D tracking systems',
        'Realistic character movement',
        'Facial expression capture',
        'Efficient workflow integration'
      ]
    },
    {
      id: 'lighting',
      title: 'Dynamic Lighting',
      description: 'Our team specializes in creating dynamic lighting environments that add depth, mood, and visual interest to every animation project.',
      image: '/Hero/b.jpg',
      features: [
        'Volumetric lighting effects',
        'Real-time light simulation',
        'Atmospheric mood creation',
        'Color grading expertise'
      ]
    },
    {
      id: 'procedural',
      title: 'Procedural Animation',
      description: 'We implement cutting-edge procedural animation techniques that allow for adaptive, physics-based movement and effects.',
      image: '/Hero/c.jpg',
      features: [
        'Physics-based simulations',
        'Adaptive character movement',
        'Scalable animation systems',
        'Complex particle effects'
      ]
    }
  ]
  
  const currentTechnique = techniques.find(tech => tech.id === activeTab)
  
  return (
    <section className="section bg-dark-light">
      <div className="container mx-auto">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-center mb-4">
            <span className="gradient-text">Innovative Techniques,</span> Stunning Visuals
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            We combine artistic vision with technical expertise to create animations that captivate and inspire.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
          <AnimatedSection animation="fadeRight" delay={0.2} className="order-2 lg:order-1">
            <div className="bg-dark p-6 rounded-lg h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">{currentTechnique.title}</h3>
              <p className="text-gray-300 mb-6">{currentTechnique.description}</p>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3 text-primary-light">Key Features:</h4>
                <ul className="space-y-2">
                  {currentTechnique.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-light mr-2">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <Button to="/services" variant="outline">Learn More</Button>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeLeft" delay={0.3} className="order-1 lg:order-2">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/50 to-secondary/50 mix-blend-overlay"></div>
              <img 
                src={currentTechnique.image || '/api/placeholder/800/600'} 
                alt={currentTechnique.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex space-x-2 mt-4">
              {techniques.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTab(tech.id)}
                  className={`flex-1 py-3 px-4 text-sm font-medium rounded transition-colors ${
                    activeTab === tech.id 
                      ? 'bg-primary text-white' 
                      : 'bg-dark hover:bg-dark-light text-gray-300'
                  }`}
                >
                  {tech.title}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default TechniquesShowcase