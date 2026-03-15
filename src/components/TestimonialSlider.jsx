import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Business Traveler",
        rating: 5,
        text: "Absolutely stunning hotel! The service was excellent, and the views from the premium suite were breathtaking. I'll definitely be returning on my next trip.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 2,
        name: "Rahul Desai",
        role: "Family Vacation",
        rating: 5,
        text: "The perfect destination for a family holiday. The kids loved the swimming pool, and the dining options were fantastic. Highly recommended for families.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
        id: 3,
        name: "Anita Bose",
        role: "Honeymoon Couple",
        rating: 4,
        text: "A truly romantic experience. The spa and wellness center were amazing. We had a wonderful time celebrating our anniversary here.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    }
];

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Testimonial Content */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl relative min-h-[400px] flex items-center justify-center">

                {/* Background Decorative Element */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-amber-50 rounded-full opacity-50 blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-amber-100 rounded-full opacity-50 blur-3xl" />

                <div
                    className="flex transition-transform duration-700 ease-in-out w-full z-10"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="w-full flex-shrink-0 px-8 py-12 md:px-16 md:py-16 flex flex-col items-center text-center">

                            <Quote className="w-16 h-16 text-amber-200 mb-6 rotate-180" />

                            <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed mb-8 font-serif">
                                "{testimonial.text}"
                            </p>

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-4 border-amber-100 shadow-md"
                                />
                                <div className="text-left">
                                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-6 pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-slate-600 hover:text-amber-600 hover:bg-white transition-all duration-300 pointer-events-auto transform hover:scale-110"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-slate-600 hover:text-amber-600 hover:bg-white transition-all duration-300 pointer-events-auto transform hover:scale-110"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 rounded-full h-3 ${index === currentIndex
                                ? 'w-8 bg-amber-500 shadow-md'
                                : 'w-3 bg-slate-300 hover:bg-amber-300'
                            }`}
                    />
                ))}
            </div>

        </div>
    );
}
