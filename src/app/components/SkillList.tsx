// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { MapPin, Calendar, DollarSign, Star, ArrowRight } from 'lucide-react';

// // কার্ডের টাইপ ডেফিনিশন
// interface Skill {
//   _id: string;
//   title: string;
//   description: string;
//   image: string;
//   price: number;
//   date: string;
//   rating: number;
//   location: string;
//   category?: string;
// }

// // 💀 ১. Skeleton Loader Component (ডাটা লোড হওয়ার সময় দেখানোর জন্য)
// function SkeletonCard() {
//   return (
//     <div className="flex flex-col h-[460px] w-full bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm animate-pulse">
//       {/* ইমেজ স্কেলেটন */}
//       <div className="w-full h-48 bg-slate-200" />
      
//       {/* কন্টেন্ট স্কেলেটন */}
//       <div className="p-5 flex flex-col flex-grow justify-between">
//         <div className="space-y-3">
//           {/* ক্যাটাগরি পিল স্কেলেটন */}
//           <div className="h-5 bg-slate-200 rounded-full w-20" />
//           {/* টাইটেল স্কেলেটন */}
//           <div className="h-6 bg-slate-200 rounded-lg w-5/6" />
//           <div className="h-4 bg-slate-200 rounded-lg w-full" />
//           <div className="h-4 bg-slate-200 rounded-lg w-2/3" />
//         </div>

//         {/* মেটা ইনফো স্কেলেটন */}
//         <div className="py-4 border-t border-b border-slate-50 my-4 space-y-2">
//           <div className="flex justify-between">
//             <div className="h-4 bg-slate-200 rounded-md w-24" />
//             <div className="h-4 bg-slate-200 rounded-md w-16" />
//           </div>
//           <div className="flex justify-between">
//             <div className="h-4 bg-slate-200 rounded-md w-20" />
//             <div className="h-4 bg-slate-200 rounded-md w-24" />
//           </div>
//         </div>

//         {/* বাটন স্কেলেটন */}
//         <div className="h-10 bg-slate-200 rounded-xl w-full" />
//       </div>
//     </div>
//   );
// }

// // 🌟 ২. Main Skill List & Card Component
// export default function SkillList() {
//   const [skills, setSkills] = useState<Skill[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/skills');
//         if (response.ok) {
//           const data = await response.json();
//           setSkills(data);
//         }
//       } catch (error) {
//         console.error('Failed to fetch skills:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchSkills();
//   }, []);

//   return (
//     <section className="py-12 px-4 max-w-7xl mx-auto">
//       <div className="mb-8">
//         <h2 className="text-2xl md:text-3xl font-bold text-slate-950">Explore Available Skills</h2>
//         <p className="text-slate-500 text-sm mt-1">Learn from the best experts around the world.</p>
//       </div>

//       {/* রেসপন্সিভ গ্রিড: মোবাইল ও ট্যাবলেটে ১-৩টি এবং ডেস্কটপে (lg) ঠিক ৪টি করে কার্ড দেখাবে */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {isLoading
//           ? // ৩. ডাটা লোড হওয়ার সময়ে ৮টি স্কেলেটন কার্ড জেনারেট হবে
//             Array.from({ length: 8 }).map((_, index) => (
//               <SkeletonCard key={index} />
//             ))
//           : // ৪. ডাটা চলে আসলে আসল কার্ডগুলো রেন্ডার হবে
//             skills.map((skill) => (
//               <div
//                 key={skill._id}
//                 className="group flex flex-col h-[460px] w-full bg-white border border-slate-100 hover:border-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
//               >
//                 {/* ইমেজ সেকশন */}
//                 <div className="relative w-full h-48 overflow-hidden bg-slate-100">
//                   <img
//                     src={skill.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop'}
//                     alt={skill.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   {skill.category && (
//                     <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-50/50">
//                       {skill.category}
//                     </span>
//                   )}
//                 </div>

//                 {/* কন্টেন্ট পার্ট */}
//                 <div className="p-5 flex flex-col flex-grow justify-between">
//                   <div className="space-y-2">
//                     <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
//                       {skill.title}
//                     </h3>
//                     <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
//                       {skill.description}
//                     </p>
//                   </div>

//                   {/* মেটা ইনফো সেকশন (Price, Date, Rating, Location) */}
//                   <div className="py-3 border-t border-b border-slate-50 my-3 text-[11px] text-slate-600 space-y-1.5">
//                     <div className="flex justify-between items-center">
//                       <span className="flex items-center gap-1 font-semibold text-slate-900">
//                         <DollarSign className="w-3.5 h-3.5 text-blue-600" />
//                         Price: ${skill.price}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
//                         {skill.rating ? Number(skill.rating).toFixed(1) : '5.0'}
//                       </span>
//                     </div>
//                     <div className="flex justify-between items-center text-slate-500">
//                       <span className="flex items-center gap-1">
//                         <MapPin className="w-3.5 h-3.5 text-slate-400" />
//                         {skill.location || 'Online'}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Calendar className="w-3.5 h-3.5 text-slate-400" />
//                         {skill.date ? new Date(skill.date).toLocaleDateString() : 'Flexible'}
//                       </span>
//                     </div>
//                   </div>

//                   {/* "View Details" বাটন */}
//                   <Link
//                     href={`/courses/${skill._id}`}
//                     className="w-full py-2.5 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-semibold text-xs rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 group/btn"
//                   >
//                     View Details
//                     <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//       </div>

//       {/* কোনো ডাটা না থাকলে খালি স্টেট দেখানোর জন্য */}
//       {!isLoading && skills.length === 0 && (
//         <div className="text-center py-12">
//           <p className="text-slate-500">No skills available at this moment.</p>
//         </div>
//       )}
//     </section>
//   );
// }