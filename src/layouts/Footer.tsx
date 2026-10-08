export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-3.5 px-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Alden's Dev. All rights reserved.</p>
        <p className="mt-1 md:mt-0">React 19 + TypeScript + Vite</p>
      </div>
    </footer>
  );
}