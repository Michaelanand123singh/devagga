import { useEffect, useRef, useState } from 'react';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Default coordinates - you can change these to your location
  const [lng] = useState(-74.006);
  const [lat] = useState(40.7128);
  const [zoom] = useState(13);

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
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      
      // Define the callback function in the global scope
      window.initMap = initializeMap;
      
      // Append the script to the document
      document.head.appendChild(googleMapsScript);
      
      return () => {
        // Clean up
        delete window.initMap;
        document.head.removeChild(googleMapsScript);
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
          zoomControl: true,
          styles: [
            // You can add custom styles here if needed
            // This is similar to Mapbox's dark style
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          ]
        };
        
        map.current = new window.google.maps.Map(mapContainer.current, mapOptions);
        
        // Add marker for your location
        marker.current = new window.google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: map.current,
          title: 'Our Location'
        });
        
        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: '<h3>Our Studio</h3><p>Visit us here!</p>'
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
      // Google Maps doesn't need explicit cleanup
      map.current = null;
      marker.current = null;
    };
  }, [lng, lat, zoom]);

  return (
    <>
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="text-xl text-white">Loading map...</div>
        </div>
      )}
      <div 
        ref={mapContainer} 
        className="w-full h-full"
        aria-label="Map showing our location"
        style={{ width: '100%', height: '100%', minHeight: '400px' }}
      />
    </>
  );
};

export default Map;