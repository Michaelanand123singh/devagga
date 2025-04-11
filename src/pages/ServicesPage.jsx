import AnimatedSection from '../components/common/AnimatedSection'
import Button from '../components/common/Button'
import Animation2D from '../components/services/Animation2D'
import Animation3D from '../components/services/Animation3D'
import IndustryCard from '../components/services/IndustryCard'
import { servicesData } from '../data/servicesData'

const ServicesPage = () => {
  const industries = [
    {
      id: 'entertainment',
      title: 'Entertainment',
      icon: '🎬',
      description: 'We create compelling animation content for films, TV shows, and digital media platforms.',
    },
    {
      id: 'education',
      title: 'Education',
      icon: '🎓',
      description: 'We develop educational animations that make complex concepts accessible and engaging.',
    },
    {
      id: 'gaming',
      title: 'Gaming',
      icon: '🎮',
      description: 'We create character animations, cutscenes, and visual effects for games across platforms.',
    },
    {
      id: 'marketing',
      title: 'Marketing',
      icon: '📢',
      description: 'We produce animated content that helps brands tell their story and engage their audience.',
    }
  ]
  
  return (
    <div className="pt-20 pb-24">
      {/* Hero Section */}
      <section className="bg-dark-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-center mb-6">Our Animation Services</h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              From concept to execution, we offer comprehensive animation services tailored to your unique vision.
              Our expertise spans multiple styles, techniques, and industries.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-center mb-12">Animation Expertise</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <Animation2D />
            </AnimatedSection>
            
            <AnimatedSection animation="fadeLeft" delay={0.4}>
              <Animation3D />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-dark-light">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-center mb-6">Specialized Animation Services</h2>
            <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
              Beyond our core 2D and 3D animation capabilities, we offer a range of specialized services
              to meet your specific creative needs.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.specializedServices.map((service, index) => (
              <AnimatedSection key={service.id} animation="fadeUp" delay={0.1 * index}>
                <div className="bg-dark p-6 rounded-lg h-full">
                  <div className="text-primary-light text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-center mb-6">Specialized Services Across Industries</h2>
            <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
              We tailor our animation expertise to meet the unique requirements of various industries.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.id} animation="fadeUp" delay={0.1 * index}>
                <IndustryCard industry={industry} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-dark to-secondary-dark">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="mb-6">Ready to Bring Your Vision to Life?</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Contact us today to discuss your project and discover how our animation services can help you achieve your creative goals.
            </p>
            <Button to="/contact" size="lg">Get in Touch</Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage