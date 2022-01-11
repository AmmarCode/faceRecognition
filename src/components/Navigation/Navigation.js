import React from "react";
import "tachyons";

const Navigation = ({ currentRoute ,onRouteChange }) => {
  return (
    currentRoute === "home" ? (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p className="f3 link dim pa3 pr4 pointer sega" onClick={() => onRouteChange('signin')}>
          Sign Out
        </p>
      </nav>
    ) : 
    <nav className="center">
      <h1>Welcome to Face Detector</h1>
    </nav>
    
  );
};

export default Navigation;
