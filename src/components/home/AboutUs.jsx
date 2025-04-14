import AnimatedSection from '../common/AnimatedSection'
import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async' // For adding meta tags

const AboutUs = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Create animated gradient effect
    const handleMouseMove = (e) => {
      const { left, top, width, height } = section.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height
      
      section.style.backgroundImage = `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          rgb(106, 73, 176) 0%,
          rgb(24, 17, 43) 50%,
          #0f172a 100%
        )
      `
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // SEO-friendly structured data for the About Us section
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevAgga",
    "description": "A creative animation studio focused on storytelling through cutting-edge technology",
    "image": "/about.jpg",
    "url": "https://devagga.com/about",
    "sameAs": [
      "https://www.facebook.com/devagga",
      "https://www.instagram.com/devagga",
      "https://www.linkedin.com/company/devagga"
    ],
    "employee": [
      {
        "@type": "Person",
        "jobTitle": "Creative Director",
        "description": "Passionate storyteller and technical wizard"
      }
    ]
  }

  return (
    <>
      {/* SEO Meta Tags using React Helmet */}
      <Helmet>
        <title>About DevAgga - Creative Animation Studio | Our Team & Story</title>
        <meta name="description" content="Learn about DevAgga's passionate team of artists, storytellers, and technical experts who merge creativity with cutting-edge technology to deliver unique animation experiences." />
        <meta name="keywords" content="animation studio team, creative animators, animation experts, storytelling, animation technology" />
        <link rel="canonical" href="https://devagga.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section 
        id="about-us"
        ref={sectionRef}
        className="py-20 bg-dark-light relative overflow-hidden transition-all duration-500 ease-out"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 1) 50%, rgba(15, 23, 42, 0.95) 100%)',
          backgroundSize: '100% 100%',
        }}
        aria-labelledby="about-heading"
      >
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-primary-dark blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary blur-3xl animate-pulse" 
               style={{animationDuration: '8s', animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fadeUp">
            <h1 id="about-heading" className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Who We Are: A Passion for Storytelling and Cutting-Edge Tech
            </h1>
          </AnimatedSection>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="prose prose-lg prose-invert max-w-none">
                <h2>Our Animation Studio's Story</h2>
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
              <figure className="relative rounded-lg overflow-hidden shadow-xl h-96">
                <img 
                  src="/about.jpg" 
                  alt="DevAgga's creative team collaborating on animation projects" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent" aria-hidden="true"></div>
                <figcaption className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">Our Creative Team</h3>
                  <p className="text-gray-300">Passionate storytellers and technical wizards</p>
                </figcaption>
              </figure>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs