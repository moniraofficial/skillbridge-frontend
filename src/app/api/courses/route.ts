// import { NextResponse } from 'next/server';
// // মনে রাখবে: তোমার প্রজেক্টে মঙ্গোডিবি কানেকশনের ফাইল ও মডেলের পাথ অনুযায়ী নিচের ২টা লাইন ইম্পোর্ট চেঞ্জ হতে পারে।
// // এখানে একটি স্ট্যান্ডার্ড স্ট্রাকচার দেওয়া হলো:

// import mongoose from 'mongoose';
// import { connectDB } from '@/lib/db';

// // মঙ্গোডিবির জন্য কোর্স স্কিমা ও মডেল (যদি অলরেডি অন্য কোথাও তৈরি করা না থাকে)
// const CourseSchema = new mongoose.Schema({
//   title: String,
//   category: String,
//   mentor: String,
//   rating: Number,
//   duration: String,
//   lessons: Number,
//   price: String,
//   image: String,
// });

// // মডেল অলরেডি থাকলে সেটা নেবে, না থাকলে নতুন বানাবে
// const CourseModel = mongoose.models.Course || mongoose.model('Course', CourseSchema);

// export async function GET() {
//   try {
//     // ১. ডাটাবেজ কানেক্ট করা
//     await connectDB();

//     // ২. মঙ্গোডিবি থেকে সব কোর্স ডাটা খুঁজে বের করা
//     const courses = await CourseModel.find({});

//     // ৩. সাকসেসফুল রেসপন্স রিটার্ন করা
//     return NextResponse.json(courses, { status: 200 });
//   } catch (error: any) {
//     console.error("MongoDB Fetch Error:", error);
//     return NextResponse.json(
//       { message: "Failed to fetch courses from MongoDB", error: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: String,
  category: String,
  mentor: String,
  rating: Number,
  duration: String,
  lessons: Number,
  price: String,
  image: String,
}, { 
  // 💡 এখানে আপনার ডাটাবেজের আসল কালেকশন 'skills' নির্দিষ্ট করে দেওয়া হলো
  collection: 'skills' 
});

// মডেল অলরেডি তৈরি থাকলে সেটা নেবে, না থাকলে নতুন স্কিমা দিয়ে skills কালেকশন ট্র্যাক করবে
const CourseModel = mongoose.models.Course || mongoose.model('Course', CourseSchema);

export async function GET() {
  try {
    await connectDB();

    // মঙ্গোডিবির skills কালেকশন থেকে সব ডাটা নিয়ে আসা হচ্ছে
    const courses = await CourseModel.find({});
    
    console.log("MongoDB 'skills' collection data count:", courses.length);

    return NextResponse.json(courses, { status: 200 });
  } catch (error: any) {
    console.error("MongoDB Fetch Error:", error);
    return NextResponse.json(
      { message: "Failed to fetch skills from MongoDB", error: error.message },
      { status: 500 }
    );
  }
}