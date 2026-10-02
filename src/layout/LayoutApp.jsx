import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950 font-sans antialiased text-slate-100">
      <Sidebar />
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}