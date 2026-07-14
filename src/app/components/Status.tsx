{/* ================= নিচের সেকশন: স্ট্যাটস কার্ডস (পাশাপাশি লাইন করা) ================= */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* কার্ড ১: Rating */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-amber-50 rounded-xl text-xl text-amber-500 flex items-center justify-center w-12 h-12">★</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">4.9</h3>
              <p className="text-xs text-gray-500 font-medium">Avg. Rating</p>
            </div>
          </div>

          {/* কার্ড ২: Mentors */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600 flex items-center justify-center w-12 h-12">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">2,500+</h3>
              <p className="text-xs text-gray-500 font-medium">Expert Mentors</p>
            </div>
          </div>

          {/* কার্ড ৩: Courses */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 flex items-center justify-center w-12 h-12">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">10K+</h3>
              <p className="text-xs text-gray-500 font-medium">Online Courses</p>
            </div>
          </div>

          {/* কার্ড ৪: Satisfaction */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-teal-50 rounded-xl text-teal-600 flex items-center justify-center w-12 h-12">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">95%</h3>
              <p className="text-xs text-gray-500 font-medium">Satisfaction Rate</p>
            </div>
          </div>

        </div>