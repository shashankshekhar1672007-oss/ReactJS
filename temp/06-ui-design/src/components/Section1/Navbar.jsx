const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[60px] bg-green-400 px-8 sticky top-0 z-50 shadow-md">
      <div className="font-extrabold text-2xl tracking-wide cursor-pointer hover:scale-105 transition-transform">
        LOGO
      </div>
      <div className="hidden md:flex justify-around items-center gap-8 text-gray-800">
        <a href="#" className="hover:text-white font-semibold transition-colors">
          About Us
        </a>
        <a href="#" className="hover:text-white font-semibold transition-colors">
          Services
        </a>
        <a href="#" className="hover:text-white font-semibold transition-colors">
          Cases
        </a>
        <a href="#" className="hover:text-white font-semibold transition-colors">
          Reviews
        </a>
        <a href="#" className="hover:text-white font-semibold transition-colors">
          Blogs
        </a>
        <a href="#" className="hover:text-white font-semibold transition-colors">
          Contacts
        </a>
      </div>
      <div>
        <button className="px-5 py-2 border-2 border-green-700 text-green-700 font-bold rounded-lg transition-all hover:bg-green-700 hover:text-white hover:shadow-lg cursor-pointer">
          Start Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
