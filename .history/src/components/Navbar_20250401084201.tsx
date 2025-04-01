import  { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Rocket className="h-8 w-8 text-violet-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TopRunner</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-violet-600 font-medium">
              How it works
            </a>
            <a href="#examples" className="text-gray-600 hover:text-violet-600 font-medium">
              Writing Examples
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-violet-600 font-medium">
              Pricing
            </a>
            <a href="#blog" className="text-gray-600 hover:text-violet-600 font-medium">
              Blog
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-white text-gray-700 border border-gray-200 hover:border-gray-300 px-5 py-2 rounded-full font-medium transition-all flex items-center">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
              Join with Google
            </button>
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-full font-medium transition-all">
              Start for Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a 
              href="#how-it-works" 
              className="block text-gray-600 hover:text-violet-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </a>
            <a 
              href="#examples" 
              className="block text-gray-600 hover:text-violet-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Writing Examples
            </a>
            <a 
              href="#pricing" 
              className="block text-gray-600 hover:text-violet-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#blog" 
              className="block text-gray-600 hover:text-violet-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <div className="pt-4 space-y-3">
              <button className="w-full bg-white text-gray-700 border border-gray-200 hover:border-gray-300 px-5 py-2 rounded-full font-medium transition-all flex items-center justify-center">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
                Join with Google
              </button>
              <button className="w-full bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-full font-medium transition-all">
                Start for Free
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
 