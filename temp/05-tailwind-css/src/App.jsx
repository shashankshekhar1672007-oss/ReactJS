const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Header */}
      <header className="border-b p-4">
        <nav className="flex justify-between items-center max-w-4xl mx-auto">
          <a href="#" className="text-xl font-bold">ReactApp</a>
          <div className="flex gap-4">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Login
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="grow flex items-center justify-center p-8">
        {/* Hero Section */}
        <section className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Tailwind <span className="text-blue-500">CSS</span>
          </h1>
          <p className="text-gray-600">
            A modern boilerplate with everything you need to build your next great product.
            Powered by React and styled with Tailwind CSS.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t p-4 text-center text-sm text-gray-500">
        ReactApp. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;
