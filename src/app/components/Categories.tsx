'use client';

// ডামি ক্যাটাগরি ডাটা (আইকন এবং কোর্সের সংখ্যা সহ)
const categories = [
  {
    id: 1,
    title: 'Web Development',
    courses: '150+ Courses',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Graphic Design',
    courses: '120+ Courses',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Digital Marketing',
    courses: '85+ Courses',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'UI/UX Design',
    courses: '95+ Courses',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-600',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

export default function Categories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Explore Top Categories
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose from a wide variety of subjects and start learning something new today.
          </p>
        </div>

        {/* রেসপন্সিভ গ্রিড লেআউট (মোবাইলে ১টা, ট্যাবে ২টা, বড় স্ক্রিনে ৪টা কার্ড দেখাবে) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 cursor-pointer group"
            >
              {/* আইকন বক্স */}
              <div className={`p-4 ${category.bgColor} ${category.textColor} rounded-2xl w-fit mb-6 group-hover:scale-110 transition duration-300`}>
                {category.icon}
              </div>
              
              {/* টাইটেল ও সাবটাইটেল */}
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                {category.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 font-medium">
                {category.courses}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}