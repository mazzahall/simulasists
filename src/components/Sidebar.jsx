import { NavLink } from 'react-router';

export default function Sidebar() {
  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/books', label: 'Katalog Buku' },
    { path: '/favorites', label: 'Koleksi Favorit' },
    { path: '/help', label: 'Pusat Bantuan' },
  ];

  return (
    <aside className="w-64 bg-gray-100 border-r border-gray-200 min-h-screen p-4 flex flex-col shrink-0">
      {/* Logo / Judul */}
      <div className="flex items-center gap-2 mb-8 px-3 py-2 font-semibold text-lg text-gray-900">
        <span className="text-xl">📚</span>
        <span>Toko Buku</span>
      </div>

      {/* Navigasi */}
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `px-4 py-2.5 rounded-lg text-sm transition-colors duration-150 ${
                isActive
                  ? 'bg-gray-300 text-gray-900 font-bold shadow-sm'
                  : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900 font-normal'
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