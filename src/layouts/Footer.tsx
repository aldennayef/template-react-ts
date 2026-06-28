import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-4 px-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Alden's Dev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;