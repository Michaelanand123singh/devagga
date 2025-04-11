import { motion } from 'framer-motion'

const IndustryCard = ({ 
  industry, 
  description, 
  icon, 
  features = [], 
  className = "" 
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`bg-dark-light rounded-lg overflow-hidden transition-all hover:shadow-xl ${className}`}
    >
      {/* Header with icon */}
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 flex items-center">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 text-primary-light">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{industry}</h3>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <p className="text-gray-300 mb-4">{description}</p>
        
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-primary-light mr-2 mt-0.5 flex-shrink-0" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="text-gray-200">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default IndustryCard;
