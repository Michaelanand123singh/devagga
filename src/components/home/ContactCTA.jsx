import { useState } from 'react'
import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'

const ContactCTA = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you would handle the form submission here
    // For demo purposes, we'll just show a success message
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }
  
  return (
    <section className="section bg-gradient-to-r from-primary-dark to-secondary/80 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create stunning animations that captivate your audience and elevate your brand.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
              <Button to="/contact" size="lg" variant="secondary" className="w-full sm:w-auto">
                Get in Touch
              </Button>
              <Button to="/portfolio" size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10">
                View Our Work
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.3}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mt-8">
              <h3 className="text-white text-xl font-semibold mb-4">Stay Updated with Our Latest Projects</h3>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-grow px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button
                    type="submit"
                    variant={submitted ? "secondary" : "primary"}
                    className={`whitespace-nowrap ${submitted ? 'bg-green-500' : ''}`}
                  >
                    {submitted ? 'Subscribed!' : 'Subscribe'}
                  </Button>
                </div>
                <p className="text-white/70 text-sm mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA