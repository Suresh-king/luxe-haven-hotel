import { Heart } from 'lucide-react';

export default function RoomCard({ image, title, price, description, onBookNow }) {
    return (
        <div className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Image Container with Zoom effect */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-all duration-300">
                    <Heart className="w-5 h-5" />
                </button>
            </div>

            {/* Content Container */}
            <div className="p-6 relative">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-300">
                            {title}
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">{description}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                    <div>
                        <span className="text-amber-600 font-bold text-2xl">₹{price}</span>
                        <span className="text-slate-400 text-sm"> / night</span>
                    </div>
                    <button
                        onClick={onBookNow}
                        className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium shadow-md hover:bg-amber-600 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-x-1"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}
