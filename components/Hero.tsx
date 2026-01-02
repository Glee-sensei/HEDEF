
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-[slow-zoom_20s_ease-in-out_infinite]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 bg-teal-600/20 backdrop-blur-md border border-teal-500/30 rounded-full text-teal-300 font-semibold text-sm tracking-widest uppercase">
            Quality Education & Economic Empowerment
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
            Every Child <span className="text-red-500 underline decoration-teal-500 decoration-4">Learns</span>, Every Youth <span className="text-teal-400">Earns</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
            We are committed to breaking cycles of poverty through formal education for children and vocational training for youth in underserved communities.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-teal-500/20 group flex items-center justify-center">
              Our Pillars
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-red-500/20">
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
