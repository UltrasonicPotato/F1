import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function TeamPage() {
  const teamMembers = [
    {
      name: 'Nombre Apellido',
      role: 'Team Manager',
      description: 'Responsable de la coordinación del equipo y gestión del proyecto.',
      image: 'https://images.unsplash.com/photo-1728023881214-1d71a7a30a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2NTI4MTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Nombre Apellido',
      role: 'Design Engineer',
      description: 'Encargada del diseño CAD y optimización aerodinámica.',
      image: 'https://images.unsplash.com/photo-1728023881214-1d71a7a30a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2NTI4MTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Nombre Apellido',
      role: 'Manufacturing Engineer',
      description: 'Responsable del proceso de fabricación y testing.',
      image: 'https://images.unsplash.com/photo-1728023881214-1d71a7a30a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2NTI4MTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Nombre Apellido',
      role: 'Marketing & Media',
      description: 'Gestiona comunicación, redes sociales y patrocinadores.',
      image: 'https://images.unsplash.com/photo-1728023881214-1d71a7a30a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2NTI4MTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Nombre Apellido',
      role: 'Graphic Designer',
      description: 'Diseño gráfico, branding y presentaciones visuales.',
      image: 'https://images.unsplash.com/photo-1728023881214-1d71a7a30a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2NTI4MTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Nombre Apellido',
      role: 'Resource Manager',
      description: 'Gestión de recursos, presupuesto y patrocinios.',
      image: 'https://images.unsplash.com/photo-1728023881214-1d71a7a30a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2NTI4MTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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