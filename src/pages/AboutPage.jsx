import AnimatedSection from '../components/common/AnimatedSection'
import Button from '../components/common/Button'
import { teamData } from '../data/teamData'

const AboutPage = () => {
  return (
    <div className="pt-20 pb-24">
      {/* Hero Section */}
      <section className="bg-dark-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-center mb-6">About DevAgga</h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              We're a passionate team of animators, storytellers, and technologists dedicated to bringing imagination to life.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeRight">
              <div className="rounded-lg overflow-hidden">
                <img src="/Hero/a.jpg" alt="Our Studio" className="w-full h-auto" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeLeft" delay={0.2}>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                DevAgga was founded in 2015 by a group of animators who shared a vision: to create a studio where
                technical excellence meets boundless creativity. What started as a small team working out of a garage
                has grown into a thriving animation studio with clients across the globe.
              </p>
              <p className="text-gray-300 mb-4">
                Our name, DevAgga, combines "Development" and "Agga" (Sanskrit for "forward movement"), reflecting
                our commitment to pushing the boundaries of animation and constantly moving forward in our craft.
              </p>
              <p className="text-gray-300">
                Today, we're proud to work with brands, studios, and creators who share our passion for storytelling
                and visual excellence. Whether it's a short film, a commercial, or an educational series, we approach
                each project with the same dedication to quality and innovation.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-dark-light">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-center mb-12">Our Core Values</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <div className="bg-dark p-8 rounded-lg h-full">
                <div className="text-primary-light text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3">Creative Excellence</h3>
                <p className="text-gray-300">
                  We pursue creative excellence in everything we do, from conceptualization to final delivery,
                  ensuring each frame is meticulously crafted.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="bg-dark p-8 rounded-lg h-full">
                <div className="text-primary-light text-3xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We embrace new technologies and techniques, constantly pushing the boundaries of what's possible
                  in animation to deliver fresh and engaging experiences.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="bg-dark p-8 rounded-lg h-full">
                <div className="text-primary-light text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  We believe in the power of collaboration—both within our team and with our clients—to create
                  something greater than the sum of its parts.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <div className="bg-dark p-8 rounded-lg h-full">
                <div className="text-primary-light text-3xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-3">Storytelling</h3>
                <p className="text-gray-300">
                  At the heart of every animation is a story. We're committed to finding and telling that story in
                  the most compelling way possible.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.5}>
              <div className="bg-dark p-8 rounded-lg h-full">
                <div className="text-primary-light text-3xl mb-4">⏱️</div>
                <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                <p className="text-gray-300">
                  We value the trust our clients place in us. That's why we commit to timelines, communicate transparently,
                  and deliver on our promises.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeUp" delay={0.6}>
              <div className="bg-dark p-8 rounded-lg h-full">
                <div className="text-primary-light text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-3">Growth</h3>
                <p className="text-gray-300">
                  We're dedicated to continuous learning and improvement, both as individuals and as an organization,
                  to ensure we're always offering the best to our clients.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-center mb-6">Meet Our Team</h2>
            <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
              Our diverse team brings together expertise in animation, design, storytelling, and technology to create exceptional work.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <AnimatedSection key={member.id} animation="fadeUp" delay={0.1 * index}>
                <div className="bg-dark-light rounded-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary-light mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-dark to-secondary-dark">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeUp">
            <h2 className="mb-6">Join Us on Our Creative Journey</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              We're always looking for talented individuals to join our team. Check out our current openings or send us your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button to="/contact" size="lg">View Openings</Button>
              <Button to="/contact" variant="outline" size="lg">Submit Portfolio</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default AboutPage