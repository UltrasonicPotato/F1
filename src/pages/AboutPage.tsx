import { Target, Award, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import stemRacingSpain from '../assets/MC_StemRacingSpain.png';
import aboutBg from '../assets/about-bg.jpg';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Nuestra Misión',
      description: 'Impulsar la innovación en ingeniería y diseño, demostrando que la pasión y el trabajo en equipo pueden llevarnos a la excelencia.',
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Comprometidas con los más altos estándares en diseño aerodinámico, fabricación y presentación profesional.',
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'La colaboración y el apoyo mutuo son el motor que impulsa cada decisión y cada logro del equipo Colibrí.',
    },
    {
      icon: Zap,
      title: 'Innovación',
      description: 'Aplicamos tecnología de vanguardia y pensamiento creativo para optimizar cada aspecto de nuestro diseño.',
    },
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <ImageWithFallback
        src={aboutBg}
        alt="About background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'blur(8px)' }}
      />
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-white">Sobre nosotros</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 mx-auto mb-8"></div>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Somos un equipo de alumnas españolas apasionadas por la ingeniería y la competición. 
            Participamos en F1 in Schools, donde diseñamos, fabricamos y competimos con coches en miniatura 
            impulsados por cartuchos de CO₂, demostrando que la innovación no tiene límites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-xl border border-gray-200 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-xl mb-4 text-black">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-100 rounded-2xl border border-gray-200 overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <h3 className="text-3xl mb-6 text-black">¿Qué es STEM racing?</h3>
              <p className="text-gray-700 mb-4">
                STEM Racing es una iniciativa educativa global en la que equipos de estudiantes diseñan, fabrican y compiten con coches de F1 en miniatura propulsados por CO2, integrando ciencia, tecnología, ingeniería y matemáticas (STEM) con habilidades empresariales como marketing, branding y gestión de proyectos, que culmina en una final mundial.
              </p>
            </div>
            <div className="relative h-64 md:h-auto flex items-center justify-center">
              <ImageWithFallback
                src={stemRacingSpain}
                alt="STEM Racing Spain"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
