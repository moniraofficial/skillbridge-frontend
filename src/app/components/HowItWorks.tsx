import React from 'react';
import { Search, Rocket, GraduationCap } from 'lucide-react'; // প্রফেশনাল আইকন

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: '1. Search',
      description: 'Browse skills and find the perfect mentor for you.',
      icon: <Search className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 2,
      title: '2. Connect',
      description: 'Connect with experts and get your questions answered.',
      icon: <Rocket className="w-8 h-8 text-emerald-500" />,
    },
    {
      id: 3,
      title: '3. Learn',
      description: 'Learn new skills at your own pace and grow your career.',
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
      {/* হেডিং সেকশন */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">How It Works</h2>
        <p className="text-sm text-slate-500">Learn in 3 simple steps</p>
      </div>

      {/* ৩টি স্টেপের গ্রিড লেআউট (মোবাইলে ১ কলাম, ট্যাবে/ডেস্কটপে ৩ কলাম) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
        {steps.map((step) => (
          <div 
            key={step.id} 
            className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100/80 transition-shadow duration-300 hover:shadow-md"
          >
            {/* আইকন বক্স (ফিগমার মতো হালকা বর্ডার ও রাউন্ডেড কোণা) */}
            <div className="flex-shrink-0 p-4 rounded-xl border border-blue-50 bg-slate-50/50 flex items-center justify-center w-16 h-16">
              {step.icon}
            </div>

            {/* টেক্সট কন্টেন্ট */}
            <div className="flex flex-col">
              <h3 className="text-base font-bold text-slate-800 mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}