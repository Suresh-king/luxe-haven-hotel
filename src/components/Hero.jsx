import { useState, useEffect } from 'react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animations on mount
        setIsVisible(true);
    }, []);

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear hover:scale-105"
                style={{
                    backgroundImage: "url('https://i.pinimg.com/736x/5a/e7/aa/5ae7aa4d6bd3a3c015ef975ee6070587.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-slate-900/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <p
                    className={`text-amber-400 font-medium tracking-[0.2em] uppercase mb-4 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    Welcome to Grand Horizon
                </p>

                <h6
                    className={`text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Luxury</span> & Comfort
                </h6>

                <p
                    className={`text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto drop-shadow-md transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    Discover a world of unparalleled hospitality where every moment is crafted to perfection. Your unforgettable extraordinary journey begins right here.
                </p>

                <div
                    className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,119,6,0.5)] transform hover:-translate-y-1">
                        Explore Rooms
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                        Book a Stay
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            
        </div>
    );
}
