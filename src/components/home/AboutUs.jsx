import AnimatedSection from '../common/AnimatedSection'

const AboutUs = () => {
  return (
    <section className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Who We Are: A Passion for Storytelling and Cutting-Edge Tech
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeRight" delay={0.2}>
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                We're a creative company fueled by a passion for storytelling that goes beyond the ordinary. Our expert team 
                consists of talented artists, innovative storytellers, skilled animators, and technical experts who
                merge the latest technology to deliver unique creative experiences.
              </p>
              <p>
                Our diverse portfolio showcases a wide range of styles, from playful and whimsical to sleek and sophisticated.
                We believe in the power of animation to captivate, educate, and inspire audiences across various platforms and industries.
              </p>
              <p>
                What sets us apart is our commitment to understanding your vision, goals, and audience. We don't just create animations; 
                we craft stories that connect, engage, and leave lasting impressions.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeLeft" delay={0.4}>
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <img 
                src="/assets/images/team/team-collaboration.jpg" 
                alt="Our team collaborating" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Our Creative Team</h3>
                <p className="text-gray-300">Passionate storytellers and technical wizards</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default AboutUs