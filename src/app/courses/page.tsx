// 'use client';

// import React, { useState, useEffect } from 'react';
// import { BookOpen, Star, Clock, ArrowRight } from 'lucide-react';

// interface Course {
//   _id: string; // মঙ্গোডিবির ইউনিক আইডি
//   title: string;
//   category: string;
//   mentor: string;
//   rating: number;
//   duration: string;
//   lessons: number;
//   price: string;
//   image: string;
// }

// const CATEGORIES = ['All', 'Development', 'Design', 'Marketing'];

// export default function CoursesPage() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('All');
//   const [loading, setLoading] = useState<boolean>(true);

//   // মঙ্গোডিবি ব্যাকএন্ড এপিআই থেকে ডাটা ফেচ করার লজিক
//   useEffect(() => {
//     async function fetchCourses() {
//       try {
//         // তোমার প্রজেক্টের রিয়েল এপিআই রুটটি (যেমন: '/api/courses') এখানে বসাবে
//         const response = await fetch('/api/courses');
//         const data = await response.json();
        
//         if (Array.isArray(data)) {
//           setCourses(data);
//         } else if (data && Array.isArray(data.courses)) {
//           setCourses(data.courses);
//         }
//       } catch (error) {
//         console.error('Error fetching courses from MongoDB:', error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchCourses();
//   }, []);

//   // ক্যাটাগরি অনুযায়ী মঙ্গোডিবির ডাটা ফিল্টার করার লজিক
//   const filteredCourses = selectedCategory === 'All'
//     ? courses
//     : courses.filter(course => course.category?.toLowerCase() === selectedCategory.toLowerCase());

//   return (
//     <main className="min-h-screen bg-slate-50/50 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
        
//         {/* পেজ হেডার */}
//         <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
//             Explore Our Professional Courses
//           </h1>
//           <p className="text-sm md:text-base text-slate-500">
//             Choose from top-rated courses designed by industry experts to boost your career.
//           </p>
//         </div>

//         {/* ক্যাটাগরি ফিল্টার ট্যাবস */}
//         <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
//           {CATEGORIES.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-5 py-2 rounded-xl text-sm font-medium transition shadow-sm ${
//                 selectedCategory === category
//                   ? 'bg-blue-600 text-white shadow-blue-100'
//                   : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* লোডিং স্টেট */}
//         {loading ? (
//           <div className="text-center py-20 text-slate-500 font-medium">
//             Loading courses from database...
//           </div>
//         ) : filteredCourses.length === 0 ? (
//           <div className="text-center py-20 text-slate-500 font-medium">
//             No courses found in this category.
//           </div>
//         ) : (
//           /* কোর্সের রেসপনসিভ গ্রিড লেআউট - মঙ্গোডিবির সব ডাটা এখানে দেখাবে */
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredCourses.map((course) => (
//               <div
//                 key={course._id}
//                 className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col group"
//               >
//                 {/* কোর্স ইমেজ কন্টেইনার */}
//                 <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
//                   <img
//                     src={course.image || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop'}
//                     alt={course.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//                   />
//                   <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-slate-800 shadow-sm">
//                     {course.category}
//                   </span>
//                 </div>

//                 {/* কোর্স কন্টেন্ট পার্ট */}
//                 <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
//                   <div className="space-y-2">
//                     {/* মেন্টর এবং রেটিং */}
//                     <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
//                       <span>By {course.mentor}</span>
//                       <div className="flex items-center gap-1 text-amber-500">
//                         <Star className="w-3.5 h-3.5 fill-current" />
//                         <span className="text-slate-700 font-semibold">{course.rating || 5.0}</span>
//                       </div>
//                     </div>

//                     {/* কোর্সের শিরোনাম */}
//                     <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
//                       {course.title}
//                     </h3>
//                   </div>

//                   {/* ডিউরেশন, লেসন এবং প্রাইস */}
//                   <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
//                     <div className="flex items-center gap-3 text-xs text-slate-500">
//                       <div className="flex items-center gap-1">
//                         <Clock className="w-3.5 h-3.5" />
//                         <span>{course.duration || '12h'}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <BookOpen className="w-3.5 h-3.5" />
//                         <span>{course.lessons || 10} Lessons</span>
//                       </div>
//                     </div>
//                     <span className="text-lg font-extrabold text-blue-600">{course.price}</span>
//                   </div>

//                   {/* এনরোল বাটন */}
//                   <button className="w-full py-2.5 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-700 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2">
//                     <span>Enroll Now</span>
//                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </main>
//   );
// }

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { BookOpen, Star, Clock, ArrowRight } from 'lucide-react';

// interface Course {
//   _id: string;
//   title: string;
//   desc?: string;
//   category?: string;
//   badge?: string;
//   badgeColor?: string;
//   image: string;
//   mentorName?: string; // ব্যাকএন্ডের ডাটার সাথে মিলানো হলো
//   mentor?: string;     // ব্যাকআপ সেফটি
//   rating: string | number;
//   reviews?: string | number;
//   price: string;
//   duration: string;
//   lessons: string | number;
// }

// const CATEGORIES = ['All', 'Development', 'Design', 'Marketing'];

// export default function CoursesPage() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('All');
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     async function fetchCourses() {
//       try {
//         const response = await fetch('process.env.NEXT_PUBLIC_API_URL/api/skills');
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         console.log("Frontend received data:", data); // ব্রাউজার কনসোলে ডাটা চেক করার জন্য
        
//         if (Array.isArray(data)) {
//           setCourses(data);
//         }
//       } catch (error) {
//         console.error('Error fetching courses from Backend Server:', error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchCourses();
//   }, []);

//   // ডাটাবেজের ফিল্ডের নাম বা ক্যাটাগরি ফ্লেক্সিবল রাখার জন্য উন্নত ফিল্টারিং লজিক
//   const filteredCourses = selectedCategory === 'All'
//     ? courses
//     : courses.filter(course => {
//         // যদি ডাটাবেজে কোনো কোর্সের নির্দিষ্ট ক্যাটাগরি না থাকে, তবে টাইটেল থেকে অনুমান করার চেষ্টা করবে
//         const courseCategory = course.category || 
//           (course.title.toLowerCase().includes('development') || course.title.toLowerCase().includes('python') || course.title.toLowerCase().includes('javascript') ? 'Development' : 
//            course.title.toLowerCase().includes('design') || course.title.toLowerCase().includes('figma') ? 'Design' : 
//            course.title.toLowerCase().includes('marketing') ? 'Marketing' : 'Development');
           
//         return courseCategory.toLowerCase().trim() === selectedCategory.toLowerCase().trim();
//       });

//   return (
//     <main className="min-h-screen bg-slate-50/50 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
        
//         {/* পেজ হেডার */}
//         <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
//             Explore Our Professional Courses
//           </h1>
//           <p className="text-sm md:text-base text-slate-500">
//             Choose from top-rated courses designed by industry experts to boost your career.
//           </p>
//         </div>

//         {/* ক্যাটাগরি ফিল্টার ট্যাবস */}
//         <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
//           {CATEGORIES.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-5 py-2 rounded-xl text-sm font-medium transition shadow-sm ${
//                 selectedCategory === category
//                   ? 'bg-blue-600 text-white shadow-blue-100'
//                   : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* লোডিং স্টেট */}
//         {loading ? (
//           <div className="text-center py-20 text-slate-500 font-medium">
//             Loading courses from backend server...
//           </div>
//         ) : filteredCourses.length === 0 ? (
//           <div className="text-center py-20 text-slate-500 font-medium">
//             No courses found in this category. Try switching categories!
//           </div>
//         ) : (
//           /* কোর্সের রেসপনসিভ গ্রিড লেআউট */
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredCourses.map((course) => (
//               <div
//                 key={course._id}
//                 className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col group"
//               >
//                 {/* কোর্স ইমেজ কন্টেইনার */}
//                 <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
//                   <img
//                     src={course.image || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop'}
//                     alt={course.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//                   />
//                   {/* ব্যাজ থাকলে দেখাবে, না থাকলে ডাইনামিক ক্যাটাগরি দেখাবে */}
//                   <span className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-semibold shadow-sm ${course.badgeColor || 'bg-white/90 text-slate-800 backdrop-blur-sm'}`}>
//                     {course.badge || course.category || 'Skill'}
//                   </span>
//                 </div>

//                 {/* কোর্স কন্টেন্ট পার্ট */}
//                 <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
//                   <div className="space-y-2">
//                     {/* মেন্টর এবং রেটিং */}
//                     <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
//                       <span className="flex items-center gap-1.5">
//                         {course.mentorImage && (
//                           <img src={course.mentorImage} alt="" className="w-4 h-4 rounded-full object-cover" />
//                         )}
//                         By {course.mentorName || course.mentor || 'Expert'}
//                       </span>
//                       <div className="flex items-center gap-1 text-amber-500">
//                         <Star className="w-3.5 h-3.5 fill-current" />
//                         <span className="text-slate-700 font-semibold">{course.rating || '4.8'}</span>
//                         {course.reviews && <span className="text-slate-400">({course.reviews})</span>}
//                       </div>
//                     </div>

//                     {/* কোর্সের শিরোনাম */}
//                     <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
//                       {course.title}
//                     </h3>
                    
//                     {/* ডেসক্রিপশন (যদি থাকে) */}
//                     {course.desc && (
//                       <p className="text-xs text-slate-500 line-clamp-2 pt-1">
//                         {course.desc}
//                       </p>
//                     )}
//                   </div>

//                   {/* ডিউরেশন, লেসন এবং প্রাইস */}
//                   <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
//                     <div className="flex items-center gap-3 text-xs text-slate-500">
//                       <div className="flex items-center gap-1">
//                         <Clock className="w-3.5 h-3.5" />
//                         <span>{course.duration || '8 Weeks'}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <BookOpen className="w-3.5 h-3.5" />
//                         <span>{course.lessons || '30 Lessons'}</span>
//                       </div>
//                     </div>
//                     <span className="text-lg font-extrabold text-blue-600">{course.price}</span>
//                   </div>

//                   {/* এনরোল বাটন */}
//                   <button className="w-full py-2.5 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-700 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2">
//                     <span>Enroll Now</span>
//                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </main>
//   );
// }

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // ডিটেইলস পেজে নেভিগেট করার জন্য
// react-icons থেকে সমস্ত প্রফেশনাল ও এরর-ফ্রি আইকন ইম্পোর্ট করা হলো
import { HiOutlineClock, HiOutlineBookOpen } from 'react-icons/hi';
import { AiFillStar } from 'react-icons/ai';

interface Course {
  _id: string;
  title: string;
  desc?: string;
  category?: string;
  badge?: string;
  badgeColor?: string;
  image: string;
  mentorName?: string; 
  mentor?: string;     
  rating: string | number;
  reviews?: string | number;
  price: string;
  duration: string;
  lessons: string | number;
}

const CATEGORIES = ['All', 'Development', 'Design', 'Marketing'];

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch('process.env.NEXT_PUBLIC_API_URL/api/skills');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Frontend received data:", data); 
        
        if (Array.isArray(data)) {
          setCourses(data);
        }
      } catch (error) {
        console.error('Error fetching courses from Backend Server:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => {
        const courseCategory = course.category || 
          (course.title.toLowerCase().includes('development') || course.title.toLowerCase().includes('python') || course.title.toLowerCase().includes('javascript') ? 'Development' : 
           course.title.toLowerCase().includes('design') || course.title.toLowerCase().includes('figma') ? 'Design' : 
           course.title.toLowerCase().includes('marketing') ? 'Marketing' : 'Development');
           
        return courseCategory.toLowerCase().trim() === selectedCategory.toLowerCase().trim();
      });

  return (
    <main className="min-h-screen bg-slate-50/50 py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* পেজ হেডার */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Explore Our Professional Courses
          </h1>
          <p className="text-sm md:text-base text-slate-500">
            Choose from top-rated courses designed by industry experts to boost your career.
          </p>
        </div>

        {/* ক্যাটাগরি ফিল্টার ট্যাবস */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition shadow-sm ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-blue-100'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* লোডিং ও এম্পটি স্টেট */}
        {loading ? (
          <div className="text-center py-20 text-slate-500 font-medium animate-pulse">
            Loading courses from backend server...
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-20 text-slate-500 font-medium">
            No courses found in this category. Try switching categories!
          </div>
        ) : (
          /* কোর্সের রেসপনসিভ গ্রিড লেআউট */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col group"
              >
                {/* কোর্স ইমেজ কন্টেইনার */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <img
                    src={course.image || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop'}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                  />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-semibold shadow-sm ${course.badgeColor || 'bg-white/90 text-slate-800 backdrop-blur-sm'}`}>
                    {course.badge || course.category || 'Skill'}
                  </span>
                </div>

                {/* কোর্স কন্টেন্ট পার্ট */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* মেন্টর এবং রেটিং */}
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5">
                        {course.mentorImage && (
                          <img src={course.mentorImage} alt="" className="w-4 h-4 rounded-full object-cover" />
                        )}
                        By {course.mentorName || course.mentor || 'Expert'}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500">
                        <AiFillStar className="w-3.5 h-3.5" />
                        <span className="text-slate-700 font-semibold">{course.rating || '4.8'}</span>
                        {course.reviews && <span className="text-slate-400">({course.reviews})</span>}
                      </div>
                    </div>

                    {/* কোর্সের শিরোনাম */}
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    
                    {/* ডেসক্রিপশন */}
                    {course.desc && (
                      <p className="text-xs text-slate-500 line-clamp-2 pt-1">
                        {course.desc}
                      </p>
                    )}
                  </div>

                  {/* ডিউরেশন, লেসন এবং প্রাইস */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <HiOutlineClock className="w-3.5 h-3.5" />
                        <span>{course.duration || '8 Weeks'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiOutlineBookOpen className="w-3.5 h-3.5" />
                        <span>{course.lessons || '30 Lessons'}</span>
                      </div>
                    </div>
                    <span className="text-lg font-extrabold text-blue-600">{course.price}</span>
                  </div>

                  {/* 🌟 [নতুন সংযোজন] পাশাপাশি জোড়া বাটন লেআউট */}
                  <div className="flex items-center gap-2 pt-1">
                    {/* ভিউ ডিটেইলস বাটন যা ডাইনামিক রাউটে নিয়ে যাবে */}
                    <Link 
                      href={`/courses/${course._id}`}
                      className="flex-1 py-2.5 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-semibold text-center text-xs md:text-sm rounded-xl transition bg-white"
                    >
                      View Details
                    </Link>

                    {/* সলিড এনরোল নাও বাটন */}
                    <button 
                      onClick={() => alert('Redirecting to Checkout/Enrollment...')}
                      className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs md:text-sm rounded-xl transition shadow-sm"
                    >
                      Enroll Now
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}