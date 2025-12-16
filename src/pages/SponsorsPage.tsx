import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SponsorsPage() {
  const sponsors = [
    { name: 'Tu Empresa Aquí', logo: '🏢' },
    { name: 'Empresa 1', logo: '🔷' },
    { name: 'Empresa 2', logo: '🔷' },
    { name: 'Empresa 3', logo: '🔷' },
    { name: 'Empresa 4', logo: '⚪' },
    { name: 'Empresa 5', logo: '⚪' },
    { name: 'Empresa 6', logo: '⚪' },
    { name: 'Empresa 7', logo: '⚪' },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400">Nuestros Patrocinadores</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Gracias a nuestros patrocinadores por hacer posible este proyecto y apoyar el talento STEM en España.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-2xl hover:shadow-cyan-500/20 transition-all min-h-[200px] border border-gray-200 hover:border-cyan-500/50 group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{sponsor.logo}</div>
              <p className="text-gray-700 text-center group-hover:text-black transition-colors">{sponsor.name}</p>
            </div>
          ))}
        </div>

        {/* Become a Sponsor */}
        <div className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 rounded-2xl p-12 text-black text-center shadow-2xl shadow-cyan-500/30">
          <Heart className="mx-auto mb-6" size={48} />
          <h3 className="text-3xl mb-4 font-bold">¿Quieres ser nuestro patrocinador?</h3>
          <p className="text-xl mb-8 text-black/90 max-w-2xl mx-auto">
            Únete a nosotras en esta aventura y apoya el futuro de la ingeniería española. 
            Ofrecemos diferentes niveles de patrocinio adaptados a tus necesidades.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors shadow-lg font-medium inline-flex items-center justify-center"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
}
