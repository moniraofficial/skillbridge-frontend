// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-hot-toast';
// import { FaEye, FaEyeSlash, FaGraduationCap } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import { FaFacebook } from 'react-icons/fa';

// export default function RegisterPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     agreeToTerms: false,
//   });
//   const [loading, setLoading] = useState(false);

//   // ইনপুট চেঞ্জ হ্যান্ডলার
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   // সাবমিট হ্যান্ডলার
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     // বেসিক ভ্যালিডেশন
//     if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
//       toast.error('Please fill in all fields!');
//       setLoading(false);
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       toast.error('Passwords do not match!');
//       setLoading(false);
//       return;
//     }

//     if (!formData.agreeToTerms) {
//       toast.error('You must agree to the Terms & Conditions!');
//       setLoading(false);
//       return;
//     }

//     try {
//       // এখানে আমরা পরে ব্যাকএন্ডের রেজিস্ট্রেশন এপিআই কানেক্ট করব
//       console.log('Registering with:', formData);
//       toast.success('Account created successfully! 🎉');
//       router.push('/login'); // সাকসেসফুল রেজিস্ট্রেশন শেষে লগইন পেজে নিয়ে যাবে
//     } catch (error: any) {
//       toast.error(error.message || 'Registration failed.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6">
      
//       {/* মেইন কন্টেইনার (লগইনের মতো একই উইডথ) */}
//       <div className="w-full max-w-md space-y-6">
        
//         {/* ব্র্যান্ডিং লোগো ও হেডার সেকশন */}
//         <div className="flex flex-col items-center text-center">
//           <div className="flex items-center gap-2 text-[#1b6ff8] mb-2">
//             <FaGraduationCap className="text-3xl" />
//             <span className="text-2xl font-bold tracking-tight text-slate-900">
//               SkillBridge
//             </span>
//           </div>
//           <h2 className="text-3xl font-bold text-slate-950 tracking-tight mt-1">
//             Create your account
//           </h2>
//           <p className="text-sm text-gray-400 mt-2 font-normal">
//             Sign up to start learning with us
//           </p>
//         </div>

//         {/* ফর্ম */}
//         <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          
//           {/* নাম এবং ইমেইল পাশাপাশি দুটি কলামে */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {/* Full Name */}
//             <div className="space-y-1">
//               <label className="text-xs font-semibold text-slate-800">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Enter your full name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
//                 required
//               />
//             </div>

//             {/* Email Address */}
//             <div className="space-y-1">
//               <label className="text-xs font-semibold text-slate-800">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
//                 required
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div className="space-y-1">
//             <label className="text-xs font-semibold text-slate-800">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Create password"
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

//           {/* Confirm Password */}
//           <div className="space-y-1">
//             <label className="text-xs font-semibold text-slate-800">
//               Confirm Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 name="confirmPassword"
//                 placeholder="Confirm your password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full pl-3 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               >
//                 {showConfirmPassword ? <FaEyeSlash className="text-base" /> : <FaEye className="text-base" />}
//               </button>
//             </div>
//           </div>

//           {/* Terms and Conditions Checkbox */}
//           <div className="flex items-start gap-2 pt-1">
//             <input
//               type="checkbox"
//               id="agreeToTerms"
//               name="agreeToTerms"
//               checked={formData.agreeToTerms}
//               onChange={handleChange}
//               className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
//             />
//             <label htmlFor="agreeToTerms" className="text-xs text-slate-600 leading-normal select-none cursor-pointer">
//               I agree to the{' '}
//               <Link href="/terms" className="font-bold text-blue-600 hover:underline">
//                 Terms & Conditions
//               </Link>{' '}
//               and{' '}
//               <Link href="/privacy" className="font-bold text-blue-600 hover:underline">
//                 Privacy Policy
//               </Link>
//             </label>
//           </div>

//           {/* Create Account Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#1b6ff8] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-600 transition duration-200 disabled:opacity-70 text-center shadow-sm"
//           >
//             {loading ? 'Creating Account...' : 'Create Account'}
//           </button>

//         </form>

//         {/* Divider */}
//         <div className="relative text-center my-4">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-100"></div>
//           </div>
//           <span className="relative px-2 bg-white text-xs text-gray-400 font-medium">
//             or continue with
//           </span>
//         </div>

//         {/* Circular Social Icons */}
//         <div className="flex justify-center items-center gap-4">
//           {/* Google */}
//           <button
//             type="button"
//             onClick={() => toast.success('Connecting to Google...')}
//             className="w-11 h-11 flex items-center justify-center border border-gray-150 rounded-full hover:bg-gray-50 transition shadow-sm"
//           >
//             <FcGoogle className="text-xl" />
//           </button>

//           {/* Facebook */}
//           <button
//             type="button"
//             onClick={() => toast.success('Connecting to Facebook...')}
//             className="w-11 h-11 flex items-center justify-center border border-gray-150 rounded-full hover:bg-gray-50 transition shadow-sm"
//           >
//             <FaFacebook className="text-xl text-[#1877F2]" />
//           </button>
//         </div>

//         {/* লিঙ্ক ব্যাক টু লগইন */}
//         <div className="text-center">
//           <p className="text-xs text-gray-500 font-medium">
//             Already have an account?{' '}
//             <Link 
//               href="/login" 
//               className="font-bold text-blue-600 hover:text-blue-700 transition"
//             >
//               Login
//             </Link>
//           </p>
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
import { FaFacebook } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);

  // ইনপুট চেঞ্জ হ্যান্ডলার
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // সাবমিট হ্যান্ডলার
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // বেসিক ভ্যালিডেশন
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields!');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      setLoading(false);
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error('You must agree to the Terms & Conditions!');
      setLoading(false);
      return;
    }

    try {
      // 🌟 BetterAuth ইমেইল সাইন-আপ মেথড কল
      const { data, error } = await authClient.signUp.email({
        email: formData.email,
        password: formData.password,
        name: formData.fullName,
        callbackURL: "/login",
      });

      if (error) {
        toast.error(error.message || 'Registration failed.');
      } else {
        toast.success('Account created successfully! 🎉');
        router.push('/login'); // সাকসেসফুল রেজিস্ট্রেশন শেষে লগইন পেজে নিয়ে যাবে
      }
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  // 🌟 সোশ্যাল লগইন হ্যান্ডলার (BetterAuth)
  const handleSocialRegister = async (provider: 'google' | 'facebook') => {
    try {
      await authClient.signIn.social({
        provider,
        callbackURL: '/',
      });
    } catch (error: any) {
      toast.error(`Failed to connect with ${provider}`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6">
      
      {/* মেইন কন্টেইনার (লগইনের মতো একই উইডথ) */}
      <div className="w-full max-w-md space-y-6">
        
        {/* ব্র্যান্ডিং লোগো ও হেডার সেকশন */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-[#1b6ff8] mb-2">
            <FaGraduationCap className="text-3xl" />
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              SkillBridge
            </span>
          </div>
          <h2 className="text-3xl font-bold text-slate-950 tracking-tight mt-1">
            Create your account
          </h2>
          <p className="text-sm text-gray-400 mt-2 font-normal">
            Sign up to start learning with us
          </p>
        </div>

        {/* ফর্ম */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          
          {/* নাম এবং ইমেইল পাশাপাশি দুটি কলামে */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-800">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
                required
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-800">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-800">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-3 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEyeSlash className="text-base" /> : <FaEye className="text-base" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-800">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-3 pr-10 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm text-slate-800 placeholder-gray-400 transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <FaEyeSlash className="text-base" /> : <FaEye className="text-base" />}
              </button>
            </div>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="agreeToTerms" className="text-xs text-slate-600 leading-normal select-none cursor-pointer">
              I agree to the{' '}
              <Link href="/terms" className="font-bold text-blue-600 hover:underline">
                Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="font-bold text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1b6ff8] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-600 transition duration-200 disabled:opacity-70 text-center shadow-sm"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

        </form>

        {/* Divider */}
        <div className="relative text-center my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <span className="relative px-2 bg-white text-xs text-gray-400 font-medium">
            or continue with
          </span>
        </div>

        {/* Circular Social Icons */}
        <div className="flex justify-center items-center gap-4">
          {/* Google */}
          <button
            type="button"
            onClick={() => handleSocialRegister('google')}
            className="w-11 h-11 flex items-center justify-center border border-gray-150 rounded-full hover:bg-gray-50 transition shadow-sm"
          >
            <FcGoogle className="text-xl" />
          </button>

          {/* Facebook */}
          <button
            type="button"
            onClick={() => handleSocialRegister('facebook')}
            className="w-11 h-11 flex items-center justify-center border border-gray-150 rounded-full hover:bg-gray-50 transition shadow-sm"
          >
            <FaFacebook className="text-xl text-[#1877F2]" />
          </button>
        </div>

        {/* লিঙ্ক ব্যাক টু লগইন */}
        <div className="text-center">
          <p className="text-xs text-gray-500 font-medium">
            Already have an account?{' '}
            <Link 
              href="/login" 
              className="font-bold text-blue-600 hover:text-blue-700 transition"
            >
              Login
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}