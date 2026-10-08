import React from 'react';
import { cn } from '@/utils/cn';

interface Column<T> {
  header: string;
  key: keyof T | string;
  render?: (item: T) => React.ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
}

export const Table = <T extends { id: string | number }>({
  data,
  columns,
  className,
}: TableProps<T>) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className={cn('min-w-full divide-y divide-gray-200', className)}>
        <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-6 py-3">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white text-sm text-gray-700">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-8 text-center text-gray-400">
                Tidak ada data.
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                {columns.map((col, idx) => (
                  <td key={idx} className="px-6 py-4 whitespace-nowrap">
                    {col.render ? col.render(row) : (row[col.key as keyof T] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};