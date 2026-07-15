'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  // কোন প্রশ্নটি ওপেন আছে তার ইনডেক্স ট্র্যাক করার জন্য স্টেট
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ এর ডাটা
  const faqData: FaqItem[] = [
    {
      question: "How does SkillBridge work?",
      answer: "SkillBridge is a peer-to-peer skill-sharing platform. You can search for courses or skills you want to learn, connect with active industry experts, or even list your own skills to become a mentor and help others grow."
    },
    {
      question: "Are the courses and mentorships free?",
      answer: "We offer both free resources and premium 1-on-1 mentorship sessions. The pricing is set by individual mentors depending on the complexity and duration of the course or session."
    },
    {
      question: "How can I become a mentor on SkillBridge?",
      answer: "It's simple! Click on the 'Become a Mentor' button in the navigation or hero section, fill out your profile with your expertise, and start sharing your skills with eager learners around the world."
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Yes, absolutely! Most of our courses and shared resources are designed for self-paced learning, allowing you to fit your growth into your busy schedule."
    },
    {
      question: "Is there a refund policy for paid sessions?",
      answer: "Yes, we have a 24-hour cancellation and refund policy for 1-on-1 sessions. If a mentor cancels or if you cancel within the allowed timeframe, you will receive a full refund."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
            Have Questions?
          </span>
          <h2 className="text-3xl font-bold text-slate-950 mt-3 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            Can't find what you're looking for? Reach out to our customer support team anytime.
          </p>
        </div>

        {/* FAQ লিস্ট */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* প্রশ্ন বাটন */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left text-slate-900 font-semibold text-base md:text-lg hover:text-blue-600 transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : ''}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* উত্তর (স্মুথ হাইট ট্রানজিশন) */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-slate-50' : 'max-h-0'
                  }`}
                >
                  <p className="p-5 text-sm md:text-base text-gray-500 leading-relaxed bg-slate-50/30">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}