
import { Link } from 'react-router';

export default function Books() {
  const bookList = [
    { id: 1, title: 'Bumi' },
    { id: 2, title: 'Laskar Pelangi' },
    { id: 3, title: 'Sang Pemimpi' },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900 tracking-tight pb-2 border-b border-slate-100">Katalog Buku</h1>
      <div className="grid gap-3">
        {bookList.map((book) => (
          <Link
            key={book.id}
            to={`/books/${book.id}`}
            className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 hover:shadow-md transition-all duration-200 text-slate-800 font-medium group"
          >
            <span className="text-xl">📖</span>
            <span className="group-hover:text-indigo-600 transition-colors">{book.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}