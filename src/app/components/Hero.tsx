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

'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= ওপরের মেইন সেকশন (টেক্সট এবং ইমেজ) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* বাম পাশ: টেক্সট এবং সার্চ সেকশন (৫ কলাম) */}
          <div className="lg:col-span-5 text-left space-y-6">
            {/* ছোট সবুজ ব্যাজ */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 w-fit border border-emerald-100">
              <span className="text-emerald-500">★</span> Trusted by 15K+ learners
            </span>

            {/* প্রধান শিরোনাম */}
            <h1 className="text-4xl font-extrabold text-slate-950 tracking-tight sm:text-5xl lg:text-5xl leading-tight">
              Learn New Skills.<br />
              Connect With Experts.<br />
              Grow Together.
            </h1>

            {/* সাব-টাইটেল */}
            <p className="text-base text-gray-500 max-w-md">
              Skills that help you grow. Connect with top mentors and learn at your own pace from anywhere.
            </p>

            {/* কাস্টম সার্চ বার */}
            <div className="flex items-center gap-2 p-1.5 bg-white border border-gray-200 rounded-2xl shadow-sm max-w-md focus-within:border-blue-500 transition">
              <div className="flex items-center pl-3 flex-1 gap-2">
                {/* সার্চ আইকন */}
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search for skills, mentors, categories..." 
                  className="w-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition shadow-sm">
                Search
              </button>
            </div>

            {/* নিচের দুটি বাটন (রাউটিং লজিক অ্যাড করা হয়েছে) */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/courses" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition shadow-md text-center"
              >
                Explore Skills
              </Link>
              <Link 
                href="/become-mentor" 
                className="inline-block bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold px-6 py-3 border border-gray-200 rounded-xl transition text-center"
              >
                Become a Mentor
              </Link>
            </div>
          </div>

          {/* ডান পাশ: ইমেজ সেকশন (কলাম বাড়িয়ে ৭ করা হয়েছে যাতে ইমেজ বড় দেখায়) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
            {/* ব্যাকগ্রাউন্ডের হালকা ডেকোরেশন শেপ */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full blur-3xl -z-10 scale-125"></div>
            
            {/* ইলাস্ট্রেশন ভেক্টর ইমেজ (max-w বাড়িয়ে বড় করা হয়েছে) */}
            <div className="relative w-full max-w-[480px] md:max-w-[550px] lg:max-w-[580px]">
              <img 
                src="https://img.magnific.com/premium-vector/key-elements-knowledge-education-success-goals_1322206-67275.jpg?semt=ais_hybrid&w=740&q=80" 
                alt="Education Illustration Vector" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>

        {/* ================= নিচের সেকশন: স্ট্যাটস কার্ডস (পাশাপাশি লাইন করা) ================= */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* কার্ড ১: Rating */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-amber-50 rounded-xl text-xl text-amber-500 flex items-center justify-center w-12 h-12">★</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">4.9</h3>
              <p className="text-xs text-gray-500 font-medium">Avg. Rating</p>
            </div>
          </div>

          {/* কার্ড ২: Mentors */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600 flex items-center justify-center w-12 h-12">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">2,500+</h3>
              <p className="text-xs text-gray-500 font-medium">Expert Mentors</p>
            </div>
          </div>

          {/* কার্ড ৩: Courses */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center w-12 h-12">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">10K+</h3>
              <p className="text-xs text-gray-500 font-medium">Online Courses</p>
            </div>
          </div>

          {/* কার্ড ৪: Satisfaction */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-teal-50 rounded-xl text-teal-600 flex items-center justify-center w-12 h-12">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">95%</h3>
              <p className="text-xs text-gray-500 font-medium">Satisfaction Rate</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}