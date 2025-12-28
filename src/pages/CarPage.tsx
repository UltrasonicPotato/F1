import { Gauge, Wind, Zap, Weight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CarPage() {
  const specs = [
    { icon: Gauge, label: 'Velocidad', value: '65+ km/h' },
    { icon: Wind, label: 'Coef. Drag', value: '0.18' },
    { icon: Weight, label: 'Peso', value: '55g' },
    { icon: Zap, label: 'Potencia', value: 'CO₂ 8g' },
  ];

  const features = [
    {
      title: 'Diseño Aerodinámico',
      description: 'Optimizado mediante simulaciones CFD para minimizar la resistencia al aire y maximizar la velocidad.',
    },
    {
      title: 'Fabricación CNC',
      description: 'Mecanizado de precisión en balsa y materiales compuestos para garantizar un acabado perfecto.',
    },
    {
      title: 'Testing Riguroso',
      description: 'Pruebas exhaustivas en túnel de viento y pista de competición para validar el rendimiento.',
    },
    {
      title: 'Innovación Constante',
      description: 'Iteraciones continuas del diseño basadas en datos y análisis de rendimiento.',
    },
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400">Nuestro Coche</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Un diseño revolucionario que combina aerodinámica de vanguardia con ingeniería de precisión.
          </p>
        </div>

        {/* Car Image */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-cyan-500/20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760012827122-2b467fa76d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvZHluYmmyUyMGRlc2lnbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1MzgwOTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Colibrí Racing Car"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Development Process */}
        <div className="mt-16 mb-16 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 rounded-2xl p-12 text-white shadow-2xl shadow-cyan-500/30">
          <h3 className="text-3xl mb-8 text-center text-white">Proceso de Desarrollo</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {['Investigación', 'Diseño CAD', 'Simulación CFD', 'Fabricación', 'Testing'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-200 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <p className="font-medium text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-xl border border-gray-200 hover:border-cyan-500/50 transition-all text-center hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-fuchsia-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-cyan-400" size={32} />
                </div>
                <div className="text-3xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{spec.value}</div>
                <div className="text-gray-500">{spec.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl border border-gray-200 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl mb-3 text-black">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
