export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
    return (
        <div
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-100 transition-all duration-500 group relative overflow-hidden"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-0 group-hover:scale-100" />

            <div className="relative z-10">
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-500 group-hover:shadow-md transform group-hover:-rotate-6">
                    <Icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="text-xl font-bold font-serif text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}
