import React, { useEffect, useRef } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { debounce } from '../../utils/helpers';

/**
 * Map component displays the studio location using Mapbox GL
 */
const Map = ({ location = { lat: 37.7749, lng: -122.4194 } }) => {
  // Reference for the map container
  const mapContainerRef = useRef(null);
  // Reference for the map instance
  const mapRef = useRef(null);
  
  // Animation for the map container
  const animationRef = useScrollAnimation({
    animation: 'fadeIn',
    animationParams: { duration: 0.8, delay: 0.3 }
  });
  
  // Studio location marker details
  const studio = {
    name: 'DevAgga Animation Studio',
    address: '123 Animation Avenue, Creative District',
    city: 'San Francisco',
    state: 'CA',
    zip: '94103',
    coordinates: location
  };

  // Initialize and handle map
  useEffect(() => {
    // Function to initialize the map
    const initializeMap = async () => {
      // Check if mapboxgl is available (this would typically be loaded via CDN or imported)
      if (!window.mapboxgl) {
        console.error('Mapbox GL JS is not loaded');
        return;
      }
      
      // Initialize the map only if it hasn't been already
      if (!mapRef.current && mapContainerRef.current) {
        // Set your Mapbox access token
        window.mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
        
        // Create a new map instance
        mapRef.current = new window.mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/dark-v10', // Dark theme to match website aesthetic
          center: [studio.coordinates.lng, studio.coordinates.lat],
          zoom: 14,
          interactive: true
        });
        
        // Add navigation controls
        mapRef.current.addControl(new window.mapboxgl.NavigationControl(), 'top-right');
        
        // Add custom marker for the studio location
        const markerEl = document.createElement('div');
        markerEl.className = 'custom-marker';
        markerEl.style.backgroundColor = '#8B5CF6'; // Purple color matching brand
        markerEl.style.width = '24px';
        markerEl.style.height = '24px';
        markerEl.style.borderRadius = '50%';
        markerEl.style.border = '3px solid white';
        markerEl.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        
        // Create a popup for the marker
        const popup = new window.mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <h3 style="font-weight: bold; margin-bottom: 5px;">${studio.name}</h3>
            <p style="margin: 0;">${studio.address}</p>
            <p style="margin: 0;">${studio.city}, ${studio.state} ${studio.zip}</p>
          `);
          
        // Add the marker with popup to the map
        new window.mapboxgl.Marker(markerEl)
          .setLngLat([studio.coordinates.lng, studio.coordinates.lat])
          .setPopup(popup)
          .addTo(mapRef.current);
      }
    };
    
    initializeMap();
    
    // Resize handler for responsive map
    const handleResize = debounce(() => {
      if (mapRef.current) {
        mapRef.current.resize();
      }
    }, 300);
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [location]);

  // Alternate content for when Mapbox isn't available
  const renderFallbackMap = () => (
    <div className="fallback-map bg-gray-800 text-gray-200 p-8 rounded-lg text-center">
      <h3 className="text-xl font-semibold mb-4">Our Location</h3>
      <p className="mb-2">{studio.name}</p>
      <p className="mb-2">{studio.address}</p>
      <p className="mb-4">{studio.city}, {studio.state} {studio.zip}</p>
      <a 
        href={`https://www.google.com/maps/search/?api=1&query=${studio.coordinates.lat},${studio.coordinates.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
      >
        Open in Google Maps
      </a>
    </div>
  );

  return (
    <div className="map-component" ref={animationRef}>
      <h3 className="text-2xl font-bold text-purple-400 mb-6">Our Location</h3>
      <div 
        ref={mapContainerRef} 
        className="map-container h-96 rounded-lg overflow-hidden shadow-lg relative"
      >
        {/* Display a placeholder/loading state until map loads */}
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center map-placeholder">
          <div className="text-gray-400">Loading map...</div>
        </div>
        
        {/* Fallback content */}
        <noscript>{renderFallbackMap()}</noscript>
      </div>
      
      {/* Map instructions */}
      <div className="map-instructions mt-4 text-gray-400 text-sm flex items-center">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Use two fingers to pan and zoom the map.</span>
      </div>
    </div>
  );
};

export default Map;