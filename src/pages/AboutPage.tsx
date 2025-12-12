import { Target, Award, Users, Zap } from 'lucide-react';

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
    <section className="py-24 px-4 bg-[#0a0a0f] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400">Sobre nosotros</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                className="bg-gradient-to-br from-[#16161d] to-[#1e1e2e] p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-fuchsia-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-xl mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-[#16161d] to-[#1e1e2e] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-12">
              <h3 className="text-3xl mb-6 text-white">¿Qué es F1 in Schools?</h3>
              <p className="text-gray-300 mb-4">
                F1 in Schools es una competición internacional multidisciplinar que desafía a equipos 
                de estudiantes a diseñar, fabricar, testear y competir con coches de F1 en miniatura.
              </p>
              <p className="text-gray-300 mb-4">
                El proyecto combina ciencia, tecnología, ingeniería y matemáticas (STEM) con desarrollo 
                empresarial, gestión de proyectos y comunicación.
              </p>
              <p className="text-gray-300">
                Competimos en la categoría profesional, enfrentándonos a los mejores equipos a nivel nacional 
                e internacional, representando el futuro de la ingeniería española.
              </p>
            </div>
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-fuchsia-500 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">🏎️</div>
                  <p className="text-xl font-bold">Categoría Profesional</p>
                  <p className="text-white/80 mt-2">F1 in Schools Spain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
