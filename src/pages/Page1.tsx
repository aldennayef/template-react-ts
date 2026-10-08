import { Card } from '@/components/Card';

export default function Page1() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Page 1</h1>
      <Card title="Page 1 Content">
        <p className="text-gray-600">
          Ini adalah contoh halaman yang dimuat secara lazy (Code Splitting). Bundle hanya dimuat saat diakses.
        </p>
      </Card>
    </div>
  );
}
