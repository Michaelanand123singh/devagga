import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Button from '../common/Button'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/1.jpg",
    "/lets.png",
    "/sky.png",
    "/tomato.png",
  ];
  
  const glowAnimation = useAnimation();
  
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
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/40 to-dark z-0"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-20 z-0"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Bringing Imagination to</span>
              <span className="gradient-text">Life: Creative Animation</span>
              <span className="block">Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              We transform ideas into captivating visual stories through cutting-edge animation, delivering immersive experiences that resonate with audiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact" size="lg">Get Started</Button>
              <Button to="/portfolio" variant="outline" size="lg">View Our Work</Button>
            </div>
          </motion.div>

          <div className="relative">
            {/* Glow effect behind the image */}
            <motion.div 
              className="absolute inset-0 -m-6 rounded-2xl bg-primary blur-3xl"
              animate={glowAnimation}
              style={{ zIndex: 1 }}
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
              style={{ zIndex: 2 }}
            >
              <div className="relative h-[400px] w-full lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
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
                  >
                    <img 
                      src={image || "/assets/images/placeholder.jpg"} 
                      alt={`Creative animation showcase ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                
                {/* Image pagination indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        currentImageIndex === index ? "bg-white" : "bg-white/40"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-24 h-24 bg-primary rounded-full opacity-30"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-5 -left-5 w-16 h-16 bg-secondary rounded-full opacity-20"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero