import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'

const industriesData = [
  {
    id: 1,
    title: "Entertainment",
    description: "We create compelling animated content for film, TV, streaming platforms, and interactive media that captivates audiences.",
    icon: "🎬",
    color: "from-purple-600 to-blue-500"
  },
  {
    id: 2,
    title: "Education",
    description: "We develop educational animations and interactive learning experiences that make complex concepts accessible and engaging.",
    icon: "🎓",
    color: "from-blue-500 to-teal-400"
  },
  {
    id: 3,
    title: "Gaming",
    description: "We provide high-end 2D and 3D animations for game development, including character animations, cinematics, and visual effects.",
    icon: "🎮",
    color: "from-green-500 to-emerald-400"
  },
  {
    id: 4,
    title: "Marketing",
    description: "We create attention-grabbing animated content that communicates your brand message and drives conversions for your campaigns.",
    icon: "📈",
    color: "from-pink-500 to-rose-400"
  }
]

const IndustryServices = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Services Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We tailor our animation expertise to meet the unique needs of diverse industries
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((industry, index) => (
            <AnimatedSection 
              key={industry.id} 
              animation="fadeUp" 
              delay={0.1 * index}
              className="h-full"
            >
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-dark-light rounded-xl p-6 h-full shadow-lg flex flex-col"
              >
                <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center text-3xl`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{industry.description}</p>
                <motion.a 
                  href={`/services#${industry.title.toLowerCase()}`}
                  className="inline-flex items-center text-primary-light hover:underline"
                  whileHover={{ x: 5 }}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustryServices