import React from 'react';
import pic1 from "../assests/homepage.jpeg"
import lopo from "../assests/logo (2).png"
const MainSection = () => {
  return (
    <main style={mainContainerStyles}>
        <div style={leftContentStyles2}>
        <img src={lopo} alt="Group Training" style={imageStyles2} />
        </div>
      <div style={leftContentStyles}>
      <ul style={navStyles}>
  <li style={liStyles}>
    <h3>Izinhlelo Ezizayo</h3>
    <h4 style={English}>Upcoming Events</h4>
    <div style={verticalLineStyle}></div>
  </li>
  <li style={liStyles}>
    <h3>Izinsizakalo</h3>
    <h4 style={English}>Services</h4>
    <div style={verticalLineStyle}></div>
  </li>
  <li style={liStyles}>
    <h3>Abaxhasi Bethu</h3>
    <h4 style={English}>Our Supporters</h4>
    <div style={verticalLineStyle}></div>
  </li>
  <li style={liStyles}>
    <button style={exploreButtonStyles}>Qala Explore Now</button>
  </li>
</ul>
      </div>
      <div style={rightContentStyles}>
        <img src={pic1} alt="Group Training" style={imageStyles} />
      </div>
    </main>
  );
};

const mainContainerStyles = {
  display: 'flex',
 
 
};
const English = {
  color :'black',
}


const navStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  listStyleType: 'none',
  padding: 0,
  margin: 0
};

const liStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  margin: '0 20px',
  padding: '0 20px',
  minHeight: '100px' // Give the li some height for the vertical line
};

const verticalLineStyle = {
  position: 'absolute',
  right: '-10px',          // Position it on the right side
  top: '25%',              // Start 25% from the top
  bottom: '25%',           // End 25% from the bottom
  width: '1px',            // Line width
  backgroundColor: '#000'  // Line color
};
  


const leftContentStyles = {
    width: '75%', // Takes up 75% of the page width
    padding: '20px',
    backgroundColor: 'white', // Set background to white
    border: '2px solid #2ecc71', // Thin green border (2px thick)
    position: 'absolute', // Allows it to cut across the page horizontally
    top: '75%', // Center vertically
    transform: 'translateY(-50%)', // Adjust for true vertical centering
    left: '0', // Start from the left side
    textAlign: 'center',
    color: '#2ecc71', // Change the text color to green to match the border
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for a subtle effect
    height: '100px', // Height of the container
    borderRadius: '10px',
    marginLeft: '100px',
  };
  

const leftContentStyles2 = {
    width: '50%',
  
    backgroundColor: '#f0f0f0',
  };

const rightContentStyles = {
  width: '50%',
 
};

const imageStyles = {
  width: '100%',
  
};
const imageStyles2 = {
    width: '40%',         // Make the image take up 100% of the container's width
    display: 'block',      // Treat the image as a block element for easier centering
    margin: '150px auto 0',      // Center the image horizontally
    objectFit: 'contain',  // Ensure the image scales to fit without stretching or overflowing
    position: 'relative',  // Ensure it's positioned relative to its container
    top: '0', 
  };
  
const exploreButtonStyles = {
  padding: '10px 20px',
  backgroundColor: '#2ecc71',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default MainSection;
