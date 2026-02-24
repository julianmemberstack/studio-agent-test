export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-6">Welcome</h1>
        <p className="text-2xl text-blue-100 mb-12">Something amazing is coming</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
