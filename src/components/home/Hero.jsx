import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Button from '../common/Button'
import { Helmet } from 'react-helmet-async' // Import for meta tags

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      src: "/1.jpg",
      alt: "Creative 3D animation showcase - featured work by DevAgga",
      title: "3D Animation Showcase"
    },
    {
      src: "/lets.png",
      alt: "2D character animation for marketing campaigns",
      title: "Character Animation Sample"
    },
    {
      src: "/sky.png",
      alt: "Cinematic visual effects and environment animation",
      title: "Visual Effects Portfolio"
    },
    {
      src: "/tomato.png",
      alt: "Motion graphics for product visualization",
      title: "Product Animation Example"
    },
  ];
  
  const glowAnimation = useAnimation();
  const sectionRef = useRef(null);
  
  // Auto-scroll images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    // Pulse glow animation
    glowAnimation.start({
      opacity: [0.4, 0.7, 0.4],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }
    });
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Current displayed image for structured data
  const currentImage = images[currentImageIndex];

  return (
    <>
      {/* SEO-specific meta tags */}
      <Helmet>
        <title>DevAgga - Creative Animation Solutions | Professional Animation Studio</title>
        <meta name="description" content="Transform your ideas into captivating visual stories with DevAgga's cutting-edge animation services. We deliver immersive experiences that resonate with audiences." />
        <link rel="canonical" href="https://devagga.com/" />
        
        {/* JSON-LD structured data for the current page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "DevAgga - Creative Animation Solutions",
              "description": "Transform your ideas into captivating visual stories with DevAgga's cutting-edge animation services.",
              "publisher": {
                "@type": "Organization",
                "name": "DevAgga Animation Studio",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://devagga.com/logo.svg"
                }
              },
              "image": "${currentImage.src}",
              "mainEntity": {
                "@type": "Service",
                "name": "Professional Animation Services",
                "description": "We transform ideas into captivating visual stories through cutting-edge animation, delivering immersive experiences that resonate with audiences.",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <section 
        ref={sectionRef}
        className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark"
        aria-label="Creative Animation Solutions Hero Section"
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/40 to-dark z-0" aria-hidden="true"></div>
        
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-20 z-0" aria-hidden="true"></div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" itemProp="headline">
                <span className="block">Bringing Imagination to</span>
                <span className="gradient-text">Life: Creative Animation</span>
                <span className="block">Solutions</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-xl" itemProp="description">
                We transform ideas into captivating visual stories through cutting-edge animation, delivering immersive experiences that resonate with audiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" size="lg" aria-label="Get Started with DevAgga Animation Services">Get Started</Button>
                <Button to="/portfolio" variant="outline" size="lg" aria-label="View DevAgga Animation Portfolio">View Our Work</Button>
              </div>
              
              {/* Hidden schema.org elements for better SEO */}
              <meta itemProp="keywords" content="creative animation, 2D animation, 3D animation, motion graphics, visual effects, character animation" />
              <meta itemProp="creator" content="DevAgga Animation Studio" />
            </motion.div>

            <div className="relative" itemProp="image">
              {/* Glow effect behind the image */}
              <motion.div 
                className="absolute inset-0 -m-6 rounded-2xl bg-primary blur-3xl"
                animate={glowAnimation}
                style={{ zIndex: 1 }}
                aria-hidden="true"
              ></motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
                style={{ zIndex: 2 }}
              >
                <div 
                  className="relative h-[400px] w-full lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
                  role="region"
                  aria-label="Animation showcase slideshow"
                  aria-roledescription="carousel"
                >
                  {/* Auto-scrolling images */}
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: currentImageIndex === index ? 1 : 0,
                        scale: currentImageIndex === index ? 1 : 1.05,
                      }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      role="group"
                      aria-label={image.title}
                      aria-hidden={currentImageIndex !== index}
                    >
                      <img 
                        src={image.src || "/assets/images/placeholder.jpg"} 
                        alt={image.alt} 
                        title={image.title}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                        itemProp={index === 0 ? "primaryImageOfPage" : "image"}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" aria-hidden="true"></div>
                  
                  {/* Image pagination indicators */}
                  <div 
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                    role="tablist"
                    aria-label="Animation showcase navigation"
                  >
                    {images.map((image, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          currentImageIndex === index ? "bg-white" : "bg-white/40"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`View ${image.title}`}
                        aria-selected={currentImageIndex === index}
                        role="tab"
                        tabIndex={currentImageIndex === index ? 0 : -1}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-10 -right-10 w-24 h-24 bg-primary rounded-full opacity-30"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-5 -left-5 w-16 h-16 bg-secondary rounded-full opacity-20"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero