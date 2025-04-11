import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'

const AnimationExpertise = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark to-dark-light">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            2D and 3D Animation Expertise
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 2D Animation */}
          <AnimatedSection animation="fadeRight" delay={0.2}>
            <div className="bg-dark-light rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <img 
                  src="/assets/images/portfolio/2d-animation-sample.jpg" 
                  alt="2D Animation Example" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent"></div>
                <div className="absolute top-4 left-4 bg-primary/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  2D Animation
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">2D Animation</h3>
                <p className="text-gray-300 mb-6">
                  We specialize in creating captivating 2D animations that combine artistic vision with technical precision. Our 2D offerings range from traditional hand-drawn styles to modern digital techniques, all focused on creating engaging content that resonates with your audience.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-light mr-2">•</span>
                    <span>Character animation and storytelling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-2">•</span>
                    <span>Motion graphics and kinetic typography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-2">•</span>
                    <span>Explainer videos and infographics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-2">•</span>
                    <span>Whiteboard and sketch animations</span>
                  </li>
                </ul>
                <Button to="/services#2d-animation" variant="outline">Learn More About 2D</Button>
              </div>
            </div>
          </AnimatedSection>
          
          {/* 3D Animation */}
          <AnimatedSection animation="fadeLeft" delay={0.4}>
            <div className="bg-dark-light rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <img 
                  src="/assets/images/portfolio/3d-animation-sample.jpg" 
                  alt="3D Animation Example" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent"></div>
                <div className="absolute top-4 left-4 bg-secondary/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  3D Animation
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">3D Animation</h3>
                <p className="text-gray-300 mb-6">
                  Our team excels at creating immersive 3D animations that add depth and realism to your projects. Using cutting-edge software and techniques, we bring three-dimensional worlds to life with stunning detail, lighting, and movement.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Character modeling and animation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Product visualization and demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Architectural and environmental visualization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Visual effects and simulations</span>
                  </li>
                </ul>
                <Button to="/services#3d-animation" variant="outline">Learn More About 3D</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default AnimationExpertise