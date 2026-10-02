
import { useParams, Link } from 'react-router';

export default function BookDetail() {
  const { id } = useParams();

  return (
    <div className="space-y-4">
      <Link 
        to="/books" 
        className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition inline-block"
      >
        &larr; Kembali ke Katalog
      </Link>
      <h1 className="text-2xl font-bold text-slate-900 tracking-tight pb-2 border-b border-slate-100">Detail Buku</h1>
      <p className="text-slate-600 text-base">
        Kamu sedang melihat detail untuk buku dengan ID: <span className="font-bold font-mono px-2 py-1 bg-slate-100 border border-slate-200 rounded-md text-indigo-600">{id}</span>
      </p>
    </div>
  );
}