import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import AnimatedSection from '../common/AnimatedSection'
import Button from '../common/Button'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const ContactCTA = ({ 
  title = "Ready to Bring Your Vision to Life?", 
  description = "Let's collaborate to create stunning animations that captivate your audience and elevate your brand.",
  seoTitle = "Get in Touch with DevAgga - Creative Animation Solutions",
  seoDescription = "Contact DevAgga for professional animation services. Subscribe to our newsletter for updates on our latest animation projects and special offers."
}) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const location = useLocation()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you would handle the form submission here
    // For demo purposes, we'll just show a success message
    setSubmitted(true)
    
    // Track form submission for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'newsletter_subscription', {
        'event_category': 'engagement',
        'event_label': 'newsletter'
      })
    }
    
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }
  
  // Structured data for this component
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevAgga Animation Studio",
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@devagga.com"
    },
    "offers": {
      "@type": "Offer",
      "description": "Subscribe to our newsletter for the latest animation updates"
    }
  }
  
  // Log page views for analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA-MEASUREMENT-ID', {
        'page_path': location.pathname + location.search
      })
    }
  }, [location])
  
  return (
    <>
      {/* SEO metadata */}
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <section 
        className="section bg-gradient-to-r from-primary-dark to-secondary/80 relative overflow-hidden"
        id="contact-cta"
        aria-labelledby="contact-cta-heading"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-white"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fadeUp">
              <h2 
                id="contact-cta-heading" 
                className="text-white text-3xl md:text-4xl font-bold mb-6"
              >
                {title}
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                {description}
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
                <Button 
                  to="/contact" 
                  size="lg" 
                  variant="secondary" 
                  className="w-full sm:w-auto"
                  aria-label="Contact DevAgga Animation Studio"
                >
                  Get in Touch
                </Button>
                <Button 
                  to="/portfolio" 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto text-white border-white hover:bg-white/10"
                  aria-label="View DevAgga's animation portfolio"
                >
                  View Our Work
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mt-8">
                <h3 className="text-white text-xl font-semibold mb-4">Stay Updated with Our Latest Projects</h3>
                <form 
                  onSubmit={handleSubmit} 
                  className="max-w-md mx-auto"
                  aria-label="Newsletter subscription form"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <label htmlFor="email-input" className="sr-only">Email address</label>
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-grow px-4 py-3 rounded-md bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                      aria-required="true"
                    />
                    <Button
                      type="submit"
                      variant={submitted ? "secondary" : "primary"}
                      className={`whitespace-nowrap ${submitted ? 'bg-green-500' : ''}`}
                      aria-label={submitted ? 'Successfully subscribed' : 'Subscribe to newsletter'}
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
    </>
  )
}

// PropTypes for component documentation and validation
ContactCTA.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  seoTitle: PropTypes.string,
  seoDescription: PropTypes.string
}

export default ContactCTA