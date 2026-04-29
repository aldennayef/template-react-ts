import React from 'react';
import { Link } from 'react-router-dom'; // Gunakan Link agar tidak refresh
import { LayoutDashboard, Waves, CloudSun, Settings, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  currentPath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, currentPath }) => {
  const menus = [
    { name: 'Beranda', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Maritime', path: '/maritime', icon: <Waves size={20} /> },
    { name: 'Weather', path: '/weather', icon: <CloudSun size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 bg-white border-r border-gray-200 transform transition-all duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0 w-64 opacity-100' : '-translate-x-full lg:translate-x-0 lg:w-0 lg:opacity-0 overflow-hidden'}
        lg:relative`}
    >
      {/* Wrapper ini menjaga konten tetap lebar 64 (16rem) meskipun aside mengecil */}
      <div className="flex flex-col h-full w-64">
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-3">
            {/* File Logo Gambar */}
            <img 
              src="/kodaeral_3.png" // Pastikan file ada di folder /public
              alt="Kodaeral3 Logo"
              className="h-9 w-auto object-contain" // Tinggi 2.25rem (36px), lebar otomatis
            />
            
            {/* Teks Brand (Sembunyikan teks jika logo gambar sudah berisi teks) */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#111e3d] whitespace-nowrap leading-none">
                KODAERAL III
              </span>
              <span className="text-[1vh] font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap mt-0.5">
                Sistem Informasi Manajemen
              </span>
            </div>
          </Link>
        </div>

        <nav className="mt-6 px-3 space-y-1">
          {menus.map((menu) => {
            const isActive = currentPath === menu.path;
            return (
              <Link
                key={menu.path}
                to={menu.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group whitespace-nowrap ${
                  isActive
                    ? 'bg-[#F3F4F4] text-[#5b9ef0] shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-[#111e3d]'
                }`}
              >
                <span className={`transition-colors duration-200 ${isActive ? 'text-[#5b9ef0]' : 'text-gray-400 group-hover:text-[#111e3d]'}`}>
                  {menu.icon}
                </span>
                <span className="ml-3 font-medium">{menu.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;