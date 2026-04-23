import MainLayout from '../layouts/MainLayout';
import { Routes, Route, useLocation } from 'react-router-dom';

// Mock Pages (Nanti bisa dipisah ke file tersendiri)
const Dashboard = () => <div className="p-4 bg-white rounded-lg shadow">Dashboard Content</div>;
const Maritime = () => <div className="p-4 bg-white rounded-lg shadow">Maritime Monitoring Content</div>;
const Weather = () => <div className="p-4 bg-white rounded-lg shadow">Weather Analytics Content</div>;
const Settings = () => <div className="p-4 bg-white rounded-lg shadow">Settings Content</div>;

// Wrapper untuk memberikan activePath ke MainLayout
export default function AppRoutes() {
  const location = useLocation();

  return (
    <MainLayout activePath={location.pathname}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/maritime" element={<Maritime />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </MainLayout>
  );
};
