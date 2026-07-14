'use client';

import React, { useState } from 'react';
import { GraduationCap, Globe } from 'lucide-react';
// React Icons থেকে ব্র্যান্ড আইকনগুলো ইম্পোর্ট করা হলো
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState<string>('');

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Footer subscribed email:', email);
  };

  return (
    <footer className="bg-[#031B4e] text-slate-300 pt-16 pb-8 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* উপরের মেইন গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* কলাম ১: লোগো, ডেসক্রিপশন এবং সোশ্যাল আইকন */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span>SkillBridge</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-[240px]">
              SkillBridge is the platform where learners and mentors connect, share skills and grow together.
            </p>
            
            {/* সোশ্যাল মিডিয়া বাটন গ্রুপ - React Icons দিয়ে আপডেট করা */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <FaFacebookF className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                <FaTwitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <FaInstagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaLinkedinIn className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Website" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Globe className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* কলাম ২: Company Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* কলাম ৩: Resources Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">All Skills</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Become a Mentor</a></li>
            </ul>
          </div>

          {/* কলাম ৪: Support Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Support</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* কলাম ৫: Newsletter Input */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-white text-slate-900 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* নিচের কপিরাইট ও লিগ্যাল লিঙ্ক পার্ট */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 SkillBridge. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}