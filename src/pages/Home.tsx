import { ChevronDown, Gauge, Wind, Weight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import heroBg from '../../test2/car.png';
import colibriLogo from '../assets/colibri.colored.logo.jpg';

function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about-summary');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroBg}
          alt="F1 Racing"
          className="w-full h-full object-cover"
          style={{ filter: 'blur(8px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/95 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#ef4444]/10 via-[#f97316]/10 to-[#eab308]/10"></div>
      </div>
      <div className="relative z-10 text-center text-black px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 border border-cyan-500/30 rounded-full mb-8">
            <span className="text-white" >STEM RACING - CATEGORÍA PROFESIONAL</span>
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl mb-6 tracking-tight text-white" style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: '800', letterSpacing: '0.05em' }}>
          COLIBRÍ RACING
        </h1>
        <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: '500' }}>
          Más rápido que un parpadeo, tan preciso como un colibrí
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
          <img src={colibriLogo} alt="Colibrí Racing Logo" className="mx-auto" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl mb-6 text-black font-bold">Sobre Nosotras</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto md:mx-0 mb-8">
            Somos un equipo de 6 alumnas unidas por nuestra pasión por la ingeniería, la aerodinámica y los coches. Participamos en STEM racing, un proyecto que nos ha motivado a crear el coche más rápido e innovador posible. Estamos deseando dar el primer paso en nuestro viaje: la Competición Regional. Estos son los valores principales de nuestro equipo:
          </p>
          <Link to="/about" className="px-8 py-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-fuchsia-600 text-white rounded-lg transition-all shadow-lg shadow-cyan-500/50">
            Conoce más
          </Link>
        </div>
      </div>
    </section>
  );
}

function TeamSummary() {
  const teamMembers = [
    { name: 'Blanca Hernández', role: 'Líder del Equipo / Ingeniera de Diseño', image: '/team/Blanca.jpg' },
    { name: 'Sofía Sánchez', role: 'Ingeniera de Diseño', image: '/team/Sofia Sanchez.jpg' },
    { name: 'Sofía Soriano', role: 'Ingeniera de Fabricación', image: '/team/Sofia Soriano.jpg' },
    { name: 'Amy Ogando', role: 'Diseñadora Gráfica', image: '/team/Amy.jpg' },
    { name: 'Amara Maldonado', role: 'Gerente de Recursos', image: '/team/Amara.jpg' },
    { name: 'Anna Bessereau', role: 'Gerente de Marketing', image: '/team/Anna.jpg' },
  ];

  return (
    <section id="team-summary" className="py-24 px-4 bg-gray-50 text-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6 text-black font-bold">Nuestro Equipo</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Un grupo diverso de alumnas apasionadas por la ingeniería, el diseño y la innovación. Juntas formamos Colibrí Racing.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-100 p-0 rounded-xl border border-gray-200 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-2 text-black">{member.name}</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#f87171] to-[#fb923c]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/team" className="px-8 py-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-fuchsia-600 text-white rounded-lg transition-all shadow-lg shadow-cyan-500/50">
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
    <section id="car-summary" className="py-24 px-4 bg-white text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl mb-6 text-black font-bold">Nuestro Coche</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto md:mx-0 mb-12">
            Un diseño revolucionario que combina aerodinámica de vanguardia con ingeniería de precisión.
          </p>
          <div className="grid gap-6 mb-12">
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl text-black mb-2">Reducción de resistencia (Drag)</h3>
              <p className="text-gray-700">Minimizar la resistencia del aire es primordial para alcanzar velocidades máximas. Analizamos meticulosamente cada curva de la superficie para garantizar el flujo de aire más suave posible.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl text-black mb-2">Estabilidad</h3>
              <p className="text-gray-700">La velocidad no es nada sin control. Nuestro diseño prioriza la estabilidad aerodinámica para mantener el coche pegado a la pista, evitando el levantamiento.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl text-black mb-2">Manufacturabilidad</h3>
              <p className="text-gray-700">Un gran diseño debe ser construible. Evaluamos constantemente nuestra geometría para asegurar que pueda ser mecanizada o impresa con precisión.</p>
            </div>
          </div>
          <Link to="/car" className="px-8 py-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-fuchsia-600 text-white rounded-lg transition-all shadow-lg shadow-cyan-500/50">
            Descubre el coche
          </Link>
        </div>
        <div className="rounded-2xl flex items-center justify-center h-80 md:h-[500px] overflow-hidden border border-gray-300 relative">
          <ImageWithFallback
            src={heroBg}
            alt="Nuestro Coche"
            className="w-full h-full object-cover"
          />
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
    <section id="sponsors-summary" className="py-24 px-4 bg-gray-50 text-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6 text-black font-bold">Nuestros Patrocinadores</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Gracias a nuestros patrocinadores por hacer posible este proyecto.
          Ofrecemos niveles de patrocinio (Oro, Plata, Bronce) adaptados a tus necesidades.
        </p>
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-lg mx-auto">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-xl border border-gray-200 flex items-center justify-center">
              <span className="text-4xl">{sponsor.logo}</span>
            </div>
          ))}
        </div>
        <Link to="/sponsors" className="px-8 py-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-fuchsia-600 text-white rounded-lg transition-all shadow-lg shadow-cyan-500/50">
          Conviértete en patrocinador
        </Link>
      </div>
    </section >
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
