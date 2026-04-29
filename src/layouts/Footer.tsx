import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-4 px-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Talangmas Anugerah Semesta. All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-medium text-[#111e3d]">
          Built with <span className="text-red-500">❤️</span> by Alden Nayef
        </p>
      </div>
    </footer>
  );
};

export default Footer;