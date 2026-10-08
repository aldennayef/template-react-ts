import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { PageLoader } from '@/components/PageLoader';

// Code Splitting / Lazy Loading untuk halaman-halaman
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const Page1 = lazy(() => import('@/pages/Page1'));
const Page2 = lazy(() => import('@/pages/Page2'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Layout Route */}
        <Route element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>

        {/* 404 Catch-all */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
