import AnimatedSection from '../common/AnimatedSection'

const CollaborationSection = () => {
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
  
  return (
    <section className="section bg-dark">
      <div className="container mx-auto">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-center mb-4">
            <span className="gradient-text">Collaborative Partnerships,</span> Seamless Execution
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
            We believe in creating lasting relationships based on trust, clear communication, and exceptional results.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborationItems.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="fadeUp"
              delay={index * 0.2}
              className="bg-dark-light p-6 rounded-lg border border-gray-700 hover:border-primary-light transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-primary-light mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection animation="scale" delay={0.4} className="mt-16">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Collaborative Approach</h3>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center">
                <span className="text-4xl font-bold text-primary-light mr-2">87%</span>
                <span className="text-gray-300 text-sm">Client Retention Rate</span>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="flex items-center">
                <span className="text-4xl font-bold text-primary-light mr-2">95%</span>
                <span className="text-gray-300 text-sm">On-Time Delivery</span>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="flex items-center">
                <span className="text-4xl font-bold text-primary-light mr-2">500+</span>
                <span className="text-gray-300 text-sm">Projects Completed</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default CollaborationSection