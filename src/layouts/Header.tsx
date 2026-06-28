import React from 'react';
import { Menu, User, Bell } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full bg-white border-b border-gray-200 px-4">
      <div className="flex flex-1 items-center justify-between">
        {/* Tombol Hamburger */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors focus:outline-none"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Bell size={20} />
          </button>
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 border border-gray-300 cursor-pointer">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;