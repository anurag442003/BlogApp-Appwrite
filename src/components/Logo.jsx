import React from 'react';
import logo from '../assets/logo.png'; // Import the logo image

function Logo({ width = "100px", height = "auto" }) {
  return (
    <img 
      src={logo} 
      style={{ width, height, objectFit: "contain" }} 
      alt="Logo" 
    />
  );
}

export default Logo;