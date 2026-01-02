
import React from 'react';
import { Program } from '../types';

const Programs: React.FC = () => {
  const programs: Program[] = [
    {
      id: '1',
      title: 'Back-to-School Initiative',
      description: 'Identifying and sponsoring out-of-school children to return to formal education systems with full supplies.',
      image: 'input_file_1.png',
      category: 'Education',
    },
    {
      id: '2',
      title: 'Vocational Training Lab',
      description: 'Training youth in high-demand skills such as digital literacy, health sciences, tailoring, and catering.',
      image: 'input_file_0.png',
      category: 'Vocational',
    },
    {
      id: '3',
      title: 'Entrepreneurship Support',
      description: 'Providing seed funding, business development training, and job placement assistance for trained youth.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c29596ba?q=80&w=2070&auto=format&fit=crop',
      category: 'Economic',
    },
    {
      id: '4',
      title: 'Mentorship & Guidance',
      description: 'Pairing beneficiaries with industry professionals to provide career guidance and growth.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      category: 'Advocacy',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif text-teal-900 mb-4">Our Core Programs</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Humane Initiative operates on a foundation of core principles that drive our mission for sustainable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="group bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">
                  {program.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                  {program.description}
                </p>
                <button className="text-teal-600 font-bold flex items-center hover:text-red-600 transition-colors text-sm">
                  LEARN MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
