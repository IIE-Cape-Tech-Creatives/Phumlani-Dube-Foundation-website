import React from 'react';

const Header = () => {
  return (
    <header style={headerStyles}>
      <div style={logoStyles}>
        <h3>Phumlani Dube Foundation</h3>
      </div>
      <nav>
        <ul style={navStyles}>
          <li>Sign Up/Sign In</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Pinterest</li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  backgroundColor: '#e0ffe0',
};

const logoStyles = {
  display: 'flex',
  alignItems: 'center',
  height:'5%',
};



const navStyles = {
  display: 'flex',
  listStyleType: 'none',
};

export default Header;
