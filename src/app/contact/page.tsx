'use client';

import React, { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-slate-50/50 py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* হেডার */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-sm md:text-base text-slate-500">
            Have questions about our courses or need assistance? Drop us a message below.
          </p>
        </div>

        {/* দুই কলাম লেআউট: বামে ইনফো, ডানে ফর্ম */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* বাম কলাম: কন্টাক্ট ইনফো কার্ড */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold tracking-tight">Contact Information</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Fill out the form and our support operations team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4 text-sm">
                <HiOutlinePhone className="w-5 h-5 text-blue-400 shrink-0" />
                <span>+880 1234-567890</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <HiOutlineMail className="w-5 h-5 text-blue-400 shrink-0" />
                <span>support@techwaveplatform.com</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <HiOutlineLocationMarker className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Brahmanbazar, Sylhet, Bangladesh</span>
              </div>
            </div>

            <div className="text-xs text-slate-500 pt-4 border-t border-slate-800">
              © 2026 TechWave Learning Platform. All rights reserved.
            </div>
          </div>

          {/* ডান কলাম: ইন্টারঅ্যাক্টিভ ফর্ম সেকশন */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm text-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm text-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Write your message here..." 
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition text-sm text-slate-900 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-blue-100"
              >
                <span>Send Message</span>
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </main>
  );
}