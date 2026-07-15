import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ১. যে পেজগুলো লগইন ছাড়া একদম ভিজিট করা যাবে না (Protected Routes)
const protectedRoutes = [
  '/manage', 
  // '/item/add'
];

// ২. যে পেজগুলো লগইন করা থাকলে আর শো করবে না (Auth Routes)
const authRoutes = [
  '/login', 
  '/register'
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // BetterAuth-এর সেশন কুকি চেক করা
  const sessionToken = 
    request.cookies.get('better-auth.session_token') || 
    request.cookies.get('__secure_better-auth.session_token');

  // কুকি থাকলে সে লগড-ইন
  const isLoggedIn = !!sessionToken;

  // ক) ইউজার লগইন ছাড়া প্রোটেক্টেড পেজে ঢুকতে চাইলে তাকে /login পেজে পাঠিয়ে দিন
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!isLoggedIn) {
      const loginUrl = new URL('/login', request.url);
      // লগইন করার পর যাতে ইউজার আবার আগের পেজেই ব্যাক আসতে পারে (Callback)
      loginUrl.searchParams.set('callbackUrl', pathname); 
      return NextResponse.redirect(loginUrl);
    }
  }

  // খ) ইউজার অলরেডি লগইন থাকলে সে আর নতুন করে লগইন বা রেজিস্টার পেজ দেখতে পারবে না
  if (authRoutes.some(route => pathname.startsWith(route))) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

// কোন কোন পাথের ওপর এই সিকিউরিটি ফিল্টারটি অ্যাপ্লাই হবে তা ডিফাইন করা
export const config = {
  matcher: [
    '/manage/:path*',
    '/item/add/:path*',
    '/login',
    '/register'
  ],
};