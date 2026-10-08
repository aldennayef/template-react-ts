import { Loader2 } from 'lucide-react';

export function PageLoader() {
  return (
    <div className="flex h-64 w-full items-center justify-center">
      <div className="flex items-center gap-3 text-gray-500">
        <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
        <span className="text-sm font-medium">Memuat halaman...</span>
      </div>
    </div>
  );
}
