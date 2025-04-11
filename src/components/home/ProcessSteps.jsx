import AnimatedSection from '../common/AnimatedSection'

const ProcessSteps = () => {
  const steps = [
    {
      number: '1',
      title: 'Discovery',
      description: 'We understand that every project is unique. Our team works with you to understand your goals, vision, and target audience before crafting a personalized animation strategy.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      )
    },
    {
      number: '2',
      title: 'Concept & Design',
      description: 'Our creative team develops storyboards, style frames, and character designs that align with your brand identity and project requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      number: '3',
      title: 'Production',
      description: 'Our animation specialists bring your vision to life using cutting-edge techniques and tools, ensuring exceptional quality and attention to detail.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      )
    }
  ]
  
  return (
    <section className="section bg-gradient-to-b from-dark to-dark-light">
      <div className="container mx-auto">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-center mb-4">
            Bespoke Animation for <span className="gradient-text">Your Vision</span>
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Our structured approach ensures your animation project aligns perfectly with your creative goals and business objectives.
          </p>
        </AnimatedSection>
        
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Process steps */}
          <div className="space-y-20 md:space-y-0">
            {steps.map((step, index) => (
              <AnimatedSection 
                key={step.number} 
                animation={index % 2 === 0 ? "fadeRight" : "fadeLeft"}
                delay={index * 0.2}
                className="relative"
              >
                <div className={`flex flex-col md:flex-row items-center md:items-start ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Step number bubble */}
                  <div className="absolute z-10 left-1/2 -translate-x-1/2 md:static md:transform-none">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-2xl font-bold mb-4 shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 bg-dark p-6 rounded-lg shadow-lg mt-8 md:mt-0 ${
                    index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className="text-primary-light mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
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