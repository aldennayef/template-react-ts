import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const LG_BREAKPOINT = 1024;

interface MainLayoutProps {
  children: React.ReactNode;
  activePath: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, activePath }) => {
  // Di desktop (>= 1024px) sidebar terbuka, di mobile/tablet tertutup
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= LG_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < LG_BREAKPOINT) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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