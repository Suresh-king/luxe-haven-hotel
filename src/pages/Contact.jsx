import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const contactInfo = [
        {
            icon: MapPin,
            title: "Our Address",
            details: "123 Luxury Avenue, Paradise City, PC 54321, Country"
        },
        {
            icon: Phone,
            title: "Phone Number",
            details: "+91 98765 43210\n+91 12345 67890"
        },
        {
            icon: Mail,
            title: "Email Address",
            details: "info@grandhorizon.com\nreservations@grandhorizon.com"
        },
        {
            icon: Clock,
            title: "Working Hours",
            details: "24/7 Front Desk\nReservations: 8:00 AM - 10:00 PM"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent successfully!");
    }

    return (
        <div className="pt-24 min-h-screen bg-slate-50">

            {/* Header */}
            <div className="bg-slate-900 text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c53cd4185ca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-slate-300">We respond to all inquiries within 24 hours.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Have a question or need assistance with your booking? Our dedicated team is here to help you experience the best.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, idx) => {
                                const Icon = info.icon;
                                return (
                                    <div key={idx} className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{info.title}</h4>
                                            <p className="text-slate-600 whitespace-pre-line text-sm leading-relaxed">{info.details}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Send us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                        placeholder="How can we help you?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                    <textarea
                                        rows="5"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none resize-none"
                                        placeholder="Write your message here..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-xl shadow-lg shadow-amber-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    Send Message <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
