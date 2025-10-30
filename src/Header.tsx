import React, { useState } from 'react';

interface HeaderProps {
  onMenuClick: () => void; // Function to be called when the menu icon is clicked
}

// Header component definition using React Functional Component syntax
const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
   // Local state to track which icon is currently active (if any)
  const [activeIcon, setActiveIcon] = useState<string | null>(null);


  // Icon definitions
  const icons = [
    { id: 'search', src: '/src/assets/images/Search_nav_icon.svg', alt: 'Search', label: 'Search' },
    { id: 'favorites', src: '/src/assets/images/Heart_nav_icon.svg', alt: 'Favorites', label: 'Favorites' },
    { id: 'cart', src: '/src/assets/images/Cart_nav_icon.svg', alt: 'Cart', label: 'Cart' },
    { id: 'menu', src: '/src/assets/images/Menu_nav_icon.svg', alt: 'Menu', label: 'Menu' },
  ];
  
  const greenFilter = 'invert(26%) sepia(16%) saturate(1300%) hue-rotate(75deg) brightness(90%) contrast(90%)';


    const handleClick = (id: string) => {
    setActiveIcon(id);
    if (id === 'menu') {
      onMenuClick(); // Navigate to SideBar page
    }
  };


  return (

   <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', paddingBottom: '28px', paddingLeft: '39.5px', paddingRight: '39.5px', maxWidth: '352px', margin: '0 auto', background: '#FFFFFB', borderBottom: '1px solid #195530'}}>
    
     {/* logo section */}
      <a href="/" style={{ display: 'inline-block' }}>
        <img
          src="/src/assets/images/Logo_nav_icon.svg"
          alt="Broccoli Logo"
          style={{ width: '117px', height: '31px' }}
        />
      </a>
      
      {/* Navigation section */}
      <nav style={{ display: 'flex', gap: '8px', color: '#2D2C2D' }}>
        {icons.map((icon) => (
          <button
            key={icon.id}
            aria-label={icon.label}
            onClick={() => handleClick(icon.id)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              style={{
                filter: activeIcon === icon.id ? greenFilter : 'none',
              }}
            />
          </button>
        ))}
      </nav>
    </header>
  );  
};

// Make the Header component available for import
export default Header;