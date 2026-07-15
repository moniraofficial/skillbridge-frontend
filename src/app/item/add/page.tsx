'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineUpload, HiOutlineBookOpen } from 'react-icons/hi';
import { BiDollarCircle, BiMessageSquareDetail } from 'react-icons/bi';
import { FiSend } from 'react-fi'; // Safety alternative: let's use icons from standard libraries
import { AiOutlineFileText } from 'react-icons/ai';

export default function AddItemPage() {
  const router = useRouter();
  
  // ফর্ম স্টেট
  const [formData, setFormData] = useState({
    title: '',
    category: 'Development',
    price: '',
    level: 'Beginner',
    desc: '', // short description
    fullDesc: '', // full description
    image: '', // optional image URL
  });

  const [loading, setLoading] = useState(false);

  // 🔒 Protected Route Logic: ইউজার লগইন না থাকলে /login এ পাঠিয়ে দেবে
  useEffect(() => {
    // এখানে আপনার আসল Auth চেক লজিক বসাতে পারেন (যেমন: Firebase বা LocalStorage টোকেন)
    const isLoggedIn = localStorage.getItem('token') || true; // টেস্ট করার জন্য true রাখা হয়েছে
    
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ব্যাকএন্ড এপিআই-তে ডাটা পোস্ট করা হচ্ছে
      const response = await fetch('process.env.NEXT_PUBLIC_API_URL/api/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}` // Auth টোকেন থাকলে
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
        router.push('/courses'); // সফল হলে কোর্স পেজে নিয়ে যাবে
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
        
        {/* হেডার পার্ট */}
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight">
            Add New Skill
          </h1>
          <p className="text-sm text-slate-400">
            Share your knowledge with the world. Fill up the requirements precisely.
          </p>
        </div>

        {/* ইন্টারঅ্যাক্টিভ ফর্ম */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* ১. টাইটেল */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Title</label>
            <input 
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter skill title"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm text-slate-900"
            />
          </div>

          {/* ২. ক্যাটাগরি ও প্রাইস (গ্রিড লেআউট) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm text-slate-800 bg-white"
              >
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Price (USD)</label>
              <div className="relative">
                <span className="absolute left-4 top-3.5 text-slate-400 text-sm">
                  <BiDollarCircle className="w-4 h-4" />
                </span>
                <input 
                  type="text"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="Enter price (e.g. 49 or $49)"
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm text-slate-900"
                />
              </div>
            </div>
          </div>

          {/* ৩. লেভেল (ফিচার ফিল্ড) */}
          <div className="space-y-1.5 w-full md:w-1/2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Level</label>
            <select 
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm text-slate-800 bg-white"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* ৪. শর্ট ডেসক্রিপশন এবং ইমেজ ইউআরএল গ্রিড */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* শর্ট ডেসক্রিপশন */}
            <div className="md:col-span-7 space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Short Description</label>
              <textarea 
                rows={5}
                required
                value={formData.desc}
                onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                placeholder="Write a short description..."
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm text-slate-900 resize-none"
              />
            </div>

            {/* ইমেজ ইউআরএল ও প্রিভিউ বক্স */}
            <div className="md:col-span-5 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Optional Image URL</label>
                <input 
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm text-slate-900"
                />
              </div>

              {/* লাইভ ইমেজ আপলোড প্রিভিউ বক্স */}
              <div className="border-2 border-dashed border-slate-200 rounded-xl aspect-[16/10] flex flex-col items-center justify-center p-4 bg-slate-50/50 text-slate-400 text-center overflow-hidden">
                {formData.image ? (
                  <img src={formData.image} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="space-y-1 flex flex-col items-center">
                    <HiOutlineUpload className="w-7 h-7 text-slate-300" />
                    <span className="text-xs font-medium text-slate-400">Image Preview Window</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ৫. ফুল ডেসক্রিপশন উইথ ডামি টুলবার স্টাইল */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Description</label>
            <div className="border border-slate-200 rounded-xl overflow-hidden focus-within:border-blue-500 transition">
              {/* ডামি রিচ টেক্সট এডিটর টুলবার (আপনার ইমেজ রেফারেন্স অনুযায়ী ম্যাচ করার জন্য) */}
              <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex flex-wrap gap-3 text-slate-400 text-xs font-semibold select-none">
                <span className="hover:text-slate-700 cursor-pointer">B</span>
                <span className="hover:text-slate-700 cursor-pointer italic">I</span>
                <span className="hover:text-slate-700 cursor-pointer underline">U</span>
                <span className="text-slate-200">|</span>
                <span className="hover:text-slate-700 cursor-pointer">List</span>
                <span className="hover:text-slate-700 cursor-pointer">Link</span>
                <span className="hover:text-slate-700 cursor-pointer">Code</span>
              </div>
              <textarea 
                rows={4}
                value={formData.fullDesc}
                onChange={(e) => setFormData({ ...formData, fullDesc: e.target.value })}
                placeholder="Write full description here..."
                className="w-full px-4 py-3 focus:outline-none text-sm text-slate-900 resize-none"
              />
            </div>
          </div>

          {/* সাবমিট বাটন */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto md:px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-sm rounded-xl transition shadow-md shadow-blue-100 flex items-center justify-center gap-2"
            >
              <span>{loading ? 'Submitting Skill...' : 'Submit Skill'}</span>
            </button>
          </div>

        </form>

      </div>
    </main>
  );
}