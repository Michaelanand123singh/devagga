import { motion } from 'framer-motion'
import Button from '../common/Button'

const Hero = () => {
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="1.jpg" 
                alt="Creative animation showcase" 
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
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
    </section>
  )
}

export default Hero