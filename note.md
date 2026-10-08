# Dokumentasi & Standar Arsitektur Template React TS

## Struktur Project

```text
/src
  ├── assets/        : File asset gambar/ikon/font statis
  ├── components/    : Reusable UI primitives (Button, Input, Card, Table, PageLoader)
  ├── features/      : Komponen modul/fitur spesifik (LoginForm, UserTable, dsb.)
  ├── hooks/         : Custom React hooks (useAuth, useDebounce, dsb.)
  ├── layouts/       : Layout utama aplikasi (MainLayout, Header, Sidebar, Footer)
  ├── lib/           : Konfigurasi library eksternal (queryClient.ts, apiClient.ts)
  ├── pages/         : Halaman routed (DashboardPage, Page1, Page2, NotFoundPage)
  ├── routes/        : Konfigurasi routing utama (AppRoutes.tsx dengan React.lazy)
  ├── services/      : Service API / HTTP request functions (userService.ts, dsb.)
  ├── store/         : Global state management via Zustand (useSidebarStore.ts)
  ├── utils/         : Helper umum & utilitas (cn.ts untuk merge class Tailwind)
  ├── App.tsx        : Root component + QueryClientProvider & Router
  ├── main.tsx       : Entry point React DOM
  └── index.css      : Tailwind CSS entry point
```

---

## Fitur & Best Practice yang Sudah Diimplementasikan

1. **Path Aliasing (`@/*`)**:
   - Dapat mengimpor modul langsung menggunakan path `@/...` (contoh: `import { Button } from '@/components/Button'`).
2. **Performa Tinggi & Server State**:
   - Terpasang **TanStack Query (`@tanstack/react-query`)** untuk caching data, request deduplication, dan background refetching.
3. **State Management Ringan**:
   - Menggunakan **Zustand** di `/src/store` untuk performa re-render selektif tanpa overhead context.
4. **Code Splitting / Lazy Loading**:
   - Setiap halaman di `/src/routes/AppRoutes.tsx` dimuat dengan `React.lazy()` dan `<Suspense fallback={<PageLoader />}>`.
5. **Modern Layout Routing**:
   - Menggunakan `<Outlet />` dari React Router pada `MainLayout` agar navigasi efisien tanpa re-mount berulang.
6. **Class Merging Utility (`cn()`)**:
   - Menggunakan `clsx` + `tailwind-merge` di `src/utils/cn.ts` untuk menghindari bentrokan styling Tailwind.
7. **Bundle Analyzer**:
   - Terpasang `rollup-plugin-visualizer` di `vite.config.ts`. Saat menjalankan `npm run build`, file `stats.html` akan dibuat untuk menganalisis ukuran bundle JS.