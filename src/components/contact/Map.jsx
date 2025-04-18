import { useEffect, useRef, useState } from 'react';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Delhi coordinates from your iframe
  const [lng] = useState(77.1025);
  const [lat] = useState(28.7041);
  const [zoom] = useState(11);

  useEffect(() => {
    // Load Google Maps API script dynamically
    const loadGoogleMapsAPI = () => {
      // Check if the script is already loaded
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Create script element
      const googleMapsScript = document.createElement('script');
      // Replace YOUR_API_KEY with an actual API key
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      
      // Define the callback function in the global scope
      window.initMap = initializeMap;
      
      // Append the script to the document
      document.head.appendChild(googleMapsScript);
      
      return () => {
        // Clean up
        delete window.initMap;
        if (document.head.contains(googleMapsScript)) {
          document.head.removeChild(googleMapsScript);
        }
      };
    };

    // Initialize map
    const initializeMap = () => {
      if (map.current) return;
      
      try {
        // Create the map instance
        const mapOptions = {
          center: { lat: lat, lng: lng },
          zoom: zoom,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          zoomControl: true
        };
        
        map.current = new window.google.maps.Map(mapContainer.current, mapOptions);
        
        // Add marker for Delhi location
        marker.current = new window.google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: map.current,
          title: 'Delhi'
        });
        
        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: '<h3>Delhi</h3><p>The capital of India</p>'
        });
        
        // Open info window when marker is clicked
        marker.current.addListener('click', () => {
          infoWindow.open(map.current, marker.current);
        });
        
        // Set map as loaded
        setMapLoaded(true);
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    loadGoogleMapsAPI();
    
    // Cleanup function
    return () => {
      map.current = null;
      marker.current = null;
    };
  }, [lat, lng, zoom]);

  return (
    <div className="relative w-full h-96">
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-xl">Loading map...</div>
        </div>
      )}
      <div 
        ref={mapContainer} 
        className="w-full h-full rounded shadow"
        aria-label="Map showing Delhi location"
      />
    </div>
  );
};

export default Map;