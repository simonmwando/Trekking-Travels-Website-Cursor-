import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsTransitioning(true);
      
      // Wait for the exit animation to complete
      setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 200); // Match the CSS transition duration
    }
  }, [location, displayLocation]);

  return (
    <div className={`page-transition ${isTransitioning ? 'transitioning' : ''}`}>
      <div className="page-content">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
