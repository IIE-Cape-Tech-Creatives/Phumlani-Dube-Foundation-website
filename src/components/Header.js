import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={headerStyles}>
      <div style={logoStyles}>
        <h2 style={logoText}>Phumlani Dube Foundation</h2>
      </div>
      <nav>
        <ul style={navStyles}>
          <li style={logoText}><p>Sign Up/Sign In</p></li>
          <li>
            <FaInstagram size={24} style={iconStyle} />
          </li>
          <li>
            <FaFacebook size={24} style={iconStyle} />
          </li>
          <li>
            <FaTwitter size={24} style={iconStyle} />
          </li>
          <li>
            <FaPinterest size={24} style={iconStyle} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Updated styles for a floating nav bar that is 80% width of the page
const headerStyles = {
  marginTop: '20px',
  position: 'fixed',  // Makes the header float on the page
  top: '0',          // Stick to the top
  left: '50%',       // Center the navbar horizontally
  transform: 'translateX(-50%)',  // Shift it left by 50% of its width to center
  width: '80%',      // 80% of the page width
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 40px 12px 40px',
  backgroundColor: '#72B944',
  zIndex: '1000',    // Make sure it's on top of other content
  borderRadius: '25px',  // Rounded corners for a nicer floating effect
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Add a subtle shadow
};

const logoStyles = {
  display: 'flex',
  alignItems: 'center',
};

const logoText = {
  color: '#FFFFFF',
  fontSize: '18px',
  
  cursor: 'pointer',  // Make the logo text clickable
};

const navStyles = {
  display: 'flex',
  gap: '15px',
  listStyleType: 'none',
  alignItems: 'center',
  padding: '0',
  margin: '0',
};

const iconStyle = {
  color: '#FFFFFF',
  cursor: 'pointer',  // Make the icons clickable
};

export default Header;
