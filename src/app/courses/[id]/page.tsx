'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
// react-icons থেকে সমস্ত প্রফেশনাল ও ব্র্যান্ড আইকন ইম্পোর্ট করা হলো
import { 
  HiOutlineClock, 
  HiOutlineBookOpen, 
  HiOutlineAcademicCap, 
  HiOutlineArrowLeft 
} from 'react-icons/hi';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { 
  BiTrendingUp, 
  BiCheckCircle, 
  BiVideo, 
  BiSelectMultiple 
} from 'react-icons/bi';
import { FiSmartphone, FiShare2, FiLink } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

interface Course {
  _id: string;
  title: string;
  desc?: string;
  category?: string;
  badge?: string;
  badgeColor?: string;
  image: string;
  mentorName?: string;
  mentorImage?: string;
  rating: string | number;
  reviews?: string | number;
  price: string;
  duration: string;
  lessons: string | number;
}

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState<Course | null>(null);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('Overview');

  useEffect(() => {
    async function fetchCourseData() {
      try {
        const response = await fetch('http://localhost:5000/api/skills');
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const data = await response.json();
        if (Array.isArray(data)) {
          setAllCourses(data);
          const foundCourse = data.find((c: Course) => c._id === params.id);
          setCourse(foundCourse || null);
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchCourseData();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50/50">
        <div className="text-slate-500 font-semibold animate-pulse">Loading Premium Layout...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-slate-50/50">
        <p className="text-slate-600 font-medium text-lg">Course not found!</p>
        <button onClick={() => router.back()} className="text-blue-600 flex items-center gap-2 font-semibold">
          <HiOutlineArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    );
  }

  // রিলেটেড স্কিলস ফিল্টারিং (চলতি কোর্স বাদে বাকি ৩টি কোর্স দেখাবে)
  const relatedCourses = allCourses.filter(c => c._id !== course._id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* ১. ব্রেডক্রাম্ব নেভিগেশন (Breadcrumbs) */}
        <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-medium">
          <span className="hover:text-blue-600 cursor-pointer" onClick={() => router.push('/')}>Home</span>
          <span>&gt;</span>
          <span className="hover:text-blue-600 cursor-pointer" onClick={() => router.push('/courses')}>Web Development</span>
          <span>&gt;</span>
          <span className="text-slate-900 font-semibold line-clamp-1">{course.title}</span>
        </nav>

        {/* ২. হিরো সেকশন */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* বামের বড় ইমেজ */}
          <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-sm">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* ডানের টাইটেল ও বুকিং ডিটেইলস */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {course.title}
            </h1>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              {course.desc || "Build modern web applications with expert workflows from scratch with hands-on labs."}
            </p>

            {/* মেন্টর ইনফো */}
            <div className="flex items-center gap-3">
              <img 
                src={course.mentorImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150"} 
                alt={course.mentorName} 
                className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-sm"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-950">{course.mentorName || "Expert Instructor"}</h4>
                <p className="text-xs text-slate-400">Full Stack Developer</p>
              </div>
            </div>

            {/* রেটিং ও রিভিউ */}
            <div className="flex items-center gap-1.5 text-sm">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} className="w-4 h-4" />
                ))}
              </div>
              <span className="text-slate-800 font-bold ml-1">{course.rating || "4.8"}</span>
              <span className="text-slate-400">({course.reviews || "98"} reviews)</span>
            </div>

            {/* প্রাইস ট্যাগ */}
            <div className="text-2xl md:text-3xl font-black text-slate-950">
              {course.price} <span className="text-xs md:text-sm font-medium text-slate-400">/ course</span>
            </div>

            {/* অ্যাকশন বাটন সেকশন */}
            <div className="flex items-center gap-3 pt-2">
              <button className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm md:text-base rounded-xl transition shadow-md shadow-blue-100">
                Book This Course
              </button>
              <button className="p-3.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition text-slate-400 hover:text-red-500">
                <AiOutlineHeart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ৩. ফিচারের হরিজন্টাল বার */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-50/70 border border-slate-100 rounded-2xl text-slate-700 text-xs md:text-sm font-semibold shadow-sm">
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <HiOutlineBookOpen className="w-4 h-4 text-blue-600" />
            <span>{course.lessons || "28"} Lessons</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <HiOutlineClock className="w-4 h-4 text-blue-600" />
            <span>{course.duration || "10 Hours"}</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <BiTrendingUp className="w-4 h-4 text-blue-600" />
            <span>Beginner to Advanced</span>
          </div>
          <div className="flex items-center gap-2.5 justify-center md:justify-start">
            <HiOutlineAcademicCap className="w-4 h-4 text-blue-600" />
            <span>Certificate Included</span>
          </div>
        </div>

        {/* ৪. ট্যাব মেনু সিস্টেম */}
        <div className="border-b border-slate-100 flex gap-6 text-sm md:text-base font-semibold text-slate-400">
          {['Overview', 'Curriculum', 'Instructor', `Reviews (${course.reviews || '98'})`].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.split(' ')[0])}
              className={`pb-3 transition-all relative ${
                activeTab === tab.split(' ')[0] 
                  ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600' 
                  : 'hover:text-slate-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ৫. দুই কলাম কন্টেন্ট */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* বামের বিবরণ পার্ট */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-950">About This Course</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Master the key pillars of this discipline and build production-ready projects with this comprehensive course. From foundation steps up to the core industry-standard architecture, this syllabus is perfectly packaged for career growth.
            </p>
            
            {/* চেকলিস্ট */}
            <ul className="space-y-3 pt-2">
              {[
                'Build real-world professional projects',
                'Best practices & industrial performance standard',
                'Advanced modules, Context architectures, and structures',
                'Deployment strategies & clean optimization workflows'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <BiCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ডানের সাইডবার কন্টেইনার (This Course Includes) */}
          <div className="lg:col-span-5 bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm space-y-6">
            <h4 className="text-base font-bold text-slate-950">This course includes</h4>
            
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <BiVideo className="w-4 h-4 text-slate-400" />
                <span>{course.lessons || "28"} on-demand videos</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineClock className="w-4 h-4 text-slate-400" />
                <span>{course.duration || "10 hours"} content</span>
              </li>
              <li className="flex items-center gap-3">
                <BiSelectMultiple className="w-4 h-4 text-slate-400" />
                <span>Full lifetime access</span>
              </li>
              <li className="flex items-center gap-3">
                <FiSmartphone className="w-4 h-4 text-slate-400" />
                <span>Access on mobile & TV</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineAcademicCap className="w-4 h-4 text-slate-400" />
                <span>Certificate of completion</span>
              </li>
            </ul>

            {/* সোশ্যাল শেয়ার আইকন পার্ট */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Share this course</span>
              <div className="flex gap-2">
                <button className="p-2.5 border border-slate-100 hover:border-slate-200 rounded-xl hover:bg-slate-50 transition text-slate-500 hover:text-blue-600">
                  <FaFacebookF className="w-4 h-4" />
                </button>
                <button className="p-2.5 border border-slate-100 hover:border-slate-200 rounded-xl hover:bg-slate-50 transition text-slate-500 hover:text-blue-600">
                  <FaTwitter className="w-4 h-4" />
                </button>
                <button className="p-2.5 border border-slate-100 hover:border-slate-200 rounded-xl hover:bg-slate-50 transition text-slate-500 hover:text-blue-600">
                  <FaLinkedinIn className="w-4 h-4" />
                </button>
                <button className="p-2.5 border border-slate-100 hover:border-slate-200 rounded-xl hover:bg-slate-50 transition text-slate-500 hover:text-blue-600">
                  <FiLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ৬. রিলেটেড স্কিলস সেকশন */}
        <div className="pt-6 space-y-5">
          <h3 className="text-xl font-bold text-slate-950">Related Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedCourses.map((relCourse) => (
              <div 
                key={relCourse._id}
                onClick={() => router.push(`/courses/${relCourse._id}`)}
                className="bg-slate-950 text-white rounded-xl overflow-hidden flex items-center p-3.5 gap-4 hover:scale-[1.01] transition duration-300 cursor-pointer border border-slate-900 shadow-sm group"
              >
                {/* ইমেজ পার্ট */}
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-800 shrink-0">
                  <img src={relCourse.image} alt="" className="w-full h-full object-cover group-hover:opacity-90" />
                </div>
                
                {/* ইনফরমেশন পার্ট */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h4 className="text-sm font-bold truncate tracking-tight">{relCourse.title}</h4>
                  <div className="flex items-center gap-1 text-xs text-amber-400">
                    <AiFillStar className="w-3 h-3" />
                    <span className="font-semibold text-slate-200">{relCourse.rating}</span>
                    <span className="text-slate-500">({relCourse.reviews || "50"})</span>
                  </div>
                </div>

                {/* প্রাইস */}
                <div className="text-sm font-black text-slate-200 pr-1">
                  {relCourse.price}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}