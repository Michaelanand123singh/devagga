import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  to, 
  className = '',
  ...props 
}) => {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all rounded-md focus:outline-none"
  
  // Variant styles
  const variantStyles = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90",
    secondary: "bg-white text-primary hover:bg-gray-100",
    outline: "border-2 border-primary-light text-white hover:bg-primary-light/10",
    text: "text-primary-light hover:underline"
  }
  
  // Size styles
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-6 py-3"
  }
  
  const allStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`
  
  // Render as Link if 'to' prop exists (internal)
  if (to) {
    return (
      <Link to={to} className={allStyles} {...props}>
        {children}
      </Link>
    )
  }
  
  // Render as anchor if 'href' prop exists (external)
  if (href) {
    return (
      <a href={href} className={allStyles} {...props}>
        {children}
      </a>
    )
  }
  
  // Render as button by default
  return (
    <button className={allStyles} {...props}>
      {children}
    </button>
  )
}

export default Button