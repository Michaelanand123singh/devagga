import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe } from 'react-feather';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { formatPhoneNumber } from '../../utils/helpers';

/**
 * ContactInfo component displays contact information and location details
 */
const ContactInfo = () => {
  // Animation for the contact info section
  const infoRef = useScrollAnimation({
    animation: 'fadeIn',
    animationParams: { duration: 0.7, delay: 0.2 }
  });

  // Animation for the social links
  const socialsRef = useScrollAnimation({
    animation: 'stagger',
    animationParams: { duration: 0.5, delay: 0.4 }
  });

  // Company contact information
  const contactDetails = {
    address: '123 Animation Avenue, Creative District, San Francisco, CA 94103',
    phone: '4155551234',
    email: 'hello@devagga.com',
    hours: 'Monday-Friday: 9:00 AM - 6:00 PM',
    website: 'www.devagga.com'
  };

  // Social media links
  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/devagga', icon: 'instagram' },
    { name: 'Twitter', url: 'https://twitter.com/devagga', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/devagga', icon: 'linkedin' },
    { name: 'YouTube', url: 'https://youtube.com/devagga', icon: 'youtube' },
    { name: 'Behance', url: 'https://behance.net/devagga', icon: 'behance' }
  ];

  return (
    <div className="contact-info-wrapper bg-gray-900 p-8 rounded-lg shadow-lg" ref={infoRef}>
      <h3 className="text-2xl font-bold text-purple-400 mb-6">Get in Touch</h3>
      
      {/* Contact details */}
      <div className="contact-details space-y-4 mb-8">
        <div className="flex items-start">
          <MapPin className="text-purple-500 mr-4 flex-shrink-0 mt-1" size={20} />
          <span className="text-gray-200">{contactDetails.address}</span>
        </div>
        
        <div className="flex items-center">
          <Phone className="text-purple-500 mr-4 flex-shrink-0" size={20} />
          <a href={`tel:${contactDetails.phone}`} className="text-gray-200 hover:text-purple-400 transition duration-300">
            {formatPhoneNumber(contactDetails.phone)}
          </a>
        </div>
        
        <div className="flex items-center">
          <Mail className="text-purple-500 mr-4 flex-shrink-0" size={20} />
          <a href={`mailto:${contactDetails.email}`} className="text-gray-200 hover:text-purple-400 transition duration-300">
            {contactDetails.email}
          </a>
        </div>
        
        <div className="flex items-center">
          <Clock className="text-purple-500 mr-4 flex-shrink-0" size={20} />
          <span className="text-gray-200">{contactDetails.hours}</span>
        </div>
        
        <div className="flex items-center">
          <Globe className="text-purple-500 mr-4 flex-shrink-0" size={20} />
          <a href={`https://${contactDetails.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-purple-400 transition duration-300">
            {contactDetails.website}
          </a>
        </div>
      </div>
      
      {/* Social media links */}
      <div className="social-media mt-8" ref={socialsRef}>
        <h4 className="text-xl font-semibold text-purple-400 mb-4">Follow Us</h4>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-link bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition duration-300"
              aria-label={`Follow us on ${social.name}`}
            >
              <i className={`fab fa-${social.icon} text-gray-200`} aria-hidden="true"></i>
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Quick contact CTA */}
      <div className="quick-contact mt-10 bg-gradient-to-r from-purple-900 to-indigo-900 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-white mb-3">Need a Quick Response?</h4>
        <p className="text-gray-300 mb-4">
          For urgent inquiries or project discussions, feel free to call us directly.
        </p>
        <a 
          href={`tel:${contactDetails.phone}`} 
          className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
        >
          <Phone size={16} className="mr-2" />
          Call Now
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;