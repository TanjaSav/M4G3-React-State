import React from 'react';

// Define the props interface for Sidebar component
interface SidebarProps {
  onClose: () => void;
}

// Sidebar functional component
const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    // Main container for the sidebar
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '50%',
          width: '175px',
          height: '400px',
          backgroundColor: '#F0F7F1',
          padding: '20px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* Close button in the top-right corner */}
        <button
          onClick={onClose}
          style={{
            alignSelf: 'flex-end',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginTop: '16px',
            marginRight: "16px",
            marginBottom: '40px',
            color: '#195530',
          
          }}
        >
            <img
              src="/src/assets/images/Close_nav_icon.svg"
              alt="Close"
            />
        </button>

        {/* Navigation menu items */}
        <nav>
          {[
            'Categories',
            'Promotions',
            'Favorites',
            'Search',
            'My Cart',
            'My Orders',
            'Log In',
            'About us',
            // Render each navigation item
          ].map((item, index) => (
            <div key={index} style={{  padding: '8px 0 0 52px', fontSize: '23px'}}>
              {item}
            </div>
          ))}
        </nav>
      </div>
  );
};

// Export the Sidebar component for use in other parts of the app
export default Sidebar;

