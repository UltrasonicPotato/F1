import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import aboutBg from '../assets/about-bg.jpg';

export function SponsorsPage() {
  const sponsors = [
    { name: 'Tu Empresa Aquí', logo: '🏢' },
    { name: 'Empresa 1', logo: '🔷' },
    { name: 'Empresa 2', logo: '⚪' },
    { name: 'Empresa 3', logo: '🔶' },
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <ImageWithFallback
        src={aboutBg}
        alt="Sponsors background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'blur(8px)' }}
      />
      {/* Dark purple overlay with multiply effect */}
      {/* Dark purple overlay with multiply effect */}
      <div className="absolute inset-0 bg-purple-950/80 mix-blend-multiply z-10 pointer-events-none"></div>

      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-fuchsia-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-5xl mb-6 text-white">Nuestros Patrocinadores</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 mx-auto mb-8"></div>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Gracias a nuestros patrocinadores por hacer posible este proyecto y apoyar el talento STEM en España.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-2xl hover:shadow-cyan-500/20 transition-all min-h-[200px] border border-gray-200 hover:border-cyan-500/50 group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{sponsor.logo}</div>
              <p className="text-gray-700 text-center group-hover:text-black transition-colors">{sponsor.name}</p>
            </div>
          ))}
        </div>

        {/* Explicit Spacer */}
        <div style={{ height: '120px' }} aria-hidden="true"></div>

        {/* Become a Sponsor */}
        <div className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 rounded-2xl p-12 text-black text-center shadow-2xl shadow-cyan-500/30">
          <Heart className="mx-auto mb-6 text-white" size={48} />
          <h3 className="text-3xl mb-4 font-bold text-white">¿Quieres ser nuestro patrocinador?</h3>
          <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
            Únete a nosotras en esta aventura y apoya el futuro de la ingeniería española.
            Ofrecemos diferentes niveles de patrocinio adaptados a tus necesidades.
          </p>          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors shadow-lg font-medium inline-flex items-center justify-center"
          >
            Contáctanos
          </Link>
        </div>

        <div style={{ height: '150px' }} aria-hidden="true"></div>

        <div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Gold Tier */}
            <div className="bg-white border-2 border-yellow-400 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 relative overflow-hidden">

              <h4 className="text-2xl font-bold text-yellow-700 mb-2">Patrocinio de Oro</h4>
              <p className="text-3xl font-bold text-gray-900 mb-6">A partir de 500€</p>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-2"><span className="text-yellow-600">✦</span> Costado de la camiseta en grande</li>
                <li className="flex gap-2"><span className="text-yellow-600">✦</span> Endplates del alerón delantero y tapacubos</li>
                <li className="flex gap-2"><span className="text-yellow-600">✦</span> Promoción destacada en redes sociales</li>
                <li className="flex gap-2"><span className="text-yellow-600">✦</span> Mayor publicidad y reconocimiento</li>
                <li className="flex gap-2"><span className="text-yellow-600">✦</span> Invitación a eventos y competiciones</li>
              </ul>
            </div>

            {/* Silver Tier */}
            <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
              <h4 className="text-2xl font-bold text-gray-600 mb-2">Patrocinio de Plata</h4>
              <div className="flex flex-row items-baseline gap-4 mb-6">
                <p className="text-3xl font-bold text-gray-900 whitespace-nowrap">100€ - 499€</p>
                <p className="text-xs text-gray-500">o recursos por ese valor</p>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-2"><span className="text-gray-400">✦</span> Costado de la camiseta (tamaño medio)</li>
                <li className="flex gap-2"><span className="text-gray-400">✦</span> Uno de los pontones traseros</li>
                <li className="flex gap-2"><span className="text-gray-400">✦</span> Promoción en redes sociales</li>
                <li className="flex gap-2"><span className="text-gray-400">✦</span> Publicidad y reconocimiento escrito</li>
                <li className="flex gap-2"><span className="text-gray-400">✦</span> Invitación a eventos y competiciones</li>
              </ul>
            </div>

            {/* Bronze Tier */}
            <div className="bg-white border-2 border-orange-300 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
              <h4 className="text-2xl font-bold text-orange-700 mb-2">Patrocinio de Bronce</h4>
              <div className="flex flex-row items-baseline gap-4 mb-6">
                <p className="text-3xl font-bold text-gray-900 whitespace-nowrap">&lt; 100€</p>
                <p className="text-xs text-gray-500">o recursos por ese valor</p>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-2"><span className="text-orange-500">✦</span> Costado de la camiseta o espalda</li>
                <li className="flex gap-2"><span className="text-orange-500">✦</span> Endplates del alerón trasero</li>
                <li className="flex gap-2"><span className="text-orange-500">✦</span> Promoción en redes sociales</li>
                <li className="flex gap-2"><span className="text-orange-500">✦</span> Publicidad para la marca</li>
                <li className="flex gap-2"><span className="text-orange-500">✦</span> Invitación a eventos y competiciones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
