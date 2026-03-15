import { Link } from 'react-router-dom';
import { Hotel, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/hotel.png';


export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">

                            <img
                                src={logo}
                                alt="Luxe Haven Hotel"
                                className="h-10 w-auto"
                            />

                            <span className="font-serif text-2xl font-bold tracking-wider text-white">
                                LUXE HAVEN
                            </span>

                        </div>

                        
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Experience the pinnacle of luxury and comfort at our world-class hotel. We provide unforgettable stays with exceptional service.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors duration-300">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 font-serif">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Rooms', path: '/rooms' },
                                { name: 'Contact', path: '/contact' },
                                { name: 'Gallery', path: '#' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-amber-500 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="mr-2 text-amber-500 text-xs">▹</span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 font-serif">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                                <span>123 Luxury Avenue, Paradise City, PC 54321, Country</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                                <span>info@grandhorizon.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6 font-serif">Newsletter</h3>
                        <p className="text-slate-400 mb-4">
                            Subscribe to our newsletter for exclusive offers and updates.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:border-amber-500 text-white placeholder-slate-500"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-md transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© 2026 Grand Horizon Hotel. All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
