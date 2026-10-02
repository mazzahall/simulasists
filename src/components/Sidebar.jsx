
import { NavLink } from 'react-router';

export default function Sidebar() {
  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/books', label: 'Katalog Buku' },
    { path: '/favorites', label: 'Koleksi Favorit' },
    { path: '/help', label: 'Pusat Bantuan' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 min-h-screen p-4 flex flex-col shrink-0 border-r border-slate-800 shadow-xl">
      {/* Header / Logo */}
      <div className="flex items-center gap-2 mb-8 px-3 py-2 font-bold text-lg text-white">
        <span className="text-2xl">📚</span>
        <span>Toko Buku</span>
      </div>

      {/* Navigasi */}
      <nav className="flex flex-col gap-1.5">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `px-4 py-2.5 rounded-xl text-sm transition-all duration-200 font-medium ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}