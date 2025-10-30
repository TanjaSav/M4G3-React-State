import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import PromoBanner from './promoBanner';

function App() {
  // State to control whether the sidebar is open or closed
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    // Main container with relative positioning and full minimum height
    <div className="relative min-h-screen">
      
      {/* Header component with a menu button that opens the sidebar */}
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      {/* Promotional banner with props for text, image, colors, and border */}
      <PromoBanner
      subtitle="Soft, buttery layers that taste like home"
        buttonText="Shop Now"
        imageSrc="/src/assets/images/PastriesPromo.jpg"
        backgroundColor="#FFF8F8"
        buttonColor="#007E23F"
        clickedColor="#30ac33ff"
        border="1px solid #E03400"/>

      {/* Conditionally render the Sidebar if it's open */}
      {isSidebarOpen && (
        <Sidebar onClose={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}

// Export the App component as the default export
export default App;



