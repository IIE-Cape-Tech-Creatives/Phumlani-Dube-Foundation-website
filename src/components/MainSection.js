import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import pic1 from "../assests/homepage.jpeg";
import lopo from "../assests/logo (2).png";
<style>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap');
</style>

const MainSection = () => {
  return (
    <main style={mainContainerStyles}>
      <div style={leftContentStyles2}>
        <img src={lopo} alt="Group Training" style={imageStyles2} />
      </div>
      <div style={leftContentStyles}>
        <ul style={navStyles}>

          <li style={liStyles}>
            <button style={exploreButtonStyles}>
              <p style={English}>Izinhlelo Ezizayo</p>
              <FaArrowDown style={arrowIconStyle} />
              <p>Upcoming Events</p>
            </button>
            <div style={verticalLineStyle}></div>
          </li>


          <li style={liStyles}>
            <button style={exploreButtonStyles}>
              <p style={English}>Izinsizakalo</p>
              <FaArrowDown style={arrowIconStyle} />
              <p>Services</p>
            </button>
            <div style={verticalLineStyle}></div>
          </li>

          <li style={liStyles}>
            <button style={exploreButtonStyles}>
              <p style={English}>Abaxhasi Bethu</p>
              <FaArrowDown style={arrowIconStyle} />
              <p>Our Supporters  </p>
            </button>
            <div style={verticalLineStyle}></div>
          </li>

          <li style={liStyles}>
            <button style={exploreButtonStyles}>
              <p style={English}>Qala</p>
              <FaArrowDown style={arrowIconStyle} />
              <p>Explore Now</p>
            </button>
          </li>

        </ul>
      </div>
      <div style={rightContentStyles}>
        <img src={pic1} alt="Group Training" style={imageStyles} />
      </div>
    </main>
  );
};

const arrowIconStyle = {
  fontSize: '20px',  // Adjust the size of the icon
  color: '#000000',  // Match the color to the design
  margin: '5px 0',  // Add some spacing between the text and the arrow
};

const mainContainerStyles = {
  display: 'flex',
  height: '130vh',
 // width:'190vh',
 // padding: '0px 10px 0px 10px',
 
};
const English = {
  color :'black',
}


const navStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  listStyleType: 'none',
  padding: '-10px',
  margin: 0,
  height: '100%',
  width: '100%',
};

const liStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '25%', // Divide equally into four parts
  height: '70%', // Fill the height of the container
  textAlign: 'center',
};

const verticalLineStyle = {
  position: 'absolute',
  right: '0', // Align it to the right edge of the section
  top: '25%',
  bottom: '25%',
  width: '1px',
  backgroundColor: '#000',
};
  


const leftContentStyles = {
    width: '55%', // Takes up 75% of the page width
    padding: '20px',
    backgroundColor: '#FFFFFF',
    border: '2px solid #2ecc71', // Thin green border (2px thick)
    position: 'absolute', // Allows it to cut across the page horizontally
    top: '75%', // Center vertically
    transform: 'translateY(-50%)', // Adjust for true vertical centering
    left: '0', // Start from the left side
    textAlign: 'center',
    color: '#2ecc71', // Change the text color to green to match the border
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for a subtle effect
    height: '100px', // Height of the container
    borderRadius: '50px',
    marginLeft: '100px',
  };
  

const leftContentStyles2 = {
    width: '50%',
    
    backgroundColor: '#F4FAF0',
  };

const rightContentStyles = {
  width: '50%',
 
};

const imageStyles = {
  width: '100%',
  
};
const imageStyles2 = {
    width: '60%',         // Make the image take up 100% of the container's width
    display: 'block',      // Treat the image as a block element for easier centering
    margin: '150px auto 0',      // Center the image horizontally
    objectFit: 'contain',  // Ensure the image scales to fit without stretching or overflowing
    position: 'relative',  // Ensure it's positioned relative to its container
    top: '0', 
  };
  
const exploreButtonStyles = {
  padding: '5px 20px 5px 20px',
  backgroundColor: '#2ecc71',
  color: '#fff',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
};

export default MainSection;
