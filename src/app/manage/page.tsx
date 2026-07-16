'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, Trash2, Loader2, AlertCircle, ShieldAlert } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { authClient } from '@/lib/auth-client'; // BetterAuth সেশন হুক

interface SkillItem {
  _id: string;
  title: string;
  category: string;
  instructor: string;
  price: number;
}

export default function ManageItemsPage() {
  const router = useRouter();
  const { data: session, isPending: sessionLoading } = authClient.useSession();
  
  const [items, setItems] = useState<SkillItem[]>([]);
  const [itemsLoading, setItemsLoading] = useState<boolean>(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // সেশন প্রোটেকশন হ্যান্ডলিং
  useEffect(() => {
    if (!sessionLoading && !session) {
      toast.error('You must be logged in to manage items!');
      router.push('/login'); // লগইন পেজে রিডাইরেক্ট
    }
  }, [session, sessionLoading, router]);

  // এক্সপ্রেস ব্যাকএন্ড (localhost:5000) থেকে ডাটা নিয়ে আসা
  useEffect(() => {
    if (session) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skills`) // এক্সপ্রেসের সঠিক এপিআই লিংক
        .then((res) => res.json())
        .then((data) => {
          setItems(data || []);
          setItemsLoading(false);
        })
        .catch((err) => {
          console.error('Failed to fetch items:', err);
          toast.error('Failed to load items from server!');
          setItemsLoading(false);
        });
    }
  }, [session]);

  // এক্সপ্রেস ব্যাকএন্ড থেকে আইডি দিয়ে ডিলিট করা
  const handleDelete = async (id: string, title: string) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${title}"?`);
    if (!confirmDelete) return;

    setDeletingId(id);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skills/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // রিয়্যাক্ট স্টেট আপডেট করে ইনস্ট্যান্টলি UI থেকে রিমুভ করা
        setItems(items.filter((item) => item._id !== id));
        toast.success(`"${title}" deleted successfully! 🗑️`);
      } else {
        const errData = await response.json();
        toast.error(errData.message || 'Failed to delete item.');
      }
    } catch (error) {
      console.error('Delete action failed:', error);
      toast.error('Something went wrong!');
    } finally {
      setDeletingId(null);
    }
  };

  // লোডিং স্টেট প্রদর্শন
  if (sessionLoading || (session && itemsLoading)) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-2">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        <p className="text-sm text-slate-500 font-medium">Checking authentication & loading data...</p>
      </div>
    );
  }

  // যদি লগইন না থাকে
  if (!session) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-sm text-center shadow-sm">
          <ShieldAlert className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Access Denied</h2>
          <p className="text-sm text-slate-500 mb-6">
            This is a protected page. Please sign in with your account to manage your items.
          </p>
          <Link 
            href="/login" 
            className="inline-block w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 md:py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* হেডার পার্ট */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Manage Items</h1>
            <p className="text-sm text-slate-500 mt-1">
              Add, view, or remove listed products/skills from the system database.
            </p>
          </div>
          <Link 
            href="/item/add" 
            className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
          >
            + Add New Item
          </Link>
        </div>

        {/* যদি কোনো আইটেম ডাটাবেজে না থাকে */}
        {items.length === 0 ? (
          <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center shadow-sm">
            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No items found</h3>
            <p className="text-sm text-slate-400 mt-1 max-w-sm mx-auto">
              Your database skills collection is currently empty. Try creating a new skill first!
            </p>
            <Link 
              href="/item/add" 
              className="inline-block mt-5 px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Create Item
            </Link>
          </div>
        ) : (
          /* রেসপন্সিভ টেবিল/গ্রিড লেআউট */
          <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
            
            {/* মোবাইল ভিউ */}
            <div className="block md:hidden divide-y divide-slate-100">
              {items.map((item) => (
                <div key={item._id} className="p-5 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {item.category || 'N/A'}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base mt-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Instructor: {item.instructor || 'Unknown'}</p>
                    <p className="text-sm font-bold text-slate-900 mt-2">${item.price || 0}</p>
                  </div>
                  
                  {/* মোবাইল অ্যাকশন বাটন */}
                  <div className="flex items-center gap-3 pt-2">
                    <Link 
                      href={`/courses/${item._id}`} 
                      className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-4 h-4" /> View
                    </Link>
                    <button 
                      onClick={() => handleDelete(item._id, item.title)}
                      disabled={deletingId === item._id}
                      className="flex-1 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-medium text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                    >
                      {deletingId === item._id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ডেস্কটপ ভিউ */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm text-slate-500">
                <thead className="bg-slate-50/75 text-xs text-slate-700 uppercase font-semibold border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Instructor</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {items.map((item) => (
                    <tr key={item._id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-900 max-w-xs truncate">
                        {item.title}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                          {item.category || 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4">{item.instructor || 'Unknown'}</td>
                      <td className="px-6 py-4 font-semibold text-slate-900">${item.price || 0}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2.5">
                          <Link 
                            href={`/courses/${item._id}`}
                            title="View Details"
                            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <button 
                            onClick={() => handleDelete(item._id, item.title)}
                            disabled={deletingId === item._id}
                            title="Delete Item"
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          >
                            {deletingId === item._id ? (
                              <Loader2 className="w-4 h-4 animate-spin text-red-600" />
                            ) : (
                              <Trash2 className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}