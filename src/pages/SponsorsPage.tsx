import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import aboutBg from '../assets/about-bg.jpg';

export function SponsorsPage() {
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

        {/* Explicit Spacer */}
        <div style={{ height: '80px' }} aria-hidden="true"></div>

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


      </div>
    </section >
  );
}
