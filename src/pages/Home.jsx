import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import RoomCard from '../components/RoomCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import BookingModal from '../components/BookingModal';
import { Wifi, Car, Coffee, Dumbbell, Utensils, Waves } from 'lucide-react';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Scroll reveal setup
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const openBooking = () => setIsModalOpen(true);

    const rooms = [
        {
            id: 1,
            title: "Deluxe Room",
            price: "5,000",
            description: "Elegant room with city views and modern amenities.",
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Luxury Suite",
            price: "8,000",
            description: "Spacious suite featuring a separate living area and premium views.",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Premium Room",
            price: "12,000",
            description: "The ultimate luxury experience with panoramic views and exclusive services.",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const services = [
        { icon: Car, title: "Free Parking", description: "Secure and complimentary parking for all our guests during their stay.", delay: 0 },
        { icon: Waves, title: "Swimming Pool", description: "Temperature-controlled infinity pool with stunning panoramic city views.", delay: 100 },
        { icon: Wifi, title: "Free High-Speed WiFi", description: "Premium connectivity throughout the hotel premises and rooms.", delay: 200 },
        { icon: Utensils, title: "Gourmet Restaurant", description: "World-class dining experience featuring international and local cuisines.", delay: 300 },
        { icon: Dumbbell, title: "Fitness Center", description: "State-of-the-art gymnasium with personal trainers available on request.", delay: 400 },
        { icon: Coffee, title: "24/7 Room Service", description: "Round-the-clock dedicated service catering to all your culinary cravings.", delay: 500 },
    ];

    return (
        <div>
            <Hero />

            {/* Rooms Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-1000">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Our Featured Rooms</h2>
                        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Experience the perfect blend of comfort and luxury in our meticulously designed rooms and suites.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rooms.map((room) => (
                            <div key={room.id} className="reveal opacity-0 translate-y-10 transition-all duration-1000">
                                <RoomCard {...room} onBookNow={openBooking} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal opacity-0 translate-y-10 transition-all duration-1000">
                        <div className="max-w-2xl">
                            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-2 block">Premium Amenities</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 transition-all duration-1000">
                                World Class Services
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Discover a haven of relaxation and enjoyment. We offer a comprehensive suite of services designed to make your stay exceptional and worry-free.
                            </p>
                        </div>
                        <button className="mt-8 md:mt-0 px-6 py-3 border-2 border-slate-900 text-slate-900 font-medium rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                            Explore All Services
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="reveal opacity-0 translate-y-10 transition-all duration-1000">
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-1000">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Guest Reviews</h2>
                        <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Read what our lovely guests have to say about their unforgettable experiences at Grand Horizon.
                        </p>
                    </div>

                    <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
                        <TestimonialSlider />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-amber-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c53cd4185ca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10 reveal opacity-0 translate-y-10 transition-all duration-1000">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        Ready for an Unforgettable Stay?
                    </h2>
                    <p className="text-white/90 text-xl mb-10">
                        Book your room today and prepare to experience luxury like never before.
                    </p>
                    <button
                        onClick={openBooking}
                        className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        Book Now
                    </button>
                </div>
            </section>

            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
