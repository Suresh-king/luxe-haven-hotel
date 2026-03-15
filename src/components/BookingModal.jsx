import { useState } from 'react';
import { X, Calendar, Users, Hotel } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop overlay */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className={`relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
                    }`}
            >

                {/* Header */}
                <div className="bg-slate-900 text-white p-6 md:p-8 flex justify-between items-start relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">Reserve Your Stay</h2>
                        <p className="text-amber-400">Experience world-class luxury at Grand Horizon.</p>
                    </div>

                    <button
                        onClick={onClose}
                        className="relative z-10 text-slate-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Form Body */}
                <div className="p-6 md:p-8">
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); alert("Booking Request Submitted Successfully!"); }}>

                        {/* Personal Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-amber-600" /> Check-In Option
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-amber-600" /> Check-Out Option
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Room Type & Guests */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                                    <Hotel className="w-4 h-4 text-amber-600" /> Room Selection
                                </label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none appearance-none">
                                    <option>Deluxe Room (₹5,000/night)</option>
                                    <option>Luxury Suite (₹8,000/night)</option>
                                    <option>Premium Room (₹12,000/night)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                                    <Users className="w-4 h-4 text-amber-600" /> Number of Guests
                                </label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none appearance-none">
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4+ Guests</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4 border-t border-slate-100 flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-3 text-slate-600 font-medium hover:bg-slate-100 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg shadow-lg shadow-amber-600/30 transition-all transform hover:-translate-y-1"
                            >
                                Confirm Booking
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
