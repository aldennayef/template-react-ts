import { Menu, User, Bell } from 'lucide-react';
import { useSidebarStore } from '@/store/useSidebarStore';

export default function Header() {
  const { toggleSidebar } = useSidebarStore();

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full bg-white border-b border-gray-200 px-4">
      <div className="flex flex-1 items-center justify-between">
        {/* Tombol Hamburger */}
        <button
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          className="p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors focus:outline-none cursor-pointer"
        >
          <Menu size={22} />
        </button>

        <div className="flex items-center space-x-3">
          <button
            aria-label="Notifications"
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <Bell size={18} />
          </button>
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xs border border-blue-200 cursor-pointer">
            <User size={16} />
          </div>
        </div>
      </div>
    </header>
  );
}