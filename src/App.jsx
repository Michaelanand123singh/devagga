import { Routes, Route } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={
            <>
              <Helmet>
                <title>Your Company Name | Home</title>
                <meta name="description" content="Your company's main services and value proposition described in 150-160 characters" />
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
                <link rel="canonical" href="https://yourwebsite.com/" />
                <meta property="og:title" content="Your Company Name | Home" />
                <meta property="og:description" content="Your company's main services and value proposition described in 150-160 characters" />
                <meta property="og:url" content="https://yourwebsite.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Your Company Name | Home" />
                <meta name="twitter:description" content="Your company's main services and value proposition described in 150-160 characters" />
                <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
                <script type="application/ld+json">
                  {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "Your Company Name",
                      "url": "https://yourwebsite.com",
                      "logo": "https://yourwebsite.com/logo.png",
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+1-123-456-7890",
                        "contactType": "customer service"
                      }
                    }
                  `}
                </script>
              </Helmet>
              <HomePage />
            </>
          } />
          <Route path="portfolio" element={
            <>
              <Helmet>
                <title>Portfolio | Your Company Name</title>
                <meta name="description" content="View our portfolio showcasing our best work and successful projects" />
                <link rel="canonical" href="https://yourwebsite.com/portfolio" />
                <meta property="og:title" content="Portfolio | Your Company Name" />
                <meta property="og:description" content="View our portfolio showcasing our best work and successful projects" />
                <meta property="og:url" content="https://yourwebsite.com/portfolio" />
              </Helmet>
              <PortfolioPage />
            </>
          } />
          <Route path="services" element={
            <>
              <Helmet>
                <title>Our Services | Your Company Name</title>
                <meta name="description" content="Comprehensive list of services we offer including service1, service2, and service3" />
                <link rel="canonical" href="https://yourwebsite.com/services" />
                <meta property="og:title" content="Our Services | Your Company Name" />
                <meta property="og:description" content="Comprehensive list of services we offer including service1, service2, and service3" />
                <meta property="og:url" content="https://yourwebsite.com/services" />
              </Helmet>
              <ServicesPage />
            </>
          } />
          <Route path="about" element={
            <>
              <Helmet>
                <title>About Us | Your Company Name</title>
                <meta name="description" content="Learn about our company history, mission, values, and the team behind our success" />
                <link rel="canonical" href="https://yourwebsite.com/about" />
                <meta property="og:title" content="About Us | Your Company Name" />
                <meta property="og:description" content="Learn about our company history, mission, values, and the team behind our success" />
                <meta property="og:url" content="https://yourwebsite.com/about" />
              </Helmet>
              <AboutPage />
            </>
          } />
          <Route path="contact" element={
            <>
              <Helmet>
                <title>Contact Us | Your Company Name</title>
                <meta name="description" content="Get in touch with our team for inquiries, quotes, or support. We're here to help!" />
                <link rel="canonical" href="https://yourwebsite.com/contact" />
                <meta property="og:title" content="Contact Us | Your Company Name" />
                <meta property="og:description" content="Get in touch with our team for inquiries, quotes, or support. We're here to help!" />
                <meta property="og:url" content="https://yourwebsite.com/contact" />
              </Helmet>
              <ContactPage />
            </>
          } />
          <Route path="*" element={
            <>
              <Helmet>
                <title>Page Not Found | Your Company Name</title>
                <meta name="robots" content="noindex, nofollow" />
              </Helmet>
              <NotFoundPage />
            </>
          } />
        </Route>
      </Routes>
    </HelmetProvider>
  )
}

export default App