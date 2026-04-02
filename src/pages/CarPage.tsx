import { Gauge, Wind, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import autodeskLogo from '../assets/autodesk-fusion-logo.png';
import ansysLogo from '../assets/ansys-logo.png';
import aboutBg from '../assets/about-bg.jpg';
import carOutlineTopRed from '../../test2/car.outline.top.red.png';
import randomBg from '../../test2/random.bg.jpg';

export function CarPage() {
  return (
    <>
      {/* Hero Image Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <ImageWithFallback
          src={aboutBg}
          alt="Car page background space"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(8px)' }}
        />
        {/* Soft gradient overlay to blend into the section below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white"></div>
      </section>

      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Decorative gradients */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400">Nuestro Coche</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-0">
              Un diseño revolucionario que combina aerodinámica de vanguardia con ingeniería de precisión.
            </p>
          </div>

          {/* Car Showcase Image */}
          <div className="w-full max-w-4xl mx-auto flex items-center justify-center pt-10" style={{ marginBottom: '100px' }}>
            <ImageWithFallback
              src={carOutlineTopRed}
              alt="Colibrí Racing Car Outline"
              className="w-full h-auto object-contain rotate-180 scale-[1.3] md:scale-[1.5]"
            />
          </div>

          {/* Feature Boxes */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4" style={{ marginBottom: '260px' }}>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-cyan-500/10 transition-shadow">
              <h3 className="text-xl font-bold text-black mb-4">Característica 1</h3>
              <p className="text-gray-600">Aquí puedes añadir el texto explicativo sobre el coche final. Este es un texto de relleno temporal.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-cyan-500/10 transition-shadow">
              <h3 className="text-xl font-bold text-black mb-4">Característica 2</h3>
              <p className="text-gray-600">Espacio reservado para más detalles del modelo definitivo, innovaciones destacadas o sus estadísticas.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-cyan-500/10 transition-shadow">
              <h3 className="text-xl font-bold text-black mb-4">Característica 3</h3>
              <p className="text-gray-600">Último bloque para completar la información clave del coche final antes de pasar a la sección de desarrollo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT SECTION: DESARROLLO */}
      <section className="relative py-24 px-4 w-full overflow-hidden">
        <ImageWithFallback
          src={randomBg}
          alt="Desarrollo background"
          className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
          style={{ filter: 'blur(8px)' }}
        />
        {/* Semi-transparent overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="w-full max-w-5xl mx-auto">
            
            <div className="text-left mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-wider">Desarrollo</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500"></div>
            </div>
            
            <div className="text-base md:text-lg text-gray-700">
              <div className="space-y-20">
                <div>
                  <h4 className="font-bold text-white mb-8 uppercase tracking-wide text-2xl border-l-4 border-emerald-500 pl-4">Consideraciones durante el desarrollo</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xl">
                      <h5 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <Wind className="w-5 h-5 text-emerald-500" />
                        Reducción de resistencia (Drag)
                      </h5>
                      <p className="text-gray-700">Minimizar la resistencia del aire es primordial para alcanzar velocidades máximas. Analizamos meticulosamente cada curva de la superficie para garantizar el flujo de aire más suave posible.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xl">
                      <h5 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <Gauge className="w-5 h-5 text-emerald-500" />
                        Estabilidad
                      </h5>
                      <p className="text-gray-700">La velocidad no es nada sin control. Nuestro diseño prioriza la estabilidad aerodinámica para mantener el coche pegado a la pista, evitando el levantamiento.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-xl">
                      <h5 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-emerald-500" />
                        Manufacturabilidad
                      </h5>
                      <p className="text-gray-700">Un gran diseño debe ser construible. Evaluamos constantemente nuestra geometría para asegurar que pueda ser mecanizada o impresa con precisión.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-8 uppercase tracking-wide text-2xl border-l-4 border-cyan-500 pl-4">Programas utilizados</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
                      <div className="h-12 mb-4 flex items-center">
                        <img src={autodeskLogo} alt="Autodesk Fusion 360" className="h-full object-contain" />
                      </div>
                      <h5 className="font-bold text-black mb-2">Autodesk Fusion 360</h5>
                      <p className="text-sm text-gray-600">Herramienta principal CAD para modelado de formas orgánicas y piezas mecánicas con alta precisión.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
                      <div className="h-12 mb-4 flex items-center">
                        <img src={ansysLogo} alt="Ansys Discovery" className="h-full object-contain" />
                      </div>
                      <h5 className="font-bold text-black mb-2">Ansys Discovery</h5>
                      <p className="text-sm text-gray-600">Simulaciones CFD para visualizar flujo de aire, identificar resistencia y optimizar el perfil virtualmente.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-8 uppercase tracking-wide text-2xl border-l-4 border-fuchsia-500 pl-4">Prototipos</h4>

                  <div className="w-full min-w-0" style={{ maxWidth: '100%' }}>
                  {/* Native CSS Slider */}
                  <div 
                    className="flex gap-8 snap-x snap-mandatory pb-8 pt-4 w-full scroll-smooth"
                    style={{ overflowX: 'auto', scrollbarWidth: 'auto' }}
                  >
                    {[1, 2, 3, 4].map((item) => (
                      <div 
                        key={item} 
                        className="bg-white border-2 border-gray-100 shadow-2xl snap-center snap-always flex items-center justify-center hover:scale-[1.02] transition-transform"
                        style={{ flex: '0 0 auto', width: '380px', height: '380px', maxWidth: '85vw' }}
                      >
                        <span className="text-gray-400 font-bold uppercase tracking-wider text-2xl">Preview {item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-4 uppercase tracking-wide text-2xl border-l-4 border-orange-500 pl-4">Modelo Final</h4>
                  <p className="text-gray-700 text-lg bg-white p-6 rounded-xl border border-gray-100 shadow-xl">En esta sección, explicaremos la razón detrás de nuestra elección específica para el modelo final una vez determinado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
