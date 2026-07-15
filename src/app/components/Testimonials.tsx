// src/components/Testimonials.tsx

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahim Ahmed",
      role: "Frontend Developer",
      feedback: "SkillBridge helped me master React in just a few months. The projects were very practical!",
    },
    {
      name: "Monira Akter",
      role: "UI/UX Designer",
      feedback: "The platform is very user-friendly, and the mentorship support is absolutely top-notch.",
    },
    {
      name: "Karim Khan",
      role: "Freelancer",
      feedback: "I landed my first international project after completing the web development course here.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>
          <p className="text-gray-600 mt-2">Hear success stories from our community members.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition hover:shadow-md">
              <div className="text-blue-500 text-2xl mb-4">❝</div>
              <p className="text-gray-600 mb-6 italic">"{item.feedback}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}