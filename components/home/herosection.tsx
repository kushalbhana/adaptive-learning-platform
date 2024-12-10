"use client"
export default function HeroSection() {

  return (
    <div className="bg-slate-900">
      <div className="relative min-h-screen w-full text-white flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-gray-950 dark:to-black">
        {/* Animated background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-600 opacity-30 animate-gradient" />
          <canvas id="particleCanvas" className="absolute inset-0 z-[-1]" />
        </div>

        {/* Content */}
        <h1 className="text-6xl font-extrabold neon-text mb-4 bg-gradient-to-b from-indigo-600 to-purple-600 mt-10 md:mt-36 shadow-md shadow-indigo-400">
        AchieversZone
        </h1>
        <h1 className="text-6xl font-extrabold neon-text mb-4">
        Personalized Learning Tailored to Your Unique Potential.
        </h1>
        <h1 className="text-6xl font-extrabold neon-text mb-4">
          🚀 Learn Smarter, Not Harder 
        </h1>
        <p className="text-lg mb-6 text-gray-200 font-bold max-w-2xl">
          December 1, 2024 – December 16, 2024
        </p>
        <p className="text-lg mb-6 text-gray-300 max-w-2xl">
          Test your rapid prototyping and design thinking skills! Push the
          limits of your creativity and innovation to craft something amazing.
        </p>
        <div className="flex gap-4 relative z-10">
          <button
            onClick={() =>
              (window.location.href = "https://forms.gle/oEAdKMvGVkQR9X4d9")
            }
            className="bg-transparent border border-indigo-500 hover:bg-indigo-500 text-indigo-500 hover:text-white px-6 py-3 rounded-lg shadow-lg font-bold transition-all"
          >
            Register Now
          </button>
          <button
            onClick={() => alert("Event Details Coming Soon!")}
            className="bg-indigo-700 px-6 py-3 rounded-lg shadow-lg font-bold hover:bg-indigo-800 transition-all"
          >
            Event Details
          </button>
        </div>
        <div className="mt-10 mb-10">
          <h3 className="text-2xl font-semibold text-gray-300">
            Trusted by students:
          </h3>
          <div className="flex justify-center space-x-4 text-3xl mt-4">
            <div>
              <p className="font-bold">5</p>
            </div>
            <div>
              <p className="font-bold">8</p>
            </div>
            <div>
              <p className="font-bold">3</p>
            </div>
            <div>
              <p className="font-bold">2</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}