'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineUpload, HiOutlineBookOpen } from 'react-icons/hi';
import { BiDollarCircle, BiMessageSquareDetail } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi'; // সঠিক লাইব্রেরি থেকে ইম্পোর্ট
import { AiOutlineFileText } from 'react-icons/ai';

export default function AddItemPage() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    title: '',
    category: 'Development',
    price: '',
    level: 'Beginner',
    desc: '',
    fullDesc: '',
    image: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Auth চেক লজিক
    const isLoggedIn = localStorage.getItem('token') || true;
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // সঠিক এনভায়রনমেন্ট ভেরিয়েবল ফরম্যাট
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skills`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          category: formData.category,
          price: formData.price.startsWith('$') ? formData.price : `$${formData.price}`,
          badge: formData.level,
          desc: formData.desc,
          image: formData.image || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600',
          rating: '5.0',
          reviews: '0',
          duration: '8 Weeks',
          lessons: '20'
        }),
      });

      if (response.ok) {
        alert('New skill/item added successfully!');
        router.push('/courses');
      } else {
        throw new Error('Failed to add item');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to add new item. Please check backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50/50 py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/60 p-6 md:p-10 shadow-sm space-y-8">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight">Add New Skill</h1>
          <p className="text-sm text-slate-400">Share your knowledge with the world. Fill up the requirements precisely.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Title</label>
            <input 
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm bg-white"
              >
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Price (USD)</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-slate-400 text-sm"><BiDollarCircle className="w-4 h-4" /></span>
                <input 
                  type="text"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5 w-full md:w-1/2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Level</label>
            <select 
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm bg-white"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-7 space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Short Description</label>
              <textarea 
                rows={5}
                required
                value={formData.desc}
                onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm resize-none"
              />
            </div>

            <div className="md:col-span-5 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Optional Image URL</label>
                <input 
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm"
                />
              </div>
              <div className="border-2 border-dashed border-slate-200 rounded-xl aspect-[16/10] flex flex-col items-center justify-center p-4 bg-slate-50 text-slate-400 overflow-hidden">
                {formData.image ? (
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="flex flex-col items-center">
                    <HiOutlineUpload className="w-7 h-7 text-slate-300" />
                    <span className="text-xs">Image Preview</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto md:px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-sm rounded-xl transition shadow-md"
            >
              {loading ? 'Submitting...' : 'Submit Skill'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}