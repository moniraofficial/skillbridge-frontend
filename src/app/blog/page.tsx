'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, User, Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export default function BlogPage() {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "How to Land Your First Tech Job in 2026",
      excerpt: "The tech landscape is shifting rapidly. Discover the key skills and networking strategies you need to secure your first developer role this year.",
      category: "Career Advice",
      author: "Sarah Jenkins",
      date: "July 12, 2026",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mastering TypeScript: 5 Advanced Patterns",
      excerpt: "Move beyond basic types. Learn how to write cleaner, safer, and more scalable React components using advanced TypeScript features.",
      category: "Development",
      author: "Alex Rivera",
      date: "July 08, 2026",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "The Power of Mentorship in Software Engineering",
      excerpt: "Self-studying can only take you so far. Find out how having an experienced mentor can accelerate your coding journey by 10x.",
      category: "Mentorship",
      author: "Rahat Chowdhury",
      date: "June 28, 2026",
      readTime: "4 min read"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 md:py-24">
      <div className="max-w-5xl mx-auto">
        
        {/* হেডার সেকশন */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
            Our Publications
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mt-3 sm:text-5xl">
            SkillBridge Blog
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-3">
            Stay updated with the latest industry insights, career tips, and tutorials curated by top-tier mentors.
          </p>
        </div>

        {/* ব্লগ পোস্ট গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6 flex-1 flex flex-col">
                {/* ক্যাটাগরি */}
                <span className="text-xs font-semibold text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded-full self-start mb-4">
                  {post.category}
                </span>

                {/* টাইটেল এবং এক্সসার্প্ট */}
                <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-slate-500 line-clamp-3 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* মেটা ডাটা */}
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>

              {/* রিড মোর বাটন */}
              <div className="px-6 pb-6 pt-0">
                <Link 
                  href={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  Read Article 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}