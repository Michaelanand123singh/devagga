import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// You need to set your Mapbox access token
// Get one at https://account.mapbox.com/
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Default coordinates - you can change these to your location
  const [lng] = useState(-74.006);
  const [lat] = useState(40.7128);
  const [zoom] = useState(13);

  useEffect(() => {
    // Initialize map only if it hasn't been initialized yet
    if (map.current) return;
    
    try {
      // Create the map instance
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11', // Use a style that fits your theme
        center: [lng, lat],
        zoom: zoom,
        attributionControl: true
      });

      // Add navigation controls (zoom buttons)
      map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
      
      // Add marker for your location
      const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Our Studio</h3><p>Visit us here!</p>'))
        .addTo(map.current);
      
      // Set map as loaded when it's ready
      map.current.on('load', () => {
        setMapLoaded(true);
      });
      
    } catch (error) {
      console.error("Error initializing map:", error);
    }
    
    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [lng, lat, zoom]);

  return (
    <>
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-light bg-opacity-75">
          <div className="text-xl text-white">Loading map...</div>
        </div>
      )}
      <div 
        ref={mapContainer} 
        className="w-full h-full"
        aria-label="Map showing our location"
      />
    </>
  );
};

export default Map;