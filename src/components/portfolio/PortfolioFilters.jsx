import { motion } from 'framer-motion'

const PortfolioFilters = ({ categories = [], activeFilter, setActiveFilter }) => {
  // Format category name for display (capitalize first letter, replace hyphens with spaces)
  const formatCategoryName = (category) => {
    if (category === 'all') return 'All Projects'
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
  
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`relative px-4 py-2 text-sm md:text-base rounded-full transition-colors ${
            activeFilter === category
              ? 'text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {activeFilter === category && (
            <motion.span
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full bg-primary-dark"
              transition={{ type: 'spring', duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{formatCategoryName(category)}</span>
        </button>
      ))}
    </div>
  )
}

export default PortfolioFilters