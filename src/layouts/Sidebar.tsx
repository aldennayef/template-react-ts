import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Waves, CloudSun } from 'lucide-react';
import { useSidebarStore } from '@/store/useSidebarStore';
import { cn } from '@/utils/cn';

export default function Sidebar() {
  const { isOpen } = useSidebarStore();
  const location = useLocation();

  const menus = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Page 1', path: '/page1', icon: Waves },
    { name: 'Page 2', path: '/page2', icon: CloudSun },
  ];

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-40 bg-white border-r border-gray-200 transform transition-all duration-300 ease-in-out lg:relative',
        isOpen
          ? 'translate-x-0 w-64 opacity-100'
          : '-translate-x-full lg:translate-x-0 lg:w-0 lg:opacity-0 overflow-hidden'
      )}
    >
      <div className="flex flex-col h-full w-64">
        {/* Brand Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/favicon.svg"
              alt="Logo"
              className="h-8 w-8 object-contain"
              onError={(e) => {
                // Fallback jika icon belum ada
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#111e3d] whitespace-nowrap leading-none">
                Alden's Dev
              </span>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap mt-0.5">
                Template React TS
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Menus */}
        <nav className="mt-6 px-3 space-y-1">
          {menus.map((menu) => {
            const isActive = location.pathname === menu.path;
            const Icon = menu.icon;

            return (
              <Link
                key={menu.path}
                to={menu.path}
                className={cn(
                  'flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors group whitespace-nowrap',
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                )}
              >
                <Icon
                  size={18}
                  className={cn(
                    'mr-3 transition-colors',
                    isActive ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-600'
                  )}
                />
                <span>{menu.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}