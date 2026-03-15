import { useState, useEffect } from 'react';
import RoomCard from '../components/RoomCard';
import BookingModal from '../components/BookingModal';

export default function Rooms() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
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
        },
        {
            id: 4,
            title: "Family Suite",
            price: "15,000",
            description: "Ideal for families, this suite includes extra beds and child-friendly amenities.",
            image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "Presidential Suite",
            price: "25,000",
            description: "Our finest accommodation offering unparalleled luxury and prestige.",
            image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Garden Villa",
            price: "18,000",
            description: "A private retreat featuring a secluded garden and personal plunge pool.",
            image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="pt-24 bg-slate-50 min-h-screen">

            {/* Page Header */}
            <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c53cd4185ca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Rooms & Suites</h1>
                    <p className="text-xl text-slate-300">Discover your perfect sanctuary of comfort and elegance.</p>
                </div>
            </div>

            {/* Rooms Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room) => (
                        <RoomCard key={room.id} {...room} onBookNow={openBooking} />
                    ))}
                </div>
            </div>

            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
