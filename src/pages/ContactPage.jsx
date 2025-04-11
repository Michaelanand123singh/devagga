import AnimatedSection from '../components/common/AnimatedSection'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import Map from '../components/contact/Map'

const ContactPage = () => {
  return (
    <div className="pt-20 pb-24">
      {/* Hero Section */}
      <section className="bg-dark-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-center mb-6">Get in Touch</h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to learn more about our services? We'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fadeRight">
              <h2 className="mb-8">Send Us a Message</h2>
              <ContactForm />
            </AnimatedSection>
            
            <AnimatedSection animation="fadeLeft" delay={0.2}>
              <h2 className="mb-8">Contact Information</h2>
              <ContactInfo />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-dark-light">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-center mb-12">Our Location</h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="h-96 rounded-lg overflow-hidden">
              <Map />
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <div className="bg-dark-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">What types of animation do you offer?</h3>
                <p className="text-gray-300">
                  We offer a wide range of animation services including 2D animation, 3D animation, motion graphics,
                  character animation, explainer videos, and more. Our team can work in various styles to match your vision.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="bg-dark-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">How much does an animation project cost?</h3>
                <p className="text-gray-300">
                  Each project is unique, and costs depend on factors like animation style, duration, complexity, and timeline.
                  Contact us with your project details, and we'll provide a customized quote.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="bg-dark-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">How long does an animation project take?</h3>
                <p className="text-gray-300">
                  Project timelines vary based on complexity and length. A simple 30-second animation might take 3-4 weeks,
                  while more complex projects can take several months. We'll provide a timeline estimate during our initial consultation.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <div className="bg-dark-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">What is your typical process for a project?</h3>
                <p className="text-gray-300">
                  Our process typically includes discovery, conceptualization, storyboarding, style development, animation,
                  sound design, and final delivery. We maintain regular communication and approval points throughout.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage