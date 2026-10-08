import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSidebarStore } from '@/store/useSidebarStore';

const LG_BREAKPOINT = 1024;

export default function MainLayout() {
  const { isOpen, setIsOpen, toggleSidebar } = useSidebarStore();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < LG_BREAKPOINT) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsOpen]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar Component */}
      <Sidebar />

      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Header Component */}
        <Header />

        {/* Main Content Rendered by React Router Outlet */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

        {/* Footer Component */}
        <Footer />
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden backdrop-blur-xs transition-opacity"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}