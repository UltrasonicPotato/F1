import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function TeamPage() {

  const teamMembers = [
    {
      name: 'Blanca Hernández',
      role: 'Líder del Equipo / Ingeniera de Diseño',
      description: 'Es responsable de gestionar el equipo y garantizar que todos los elementos del proyecto se completen y entreguen a tiempo para la competición. Brinda apoyo en todas las áreas del proyecto, con especial interés en el campo de la ingeniería de diseño.',
      image: '/team/Blanca.jpg',
    },
    {
      name: 'Sofía Sánchez',
      role: 'Ingeniera de Diseño',
      description: 'Diseña y desarrolla el modelo CAD del monoplaza en miniatura STEM del equipo. También está a cargo de la página web, ya que posee amplios conocimientos de programación informática.',
      image: '/team/Sofia Sanchez.jpg',
    },
    {
      name: 'Sofía Soriano',
      role: 'Ingeniera de Fabricación',
      description: 'Es responsable de investigar sobre los materiales más potenciales, elegir el proceso de fabricación adecuado para cada pieza del vehículo y supervisarlo. Trabaja junto con la Ingeniera de Diseño y la Líder de Equipo.',
      image: '/team/Sofia Soriano.jpg',
    },
    {
      name: 'Amy Ogando',
      role: 'Diseñadora Gráfica',
      description: 'Crea los esquemas de color para aplicarlos al vehículo, junto con las formatos gráficos y todo lo relativo al estilo. También se encarga del uniforme y el “pit display”. Además, ayuda a la Líder del Equipo con todos los portafolios',
      image: '/team/Amy.jpg',
    },
    {
      name: 'Amara Maldonado',
      role: 'Gerente de Recursos',
      description: 'Organiza el dinero, los materiales y el equipo para el diseño y la construcción del modelo de coche. También desarrolla nuevas ideas y estrategias de marketing para el equipo. Consigue patrocinios para obtener financiación y materiales.',
      image: '/team/Amara.jpg',
    },
    {
      name: 'Anna Bessereau',
      role: 'Gerente de Marketing',
      description: 'Gestiona el marketing en redes sociales para atraer a posibles patrocinadores. Debe aportar ideas originales y eficaces para generar interés. Trabaja con el Gerente de Recursos.',
      image: '/team/Anna.jpg',
    },
  ];



  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400">Nuestro Equipo</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Un grupo diverso de alumnas apasionadas por la ingeniería, el diseño y la innovación.
            Juntas formamos Colibrí Racing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden border border-gray-200 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all"
            >
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-fuchsia-500/20">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl mb-2 text-black">{member.name}</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">{member.role}</p>
                <p className="text-gray-500">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
