import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {
  const formRef = useScrollAnimation({
    animation: 'fadeIn',
    animationParams: { duration: 0.8 }
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const projectTypes = [
    { value: '', label: 'Select project type' },
    { value: '2d-animation', label: '2D Animation' },
    { value: '3d-animation', label: '3D Animation' },
    { value: 'motion-graphics', label: 'Motion Graphics' },
    { value: 'game-animation', label: 'Game Animation' },
    { value: 'other', label: 'Other / Not Sure' },
  ];

  const budgetRanges = [
    { value: '', label: 'Select budget range' },
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: 'over-50k', label: 'Over $50,000' },
    { value: 'not-sure', label: 'Not Sure' },
  ];

  const timelineOptions = [
    { value: '', label: 'Select timeline' },
    { value: 'urgent', label: 'Urgent (< 2 weeks)' },
    { value: 'standard', label: 'Standard (2-4 weeks)' },
    { value: 'relaxed', label: 'Flexible (1-2 months)' },
    { value: 'planning', label: 'Future Planning (3+ months)' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your server
      // For this demo, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      });
      
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ form: 'There was an error submitting your message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset the success message after some time
  useEffect(() => {
    let timer;
    if (formSubmitted) {
      timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 6000);
    }
    return () => clearTimeout(timer);
  }, [formSubmitted]);

  return (
    <div ref={formRef} className="contact-form-container bg-gray-900 rounded-lg p-8 shadow-xl">
      <h3 className="text-2xl font-bold text-purple-300 mb-6">Tell Us About Your Project</h3>
      
      {formSubmitted ? (
        <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 text-center">
          <h4 className="text-green-400 text-xl font-medium mb-2">Message Received!</h4>
          <p className="text-green-200">Thank you for reaching out. We'll review your project details and get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.form && (
            <div className="bg-red-900/30 border border-red-500 rounded p-3 text-red-300">
              {errors.form}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-purple-200 mb-2 font-medium">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-purple-200 mb-2 font-medium">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="company" className="block text-purple-200 mb-2 font-medium">
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div>
              <label htmlFor="projectType" className="block text-purple-200 mb-2 font-medium">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {projectTypes.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-purple-200 mb-2 font-medium">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {budgetRanges.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="timeline" className="block text-purple-200 mb-2 font-medium">
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {timelineOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-purple-200 mb-2 font-medium">
              Project Details <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us about your project, goals, and what you're looking to create..."
              value={formData.message}
              onChange={handleChange}
              className={`w-full bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
            ></textarea>
            {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-md transition-all duration-300 
                ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : 'Send Message'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;