import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500">Selamat datang di Template React TypeScript.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card title="React 19 & Vite 8" className="shadow-sm">
          <p className="text-sm text-gray-600 mb-4">
            Performa build super cepat dengan konfigurasi Vite dan TypeScript terbaru.
          </p>
          <Button size="sm">Pelajari Lebih Lanjut</Button>
        </Card>

        <Card title="TanStack Query" className="shadow-sm">
          <p className="text-sm text-gray-600 mb-4">
            Data caching, optimistic UI, dan background sync otomatis.
          </p>
          <Button variant="secondary" size="sm">Cek Fitur</Button>
        </Card>

        <Card title="Zustand Store" className="shadow-sm">
          <p className="text-sm text-gray-600 mb-4">
            State management selektif tanpa overhead re-render berlebihan.
          </p>
          <Button variant="ghost" size="sm">Dokumentasi</Button>
        </Card>
      </div>
    </div>
  );
}
