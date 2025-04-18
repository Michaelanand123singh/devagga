import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Button from '../common/Button'
import { Helmet } from 'react-helmet-async'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      src: "/Hero/a.jpg",
      alt: "Creative 3D animation showcase - featured work by DevAgga",
      title: "3D Animation Showcase"
    },
    {
      src: "/Hero/b.jpg",
      alt: "2D character animation for marketing campaigns",
      title: "Character Animation Sample"
    },
    {
      src: "/Hero/c.jpg",
      alt: "Cinematic visual effects and environment animation",
      title: "Visual Effects Portfolio"
    },
    {
      src: "/1.jpg",
      alt: "Motion graphics for product visualization",
      title: "Product Animation Example"
    },
  ];
  
  const glowAnimation = useAnimation();
  const titleAnimation = useAnimation();
  const sectionRef = useRef(null);
  
  // Auto-scroll images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Current displayed image for structured data
  const currentImage = images[currentImageIndex];

  return (
    <>
      <Helmet>
        <title>DevAgga - Creative Animation Solutions | Professional Animation Studio</title>
        <meta name="description" content="Transform your ideas into captivating visual stories with DevAgga's cutting-edge animation services. We deliver immersive experiences that resonate with audiences." />
        <link rel="canonical" href="https://devagga.com/" />
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
        className="relative h-screen w-full flex items-center overflow-hidden bg-black"
        aria-label="Creative Animation Solutions Hero Section"
      >
        {/* Cinematic overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10" aria-hidden="true"></div>
        
        {/* Simple left-to-right scrolling image carousel */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, x: '-100%' }}  // Start from left side
              animate={{ 
                opacity: currentImageIndex === index ? 1 : 0,
                x: currentImageIndex === index ? 0 : ''  // Move to right when inactive
              }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 1.2 }}
              role="group"
              aria-label={image.title}
              aria-hidden={currentImageIndex !== index}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                title={image.title}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
              />
              
              {/* Cinematic text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left bg-gradient-to-t from-black to-transparent z-20">
                <div className="container mx-auto">
                  <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Content overlay */}
        <div className="container mx-auto px-4 z-20 relative">
          {/* Optional: Add content here if needed */}
        </div>
        
        {/* Navigation dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentImageIndex === index ? "bg-white" : "bg-white/40"
              } transition-all duration-300`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`View slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Hero