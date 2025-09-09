export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Hello World
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Welcome to your beautiful Next.js application
          </p>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
          <p className="text-gray-700 leading-relaxed">
            This is a simple Hello World page built with{" "}
            <span className="font-semibold text-blue-600">Next.js 15</span>,{" "}
            <span className="font-semibold text-purple-600">Tailwind CSS</span>, and{" "}
            <span className="font-semibold text-indigo-600">modern design principles</span>.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        </div>
      </div>
    </main>
  );
}