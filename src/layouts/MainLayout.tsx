import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  activePath: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, activePath }) => {
  // Set default true agar di desktop langsung terbuka
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Kirim toggleSidebar ke Sidebar untuk tombol Close (X) di mobile */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} currentPath={activePath} />

      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Kirim toggleSidebar ke Header untuk tombol Hamburger */}
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        <Footer />
      </div>

      {/* Overlay: Muncul hanya di mobile saat sidebar terbuka */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default MainLayout;