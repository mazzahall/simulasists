
import { Link } from 'react-router-dom';

export default function Books() {
  const bookList = [
    { id: 1, title: 'Bumi' },
    { id: 2, title: 'Laskar Pelangi' },
    { id: 3, title: 'Sang Pemimpi' },
  ];

  return (
    <div className="max-w-2xl space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Katalog Buku</h1>
      <div className="flex flex-col gap-2">
        {bookList.map((book) => (
          <Link
            key={book.id}
            to={`/books/${book.id}`}
            className="flex items-center gap-2 p-3 rounded-lg border border-transparent hover:border-gray-200 hover:bg-gray-50 text-gray-800 hover:text-indigo-600 transition"
          >
            <span>📖</span>
            <span className="font-medium">{book.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}