import React from 'react';
import { Award, Calendar, ShieldCheck, Users } from 'lucide-react';

export default function WhySkillBridge() {
  const features = [
    {
      id: 1,
      title: 'Verified Mentors',
      description: 'All mentors are verified and experts in their fields.',
      icon: <Award className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 2,
      title: 'Flexible Learning',
      description: 'Learn at your pace, anytime, anywhere.',
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 3,
      title: 'Secure Payments',
      description: 'Safe and secure payment methods.',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 4,
      title: 'Community Support',
      description: 'Get help from our supportive community.',
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
      {/* মকআপের মতো হেডিং স্টাইল */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-wide uppercase">
         WHY SKILLBRIDGE?
        </h2>
      </div>

      {/* ৪টি ফিচারের রেসপনসিভ গ্রিড লেআউট */}
      {/* মোবাইলে ১টি, ট্যাবে ২টি এবং ডেস্কটপে ৪টি কলাম দেখাবে */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center text-center p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* মকআপের মতো আইকন বক্স */}
            <div className="mb-6 p-4 rounded-xl bg-blue-50/50 flex items-center justify-center">
              {feature.icon}
            </div>

            {/* টাইটেল */}
            <h3 className="text-lg font-bold text-slate-800 mb-3">
              {feature.title}
            </h3>

            {/* ডেসক্রিপশন */}
            <p className="text-sm text-slate-500 leading-relaxed max-w-[220px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}