import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
     
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-50 text-blue-600 mb-4">
              🚀 Welcome to SkillBridge
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
              Advance Your Career With <span className="text-blue-600">Practical</span> Skills
            </h1>
            <p className="mt-4 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Learn from industry experts, work on real-world projects, and get the job you’ve always wanted. Build your future today.
            </p>
            
         
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/courses" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md transition"
              >
                Explore Courses
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-xl text-gray-700 bg-gray-50 hover:bg-gray-100 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

       
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex items-center justify-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-lg lg:max-w-md overflow-hidden bg-gray-100 border border-gray-200 aspect-video lg:aspect-square flex items-center justify-center">
              
              <span className="text-gray-400 font-medium">[ Figma Banner Image Placeholder ]</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}