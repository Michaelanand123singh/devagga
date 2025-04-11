import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link = "/services", 
  className = ""
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative group bg-dark-light p-6 rounded-lg transition-all hover:shadow-xl overflow-hidden ${className}`}
    >
      {/* Background decoration */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-primary opacity-10 group-hover:opacity-20 transition-opacity" />
      
      {/* Icon */}
      <div className="text-primary-light mb-4 relative">
        {icon || (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold mb-2 relative">{title}</h3>
      <p className="text-gray-300 mb-4 relative">{description}</p>
      
      {/* Link */}
      <Link 
        to={link} 
        className="inline-flex items-center text-primary-light hover:text-secondary transition-colors relative"
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  )
}

export default ServiceCard