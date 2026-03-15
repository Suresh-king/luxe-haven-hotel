import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Hotel } from 'lucide-react';
import BookingModal from './BookingModal';
import logo from '../assets/hotel.png';


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Contact', path: '/contact' },
  ];

  const getNavLinkClass = ({ isActive }) => {
    return `text-sm font-medium transition-colors duration-300 relative group ${isActive
        ? 'text-amber-500'
        : isScrolled
          ? 'text-slate-800 hover:text-amber-600'
          : 'text-white hover:text-amber-400'
      }`;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center gap-2">

              <img 
                src={logo}
                alt="Luxe Haven Hotel"
                className="h-10 w-auto"
              />

              <span className={`font-serif text-2xl font-bold tracking-wider ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                LUXE HAVEN
              </span>

            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={getNavLinkClass}>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
            <button
              onClick={() => setIsModalOpen(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${isScrolled
                  ? 'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-lg'
                  : 'bg-white text-slate-900 hover:bg-amber-50 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                }`}>
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 origin-top overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-3 text-base font-medium rounded-md transition-colors ${isActive
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-slate-800 hover:text-amber-600 hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsModalOpen(true);
            }}
            className="w-full mt-4 bg-amber-600 text-white px-3 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}
