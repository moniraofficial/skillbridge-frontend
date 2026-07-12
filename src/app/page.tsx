// 👈 ১. ওপরে আমাদের নতুন Hero কম্পোনেন্টটি ইম্পোর্ট করলাম (এখনো ফাইল খালি, তাই আপাতত নিচে বসাচ্ছি)

import Hero from "./components/Hero";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 👈 ২. এখানে আমাদের Hero সেকশনটি বসিয়ে দিলাম */}
    <Hero />
    </main>
  );
}