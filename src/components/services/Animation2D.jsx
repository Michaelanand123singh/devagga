import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'

const Animation2D = () => {
  const features = [
    {
      title: "Traditional Hand-Drawn",
      description: "Classic frame-by-frame animation that brings a timeless, authentic feel to your content.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      title: "Vector Animation",
      description: "Smooth, scalable animations that look crisp at any resolution, perfect for modern applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Character Animation",
      description: "Bringing personalities to life through expressive movement and emotion.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Motion Graphics",
      description: "Dynamic visual elements and text animations that enhance your message.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
    }
  ]

  return (
    <div className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Image section - Now on top */}
          <AnimatedSection animation="fadeDown" className="w-full max-w-4xl mb-12">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/20 blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-secondary/20 blur-xl" />
              <img 
                src="/2D.jpg" 
                alt="2D Animation"
                className="rounded-lg relative z-10 w-full h-auto object-cover shadow-lg"
              />
            </div>
          </AnimatedSection>
          
          {/* Content section - Now below the image */}
          <AnimatedSection animation="fadeUp" className="w-full max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">2D Animation Excellence</h2>
            <p className="text-gray-300 mb-8">
              We specialize in creating captivating 2D animations that tell your story with clarity and style. 
              Our team combines artistic talent with technical expertise to produce animations that engage, 
              educate, and entertain your audience.
            </p>
            
            {/* Features section - Now in a 2x2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="text-primary-light mb-3">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button to="/contact" size="lg" className="mx-auto">Discuss Your 2D Project</Button>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

export default Animation2D