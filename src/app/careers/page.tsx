'use client';

import React from 'react';
import { Briefcase, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
}

export default function CareersPage() {
  const openPositions: Job[] = [
    {
      id: 1,
      title: "Frontend Developer (React / Next.js)",
      department: "Engineering",
      location: "Dhaka, BD (Hybrid)",
      type: "Full-Time"
    },
    {
      id: 2,
      title: "UI/UX Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-Time"
    },
    {
      id: 3,
      title: "Technical Support Specialist",
      department: "Operations",
      location: "Remote",
      type: "Part-Time"
    }
  ];

  const handleApply = (jobTitle: string) => {
    toast.success(`Application form opened for ${jobTitle}! 🚀`);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 md:py-24">
      <div className="max-w-4xl mx-auto">
        
        {/* হেডার সেকশন */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
            Join Our Team
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mt-3 sm:text-5xl">
            Careers at SkillBridge
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-3">
            Help us build the future of peer-to-peer education. We are always looking for passionate minds to join our mission.
          </p>
        </div>

        {/* কেন আমাদের সাথে কাজ করবেন */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Why Work with Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-500">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">🌍 100% Remote-First</h3>
              <p>Work from anywhere in the world. We value output and quality of life over office hours.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">📚 Continuous Learning</h3>
              <p>Get a monthly stipend for books, online courses, and attending tech conferences.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">🩺 Health & Wellness</h3>
              <p>Comprehensive health insurance and gym memberships to keep you fit and healthy.</p>
            </div>
          </div>
        </div>

        {/* ওপেন পজিশন সেকশন */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Open Positions</h2>
          
          <div className="space-y-4">
            {openPositions.map((job) => (
              <div 
                key={job.id} 
                className="bg-white border border-slate-100 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:border-blue-200 transition-all duration-300"
              >
                <div>
                  <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">{job.department}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">{job.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 mt-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-300" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-300" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleApply(job.title)}
                  className="inline-flex items-center justify-center gap-1 px-5 py-2.5 bg-slate-950 text-white hover:bg-blue-600 text-sm font-semibold rounded-xl transition-colors group"
                >
                  Apply Now
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}