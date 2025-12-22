import { ChevronDown, Target, Users, Zap, Gauge, Wind, Weight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import heroBg from '../../test2/car.png';

function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about-summary');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroBg}
          alt="F1 Racing"
          className="w-full h-full object-cover"
          style={{ filter: 'blur(8px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/95"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#ef4444]/10 via-[#f97316]/10 to-[#eab308]/10"></div>
      </div>
      <div className="relative z-10 text-center text-black px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 border border-cyan-500/30 rounded-full mb-8">
            <span className="text-white" >F1 IN SCHOOLS - CATEGORÍA PROFESIONAL</span>
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl mb-6 tracking-tight text-white" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: '800', letterSpacing: '0.05em' }}>
          COLIBRÍ RACING
        </h1>
        <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: '500' }}>
          Mas rapido que un parpadeo, tan presico como un colibri
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-fuchsia-600 text-white rounded-lg transition-all shadow-lg shadow-cyan-500/50"
          >
            Descubre Más
          </button>
          <Link
            to="/contact"
            className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-black border border-gray-200 rounded-lg backdrop-blur-sm transition-all flex items-center justify-center"
          >
            Contacto
          </Link>
        </div>
      </div>
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#fb923c] animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

function AboutSummary() {
  return (
    <section id="about-summary" className="py-24 px-4 bg-white text-black">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center">
          <img src="../../test3/colibri.logo.color.png" alt="Colibrí Racing Logo" className="mx-auto" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl mb-6 text-black">Sobre Nosotros</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto md:mx-0 mb-8">
            Somos un equipo de alumnas españolas apasionadas por la ingeniería y la competición. Participamos en F1 in Schools, donde diseñamos, fabricamos y competimos con coches en miniatura impulsados por cartuchos de CO₂, demostrando que la innovación no tiene límites.
          </p>
          <Link to="/about" className="px-8 py-4 bg-gradient-to-r from-[#ef4444] via-[#f97316] to-[#eab308] hover:from-[#dc2626] hover:via-[#ea580c] hover:to-[#ca8a04] text-black rounded-lg transition-all shadow-lg shadow-[#f97316]/30">
            Conoce más
          </Link>
        </div>
      </div>
    </section>
  );
}

function TeamSummary() {
  const teamMembers = [
    { name: 'Nombre Apellido', role: 'Team Manager' },
    { name: 'Nombre Apellido', role: 'Design Engineer' },
    { name: 'Nombre Apellido', role: 'Manufacturing Engineer' },
    { name: 'Nombre Apellido', role: 'Marketing & Media' },
    { name: 'Nombre Apellido', role: 'Graphic Designer' },
    { name: 'Nombre Apellido', role: 'Resource Manager' },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50 text-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6 text-black">Nuestro Equipo</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Un grupo diverso de alumnas apasionadas por la ingeniería, el diseño y la innovación. Juntas formamos Colibrí Racing.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl mb-2 text-black">{member.name}</h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#f87171] to-[#fb923c]">{member.role}</p>
            </div>
          ))}
        </div>
        <Link to="/team" className="px-8 py-4 bg-gradient-to-r from-[#ef4444] via-[#f97316] to-[#eab308] hover:from-[#dc2626] hover:via-[#ea580c] hover:to-[#ca8a04] text-black rounded-lg transition-all shadow-lg shadow-[#f97316]/30">
          Conoce al equipo
        </Link>
      </div>
    </section>
  );
}

function CarSummary() {
  const specs = [
    { icon: Gauge, label: 'Velocidad', value: '65+ km/h' },
    { icon: Wind, label: 'Coef. Drag', value: '0.18' },
    { icon: Weight, label: 'Peso', value: '55g' },
  ];

  return (
    <section className="py-24 px-4 bg-white text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl mb-6 text-black">Nuestro Coche</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto md:mx-0 mb-12">
            Un diseño revolucionario que combina aerodinámica de vanguardia con ingeniería de precisión.
          </p>
          <div className="grid grid-cols-3 gap-8 mb-12">
            {specs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className="bg-gray-100 p-4 rounded-xl border border-gray-200 text-center">
                  <Icon className="text-[#fb923c] mx-auto mb-2" size={24} />
                  <div className="text-xl text-black mb-1">{spec.value}</div>
                  <div className="text-gray-500">{spec.label}</div>
                </div>
              );
            })}
          </div>
          <Link to="/car" className="px-8 py-4 bg-gradient-to-r from-[#ef4444] via-[#f97316] to-[#eab308] hover:from-[#dc2626] hover:via-[#ea580c] hover:to-[#ca8a04] text-black rounded-lg transition-all shadow-lg shadow-[#f97316]/30">
            Descubre el coche
          </Link>
        </div>
        <div className="bg-gray-200 rounded-2xl flex items-center justify-center h-80 md:h-full p-8 text-gray-500 text-2xl font-bold border border-gray-300">
          Insertar foto del coche
        </div>
      </div>
    </section>
  );
}

function SponsorsSummary() {
  const sponsors = [
    { name: 'Tu Empresa Aquí', logo: '🏢' },
    { name: 'Empresa 1', logo: '🔷' },
    { name: 'Empresa 2', logo: '⚪' },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50 text-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6 text-black">Nuestros Patrocinadores</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Gracias a nuestros patrocinadores por hacer posible este proyecto y apoyar el talento STEM en España.
        </p>
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-lg mx-auto">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-xl border border-gray-200 flex items-center justify-center">
              <span className="text-4xl">{sponsor.logo}</span>
            </div>
          ))}
        </div>
        <Link to="/sponsors" className="px-8 py-4 bg-gradient-to-r from-[#ef4444] via-[#f97316] to-[#eab308] hover:from-[#dc2626] hover:via-[#ea580c] hover:to-[#ca8a04] text-black rounded-lg transition-all shadow-lg shadow-[#f97316]/30">
          Conviértete en patrocinador
        </Link>
      </div>
    </section>
  );
}


export function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSummary />
      <TeamSummary />
      <CarSummary />
      <SponsorsSummary />
    </div>
  );
}
