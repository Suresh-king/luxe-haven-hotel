import { useEffect } from 'react';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stats = [
        { icon: Award, label: 'Awards Won', value: '45+' },
        { icon: Users, label: 'Happy Guests', value: '50k+' },
        { icon: Clock, label: 'Years of Service', value: '25' },
        { icon: ShieldCheck, label: 'Quality Standards', value: '100%' },
    ];

    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <div className="relative py-24 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">About Grand Horizon</h1>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        A legacy of luxury, hospitality, and unforgettable experiences spanning over two decades.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-c53cd4185ca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                alt="Hotel exterior"
                                className="w-full h-64 object-cover rounded-2xl shadow-lg transform -translate-y-8"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                alt="Hotel interior"
                                className="w-full h-64 object-cover rounded-2xl shadow-lg translate-y-8"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="lg:pl-8 mt-12 lg:mt-0">
                            <span className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-2 block">Our Story</span>
                            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                                Redefining the art of luxury hospitality.
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Founded in 2000, Grand Horizon has established itself as a premier destination for travelers seeking elegance, comfort, and personalized service.
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Our vision is to offer an oasis of tranquility amidst the bustling city. With meticulously designed architecture, world-class amenities, and a team dedicated to exceeding expectations, every moment spent here is crafted to perfection.
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500 hidden sm:block">
                                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" alt="CEO" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Michael Sterling</h4>
                                    <p className="text-slate-500">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                                    <p className="text-slate-500 font-medium">{stat.label}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
