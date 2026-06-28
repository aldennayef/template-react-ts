import MainLayout from '../layouts/MainLayout';
import { Routes, Route, useLocation } from 'react-router-dom';

// Mock Pages (Nanti bisa dipisah ke file tersendiri)
const Dashboard = () => <div className="p-4 bg-white rounded-lg shadow">Dashboard Content</div>;
const Page1 = () => <div className="p-4 bg-white rounded-lg shadow">Page 1 Content</div>;
const Page2 = () => <div className="p-4 bg-white rounded-lg shadow">Page 2 Content</div>;

// Wrapper untuk memberikan activePath ke MainLayout
export default function AppRoutes() {
  const location = useLocation();

  return (
    <MainLayout activePath={location.pathname}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </MainLayout>
  );
};
