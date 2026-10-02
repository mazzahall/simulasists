import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-white text-gray-800 font-sans">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Area Konten Dinamis di Kanan */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}