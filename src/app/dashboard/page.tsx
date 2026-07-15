'use client';

import { authClient } from '@/lib/auth-client';
import { FiBookOpen, FiUser, FiSettings, FiAward } from 'react-icons/fi';
import AuthGuard from '../components/AuthGuard';

export default function DashboardPage() {
  const { data: session } = authClient.useSession();

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50 p-6 md:p-10">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600">Welcome back, {session?.user?.name || 'Student'}!</p>
        </div>

        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Enrolled Courses', count: '04', icon: <FiBookOpen />, color: 'text-blue-600' },
            { title: 'Completed Skills', count: '12', icon: <FiAward />, color: 'text-green-600' },
            { title: 'Profile Status', count: '85%', icon: <FiUser />, color: 'text-purple-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className={`p-4 rounded-xl bg-gray-50 text-2xl ${stat.color}`}>{stat.icon}</div>
              <div>
                <p className="text-slate-500 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.count}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Action Area */}
        <div className="max-w-6xl mx-auto mt-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
          <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg text-center text-gray-500">
            No active courses right now. Explore new skills!
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}