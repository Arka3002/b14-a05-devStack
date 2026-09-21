import logo from '../assets/logo-text.png';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-100 bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        
        <div className="flex items-center cursor-pointer">
          <img 
            src={logo} 
            alt="DevStack Logo" 
            className="h-8 w-auto object-contain" 
          />
        </div>

        
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="#" className="text-pink-600 font-semibold">Home</a>
          <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Technologies</a>
          <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Projects</a>
          <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Contact</a>
        </div>

        
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
            Sign In
          </a>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full transition-colors cursor-pointer">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;