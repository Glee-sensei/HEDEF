
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import ImpactStats from './components/ImpactStats';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

// Page Components
const HomePage = () => (
  <main>
    <Hero />
    <ImpactStats />
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
              alt="HEdEF Community" 
              className="rounded-2xl shadow-2xl relative z-10 w-full"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h4 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-2">Our Foundation</h4>
              <h2 className="text-4xl font-serif text-slate-900 leading-tight">Founded by Microbiology Students with a <span className="text-red-600">Vision</span></h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 2021 by microbiology students of the <span className="font-bold text-teal-700">University of Benin</span>, HEdEF emerged in response to the alarming number of children engaged in street hawking instead of schooling.
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-teal-600">
              <p className="italic text-slate-700">"We seek to educate the growing age and empower the working age—aligning directly with global sustainable development efforts."</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                <h4 className="font-bold text-teal-800 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Our Mission
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">To advance inclusive education and economic empowerment by returning children to school, equipping youth with employable skills, and supporting their transition into dignified work.</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                <h4 className="font-bold text-teal-800 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Our Vision
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">A society where every child has access to quality education and every youth is equipped for economic contribution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Programs />
    <section className="py-24 bg-teal-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-8 max-w-4xl mx-auto">
          "Join us in this transformative journey toward a more <span className="text-red-500">educated</span> and <span className="text-teal-400">empowered</span> society."
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
            Become a Sponsor
          </button>
          <button className="border-2 border-white/20 hover:bg-white/10 px-8 py-4 rounded-lg font-bold transition-all">
            Volunteer With Us
          </button>
        </div>
      </div>
    </section>
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
};

export default App;
