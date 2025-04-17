import { motion } from 'framer-motion'
import AnimatedSection from '../common/AnimatedSection'
import { Helmet } from 'react-helmet-async'

const industriesData = [
  {
    id: 1,
    title: "Entertainment",
    description: "We create compelling animated content for film, TV, streaming platforms, and interactive media that captivates audiences.",
    icon: "🎬",
    color: "from-purple-600 to-blue-500",
    slug: "entertainment"
  },
  {
    id: 2,
    title: "Education",
    description: "We develop educational animations and interactive learning experiences that make complex concepts accessible and engaging.",
    icon: "🎓",
    color: "from-blue-500 to-teal-400",
    slug: "education"
  },
  {
    id: 3,
    title: "Gaming",
    description: "We provide high-end 2D and 3D animations for game development, including character animations, cinematics, and visual effects.",
    icon: "🎮",
    color: "from-green-500 to-emerald-400",
    slug: "gaming"
  },
  {
    id: 4,
    title: "Marketing",
    description: "We create attention-grabbing animated content that communicates your brand message and drives conversions for your campaigns.",
    icon: "📈",
    color: "from-pink-500 to-rose-400",
    slug: "marketing"
  }
]

const IndustryServices = ({ pageTitle = "Animation Services Across Industries", 
                           pageDescription = "Specialized animation services tailored for Entertainment, Education, Gaming, and Marketing industries. Professional animation studio delivering custom solutions." }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle} | Animation Studio</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="animation services, entertainment animation, educational animation, game animation, marketing animation, custom animation, professional animation studio" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/industry-services-og.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <link rel="canonical" href="https://youranimationstudio.com/services" />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Animation Services",
            "description": "Specialized animation services across Entertainment, Education, Gaming, and Marketing industries",
            "provider": {
              "@type": "Organization",
              "name": "Your Animation Studio",
              "url": "https://youranimationstudio.com"
            },
            "serviceType": ["Entertainment Animation", "Educational Animation", "Game Animation", "Marketing Animation"],
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      <section className="py-20 bg-dark" id="industry-services" aria-label="Industry Services">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" id="specialized-services">
                Specialized Services Across Industries
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We tailor our animation expertise to meet the unique needs of diverse industries
              </p>
            </header>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((industry, index) => (
              <AnimatedSection 
                key={industry.id} 
                animation="fadeUp" 
                delay={0.1 * index}
                className="h-full"
              >
                <motion.article 
                  whileHover={{ y: -10 }}
                  className="bg-dark-light rounded-xl p-6 h-full shadow-lg flex flex-col"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center text-3xl`} aria-hidden="true">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4" id={industry.slug} itemProp="name">{industry.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow" itemProp="description">{industry.description}</p>
                  <meta itemProp="serviceType" content={`${industry.title} Animation`} />
                  <motion.a 
                    href={`/services#${industry.slug}`}
                    className="inline-flex items-center text-primary-light hover:underline"
                    whileHover={{ x: 5 }}
                    aria-label={`Learn more about ${industry.title} animation services`}
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default IndustryServices