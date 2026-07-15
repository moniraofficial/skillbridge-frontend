// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// interface SkillType {
//   _id: string;
//   title: string;
//   desc: string;
//   badge: string;
//   badgeColor: string;
//   image: string;
//   mentorName: string;
//   mentorImage: string;
//   rating: string;
//   reviews: string;
//   price: string;
//   duration: string;
//   lessons: string;
// }

// export default function FeaturedSkills() {
//   const [skills, setSkills] = useState<SkillType[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         // আলাদা ব্যাকএন্ড প্রজেক্টের সঠিক ইউআরএল এখানে দেওয়া হয়েছে
//         const res = await fetch('process.env.NEXT_PUBLIC_API_URL/api/skills');
        
//         if (!res.ok) {
//           throw new Error(`Failed to fetch from backend status: ${res.status}`);
//         }
//         const data = await res.json();
        
//         // নিশ্চিত হওয়া যে ডাটাটি আসলেই একটি অ্যারে
//         if (Array.isArray(data)) {
//           setSkills(data);
//         } else {
//           setSkills([]);
//           setError("Data received from backend is not an array");
//         }
//       } catch (err: any) {
//         console.error("Failed to load skills:", err);
//         setError(err.message || "Something went wrong connecting to backend server");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSkills();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center py-20 font-semibold text-gray-500 animate-pulse">
//         Loading Featured Skills from External Backend...
//       </div>
//     );
//   }

//   // ডাটাবেজ বা ব্যাকএন্ড সার্ভার ডাউন থাকলে এই ইউজার-ফ্রেন্ডলি মেসেজটি দেখাবে
//   if (error || !skills || skills.length === 0) {
//     return (
//       <div className="text-center py-16 bg-red-50 rounded-2xl border border-red-100 max-w-7xl mx-auto my-10 p-6">
//         <p className="text-red-600 font-semibold">⚠️ Backend Server or Database Connection Issue!</p>
//         <p className="text-xs text-gray-500 mt-2">
//           Please make sure your separate backend project is running on <code className="bg-red-100 px-1 py-0.5 rounded text-red-700">process.env.NEXT_PUBLIC_API_URL</code> and CORS is enabled.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="flex justify-between items-end mb-10">
//           <div>
//             <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
//               Featured Skills
//             </h2>
//             <p className="mt-2 text-sm text-gray-500">
//               Hand-picked skills directly from external MongoDB via Express Backend
//             </p>
//           </div>
//           <Link href="/courses" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
//             View all
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {skills.map((skill) => (
//             <div 
//               key={skill._id} 
//               className="bg-white rounded-2xl border border-gray-150 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition duration-300"
//             >
//               <div>
//                 <div className="relative h-48 w-full bg-gray-100">
//                   <img 
//                     src={skill.image} 
//                     alt={skill.title} 
//                     className="w-full h-full object-cover"
//                   />
//                   <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold ${skill.badgeColor} shadow-sm`}>
//                     {skill.badge}
//                   </span>
//                 </div>

//                 <div className="p-5 space-y-3">
//                   <h3 className="text-lg font-bold text-gray-950 leading-snug line-clamp-1">
//                     {skill.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 line-clamp-2">
//                     {skill.desc}
//                   </p>
//                 </div>
//               </div>

//               <div className="px-5 pb-5 mt-auto">
//                 <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
//                   <div className="flex items-center gap-2">
//                     <img 
//                       src={skill.mentorImage} 
//                       alt={skill.mentorName} 
//                       className="w-7 h-7 rounded-full object-cover"
//                     />
//                     <span className="text-xs font-semibold text-gray-700">{skill.mentorName}</span>
//                   </div>
//                   <span className="text-xl font-black text-gray-950">{skill.price}</span>
//                 </div>

//                 <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
//                   <div className="flex items-center gap-1">
//                     <span className="text-amber-500 text-sm">★</span>
//                     <span className="text-gray-800 font-bold">{skill.rating}</span>
//                     <span>({skill.reviews})</span>
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <span>{skill.duration}</span>
//                     <span className="text-gray-300">•</span>
//                     <span>{skill.lessons}</span>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// interface SkillType {
//   _id: string;
//   title: string;
//   desc: string;
//   badge: string;
//   badgeColor: string;
//   image: string;
//   mentorName: string;
//   mentorImage: string;
//   rating: string;
//   reviews: string;
//   price: string;
//   duration: string;
//   lessons: string;
// }

// export default function FeaturedSkills() {
//   const [skills, setSkills] = useState<SkillType[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const res = await fetch('process.env.NEXT_PUBLIC_API_URL/api/skills');
        
//         if (!res.ok) {
//           throw new Error(`Failed to fetch from backend status: ${res.status}`);
//         }
//         const data = await res.json();
        
//         if (Array.isArray(data)) {
//           setSkills(data);
//         } else {
//           setSkills([]);
//           setError("Data received from backend is not an array");
//         }
//       } catch (err: any) {
//         console.error("Failed to load skills:", err);
//         setError(err.message || "Something went wrong connecting to backend server");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSkills();
//   }, []);

//   // ১. লোডিং স্টেট
//   if (loading) {
//     return (
//       <div className="text-center py-20 font-semibold text-gray-500 animate-pulse">
//         Loading Featured Skills from External Backend...
//       </div>
//     );
//   }

//   // ২. কানেকশন এরর থাকলে এই লাল বক্স দেখাবে
//   if (error) {
//     return (
//       <div className="text-center py-16 bg-red-50 rounded-2xl border border-red-100 max-w-7xl mx-auto my-10 p-6">
//         <p className="text-red-600 font-semibold">⚠️ Backend Server Connection Issue!</p>
//         <p className="text-xs text-gray-500 mt-2">
//           Please make sure your separate backend project is running on <code className="bg-red-100 px-1 py-0.5 rounded text-red-700">process.env.NEXT_PUBLIC_API_URL</code>.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="flex justify-between items-end mb-10">
//           <div>
//             <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
//               Featured Skills
//             </h2>
//             <p className="mt-2 text-sm text-gray-500">
//               Hand-picked skills directly from external MongoDB via Express Backend
//             </p>
//           </div>
//           <Link href="/courses" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
//             View all
//           </Link>
//         </div>

//         {/* ৩. ডাটাবেজ সচল কিন্তু কোনো ডাটা না থাকলে (Empty State) */}
//         {skills.length === 0 ? (
//           <div className="text-center py-12 border border-dashed border-gray-200 rounded-2xl">
//             <p className="text-gray-500 font-medium">No skills found in the database! 📭</p>
//             <p className="text-xs text-gray-400 mt-1">Please insert some documents into your MongoDB 'skills' collection.</p>
//           </div>
//         ) : (
//           /* ৪. 🌟 [ফিক্স] .slice(0, 4) ব্যবহার করে এখানে ডাটাবেজের ১৬টি ডাটার মধ্য থেকে শুধুমাত্র প্রথম ৪টি ডাটা রেন্ডার করা হচ্ছে */
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {skills.slice(0, 4).map((skill) => (
//               <div 
//                 key={skill._id} 
//                 className="bg-white rounded-2xl border border-gray-150 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition duration-300"
//               >
//                 <div>
//                   <div className="relative h-48 w-full bg-gray-100">
//                     <img 
//                       src={skill.image} 
//                       alt={skill.title} 
//                       className="w-full h-full object-cover"
//                     />
//                     <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold ${skill.badgeColor} shadow-sm`}>
//                       {skill.badge}
//                     </span>
//                   </div>

//                   <div className="p-5 space-y-3">
//                     <h3 className="text-lg font-bold text-gray-950 leading-snug line-clamp-1">
//                       {skill.title}
//                     </h3>
//                     <p className="text-sm text-gray-500 line-clamp-2">
//                       {skill.desc}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="px-5 pb-5 mt-auto">
//                   <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
//                     <div className="flex items-center gap-2">
//                       <img 
//                         src={skill.mentorImage} 
//                         alt={skill.mentorName} 
//                         className="w-7 h-7 rounded-full object-cover"
//                       />
//                       <span className="text-xs font-semibold text-gray-700">{skill.mentorName}</span>
//                     </div>
//                     <span className="text-xl font-black text-gray-950">{skill.price}</span>
//                   </div>

//                   <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
//                     <div className="flex items-center gap-1">
//                       <span className="text-amber-500 text-sm">★</span>
//                       <span className="text-gray-800 font-bold">{skill.rating}</span>
//                       <span>({skill.reviews})</span>
//                     </div>
//                     <div className="flex items-center gap-1.5">
//                       <span>{skill.duration}</span>
//                       <span className="text-gray-300">•</span>
//                       <span>{skill.lessons}</span>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // আইকনের জন্য ইম্পোর্ট করা হলো

interface SkillType {
  _id: string;
  title: string;
  desc: string;
  badge: string;
  badgeColor: string;
  image: string;
  mentorName: string;
  mentorImage: string;
  rating: string;
  reviews: string;
  price: string;
  duration: string;
  lessons: string;
}

export default function FeaturedSkills() {
  const [skills, setSkills] = useState<SkillType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skills`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch from backend status: ${res.status}`);
        }
        const data = await res.json();
        
        if (Array.isArray(data)) {
          setSkills(data);
        } else {
          setSkills([]);
          setError("Data received from backend is not an array");
        }
      } catch (err: any) {
        console.error("Failed to load skills:", err);
        setError(err.message || "Something went wrong connecting to backend server");
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  // ১. লোডিং স্টেট
  if (loading) {
    return (
      <div className="text-center py-20 font-semibold text-gray-500 animate-pulse">
        Loading Featured Skills from External Backend...
      </div>
    );
  }

  // ২. কানেকশন এরর থাকলে এই লাল বক্স দেখাবে
  if (error) {
    return (
      <div className="text-center py-16 bg-red-50 rounded-2xl border border-red-100 max-w-7xl mx-auto my-10 p-6">
        <p className="text-red-600 font-semibold">⚠️ Backend Server Connection Issue!</p>
        <p className="text-xs text-gray-500 mt-2">
          Please make sure your separate backend project is running on <code className="bg-red-100 px-1 py-0.5 rounded text-red-700">process.env.NEXT_PUBLIC_API_URL</code>.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
              Featured Skills
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Hand-picked skills directly from external MongoDB via Express Backend
            </p>
          </div>
          <Link href="/courses" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
            View all
          </Link>
        </div>

        {/* ৩. ডাটাবেজ সচল কিন্তু কোনো ডাটা না থাকলে (Empty State) */}
        {skills.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-gray-200 rounded-2xl">
            <p className="text-gray-500 font-medium">No skills found in the database! 📭</p>
            <p className="text-xs text-gray-400 mt-1">Please insert some documents into your MongoDB 'skills' collection.</p>
          </div>
        ) : (
          /* ৪. প্রথম ৪টি ডাটা রেন্ডার */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.slice(0, 4).map((skill) => (
              <div 
                key={skill._id} 
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition duration-300 group"
              >
                <div>
                  <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                    <img 
                      src={skill.image} 
                      alt={skill.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold ${skill.badgeColor || 'bg-blue-100 text-blue-700'} shadow-sm`}>
                      {skill.badge}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-gray-950 leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {skill.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 mt-auto flex flex-col">
                  {/* মেন্টর এবং প্রাইস */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <img 
                        src={skill.mentorImage} 
                        alt={skill.mentorName} 
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span className="text-xs font-semibold text-gray-700">{skill.mentorName}</span>
                    </div>
                    <span className="text-xl font-black text-gray-950">{skill.price}</span>
                  </div>

                  {/* রিভিউ এবং ডিউরেশন */}
                  <div className="flex justify-between items-center text-xs text-gray-500 font-medium mb-4">
                    <div className="flex items-center gap-1">
                      <span className="text-amber-500 text-sm">★</span>
                      <span className="text-gray-800 font-bold">{skill.rating}</span>
                      <span>({skill.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>{skill.duration}</span>
                      <span className="text-gray-300">•</span>
                      <span>{skill.lessons}</span>
                    </div>
                  </div>

                  {/* 🌟 [নতুন সংযোজন] ভিউ ডিটেইলস বাটন যা ডাইনামিক রাউটে নিয়ে যাবে */}
                  <Link 
                    href={`/courses/${skill._id}`}
                    className="w-full py-2.5 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
















// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// interface SkillType {
//   _id: string;
//   title: string;
//   desc: string;
//   badge: string;
//   badgeColor: string;
//   image: string;
//   mentorName: string;
//   mentorImage: string;
//   rating: string;
//   reviews: string;
//   price: string;
//   duration: string;
//   lessons: string;
// }

// // সাময়িক মক ডাটা (ডাটাবেজ কানেক্ট না হলেও যেন ডিজাইন দেখতে পারো)
// const mockSkills: SkillType[] = [
//   {
//     _id: '1',
//     title: 'Professional Graphic Design',
//     desc: 'Master Photoshop, Illustrator and branding from scratch.',
//     badge: 'Trending',
//     badgeColor: 'bg-orange-100 text-orange-700',
//     image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=500',
//     mentorName: 'Arif Rahman',
//     mentorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150',
//     rating: '4.9',
//     reviews: '120',
//     price: '$49',
//     duration: '4 Weeks',
//     lessons: '18 Lessons'
//   },
//   {
//     _id: '2',
//     title: 'Frontend Web Development',
//     desc: 'Learn HTML, CSS, Responsive design and modern React.',
//     badge: 'Bestseller',
//     badgeColor: 'bg-blue-100 text-blue-700',
//     image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500',
//     mentorName: 'Monir Hossain',
//     mentorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
//     rating: '4.8',
//     reviews: '95',
//     price: '$59',
//     duration: '6 Weeks',
//     lessons: '24 Lessons'
//   },
//   // তুমি চাইলে এখানে আরও কার্ড অবজেক্ট এড করতে পারো ডিজাইনের সুবিধার্থে
// ];

// export default function FeaturedSkills() {
//   const [skills, setSkills] = useState<SkillType[]>(mockSkills); // ডিফল্ট মক ডাটা দেওয়া হলো
//   const [loading, setLoading] = useState(false); // লোডিং ফলস করে দেওয়া হলো যাতে সরাসরি ডিজাইন দেখা যায়

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         const res = await fetch('process.env.NEXT_PUBLIC_API_URL/api/skills');
//         if (res.ok) {
//           const data = await res.json();
//           if (Array.isArray(data) && data.length > 0) {
//             setSkills(data); // ব্যাকএন্ড সচল হলে লাইভ ডাটা লোড হবে
//           }
//         }
//       } catch (err) {
//         console.log("Backend not running? Using mock data safely.");
//       }
//     };
//     fetchSkills();
//   }, []);

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="flex justify-between items-end mb-10">
//           <div>
//             <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
//               Featured Skills
//             </h2>
//             <p className="mt-2 text-sm text-gray-500">
//               Hand-picked skills directly from our library
//             </p>
//           </div>
//           <Link href="/courses" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
//             View all
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {skills.map((skill) => (
//             <div 
//               key={skill._id} 
//               className="bg-white rounded-2xl border border-gray-150 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition duration-300"
//             >
//               <div>
//                 <div className="relative h-48 w-full bg-gray-100">
//                   <img 
//                     src={skill.image} 
//                     alt={skill.title} 
//                     className="w-full h-full object-cover"
//                   />
//                   <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold ${skill.badgeColor} shadow-sm`}>
//                     {skill.badge}
//                   </span>
//                 </div>

//                 <div className="p-5 space-y-3">
//                   <h3 className="text-lg font-bold text-gray-950 leading-snug line-clamp-1">
//                     {skill.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 line-clamp-2">
//                     {skill.desc}
//                   </p>
//                 </div>
//               </div>

//               <div className="px-5 pb-5 mt-auto">
//                 <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
//                   <div className="flex items-center gap-2">
//                     <img 
//                       src={skill.mentorImage} 
//                       alt={skill.mentorName} 
//                       className="w-7 h-7 rounded-full object-cover"
//                     />
//                     <span className="text-xs font-semibold text-gray-700">{skill.mentorName}</span>
//                   </div>
//                   <span className="text-xl font-black text-gray-950">{skill.price}</span>
//                 </div>

//                 <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
//                   <div className="flex items-center gap-1">
//                     <span className="text-amber-500 text-sm">★</span>
//                     <span className="text-gray-800 font-bold">{skill.rating}</span>
//                     <span>({skill.reviews})</span>
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <span>{skill.duration}</span>
//                     <span className="text-gray-300">•</span>
//                     <span>{skill.lessons}</span>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }