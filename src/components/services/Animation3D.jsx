import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'

const Animation3D = () => {
  const capabilities = [
    "Character Modeling & Animation",
    "Environment & Set Design",
    "Product Visualization",
    "Architectural Visualization",
    "VFX & Simulations",
    "Lighting & Rendering"
  ]

  return (
    <div className="py-16 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeRight" className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">3D Animation Mastery</h2>
            <p className="text-gray-300 mb-6">
              Our 3D animation team creates immersive, photorealistic experiences that push the boundaries of 
              imagination. Using cutting-edge technology and artistic vision, we bring your concepts into the 
              three-dimensional realm with precision and creativity.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Our 3D Capabilities:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-light mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Our Process:</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary-light text-sm mr-3 mt-0.5">1</span>
                  <div>
                    <h4 className="font-medium">Concept Development</h4>
                    <p className="text-sm text-gray-400">Transforming your ideas into viable 3D concepts and storyboards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary-light text-sm mr-3 mt-0.5">2</span>
                  <div>
                    <h4 className="font-medium">Modeling & Rigging</h4>
                    <p className="text-sm text-gray-400">Creating detailed 3D models and rigging them for animation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary-light text-sm mr-3 mt-0.5">3</span>
                  <div>
                    <h4 className="font-medium">Animation & Dynamics</h4>
                    <p className="text-sm text-gray-400">Bringing characters and objects to life with realistic movement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary-light text-sm mr-3 mt-0.5">4</span>
                  <div>
                    <h4 className="font-medium">Texturing & Lighting</h4>
                    <p className="text-sm text-gray-400">Adding materials, textures, and strategic lighting for realism</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary-light text-sm mr-3 mt-0.5">5</span>
                  <div>
                    <h4 className="font-medium">Rendering & Compositing</h4>
                    <p className="text-sm text-gray-400">Final rendering and post-production for a polished result</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <Button to="/contact" size="lg">Start Your 3D Project</Button>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeLeft" className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/20 blur-xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-secondary/20 blur-xl" />
              <img 
                src="/assets/images/3d-animation-example.jpg" 
                alt="3D Animation"
                className="rounded-lg relative z-10 w-full h-auto object-cover shadow-lg"
              />
              
              {/* Technical elements overlay - adds to the 3D tech feel */}
              <div className="absolute bottom-4 left-4 right-4 bg-dark/80 backdrop-blur-sm p-3 rounded-md z-20 border border-primary/30">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-light" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Render Time</div>
                    <div className="text-sm font-medium">12.4 hrs / 4K Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

export default Animation3D