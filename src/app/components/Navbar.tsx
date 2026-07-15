// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
          
//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="text-xl font-bold text-gray-900">
//               SkillBridge<span className="text-blue-600">.</span>
//             </Link>
//           </div>

//           {/* Desktop Menu (বড় স্ক্রিনের জন্য) */}
//           <div className="hidden md:flex space-x-8 text-sm font-medium">
//             <Link href="/" className="text-gray-950 hover:text-blue-600 transition">Home</Link>
//             <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition">Courses</Link>
//             <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About Us</Link>
//             <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
//           </div>

//           {/* Right Side Buttons (Desktop) */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">
//               Sign In
//             </button>
//             <button className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//               Register
//             </button>
//           </div>

//           {/* Mobile Menu Button  */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 sm:px-3 shadow-lg">
//           <Link href="/" className="block text-gray-900 font-medium py-2">Home</Link>
//           <Link href="/courses" className="block text-gray-600 py-2">Courses</Link>
//           <Link href="/about" className="block text-gray-600 py-2">About Us</Link>
//           <Link href="/contact" className="block text-gray-600 py-2">Contact</Link>
//           <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
//             <button className="w-full text-center py-2 text-sm font-medium text-gray-600">Sign In</button>
//             <button className="w-full text-center py-2 text-sm font-medium bg-blue-600 text-white rounded-lg">Register</button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { authClient } from '@/lib/auth-client';
// import { toast } from 'react-hot-toast';

// export default function Navbar() {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   // BetterAuth সেশন হুক
//   const { data: session } = authClient.useSession();

//   // হাইড্রেশন এরর হ্যান্ডেল করার জন্য useEffect ব্যবহার করা হয়েছে
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // লগআউট হ্যান্ডলার
//   const handleSignOut = async () => {
//     try {
//       await authClient.signOut();
//       toast.success('Logged out successfully!');
//       router.push('/');
//       router.refresh();
//     } catch (error: any) {
//       toast.error('Logout failed!');
//     }
//   };

//   if (!isMounted) {
//     return (
//       <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex-shrink-0 flex items-center">
//               <Link href="/" className="text-xl font-bold text-gray-900">
//                 SkillBridge<span className="text-blue-600">.</span>
//               </Link>
//             </div>
//             {/* স্কেলেটন বা ফেইক স্পেসার লোডিং টাইমে ফ্লিকারিং রোধ করতে */}
//             <div className="hidden md:flex space-x-8 text-sm font-medium">
//               <span className="text-gray-300">Home</span>
//               <span className="text-gray-300">Courses</span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
          
//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="text-xl font-bold text-gray-900">
//               SkillBridge<span className="text-blue-600">.</span>
//             </Link>
//           </div>

//           {/* Desktop Menu (বড় স্ক্রিনের জন্য) */}
//           <div className="hidden md:flex space-x-8 text-sm font-medium">
//             <Link href="/" className="text-gray-950 hover:text-blue-600 transition">Home</Link>
//             <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition">Courses</Link>
//             <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About Us</Link>
//             <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
//           </div>

//           {/* Right Side Buttons (Desktop) */}
//           <div className="hidden md:flex items-center space-x-4">
//             {session ? (
//               // ইউজার লগইন করা থাকলে
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
//                   Hi, {session.user.name}
//                 </span>
//                 <button 
//                   onClick={handleSignOut}
//                   className="text-sm font-medium text-red-600 hover:text-red-700 transition"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             ) : (
//               // ইউজার লগইন না থাকলে
//               <>
//                 <Link 
//                   href="/login" 
//                   className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
//                 >
//                   Sign In
//                 </Link>
//                 <Link 
//                   href="/register" 
//                   className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button  */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 sm:px-3 shadow-lg">
//           <Link href="/" className="block text-gray-900 font-medium py-2">Home</Link>
//           <Link href="/courses" className="block text-gray-600 py-2">Courses</Link>
//           <Link href="/about" className="block text-gray-600 py-2">About Us</Link>
//           <Link href="/contact" className="block text-gray-600 py-2">Contact</Link>
          
//           <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
//             {session ? (
//               // মোবাইলে ইউজার লগইন থাকলে
//               <>
//                 <div className="text-sm font-bold text-gray-800 py-2 px-1">
//                   Signed in as: {session.user.name}
//                 </div>
//                 <button 
//                   onClick={handleSignOut}
//                   className="w-full text-left py-2 text-sm font-medium text-red-600 hover:text-red-700 transition"
//                 >
//                   Sign Out
//                 </button>
//               </>
//             ) : (
//               // মোবাইলে ইউজার লগইন না থাকলে
//               <>
//                 <Link 
//                   href="/login" 
//                   className="w-full text-center py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg"
//                 >
//                   Sign In
//                 </Link>
//                 <Link 
//                   href="/register" 
//                   className="w-full text-center py-2 text-sm font-medium bg-blue-600 text-white rounded-lg"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { authClient } from '@/lib/auth-client';
// import { toast } from 'react-hot-toast';

// export default function Navbar() {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   // BetterAuth সেশন হুক
//   const { data: session } = authClient.useSession();

//   // হাইড্রেশন এরর হ্যান্ডেল করার জন্য useEffect ব্যবহার করা হয়েছে
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // লগআউট হ্যান্ডলার
//   const handleSignOut = async () => {
//     try {
//       await authClient.signOut();
//       toast.success('Logged out successfully!');
//       router.push('/');
//       router.refresh();
//     } catch (error: any) {
//       toast.error('Logout failed!');
//     }
//   };

//   if (!isMounted) {
//     return (
//       <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex-shrink-0 flex items-center">
//               <Link href="/" className="text-xl font-bold text-gray-900">
//                 SkillBridge<span className="text-blue-600">.</span>
//               </Link>
//             </div>
//             {/* স্কেলেটন বা ফেইক স্পেসার লোডিং টাইমে ফ্লিকারিং রোধ করতে */}
//             <div className="hidden md:flex space-x-8 text-sm font-medium">
//               <span className="text-gray-300">Home</span>
//               <span className="text-gray-300">Courses</span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
          
//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="text-xl font-bold text-gray-900">
//               SkillBridge<span className="text-blue-600">.</span>
//             </Link>
//           </div>

//           {/* Desktop Menu (বড় স্ক্রিনের জন্য - Add New Skill সহ) */}
//           <div className="hidden md:flex space-x-8 text-sm font-medium">
//             <Link href="/" className="text-gray-950 hover:text-blue-600 transition">Home</Link>
//             <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition">Courses</Link>
//              <Link href="/item/add" className="text-gray-600 hover:text-blue-600 transition">Add New Skill</Link>
//             <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About Us</Link>
//             <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
           
//           </div>

//           {/* Right Side Buttons (Desktop) */}
//           <div className="hidden md:flex items-center space-x-4">
//             {session ? (
//               // ইউজার লগইন করা থাকলে
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
//                   Hi, {session.user.name}
//                 </span>
//                 <button 
//                   onClick={handleSignOut}
//                   className="text-sm font-medium text-red-600 hover:text-red-700 transition"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             ) : (
//               // ইউজার লগইন না থাকলে
//               <>
//                 <Link 
//                   href="/login" 
//                   className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
//                 >
//                   Sign In
//                 </Link>
//                 <Link 
//                   href="/register" 
//                   className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button  */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown (Add New Skill সহ) */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 sm:px-3 shadow-lg">
//           <Link href="/" className="block text-gray-900 font-medium py-2">Home</Link>
//           <Link href="/courses" className="block text-gray-600 py-2">Courses</Link>
//            <Link href="/item/add" className="block text-gray-600 py-2">Add New Skill</Link>
//           <Link href="/about" className="block text-gray-600 py-2">About Us</Link>
//           <Link href="/contact" className="block text-gray-600 py-2">Contact</Link>
         
          
//           <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
//             {session ? (
//               // মোবাইলে ইউজার লগইন থাকলে
//               <>
//                 <div className="text-sm font-bold text-gray-800 py-2 px-1">
//                   Signed in as: {session.user.name}
//                 </div>
//                 <button 
//                   onClick={handleSignOut}
//                   className="w-full text-left py-2 text-sm font-medium text-red-600 hover:text-red-700 transition"
//                 >
//                   Sign Out
//                 </button>
//               </>
//             ) : (
//               // মোবাইলে ইউজার লগইন না থাকলে
//               <>
//                 <Link 
//                   href="/login" 
//                   className="w-full text-center py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg"
//                 >
//                   Sign In
//                 </Link>
//                 <Link 
//                   href="/register" 
//                   className="w-full text-center py-2 text-sm font-medium bg-blue-600 text-white rounded-lg"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { authClient } from '@/lib/auth-client';
// import { toast } from 'react-hot-toast';

// export default function Navbar() {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   // BetterAuth সেশন হুক
//   const { data: session } = authClient.useSession();

//   // হাইড্রেশন এরর হ্যান্ডেল করার জন্য useEffect ব্যবহার করা হয়েছে
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // লগআউট হ্যান্ডলার
//   const handleSignOut = async () => {
//     try {
//       await authClient.signOut();
//       toast.success('Logged out successfully!');
//       router.push('/');
//       router.refresh();
//     } catch (error: any) {
//       toast.error('Logout failed!');
//     }
//   };

//   if (!isMounted) {
//     return (
//       <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex-shrink-0 flex items-center">
//               <Link href="/" className="text-xl font-bold text-gray-900">
//                 SkillBridge<span className="text-blue-600">.</span>
//               </Link>
//             </div>
//             {/* স্কেলেটন বা ফেইক স্পেসার লোডিং টাইমে ফ্লিকারিং রোধ করতে */}
//             <div className="hidden md:flex space-x-8 text-sm font-medium">
//               <span className="text-gray-300">Home</span>
//               <span className="text-gray-300">Courses</span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
          
//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="text-xl font-bold text-gray-900">
//               SkillBridge<span className="text-blue-600">.</span>
//             </Link>
//           </div>

//           {/* Desktop Menu (বড় স্ক্রিনের জন্য - Conditional Manage Items সহ) */}
//           <div className="hidden md:flex space-x-8 text-sm font-medium">
//             <Link href="/" className="text-gray-950 hover:text-blue-600 transition">Home</Link>
//             <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition">Courses</Link>
            
//             {/* ইউজার লগইন থাকলে "Add New Skill" এবং "Manage Items" দুটিই দেখাবে */}
//             {session && (
//               <>
//                 <Link href="/item/add" className="text-gray-600 hover:text-blue-600 transition">Add New Skill</Link>
//                 <Link href="/manage" className="text-gray-600 hover:text-blue-600 transition">Manage Items</Link>
//               </>
//             )}
            
//             <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About Us</Link>
//             <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
//           </div>

//           {/* Right Side Buttons (Desktop) */}
//           <div className="hidden md:flex items-center space-x-4">
//             {session ? (
//               // ইউজার লগইন করা থাকলে
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
//                   Hi, {session.user.name}
//                 </span>
//                 <button 
//                   onClick={handleSignOut}
//                   className="text-sm font-medium text-red-600 hover:text-red-700 transition"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             ) : (
//               // ইউজার লগইন না থাকলে
//               <>
//                 <Link 
//                   href="/login" 
//                   className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
//                 >
//                   Sign In
//                 </Link>
//                 <Link 
//                   href="/register" 
//                   className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button  */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown (Add New Skill & Manage Items সহ) */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 sm:px-3 shadow-lg">
//           <Link href="/" className="block text-gray-900 font-medium py-2">Home</Link>
//           <Link href="/courses" className="block text-gray-600 py-2">Courses</Link>
          
//           {session && (
//             <>
//               <Link href="/item/add" className="block text-gray-600 py-2">Add New Skill</Link>
//               <Link href="/manage" className="block text-gray-600 py-2">Manage Items</Link>
//             </>
//           )}
          
//           <Link href="/about" className="block text-gray-600 py-2">About Us</Link>
//           <Link href="/contact" className="block text-gray-600 py-2">Contact</Link>
          
//           <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
//             {session ? (
//               // মোবাইলে ইউজার লগইন থাকলে
//               <>
//                 <div className="text-sm font-bold text-gray-800 py-2 px-1">
//                   Signed in as: {session.user.name}
//                 </div>
//                 <button 
//                   onClick={handleSignOut}
//                   className="w-full text-left py-2 text-sm font-medium text-red-600 hover:text-red-700 transition"
//                 >
//                   Sign Out
//                 </button>
//               </>
//             ) : (
//               // মোবাইলে ইউজার লগইন না থাকলে
//               <>
//                 <Link 
//                   href="/login" 
//                   className="w-full text-center py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg"
//                 >
//                   Sign In
//                 </Link>
//                 <Link 
//                   href="/register" 
//                   className="w-full text-center py-2 text-sm font-medium bg-blue-600 text-white rounded-lg"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter, usePathname } from 'next/navigation'; // usePathname ইম্পোর্ট করা হয়েছে
// import { authClient } from '@/lib/auth-client';
// import { toast } from 'react-hot-toast';

// export default function Navbar() {
//   const router = useRouter();
//   const pathname = usePathname(); // বর্তমান পেজের পাথ ট্র্যাক করার জন্য হুক
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   // BetterAuth সেশন হুক
//   const { data: session } = authClient.useSession();

//   // হাইড্রেশন এরর হ্যান্ডেল করার জন্য useEffect ব্যবহার করা হয়েছে
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // লগআউট হ্যান্ডলার
//   const handleSignOut = async () => {
//     try {
//       await authClient.signOut();
//       toast.success('Logged out successfully!');
//       router.push('/');
//       router.refresh();
//     } catch (error: any) {
//       toast.error('Logout failed!');
//     }
//   };

//   // একটি হেল্পার ফাংশন যা চেক করবে কোনো লিঙ্ক অ্যাক্টিভ কি না
//   const isActive = (path: string) => pathname === path;

//   if (!isMounted) {
//     return (
//       <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className="flex-shrink-0 flex items-center">
//               <Link href="/" className="text-xl font-bold text-gray-900">
//                 SkillBridge<span className="text-blue-600">.</span>
//               </Link>
//             </div>
//             {/* স্কেলেটন বা ফেইক স্পেসার লোডিং টাইমে ফ্লিকারিং রোধ করতে */}
//             <div className="hidden md:flex space-x-8 text-sm font-medium">
//               <span className="text-gray-300">Home</span>
//               <span className="text-gray-300">Courses</span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }

//   // ডেক্সটপ লিঙ্কের ডায়নামিক স্টাইল জেনারেটর
//   const getDesktopLinkStyle = (path: string) => {
//     const baseStyle = "text-sm font-medium transition-colors relative py-5"; // py-5 দেওয়া হয়েছে যাতে আন্ডারলাইনটি হেডার বর্ডারের ঠিক ওপরে বসে
//     const activeStyle = "text-blue-600 font-semibold";
//     const inactiveStyle = "text-gray-600 hover:text-blue-600";
    
//     return `${baseStyle} ${isActive(path) ? activeStyle : inactiveStyle}`;
//   };

//   // মোবাইল লিঙ্কের ডায়নামিক স্টাইল জেনারেটর
//   const getMobileLinkStyle = (path: string) => {
//     const baseStyle = "block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors";
//     const activeStyle = "bg-blue-50 text-blue-600 font-semibold";
//     const inactiveStyle = "text-gray-600 hover:bg-gray-50 hover:text-blue-600";
    
//     return `${baseStyle} ${isActive(path) ? activeStyle : inactiveStyle}`;
//   };

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
          
//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="text-xl font-bold text-gray-900">
//               SkillBridge<span className="text-blue-600">.</span>
//             </Link>
//           </div>

//           {/* Desktop Menu (অ্যাক্টিভ ইন্ডিকেটর সহ) */}
//           <div className="hidden md:flex space-x-8 items-center h-full">
//             <Link href="/" className={getDesktopLinkStyle('/')}>
//               Home
//               {isActive('/') && (
//                 <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
//               )}
//             </Link>
//             <Link href="/courses" className={getDesktopLinkStyle('/courses')}>
//               Courses
//               {isActive('/courses') && (
//                 <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
//               )}
//             </Link>
            
//             {/* ইউজার লগইন থাকলে "Add New Skill" এবং "Manage Items" দুটিই দেখাবে */}
//             {session && (
//               <>
//                 <Link href="/item/add" className={getDesktopLinkStyle('/item/add')}>
//                   Add New Skill
//                   {isActive('/item/add') && (
//                     <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
//                   )}
//                 </Link>
//                 <Link href="/manage" className={getDesktopLinkStyle('/manage')}>
//                   Manage Items
//                   {isActive('/manage') && (
//                     <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
//                   )}
//                 </Link>
//               </>
//             )}
            
//             <Link href="/about" className={getDesktopLinkStyle('/about')}>
//               About Us
//               {isActive('/about') && (
//                 <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
//               )}
//             </Link>
//             <Link href="/contact" className={getDesktopLinkStyle('/contact')}>
//               Contact
//               {isActive('/contact') && (
//                 <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
//               )}
//             </Link>
//           </div>

//           {/* Right Side Buttons (Desktop) */}
//           <div className="hidden md:flex items-center space-x-4">
//             {session ? (
//               // ইউজার লগইন করা থাকলে
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
//                   Hi, {session.user.name}
//                 </span>
//                 <button 
//                   onClick={handleSignOut}
//                   className="text-sm font-medium text-red-600 hover:text-red-700 transition"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             ) : (
//               // ইউজার লগইন না থাকলে
//               <>
//                 <Link 
//                   href="/login" 
//                   className={getDesktopLinkStyle('/login')}
//                 >
//                   Sign In
//                   {isActive('/login') && (
//                     <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
//                   )}
//                 </Link>
//                 <Link 
//                   href="/register" 
//                   className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button  */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown (অ্যাক্টিভ হাইলাইট সহ) */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 sm:px-3 shadow-lg">
//           <Link href="/" className={getMobileLinkStyle('/')}>Home</Link>
//           <Link href="/courses" className={getMobileLinkStyle('/courses')}>Courses</Link>
          
//           {session && (
//             <>
//               <Link href="/item/add" className={getMobileLinkStyle('/item/add')}>Add New Skill</Link>
//               <Link href="/manage" className={getMobileLinkStyle('/manage')}>Manage Items</Link>
//             </>
//           )}
          
//           <Link href="/about" className={getMobileLinkStyle('/about')}>About Us</Link>
//           <Link href="/contact" className={getMobileLinkStyle('/contact')}>Contact</Link>
          
//           <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
//             {session ? (
//               // মোবাইলে ইউজার লগইন থাকলে
//               <>
//                 <div className="text-sm font-bold text-gray-800 py-2 px-3">
//                   Signed in as: {session.user.name}
//                 </div>
//                 <button 
//                   onClick={handleSignOut}
//                   className="w-full text-left py-2 px-3 text-sm font-medium text-red-600 hover:text-red-700 transition"
//                 >
//                   Sign Out
//                 </button>
//               </>
//             ) : (
//               // মোবাইলে ইউজার লগইন না থাকলে
//               <>
//                 <Link 
//                   href="/login" 
//                   className={getMobileLinkStyle('/login')}
//                 >
//                   Sign In
//                 </Link>
//                 <Link 
//                   href="/register" 
//                   className="w-full text-center py-2 text-sm font-medium bg-blue-600 text-white rounded-lg"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter, usePathname } from 'next/navigation';
// import { authClient } from '@/lib/auth-client';
// import { toast } from 'react-hot-toast';

// export default function Navbar() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   const { data: session } = authClient.useSession();

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const handleSignOut = async () => {
//     try {
//       await authClient.signOut();
//       toast.success('Logged out successfully!');
//       router.push('/');
//       router.refresh();
//     } catch (error: any) {
//       toast.error('Logout failed!');
//     }
//   };

//   const isActive = (path: string) => pathname === path;

//   if (!isMounted) {
//     return (
//       <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <Link href="/" className="text-xl font-bold text-gray-900">SkillBridge<span className="text-blue-600">.</span></Link>
//           </div>
//         </div>
//       </nav>
//     );
//   }

//   const getDesktopLinkStyle = (path: string) => {
//     const baseStyle = "text-sm font-medium transition-colors relative py-5";
//     const activeStyle = "text-blue-600 font-semibold";
//     const inactiveStyle = "text-gray-600 hover:text-blue-600";
//     return `${baseStyle} ${isActive(path) ? activeStyle : inactiveStyle}`;
//   };

//   const getMobileLinkStyle = (path: string) => {
//     const baseStyle = "block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors";
//     const activeStyle = "bg-blue-50 text-blue-600 font-semibold";
//     const inactiveStyle = "text-gray-600 hover:bg-gray-50 hover:text-blue-600";
//     return `${baseStyle} ${isActive(path) ? activeStyle : inactiveStyle}`;
//   };

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
          
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="text-xl font-bold text-gray-900">
//               SkillBridge<span className="text-blue-600">.</span>
//             </Link>
//           </div>

//           <div className="hidden md:flex space-x-8 items-center h-full">
//             <Link href="/" className={getDesktopLinkStyle('/')}>Home{isActive('/') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
//             <Link href="/courses" className={getDesktopLinkStyle('/courses')}>Courses{isActive('/courses') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
            
//             {/* ড্যাশবোর্ড এবং অন্যান্য লিংক */}
//             {session && (
//               <>
//                 <Link href="/dashboard" className={getDesktopLinkStyle('/dashboard')}>Dashboard{isActive('/dashboard') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
//                 <Link href="/item/add" className={getDesktopLinkStyle('/item/add')}>Add New Skill{isActive('/item/add') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
//                 <Link href="/manage" className={getDesktopLinkStyle('/manage')}>Manage Items{isActive('/manage') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
//               </>
//             )}
            
//             <Link href="/about" className={getDesktopLinkStyle('/about')}>About Us{isActive('/about') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
//             <Link href="/contact" className={getDesktopLinkStyle('/contact')}>Contact{isActive('/contact') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
//           </div>

//           <div className="hidden md:flex items-center space-x-4">
//             {session ? (
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">Hi, {session.user.name}</span>
//                 <button onClick={handleSignOut} className="text-sm font-medium text-red-600 hover:text-red-700 transition">Sign Out</button>
//               </div>
//             ) : (
//               <>
//                 <Link href="/login" className={getDesktopLinkStyle('/login')}>Sign In</Link>
//                 <Link href="/register" className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Register</Link>
//               </>
//             )}
//           </div>

//           <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600">
//             {isOpen ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
//           <Link href="/" className={getMobileLinkStyle('/')}>Home</Link>
//           <Link href="/courses" className={getMobileLinkStyle('/courses')}>Courses</Link>
//           {session && (
//             <>
//               <Link href="/dashboard" className={getMobileLinkStyle('/dashboard')}>Dashboard</Link>
//               <Link href="/item/add" className={getMobileLinkStyle('/item/add')}>Add New Skill</Link>
//               <Link href="/manage" className={getMobileLinkStyle('/manage')}>Manage Items</Link>
//             </>
//           )}
//           <Link href="/about" className={getMobileLinkStyle('/about')}>About Us</Link>
//           <Link href="/contact" className={getMobileLinkStyle('/contact')}>Contact</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  // সেশন ডাটা এবং লোডিং স্ট্যাটাস হ্যান্ডেল করা
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      toast.success('Logged out successfully!');
      router.push('/');
      router.refresh();
    } catch (error: any) {
      toast.error('Logout failed!');
    }
  };

  const isActive = (path: string) => pathname === path;

  const getDesktopLinkStyle = (path: string) => {
    const baseStyle = "text-sm font-medium transition-colors relative py-5";
    const activeStyle = "text-blue-600 font-semibold";
    const inactiveStyle = "text-gray-600 hover:text-blue-600";
    return `${baseStyle} ${isActive(path) ? activeStyle : inactiveStyle}`;
  };

  const getMobileLinkStyle = (path: string) => {
    const baseStyle = "block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors";
    const activeStyle = "bg-blue-50 text-blue-600 font-semibold";
    const inactiveStyle = "text-gray-600 hover:bg-gray-50 hover:text-blue-600";
    return `${baseStyle} ${isActive(path) ? activeStyle : inactiveStyle}`;
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              SkillBridge<span className="text-blue-600">.</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center h-full">
            <Link href="/" className={getDesktopLinkStyle('/')}>Home{isActive('/') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
            <Link href="/courses" className={getDesktopLinkStyle('/courses')}>Courses{isActive('/courses') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
            
            {!isPending && session && (
              <>
                <Link href="/dashboard" className={getDesktopLinkStyle('/dashboard')}>Dashboard{isActive('/dashboard') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
                <Link href="/item/add" className={getDesktopLinkStyle('/item/add')}>Add New Skill{isActive('/item/add') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
                <Link href="/manage" className={getDesktopLinkStyle('/manage')}>Manage Items{isActive('/manage') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
              </>
            )}
            
            <Link href="/about" className={getDesktopLinkStyle('/about')}>About Us{isActive('/about') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
            <Link href="/contact" className={getDesktopLinkStyle('/contact')}>Contact{isActive('/contact') && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isPending ? (
              <span className="text-sm text-gray-400">Loading...</span>
            ) : session ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">Hi, {session.user.name}</span>
                <button onClick={handleSignOut} className="text-sm font-medium text-red-600 hover:text-red-700 transition">Sign Out</button>
              </div>
            ) : (
              <>
                <Link href="/login" className={getDesktopLinkStyle('/login')}>Sign In</Link>
                <Link href="/register" className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Register</Link>
              </>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 text-2xl">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <Link href="/" className={getMobileLinkStyle('/')}>Home</Link>
          <Link href="/courses" className={getMobileLinkStyle('/courses')}>Courses</Link>
          {!isPending && session && (
            <>
              <Link href="/dashboard" className={getMobileLinkStyle('/dashboard')}>Dashboard</Link>
              <Link href="/item/add" className={getMobileLinkStyle('/item/add')}>Add New Skill</Link>
              <Link href="/manage" className={getMobileLinkStyle('/manage')}>Manage Items</Link>
            </>
          )}
          <Link href="/about" className={getMobileLinkStyle('/about')}>About Us</Link>
          <Link href="/contact" className={getMobileLinkStyle('/contact')}>Contact</Link>
        </div>
      )}
    </nav>
  );
}