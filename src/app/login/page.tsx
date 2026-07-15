// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-hot-toast';
// import { FaEye, FaEyeSlash, FaGraduationCap } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';

// export default function LoginPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false);

//   // ইনপুট চেঞ্জ হ্যান্ডলার
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // সাবমিট হ্যান্ডলার (সাময়িকভাবে টোস্ট নোটিফিকেশন দেখাবে)
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     // বেসিক ভ্যালিডেশন
//     if (!formData.email || !formData.password) {
//       toast.error('Please fill in all fields!');
//       setLoading(false);
//       return;
//     }

//     try {
//       // এখানে পরে আমরা আমাদের ব্যাকএন্ডের লগইন এপিআই কানেক্ট করব
//       console.log('Logging in with:', formData);
      
//       // সাময়িক ডেমো লগইন সাকসেস টোস্ট
//       toast.success('Successfully logged in! 🎉');
      
//       // ড্যাশবোর্ড বা হোম পেজে রিডাইরেক্ট করা
//       router.push('/');
//     } catch (error: any) {
//       toast.error(error.message || 'Login failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // গুগল লগইন হ্যান্ডলার (সাময়িক)
//   const handleGoogleSignIn = () => {
//     toast.success('Connecting to Google...');
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      
//       {/* মেইন কার্ড কন্টেইনার */}
//       <div className="w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-10 transition duration-300">
        
//         {/* লোগো ও হেডার সেকশন */}
//         <div className="flex flex-col items-center mb-8">
//           <div className="flex items-center gap-2 text-blue-600 mb-3">
//             <FaGraduationCap className="text-3xl" />
//             <span className="text-2xl font-bold tracking-tight text-slate-900">
//               SkillBridge
//             </span>
//           </div>
//           <h2 className="text-3xl font-bold text-slate-950">Welcome Back!</h2>
//           <p className="text-sm text-gray-400 mt-1.5">
//             Sign in to your account to continue
//           </p>
//         </div>

//         {/* ফর্ম */}
//         <form onSubmit={handleSubmit} className="space-y-5">
          
//           {/* ইমেইল ইনপুট */}
//           <div className="space-y-1.5">
//             <label className="text-xs font-bold text-slate-700 tracking-wide">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition-all"
//               required
//             />
//           </div>

//           {/* পাসওয়ার্ড ইনপুট */}
//           <div className="space-y-1.5">
//             <div className="flex justify-between items-center">
//               <label className="text-xs font-bold text-slate-700 tracking-wide">
//                 Password
//               </label>
//               <Link 
//                 href="/forgot-password" 
//                 className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
//               >
//                 Forgot?
//               </Link>
//             </div>
            
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full pl-4 pr-11 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition-all"
//                 required
//               />
//               {/* পাসওয়ার্ড শো/হাইড বাটন */}
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
//               >
//                 {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
//               </button>
//             </div>
//           </div>

//           {/* সাইন-ইন বাটন */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#111827] text-white py-3 rounded-2xl font-bold text-sm hover:bg-slate-900 transition duration-300 disabled:opacity-70 flex justify-center items-center shadow-md shadow-slate-200"
//           >
//             {loading ? 'Signing In...' : 'Sign In'}
//           </button>

//         </form>

//         {/* ওআর (OR) ডিভাইডার */}
//         <div className="relative my-6 text-center">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-150"></div>
//           </div>
//           <span className="relative px-3 bg-white text-xs font-bold text-gray-400 tracking-wider">
//             OR
//           </span>
//         </div>

//         {/* গুগল দিয়ে লগইন বাটন */}
//         <button
//           onClick={handleGoogleSignIn}
//           type="button"
//           className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 bg-white text-slate-700 py-3 rounded-2xl font-semibold text-sm transition duration-300"
//         >
//           <FcGoogle className="text-lg" />
//           Sign in with Google
//         </button>

//         {/* রেজিস্ট্রেশন করার লিঙ্ক */}
//         <div className="text-center mt-6">
//           <p className="text-xs text-gray-500 font-medium">
//             Don't have an account?{' '}
//             <Link 
//               href="/register" 
//               className="font-bold text-blue-600 hover:text-blue-700 transition"
//             >
//               Register
//             </Link>
//           </p>
//         </div>

//       </div>

//     </div>
//   );
// }

// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-hot-toast';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import { FaFacebook } from 'react-icons/fa';
// import { FiUser } from 'react-icons/fi';

// export default function LoginPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false);

//   // ইনপুট চেঞ্জ হ্যান্ডলার
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // 🌟 ডেমো ক্রেডেনশিয়াল ফিল করার ফাংশন
//   const handleDemoLoginClick = () => {
//     setFormData({
//       email: 'demo@skillbridge.com',
//       password: 'demoPassword123',
//     });
//     toast.success('Demo credentials loaded! Click Login.');
//   };

//   // সাবমিট হ্যান্ডলার
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!formData.email || !formData.password) {
//       toast.error('Please fill in all fields!');
//       setLoading(false);
//       return;
//     }

//     try {
//       console.log('Logging in with:', formData);
//       toast.success('Successfully logged in! 🎉');
//       router.push('/');
//     } catch (error: any) {
//       toast.error(error.message || 'Login failed.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6">

        
      
//       {/* মেইন কন্টেইনার (অ্যাসাইনমেন্ট স্যাম্পল অনুযায়ী নো-বর্ডার, ম্যাক্সিমাম ক্লিন লুক) */}
//       <div className="w-full max-w-sm space-y-6">
        


        
//         {/* টাইটেল */}
//         <div>
//           <h2 className="text-xl font-bold text-slate-900 tracking-tight">
//             Login to your account
//           </h2>
//         </div>

//         {/* ফর্ম */}
//         <form onSubmit={handleSubmit} className="space-y-4">
          
//           {/* ইমেইল */}
//           <div className="space-y-1">
//             <label className="text-xs font-semibold text-slate-800">
//               Email address
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
//               required
//             />
//           </div>

//           {/* পাসওয়ার্ড */}
//           <div className="space-y-1">
//             <label className="text-xs font-semibold text-slate-800">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full pl-3 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <FaEyeSlash className="text-base" /> : <FaEye className="text-base" />}
//               </button>
//             </div>
//           </div>

//           {/* ফরগট পাসওয়ার্ড লিঙ্ক */}
//           <div className="text-right">
//             <Link 
//               href="/forgot-password" 
//               className="text-xs font-medium text-blue-600 hover:underline"
//             >
//               Forgot password?
//             </Link>
//           </div>

//           {/* নীল রঙের লগইন বাটন */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#1b6ff8] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-600 transition duration-200 disabled:opacity-70 text-center"
//           >
//             {loading ? 'Logging In...' : 'Login'}
//           </button>

//         </form>

//         {/* ডিভাইডার */}
//         <div className="relative text-center my-4">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-100"></div>
//           </div>
//           <span className="relative px-2 bg-white text-xs text-gray-400 font-medium">
//             or continue with
//           </span>
//         </div>

//         {/* সোশ্যাল বাটনসমূহ */}
//         <div className="space-y-2">
//           {/* গুগল */}
//           <button
//             type="button"
//             onClick={() => toast.success('Connecting to Google...')}
//             className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 bg-white text-slate-700 py-2.5 rounded-lg text-xs font-semibold transition"
//           >
//             <FcGoogle className="text-base" />
//             Continue with Google
//           </button>

//           {/* ফেসবুক */}
//           <button
//             type="button"
//             onClick={() => toast.success('Connecting to Facebook...')}
//             className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 bg-white text-slate-700 py-2.5 rounded-lg text-xs font-semibold transition"
//           >
//             <FaFacebook className="text-base text-[#1877F2]" />
//             Continue with Facebook
//           </button>
//         </div>

//         {/* 🌟 ডেমো লগইন বক্স (অ্যাসাইনমেন্টের স্পেশাল রিকোয়ারমেন্ট) */}
//         <div 
//           onClick={handleDemoLoginClick}
//           className="w-full bg-slate-50 border border-slate-100 hover:bg-slate-100 rounded-xl p-4 flex items-start gap-3 cursor-pointer transition select-none"
//         >
//           <div className="mt-0.5 text-slate-700 bg-white p-1.5 rounded-md border border-gray-200">
//             <FiUser className="text-base" />
//           </div>
//           <div>
//             <p className="text-xs font-bold text-blue-600">Demo Login</p>
//             <p className="text-[11px] text-gray-500 mt-0.5">(Click to fill demo credentials)</p>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }

// ++++++++++++++++++++++++


// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-hot-toast';
// import { FaEye, FaEyeSlash, FaGraduationCap } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import { FaFacebook } from 'react-icons/fa';
// import { FiUser } from 'react-icons/fi';

// export default function LoginPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false);

//   // ইনপুট চেঞ্জ হ্যান্ডলার
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ডেমো ক্রেডেনশিয়াল ফিল করার ফাংশন
//   const handleDemoLoginClick = () => {
//     setFormData({
//       email: 'demo@skillbridge.com',
//       password: 'demoPassword123',
//     });
//     toast.success('Demo credentials loaded! Click Login.');
//   };

//   // সাবমিট হ্যান্ডলার
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!formData.email || !formData.password) {
//       toast.error('Please fill in all fields!');
//       setLoading(false);
//       return;
//     }

//     try {
//       console.log('Logging in with:', formData);
//       toast.success('Successfully logged in! 🎉');
//       router.push('/');
//     } catch (error: any) {
//       toast.error(error.message || 'Login failed.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6">
      
//       {/* মেইন কন্টেইনার */}
//       <div className="w-full max-w-sm space-y-6">
        
//         {/* 🌟 [নতুন সংযোজন] লোগো, Welcome Back এবং সাবটাইটেল হেডার */}
//         <div className="flex flex-col items-center text-center">
//           {/* লোগো আইকন ও নাম */}
//           <div className="flex items-center gap-2 text-[#1b6ff8] mb-2">
//             <FaGraduationCap className="text-3xl" />
//             <span className="text-2xl font-bold tracking-tight text-slate-900">
//               SkillBridge
//             </span>
//           </div>
//           {/* স্বাগতম বার্তা */}
//           <h2 className="text-3xl font-bold text-slate-950 tracking-tight mt-1">
//             Welcome Back!
//           </h2>
//           {/* সাবটাইটেল */}
//           <p className="text-sm text-gray-400 mt-2 font-normal">
//             Sign in to your account to continue
//           </p>
//         </div>

//         {/* ফর্ম */}
//         <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          
//           {/* ইমেইল */}
//           <div className="space-y-1">
//             <label className="text-xs font-semibold text-slate-800">
//               Email address
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
//               required
//             />
//           </div>

//           {/* পাসওয়ার্ড */}
//           <div className="space-y-1">
//             <label className="text-xs font-semibold text-slate-800">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full pl-3 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <FaEyeSlash className="text-base" /> : <FaEye className="text-base" />}
//               </button>
//             </div>
//           </div>

//           {/* ফরগট পাসওয়ার্ড লিঙ্ক */}
//           <div className="text-right">
//             <Link 
//               href="/forgot-password" 
//               className="text-xs font-medium text-blue-600 hover:underline"
//             >
//               Forgot password?
//             </Link>
//           </div>

//           {/* নীল রঙের লগইন বাটন */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#1b6ff8] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-600 transition duration-200 disabled:opacity-70 text-center"
//           >
//             {loading ? 'Logging In...' : 'Login'}
//           </button>

//         </form>

//         {/* ডিভাইডার */}
//         <div className="relative text-center my-4">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-100"></div>
//           </div>
//           <span className="relative px-2 bg-white text-xs text-gray-400 font-medium">
//             or continue with
//           </span>
//         </div>

//         {/* সোশ্যাল বাটনসমূহ */}
//         <div className="space-y-2">
//           {/* গুগল */}
//           <button
//             type="button"
//             onClick={() => toast.success('Connecting to Google...')}
//             className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 bg-white text-slate-700 py-2.5 rounded-lg text-xs font-semibold transition"
//           >
//             <FcGoogle className="text-base" />
//             Continue with Google
//           </button>

//           {/* ফেসবুক */}
//           <button
//             type="button"
//             onClick={() => toast.success('Connecting to Facebook...')}
//             className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 bg-white text-slate-700 py-2.5 rounded-lg text-xs font-semibold transition"
//           >
//             <FaFacebook className="text-base text-[#1877F2]" />
//             Continue with Facebook
//           </button>
//         </div>

//         {/* ডেমো লগইন বক্স */}
//         <div 
//           onClick={handleDemoLoginClick}
//           className="w-full bg-slate-50 border border-slate-100 hover:bg-slate-100 rounded-xl p-4 flex items-start gap-3 cursor-pointer transition select-none"
//         >
//           <div className="mt-0.5 text-slate-700 bg-white p-1.5 rounded-md border border-gray-200">
//             <FiUser className="text-base" />
//           </div>
//           <div>
//             <p className="text-xs font-bold text-blue-600">Demo Login</p>
//             <p className="text-[11px] text-gray-500 mt-0.5">(Click to fill demo credentials)</p>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }

// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-hot-toast';
// import { FaEye, FaEyeSlash, FaGraduationCap } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import { FaFacebook } from 'react-icons/fa';
// import { FiUser } from 'react-icons/fi';
// import { authClient } from '@/lib/auth-client';

// export default function LoginPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false);

//   // ইনপুট চেঞ্জ হ্যান্ডলার
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ডেমো ক্রেডেনশিয়াল ফিল করার ফাংশন
//   const handleDemoLoginClick = () => {
//     setFormData({
//       email: 'demo@skillbridge.com',
//       password: 'demoPassword123',
//     });
//     toast.success('Demo credentials loaded! Click Login.');
//   };

//   // সাবমিট হ্যান্ডলার
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!formData.email || !formData.password) {
//       toast.error('Please fill in all fields!');
//       setLoading(false);
//       return;
//     }

//     try {
//       // 🌟 BetterAuth ইমেইল সাইন-ইন মেথড কল
//       const { data, error } = await authClient.signIn.email({
//         email: formData.email,
//         password: formData.password,
//         callbackURL: "/",
//       });

//       if (error) {
//         toast.error(error.message || 'Invalid email or password.');
//       } else {
//         toast.success('Successfully logged in! 🎉');
//         router.push('/');
//       }
//     } catch (error: any) {
//       toast.error(error.message || 'Login failed.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🌟 সোশ্যাল লগইন হ্যান্ডলার (BetterAuth)
//   const handleSocialLogin = async (provider: 'google' | 'facebook') => {
//     try {
//       await authClient.signIn.social({
//         provider,
//         callbackURL: '/',
//       });
//     } catch (error: any) {
//       toast.error(`Failed to connect with ${provider}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6">
      
//       {/* মেইন কন্টেইনার */}
//       <div className="w-full max-w-sm space-y-6">
        
//         {/* লোগো, Welcome Back এবং সাবটাইটেল হেডার */}
//         <div className="flex flex-col items-center text-center">
//           {/* লোগো আইকন ও নাম */}
//           <div className="flex items-center gap-2 text-[#1b6ff8] mb-2">
//             <FaGraduationCap className="text-3xl" />
//             <span className="text-2xl font-bold tracking-tight text-slate-900">
//               SkillBridge
//             </span>
//           </div>
//           {/* স্বাগতম বার্তা */}
//           <h2 className="text-3xl font-bold text-slate-950 tracking-tight mt-1">
//             Welcome Back!
//           </h2>
//           {/* সাবটাইটেল */}
//           <p className="text-sm text-gray-400 mt-2 font-normal">
//             Sign in to your account to continue
//           </p>
//         </div>

//         {/* ফর্ম */}
//         <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          
//           {/* ইমেইল */}
//           <div className="space-y-1">
//             <label className="text-xs font-semibold text-slate-800">
//               Email address
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
//               required
//             />
//           </div>

//           {/* পাসওয়ার্ড */}
//           <div className="space-y-1">
//             <label className="text-xs font-semibold text-slate-800">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full pl-3 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <FaEyeSlash className="text-base" /> : <FaEye className="text-base" />}
//               </button>
//             </div>
//           </div>

//           {/* ফরগট পাসওয়ার্ড লিঙ্ক */}
//           <div className="text-right">
//             <Link 
//               href="/forgot-password" 
//               className="text-xs font-medium text-blue-600 hover:underline"
//             >
//               Forgot password?
//             </Link>
//           </div>

//           {/* নীল রঙের লগইন বাটন */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#1b6ff8] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-600 transition duration-200 disabled:opacity-70 text-center"
//           >
//             {loading ? 'Logging In...' : 'Login'}
//           </button>

//         </form>

//         {/* ডিভাইডার */}
//         <div className="relative text-center my-4">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-100"></div>
//           </div>
//           <span className="relative px-2 bg-white text-xs text-gray-400 font-medium">
//             or continue with
//           </span>
//         </div>

//         {/* সোশ্যাল বাটনসমূহ */}
//         <div className="space-y-2">
//           {/* গুগল */}
//           <button
//             type="button"
//             onClick={() => handleSocialLogin('google')}
//             className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 bg-white text-slate-700 py-2.5 rounded-lg text-xs font-semibold transition"
//           >
//             <FcGoogle className="text-base" />
//             Continue with Google
//           </button>

//           {/* ফেসবুক */}
//           <button
//             type="button"
//             onClick={() => handleSocialLogin('facebook')}
//             className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 bg-white text-slate-700 py-2.5 rounded-lg text-xs font-semibold transition"
//           >
//             <FaFacebook className="text-base text-[#1877F2]" />
//             Continue with Facebook
//           </button>
//         </div>

//         {/* ডেমো লগইন বক্স */}
//         <div 
//           onClick={handleDemoLoginClick}
//           className="w-full bg-slate-50 border border-slate-100 hover:bg-slate-100 rounded-xl p-4 flex items-start gap-3 cursor-pointer transition select-none"
//         >
//           <div className="mt-0.5 text-slate-700 bg-white p-1.5 rounded-md border border-gray-200">
//             <FiUser className="text-base" />
//           </div>
//           <div>
//             <p className="text-xs font-bold text-blue-600">Demo Login</p>
//             <p className="text-[11px] text-gray-500 mt-0.5">(Click to fill demo credentials)</p>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGraduationCap } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaUser } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDemoLogin = () => {
    setFormData({ email: 'demo@skillbridge.com', password: 'demoPassword123' });
    toast.success('Demo credentials loaded!');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return toast.error('Please fill all fields!');
    
    setLoading(true);
    const { error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || 'Login failed');
      setLoading(false);
    } else {
      toast.success('Welcome back!');
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 text-[#1b6ff8] mb-2">
            <FaGraduationCap className="text-3xl" />
            <span className="text-2xl font-bold text-slate-900">SkillBridge</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-950 mt-2">Welcome Back!</h2>
          <p className="text-sm text-gray-400 mt-2">Sign in to continue your learning journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="email" type="email" placeholder="Email address" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition" required />
          <div className="relative">
            <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-gray-400">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-[#1b6ff8] text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            {loading ? 'Processing...' : 'Login'}
          </button>
        </form>

        <div className="relative flex items-center gap-2 text-xs text-gray-400 font-medium">
          <div className="flex-1 border-t"></div> or continue with <div className="flex-1 border-t"></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => authClient.signIn.social({ provider: 'google' })} className="flex justify-center items-center gap-2 border py-2 rounded-lg hover:bg-gray-50"><FcGoogle /> Google</button>
          <button onClick={() => authClient.signIn.social({ provider: 'facebook' })} className="flex justify-center items-center gap-2 border py-2 rounded-lg hover:bg-gray-50"><FaFacebook className="text-blue-600" /> Facebook</button>
        </div>

        <div onClick={handleDemoLogin} className="bg-slate-50 p-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition">
          <FaUser className="text-blue-600" /> <div><p className="text-xs font-bold text-blue-600">Demo Login</p><p className="text-[10px] text-gray-500">Click to fill test credentials</p></div>
        </div>
      </div>
    </div>
  );
}