import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'

const AnimationExpertise = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-dark to-dark-light">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Our Expertise
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 2D Animation */}
          <AnimatedSection animation="fadeRight" delay={0.2}>
            <div className="bg-dark-light rounded-lg overflow-hidden shadow-md">
              <div className="relative h-40">
                <img 
                  src="/2D.jpg" 
                  alt="2D Animation Example" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent"></div>
                <div className="absolute top-3 left-3 bg-primary/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                  2D Animation
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold mb-2">2D Animation</h3>
                <p className="text-gray-300 text-xs mb-2">
                  We specialize in creating captivating 2D animations that combine artistic vision with technical precision, focusing on engaging content that resonates with your audience.
                </p>
                <ul className="space-y-1 mb-3 text-xs">
                  <li className="flex items-start">
                    <span className="text-primary-light mr-1">•</span>
                    <span>Character animation and storytelling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-1">•</span>
                    <span>Motion graphics and kinetic typography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-light mr-1">•</span>
                    <span>Explainer videos and infographics</span>
                  </li>
                </ul>
                <Button to="/services#2d-animation" variant="outline" size="xs">Learn More</Button>
              </div>
            </div>
          </AnimatedSection>
          
          {/* 3D Animation */}
          <AnimatedSection animation="fadeLeft" delay={0.4}>
            <div className="bg-dark-light rounded-lg overflow-hidden shadow-md">
              <div className="relative h-40">
                <img 
                  src="/3D.jpg" 
                  alt="3D Animation Example" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent"></div>
                <div className="absolute top-3 left-3 bg-secondary/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                  3D Animation
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold mb-2">3D Animation</h3>
                <p className="text-gray-300 text-xs mb-2">
                  Our team excels at creating immersive 3D animations that add depth and realism to your projects with stunning detail, lighting, and movement.
                </p>
                <ul className="space-y-1 mb-3 text-xs">
                  <li className="flex items-start">
                    <span className="text-secondary mr-1">•</span>
                    <span>Character modeling and animation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-1">•</span>
                    <span>Product visualization and demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-1">•</span>
                    <span>Visual effects and simulations</span>
                  </li>
                </ul>
                <Button to="/services#3d-animation" variant="outline" size="xs">Learn More</Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Movies */}
          <AnimatedSection animation="fadeLeft" delay={0.4}>
            <div className="bg-dark-light rounded-lg overflow-hidden shadow-md">
              <div className="relative h-40">
                <img 
                  src="/about.jpg" 
                  alt="Movies Example" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent"></div>
                <div className="absolute top-3 left-3 bg-secondary/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Movies
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold mb-2">Movies</h3>
                <p className="text-gray-300 text-xs mb-2">
                  Our team excels at creating immersive 3D animations that add depth and realism to your projects with stunning detail, lighting, and movement.
                </p>
                <ul className="space-y-1 mb-3 text-xs">
                  <li className="flex items-start">
                    <span className="text-secondary mr-1">•</span>
                    <span>Character modeling and animation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-1">•</span>
                    <span>Product visualization and demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-1">•</span>
                    <span>Visual effects and simulations</span>
                  </li>
                </ul>
                <Button to="/services#3d-animation" variant="outline" size="xs">Learn More</Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Web Series */}
          <AnimatedSection animation="fadeLeft" delay={0.4}>
            <div className="bg-dark-light rounded-lg overflow-hidden shadow-md">
              <div className="relative h-40">
                <img 
                  src="/Hero/a.jpg" 
                  alt="Web Series Example" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent"></div>
                <div className="absolute top-3 left-3 bg-secondary/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Web Series 
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold mb-2">Web Series</h3>
                <p className="text-gray-300 text-xs mb-2">
                  Our team excels at creating immersive 3D animations that add depth and realism to your projects with stunning detail, lighting, and movement.
                </p>
                <ul className="space-y-1 mb-3 text-xs">
                  <li className="flex items-start">
                    <span className="text-secondary mr-1">•</span>
                    <span>Character modeling and animation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-1">•</span>
                    <span>Product visualization and demonstrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-1">•</span>
                    <span>Visual effects and simulations</span>
                  </li>
                </ul>
                <Button to="/services#3d-animation" variant="outline" size="xs">Learn More</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default AnimationExpertise