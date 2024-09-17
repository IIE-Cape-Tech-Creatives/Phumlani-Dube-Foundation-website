import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div style={statsContainerStyles}>
        <div style={statBoxStyles}>
          <h3>12+</h3>
          <p>Years of community building</p>
        </div>
        <div style={statBoxStyles}>
          <h3>800+</h3>
          <p>Eye tests done</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyles = {
  backgroundColor: '#e0ffe0',
  padding: '20px',
};

const statsContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
};

const statBoxStyles = {
  textAlign: 'center',
};

export default Footer;
