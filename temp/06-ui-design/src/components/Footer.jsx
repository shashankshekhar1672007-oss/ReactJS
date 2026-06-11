const Footer = () => {
  return (
    <footer className="bg-green-400 py-10 mt-auto border-t-4 border-green-500 shadow-inner">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
        {/* Logo matching the Navbar */}
        <div className="font-extrabold text-3xl mb-4 text-black tracking-wide">
          LOGO
        </div>
        

        {/* Sub-bottom copyright & legal section */}
        <div className="w-full border-t border-black/10 pt-6 text-center text-sm text-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="font-medium">© {new Date().getFullYear()} LOGO. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;