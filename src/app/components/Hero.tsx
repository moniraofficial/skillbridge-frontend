// 'use client';

// export default function Hero() {
//   return (
//     <section className="relative bg-white pt-16 pb-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* ================= ওপরের মেইন সেকশন (টেক্সট এবং ইমেজ) ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
//           {/* বাম পাশ: টেক্সট এবং সার্চ সেকশন (৫ কলাম) */}
//           <div className="lg:col-span-5 text-left space-y-6">
//             {/* ছোট সবুজ ব্যাজ */}
//             <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 w-fit border border-emerald-100">
//               <span className="text-emerald-500">★</span> Trusted by 15K+ learners
//             </span>

//             {/* প্রধান শিরোনাম */}
//             <h1 className="text-4xl font-extrabold text-slate-950 tracking-tight sm:text-5xl lg:text-5xl leading-tight">
//               Learn New Skills.<br />
//               Connect With Experts.<br />
//               Grow Together.
//             </h1>

//             {/* সাব-টাইটেল */}
//             <p className="text-base text-gray-500 max-w-md">
//               Skills that help you grow. Connect with top mentors and learn at your own pace from anywhere.
//             </p>

//             {/* কাস্টম সার্চ বার */}
//             <div className="flex items-center gap-2 p-1.5 bg-white border border-gray-200 rounded-2xl shadow-sm max-w-md focus-within:border-blue-500 transition">
//               <div className="flex items-center pl-3 flex-1 gap-2">
//                 {/* সার্চ আইকন */}
//                 <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//                 <input 
//                   type="text" 
//                   placeholder="Search for skills, mentors, categories..." 
//                   className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
//                 />
//               </div>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition shadow-sm">
//                 Search
//               </button>
//             </div>

//             {/* নিচের দুটি বাটন */}
//             <div className="flex flex-wrap gap-4 pt-2">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition shadow-md">
//                 Explore Skills
//               </button>
//               <button className="bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold px-6 py-3 border border-gray-200 rounded-xl transition">
//                 Become a Mentor
//               </button>
//             </div>
//           </div>

//           {/* ডান পাশ: ইমেজ সেকশন (কলাম বাড়িয়ে ৭ করা হয়েছে যাতে ইমেজ বড় দেখায়) */}
//           <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
//             {/* ব্যাকগ্রাউন্ডের হালকা ডেকোরেশন শেপ */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full blur-3xl -z-10 scale-125"></div>
            
//             {/* ইলাস্ট্রেশন ভেক্টর ইমেজ (max-w বাড়িয়ে বড় করা হয়েছে) */}
//             <div className="relative w-full max-w-[480px] md:max-w-[550px] lg:max-w-[580px]">
//               <img 
//                 src="https://img.magnific.com/premium-vector/key-elements-knowledge-education-success-goals_1322206-67275.jpg?semt=ais_hybrid&w=740&q=80" 
//                 alt="Education Illustration Vector" 
//                 className="w-full h-auto object-contain"
//               />
//             </div>
//           </div>

//         </div>

//         {/* ================= নিচের সেকশন: স্ট্যাটস কার্ডস (পাশাপাশি লাইন করা) ================= */}
//         <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
//           {/* কার্ড ১: Rating */}
//           <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
//             <div className="p-3 bg-amber-50 rounded-xl text-xl text-amber-500 flex items-center justify-center w-12 h-12">★</div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">4.9</h3>
//               <p className="text-xs text-gray-500 font-medium">Avg. Rating</p>
//             </div>
//           </div>

//           {/* কার্ড ২: Mentors */}
//           <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
//             <div className="p-3 bg-blue-50 rounded-xl text-blue-600 flex items-center justify-center w-12 h-12">
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">2,500+</h3>
//               <p className="text-xs text-gray-500 font-medium">Expert Mentors</p>
//             </div>
//           </div>

//           {/* কার্ড ৩: Courses */}
//           <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
//             <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center w-12 h-12">
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">10K+</h3>
//               <p className="text-xs text-gray-500 font-medium">Online Courses</p>
//             </div>
//           </div>

//           {/* কার্ড ৪: Satisfaction */}
//           <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
//             <div className="p-3 bg-teal-50 rounded-xl text-teal-600 flex items-center justify-center w-12 h-12">
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">95%</h3>
//               <p className="text-xs text-gray-500 font-medium">Satisfaction Rate</p>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// 'use client';

// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <section className="relative bg-white pt-16 pb-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* ================= ওপরের মেইন সেকশন (টেক্সট এবং ইমেজ) ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
//           {/* বাম পাশ: টেক্সট এবং সার্চ সেকশন (৫ কলাম) */}
//           <div className="lg:col-span-5 text-left space-y-6">
//             {/* ছোট সবুজ ব্যাজ */}
//             <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 w-fit border border-emerald-100">
//               <span className="text-emerald-500">★</span> Trusted by 15K+ learners
//             </span>

//             {/* প্রধান শিরোনাম */}
//             <h1 className="text-4xl font-extrabold text-slate-950 tracking-tight sm:text-5xl lg:text-5xl leading-tight">
//               Learn New Skills.<br />
//               Connect With Experts.<br />
//               Grow Together.
//             </h1>

//             {/* সাব-টাইটেল */}
//             <p className="text-base text-gray-500 max-w-md">
//               Skills that help you grow. Connect with top mentors and learn at your own pace from anywhere.
//             </p>

//             {/* কাস্টম সার্চ বার */}
//             <div className="flex items-center gap-2 p-1.5 bg-white border border-gray-200 rounded-2xl shadow-sm max-w-md focus-within:border-blue-500 transition">
//               <div className="flex items-center pl-3 flex-1 gap-2">
//                 {/* সার্চ আইকন */}
//                 <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//                 <input 
//                   type="text" 
//                   placeholder="Search for skills, mentors, categories..." 
//                   className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
//                 />
//               </div>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition shadow-sm">
//                 Search
//               </button>
//             </div>

//             {/* নিচের দুটি বাটন (রাউটিং লজিক অ্যাড করা হয়েছে) */}
//             <div className="flex flex-wrap gap-4 pt-2">
//               <Link 
//                 href="/courses" 
//                 className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition shadow-md text-center"
//               >
//                 Explore Skills
//               </Link>
//               <Link 
//                 href="/become-mentor" 
//                 className="inline-block bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold px-6 py-3 border border-gray-200 rounded-xl transition text-center"
//               >
//                 Become a Mentor
//               </Link>
//             </div>
//           </div>

//           {/* ডান পাশ: ইমেজ সেকশন (কলাম বাড়িয়ে ৭ করা হয়েছে যাতে ইমেজ বড় দেখায়) */}
//           <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
//             {/* ব্যাকগ্রাউন্ডের হালকা ডেকোরেশন শেপ */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full blur-3xl -z-10 scale-125"></div>
            
//             {/* ইলাস্ট্রেশন ভেক্টর ইমেজ (max-w বাড়িয়ে বড় করা হয়েছে) */}
//             <div className="relative w-full max-w-[480px] md:max-w-[550px] lg:max-w-[580px]">
//               <img 
//                 src="https://img.magnific.com/premium-vector/key-elements-knowledge-education-success-goals_1322206-67275.jpg?semt=ais_hybrid&w=740&q=80" 
//                 alt="Education Illustration Vector" 
//                 className="w-full h-auto object-contain"
//               />
//             </div>
//           </div>

//         </div>

//         {/* ================= নিচের সেকশন: স্ট্যাটস কার্ডস (পাশাপাশি লাইন করা) ================= */}
//         <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
//           {/* কার্ড ১: Rating */}
//           <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
//             <div className="p-3 bg-amber-50 rounded-xl text-xl text-amber-500 flex items-center justify-center w-12 h-12">★</div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">4.9</h3>
//               <p className="text-xs text-gray-500 font-medium">Avg. Rating</p>
//             </div>
//           </div>

//           {/* কার্ড ২: Mentors */}
//           <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
//             <div className="p-3 bg-blue-50 rounded-xl text-blue-600 flex items-center justify-center w-12 h-12">
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">2,500+</h3>
//               <p className="text-xs text-gray-500 font-medium">Expert Mentors</p>
//             </div>
//           </div>

//           {/* কার্ড ৩: Courses */}
//           <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
//             <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center w-12 h-12">
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">10K+</h3>
//               <p className="text-xs text-gray-500 font-medium">Online Courses</p>
//             </div>
//           </div>

//           {/* কার্ড ৪: Satisfaction */}
//           <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
//             <div className="p-3 bg-teal-50 rounded-xl text-teal-600 flex items-center justify-center w-12 h-12">
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">95%</h3>
//               <p className="text-xs text-gray-500 font-medium">Satisfaction Rate</p>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // স্লাইডারের ডাটা (ইন্টারেক্টিভ ফিচার)
  const slides = [
    {
      image: "https://img.magnific.com/premium-vector/key-elements-knowledge-education-success-goals_1322206-67275.jpg?semt=ais_hybrid&w=740&q=80",
      tagline: "Interactive Learning Modules",
      sub: "Engage with live hands-on projects designed by developers."
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
      tagline: "Collaborate in Real-Time",
      sub: "Get direct 1-on-1 support from active industry professionals."
    }
  ];

  // অটো-স্লাইড লুপ অ্যানিমেশন (৫ সেকেন্ড পর পর স্লাইড পরিবর্তন হবে)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative bg-white w-full lg:h-[70vh] min-h-[580px] max-h-[720px] flex items-center pt-12 pb-16 lg:py-0 overflow-hidden border-b border-gray-50">
      
      {/* ব্যাকগ্রাউন্ডের হালকা ডেকোরেশন শেপ */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/40 to-indigo-50/30 -z-10 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* ================= ওপরের মেইন সেকশন (টেক্সট এবং স্লাইডার) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* বাম পাশ: টেক্সট এবং সার্চ সেকশন (৫ কলাম) */}
          <div className="lg:col-span-5 text-left space-y-5 animate-fade-in-up">
            {/* ছোট সবুজ ব্যাজ */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 w-fit border border-emerald-100/80">
              <span className="text-emerald-500 animate-pulse">★</span> Trusted by 15K+ learners
            </span>

            {/* প্রধান শিরোনাম */}
            <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              Learn New Skills.<br />
              <span className="text-blue-600">Connect With Experts.</span><br />
              Grow Together.
            </h1>

            {/* সাব-টাইটেল */}
            <p className="text-sm md:text-base text-gray-500 max-w-md leading-relaxed">
              Skills that help you grow. Connect with top mentors and learn at your own pace from anywhere in the world.
            </p>

            {/* কাস্টম সার্চ বার */}
            <div className="flex items-center gap-2 p-1.5 bg-white border border-gray-200 rounded-2xl shadow-sm max-w-md focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition duration-300">
              <div className="flex items-center pl-3 flex-1 gap-2">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search for skills, mentors..." 
                  className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all active:scale-95 shadow-sm">
                Search
              </button>
            </div>

            {/* নিচের দুটি বাটন */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link 
                href="/courses" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 active:scale-95 text-center"
              >
                Explore Skills
              </Link>
              <Link 
                href="/become-mentor" 
                className="inline-block bg-white hover:bg-gray-50 text-gray-700 text-xs md:text-sm font-bold px-6 py-3 border border-gray-200 rounded-xl transition-all active:scale-95 text-center"
              >
                Become a Mentor
              </Link>
            </div>
          </div>

          {/* ডান পাশ: ইন্টারেক্টিভ স্লাইডার ইমেজ সেকশন (৭ কলাম) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-end justify-center relative mt-6 lg:mt-0">
            {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
            <div className="absolute w-[350px] h-[350px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-70"></div>
            
            {/* স্লাইডার কন্টেইনার */}
            <div className="relative w-full max-w-[460px] md:max-w-[500px] lg:max-w-[520px] aspect-[16/11] bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group">
              
              {/* অ্যাক্টিভ ইমেজ ট্রানজিশন */}
              <div className="relative w-full flex-1 overflow-hidden">
                <img 
                  src={slides[currentSlide].image} 
                  alt="SkillBridge Slide" 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-105"
                />
                
                {/* ইমেজ ওভারলে ইনফো */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 pt-12 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-950/40 px-2.5 py-1 rounded-full border border-blue-800/30">{slides[currentSlide].tagline}</span>
                  <p className="text-xs text-slate-200 mt-2 font-medium">{slides[currentSlide].sub}</p>
                </div>
              </div>

              {/* স্লাইডার ডটস (ইন্টারেক্টিভ কন্ট্রোলস) */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2 py-1.5 rounded-full shadow-sm z-20">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-5 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ================= ৩. ভিজ্যুয়াল ফ্লো স্ক্রল ডাউন এরো ================= */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1">
          <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1 bg-white/50">
            <div className="w-1.5 h-3 bg-blue-600 rounded-full animate-bounce"></div>
          </div>
        </div>

      </div>

      {/* অ্যানিমেশনের জন্য ইনলাইন CSS */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}