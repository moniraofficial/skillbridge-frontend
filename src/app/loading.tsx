'use client';

import React from 'react';

export default function Loading() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* হেডার সেকশনের জন্য পালসিং স্কেলেটন */}
      <div className="mb-8 animate-pulse">
        <div className="h-8 bg-slate-200 rounded-lg w-64 mb-2" />
        <div className="h-4 bg-slate-200 rounded-lg w-96" />
      </div>

      {/* ডেস্কটপে ঠিক ৪টি কার্ডের জন্য কলাম লেআউট */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* ৪টি কার্ডের স্কেলেটন জেনারেট করার জন্য লুপ */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col h-[460px] w-full bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm animate-pulse"
          >
            {/* ইমেজ প্লেসহোল্ডার */}
            <div className="w-full h-48 bg-slate-200" />
            
            {/* কন্টেন্ট পার্ট প্লেসহোল্ডার */}
            <div className="p-5 flex flex-col flex-grow justify-between">
              <div className="space-y-3">
                {/* ক্যাটাগরি ট্যাগ */}
                <div className="h-5 bg-slate-200 rounded-full w-20" />
                {/* টাইটেল */}
                <div className="h-6 bg-slate-200 rounded-lg w-5/6" />
                {/* শর্ট ডেসক্রিপশন */}
                <div className="h-4 bg-slate-200 rounded-lg w-full" />
                <div className="h-4 bg-slate-200 rounded-lg w-2/3" />
              </div>

              {/* মেটা ইনফো (প্রাইস, রেটিং, ডেট, লোকেশন) */}
              <div className="py-4 border-t border-b border-slate-50 my-4 space-y-2">
                <div className="flex justify-between">
                  <div className="h-4 bg-slate-200 rounded-md w-24" />
                  <div className="h-4 bg-slate-200 rounded-md w-16" />
                </div>
                <div className="flex justify-between">
                  <div className="h-4 bg-slate-200 rounded-md w-20" />
                  <div className="h-4 bg-slate-200 rounded-md w-24" />
                </div>
              </div>

              {/* বাটন প্লেসহোল্ডার */}
              <div className="h-10 bg-slate-200 rounded-xl w-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}