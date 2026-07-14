'use client';

import React, { useState } from 'react';
import { MailOpen } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ফাংশনালিটি পরিবর্তন না করে জাস্ট সাবমিট হ্যান্ডলার স্ট্রাকচার রাখা হলো
    console.log('Subscribed email:', email);
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* মকআপের মতো রাউন্ডেড এবং লাইট ব্যাকগ্রাউন্ডের মেইন কন্টেইনার বক্স */}
      <div className="bg-slate-50/60 border border-slate-100/80 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        
        {/* বাম পাশ: টেক্সট এবং ইনপুট ফর্ম */}
        <div className="flex-1 w-full max-w-xl">
          <span className="text-xs md:text-sm font-bold text-slate-800 tracking-wider uppercase block mb-3">
            NEWSLETTER SUBSCRIBE
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-slate-950 leading-snug mb-8">
            Get the latest updates & learning tips <br className="hidden sm:inline" /> delivered to your inbox.
          </h2>

          {/* ইনপুট ফিল্ড ও বাটন */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-colors shadow-sm flex items-center justify-center whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ডান পাশ: ফিগমার স্টাইলের মেইল ইলাস্ট্রেশন পার্ট */}
        <div className="flex-1 flex items-center justify-center w-full md:w-auto">
          <div className="relative p-8 rounded-2xl bg-white/40 border border-white/60 flex items-center justify-center shadow-inner group">
            {/* আইকন ব্যাকগ্রাউন্ড এফেক্ট */}
            <div className="absolute inset-0 bg-amber-100/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
            
            {/* মকআপের হলুদ খামের সাথে মিল রেখে কালার করা মেইল আইকন */}
            <MailOpen className="w-24 h-24 md:w-32 md:h-32 text-amber-500 relative z-10 animate-pulse duration-3000" />
          </div>
        </div>

      </div>
    </section>
  );
}