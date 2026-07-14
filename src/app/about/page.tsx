'use client';

import React from 'react';
// সঠিক ও এরর-ফ্রি আইকন ইম্পোর্ট (সবগুলো hi এবং bi লাইব্রেরি থেকে নেওয়া)
import { 
  HiOutlineAcademicCap, 
  HiOutlineBadgeCheck, 
  HiOutlineUsers, 
  HiOutlineTrendingUp,
  HiOutlineLightBulb
} from 'react-icons/hi';
import { BiAward, BiSupport } from 'react-icons/bi';

export default function AboutPage() {
  const stats = [
    { id: 1, icon: HiOutlineUsers, value: '10K+', label: 'Active Students' },
    { id: 2, icon: HiOutlineAcademicCap, value: '50+', label: 'Expert Mentors' },
    { id: 3, icon: BiAward, value: '120+', label: 'Premium Courses' },
    { id: 4, icon: BiSupport, value: '24/7', label: 'Dedicated Support' },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* হেডার সেকশন */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            About Our Platform
          </h1>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed">
            We are dedicated to delivering high-quality, industry-relevant web development and design education to help you thrive in the digital era.
          </p>
        </div>

        {/* ভিশন ও মিশন কার্ডস */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              <HiOutlineLightBulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To democratize professional tech education by providing structured, project-based courses that bridge the gap between academic theory and real-world software development workflows.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100/80 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              <HiOutlineTrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To build a global community of self-paced learners, freelancers, and engineers who share knowledge, build impactful digital assets, and continuously push the boundaries of technology.
            </p>
          </div>
        </div>

        {/* স্ট্যাটস কাউন্টার গ্রিড */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-slate-900 text-white rounded-2xl shadow-sm">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="text-center space-y-2">
                <div className="flex justify-center text-blue-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-black">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}