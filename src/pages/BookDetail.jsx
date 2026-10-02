import { useParams, Link } from 'react-router';

export default function BookDetail() {
  const { id } = useParams();

  return (
    <div className="max-w-2xl space-y-4">
      <Link 
        to="/books" 
        className="text-sm text-indigo-600 hover:underline inline-block mb-2"
      >
        &larr; Kembali ke Katalog
      </Link>
      <h1 className="text-xl font-bold text-gray-900">Detail Buku</h1>
      <p className="text-gray-700 text-base">
        Kamu sedang melihat detail untuk buku dengan ID: <span className="font-semibold text-indigo-600">{id}</span>
      </p>
    </div>
  );
}