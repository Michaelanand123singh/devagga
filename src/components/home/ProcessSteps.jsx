import { useRef } from 'react'
import AnimatedSection from '../common/AnimatedSection'

const ProcessSteps = () => {
  const steps = [
    {
      number: '1',
      title: 'Discovery',
      description: 'We understand your goals, vision, and target audience before crafting a personalized animation strategy.',
      icon: 'info-circle'
    },
    {
      number: '2',
      title: 'Concept & Design',
      description: 'Our creative team develops storyboards, style frames, and character designs that align with your brand identity.',
      icon: 'star'
    },
    {
      number: '3',
      title: 'Production',
      description: 'Our specialists bring your vision to life using cutting-edge techniques, ensuring exceptional quality and detail.',
      icon: 'tool'
    }
  ]
  
  // SVG icons mapped by their identifiers
  const icons = {
    'info-circle': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    ),
    'star': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    'tool': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-b from-dark to-dark-light">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-center text-3xl font-bold mb-3">
            Bespoke Animation for <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Your Vision</span>
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 text-lg">
            Our structured approach ensures your animation project aligns perfectly with your creative goals.
          </p>
        </AnimatedSection>
        
        <div className="relative mt-12">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Process steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <AnimatedSection 
                key={step.number} 
                animation={index % 2 === 0 ? "fadeRight" : "fadeLeft"}
                delay={index * 0.15}
              >
                <div className={`flex flex-col md:flex-row items-center ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Step number bubble */}
                  <div className="relative z-10 md:flex md:items-center md:justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 bg-dark-light bg-opacity-50 p-5 rounded-lg shadow-lg mt-6 md:mt-0 backdrop-blur-sm border border-gray-800 ${
                    index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'
                  }`}>
                    <div className="flex items-center mb-3">
                      <div className="text-primary-light mr-3">
                        {icons[step.icon]}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps