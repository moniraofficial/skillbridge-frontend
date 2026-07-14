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

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-hot-toast';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // BetterAuth সেশন হুক
  const { data: session } = authClient.useSession();

  // হাইড্রেশন এরর হ্যান্ডেল করার জন্য useEffect ব্যবহার করা হয়েছে
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // লগআউট হ্যান্ডলার
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

  if (!isMounted) {
    return (
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                SkillBridge<span className="text-blue-600">.</span>
              </Link>
            </div>
            {/* স্কেলেটন বা ফেইক স্পেসার লোডিং টাইমে ফ্লিকারিং রোধ করতে */}
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <span className="text-gray-300">Home</span>
              <span className="text-gray-300">Courses</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              SkillBridge<span className="text-blue-600">.</span>
            </Link>
          </div>

          {/* Desktop Menu (বড় স্ক্রিনের জন্য) */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/" className="text-gray-950 hover:text-blue-600 transition">Home</Link>
            <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition">Courses</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About Us</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* Right Side Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              // ইউজার লগইন করা থাকলে
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                  Hi, {session.user.name}
                </span>
                <button 
                  onClick={handleSignOut}
                  className="text-sm font-medium text-red-600 hover:text-red-700 transition"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              // ইউজার লগইন না থাকলে
              <>
                <Link 
                  href="/login" 
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
                >
                  Sign In
                </Link>
                <Link 
                  href="/register" 
                  className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button  */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 sm:px-3 shadow-lg">
          <Link href="/" className="block text-gray-900 font-medium py-2">Home</Link>
          <Link href="/courses" className="block text-gray-600 py-2">Courses</Link>
          <Link href="/about" className="block text-gray-600 py-2">About Us</Link>
          <Link href="/contact" className="block text-gray-600 py-2">Contact</Link>
          
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
            {session ? (
              // মোবাইলে ইউজার লগইন থাকলে
              <>
                <div className="text-sm font-bold text-gray-800 py-2 px-1">
                  Signed in as: {session.user.name}
                </div>
                <button 
                  onClick={handleSignOut}
                  className="w-full text-left py-2 text-sm font-medium text-red-600 hover:text-red-700 transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              // মোবাইলে ইউজার লগইন না থাকলে
              <>
                <Link 
                  href="/login" 
                  className="w-full text-center py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg"
                >
                  Sign In
                </Link>
                <Link 
                  href="/register" 
                  className="w-full text-center py-2 text-sm font-medium bg-blue-600 text-white rounded-lg"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}