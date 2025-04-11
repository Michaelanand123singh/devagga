import { Link } from 'react-router-dom'
import AnimatedSection from '../components/common/AnimatedSection'
import Button from '../components/common/Button'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-24">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection animation="fadeUp">
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Oops! It seems the page you're looking for has disappeared into another dimension.
            Let's get you back to the animation world we know.
          </p>
          <Button to="/" size="lg">
            Return to Homepage
          </Button>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default NotFoundPage