/**
 * Format a phone number to a readable format
 * @param {string} phoneNumber - Raw phone number
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phoneNumber) => {
    // Remove all non-numeric characters
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    // Check if the input is valid
    if (cleaned.length !== 10) {
      return phoneNumber;
    }
    
    // Format: (XXX) XXX-XXXX
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  };
  
  /**
   * Validate an email address
   * @param {string} email - Email address to validate
   * @returns {boolean} - Whether the email is valid
   */
  export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  /**
   * Truncate text with ellipsis
   * @param {string} text - Text to truncate
   * @param {number} maxLength - Maximum length before truncation
   * @returns {string} - Truncated text
   */
  export const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };
  
  /**
   * Generate a random ID
   * @param {number} length - Length of the ID
   * @returns {string} - Random ID
   */
  export const generateId = (length = 8) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };
  
  /**
   * Debounce function to limit function calls
   * @param {Function} func - Function to debounce
   * @param {number} wait - Milliseconds to wait
   * @returns {Function} - Debounced function
   */
  export const debounce = (func, wait = 300) => {
    let timeout;
    
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  /**
   * Format a date to a readable string
   * @param {Date|string} date - Date to format
   * @returns {string} - Formatted date string
   */
  export const formatDate = (date) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(dateObj);
  };
  
  /**
   * Get YouTube video ID from URL
   * @param {string} url - YouTube URL
   * @returns {string|null} - Video ID or null
   */
  export const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  /**
   * Detect if the device is mobile
   * @returns {boolean} - True if the device is mobile
   */
  export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };
  
  /**
   * Convert hex color to rgba
   * @param {string} hex - Hex color code
   * @param {number} alpha - Alpha value (0-1)
   * @returns {string} - RGBA color string
   */
  export const hexToRgba = (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  
  /**
   * Safely access nested object properties
   * @param {Object} obj - Object to access
   * @param {string} path - Path to property (e.g., 'user.address.city')
   * @param {*} defaultValue - Default value if property doesn't exist
   * @returns {*} - Property value or default value
   */
  export const getNestedValue = (obj, path, defaultValue = null) => {
    const keys = path.split('.');
    let current = obj;
    
    for (const key of keys) {
      if (current === undefined || current === null) {
        return defaultValue;
      }
      current = current[key];
    }
    
    return current !== undefined ? current : defaultValue;
  };