// Import React and useState hook
import React, { useState } from 'react';

// Define the props interface for the PromoBanner component
interface PromoBannerProps {
  subtitle: string;
  buttonText: string;
  imageSrc: string;
  buttonColor?: string;
  backgroundColor?: string;
  clickedColor?: string;
  border?: string; 
  children?: React.ReactNode;
};

const PromoBanner: React.FC<PromoBannerProps>= ({
  subtitle = 'Soft, buttery layers that taste like home',
  buttonText = 'Shop Now',
  imageSrc = "/src/assets/images/PastriesPromo.jpg",
  backgroundColor = '#FFF8F8',
  buttonColor ='#007E23FF',
  clickedColor='#03ac33ff',
  border = '1px solid #E03400',
  children,
}) => {

  // Track whether the button has been clicked
  const [isClicked, setIsClicked] = useState<boolean>(false);
  
  // Toggle button state on click. isClicked controls the button color toggle; handleClick flips the state each time the button is pressed.
  const handleClick = () => { 
    setIsClicked(prev => !prev);
  };

  return (

  // Outer container for the banner
  <div
      className="promotion-item"
      style={{backgroundColor: '#FFFFFB', margin: 'auto', padding:'32px', maxWidth: '431px', boxSizing: 'border-box', height: '245px'}}>
    <div
      style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: border, 
      borderRadius: '8px', height: '181px', boxSizing: 'border-box', gap: '35px', maxWidth: '352px', margin: 'auto', backgroundColor: backgroundColor}}>
      
      {/* Left side: text and button */}
      <div
        style={{width: '205px', padding: '0', height: '100%', marginLeft: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h2
          style={{fontFamily: 'Poppins', fontSize: '19px', fontStyle: 'normal', color:'#195530', fontWeight: 600, lineHeight: '100%', margin: '0'}}>
            Enjoy <span style={{ color: 'red' }}>20% </span>OFF all pastries!
        </h2>
        <p
          style={{fontFamily: 'Poppins', fontSize: '13px', fontWeight: 400, lineHeight: '110%', color: '#333333', marginBottom: '14px'}}>
            {subtitle}
        </p>
        <button
          onClick={handleClick}  
          style={{width: '135px', height: '45px', backgroundColor: isClicked ? clickedColor : buttonColor, color:'#ffff', border: 'none', padding: '11px 19.5px', fontSize: '19px', fontWeight: 500,
          lineHeight: '100%', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease', transform : 'none'}}>
          {buttonText}
        </button>
        {children} 
      </div>

      {/* Right side: promo image */}
      <div
        style={{width: '352px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
        <img
          src= {imageSrc}
          alt="Promo"
          style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '8px'}}/>
      </div>
    </div>
  </div>
  );
};

// Export the component for use in other parts of the app
export default PromoBanner;