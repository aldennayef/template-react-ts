import { Link } from 'react-router-dom';
import { Button } from '@/components/Button';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-gray-800">Halaman Tidak Ditemukan</h2>
      <p className="mt-2 text-gray-500 max-w-md">
        Halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia.
      </p>
      <div className="mt-6">
        <Link to="/">
          <Button variant="primary">Kembali ke Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
