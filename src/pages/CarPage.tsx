import { Gauge, Wind, Zap, Weight, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import prototype1 from '../assets/prototype1.png';
import prototype2 from '../assets/prototype2.png';

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

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          <AccordionItem value="development" className="mb-8">
            <AccordionTrigger className="text-xl md:text-2xl font-bold">DESARROLLO</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700">
              <div className="space-y-8 p-4">
                <div>
                  <h4 className="font-bold text-black mb-6 uppercase tracking-wide text-lg border-l-4 border-emerald-500 pl-3">Consideraciones durante el desarrollo</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h5 className="font-bold text-lg mb-2 flex items-center gap-2">
                          <Wind className="w-5 h-5 text-emerald-500" />
                          Reducción de resistencia (Drag)
                        </h5>
                        <p className="text-gray-700">Minimizar la resistencia del aire es primordial para alcanzar velocidades máximas. Analizamos meticulosamente cada curva de la superficie para garantizar el flujo de aire más suave posible.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h5 className="font-bold text-lg mb-2 flex items-center gap-2">
                          <Gauge className="w-5 h-5 text-emerald-500" />
                          Estabilidad
                        </h5>
                        <p className="text-gray-700">La velocidad no es nada sin control. Nuestro diseño prioriza la estabilidad aerodinámica para mantener el coche pegado a la pista, evitando el levantamiento.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h5 className="font-bold text-lg mb-2 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-emerald-500" />
                          Manufacturabilidad
                        </h5>
                        <p className="text-gray-700">Un gran diseño debe ser construible. Evaluamos constantemente nuestra geometría para asegurar que pueda ser mecanizada o impresa con precisión.</p>
                      </div>
                    </div>
                    {/* Placeholder for Inspo-style Image/Visual */}
                    <div className="rounded-xl overflow-hidden bg-gray-200 h-full min-h-[300px] flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20"></div>
                      <span className="relative text-gray-400 font-medium italic">[Espacio para imagen ilustrativa]</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-6 uppercase tracking-wide text-lg border-l-4 border-cyan-500 pl-3">Programas utilizados</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h5 className="font-bold text-black mb-2">Autodesk Fusion 360</h5>
                      <p className="text-sm text-gray-600">Herramienta principal CAD para modelado de formas orgánicas y piezas mecánicas con alta precisión.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h5 className="font-bold text-black mb-2">Ansys Discovery</h5>
                      <p className="text-sm text-gray-600">Simulaciones CFD para visualizar flujo de aire, identificar resistencia y optimizar el perfil virtualmente.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h5 className="font-bold text-black mb-2">Bambu Studio</h5>
                      <p className="text-sm text-gray-600">Laminado para impresión 3D, crítico para traducir diseños digitales en prototipos tangibles.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-6 uppercase tracking-wide text-lg border-l-4 border-fuchsia-500 pl-3">Prototipos</h4>

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full md:w-1/2 flex justify-start ml-12">
                      <Carousel className="w-full max-w-xs" opts={{ loop: true }}>
                        <CarouselContent>
                          {[prototype1, prototype2, prototype1, prototype2].map((image, index) => (
                            <CarouselItem key={index}>
                              <div className="p-1">
                                <div className="aspect-video rounded-xl border border-gray-200 overflow-hidden flex items-center justify-center bg-white">
                                  <img src={image} alt={`Prototype ${index + 1}`} className="w-full h-full object-contain" />
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </div>

                    <div className="w-full md:w-1/2">
                      <p className="text-gray-700 leading-relaxed">
                        Nuestro proceso de desarrollo se basa en la mejora continua y el aprendizaje constante. Actualmente contamos con un prototipo funcional que cumple satisfactoriamente con nuestros objetivos de rendimiento, pero llegar aquí no ha sido sencillo. Hemos diseñado, fabricado y evaluado numerosas iteraciones anteriores que, aunque no alcanzaron el corte final, nos proporcionaron datos invaluables. Lejos de detenernos, ya estamos planificando la fabricación de nuevas versiones para refinar aún más la aerodinámica y la estabilidad, asegurando que el modelo final sea la mejor versión posible de nuestra visión.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-2 uppercase tracking-wide text-lg border-l-4 border-orange-500 pl-3">Modelo Final</h4>
                  <p>En esta sección, explicaremos la razón detrás de nuestra elección específica para el modelo final una vez determinado.</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="building">
            <AccordionTrigger className="text-xl md:text-2xl font-bold">PROCESO DE CONSTRUCCIÓN</AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700">
              <div className="p-4">
                <p className="italic text-gray-500">Aún no hemos comenzado la construcción.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
