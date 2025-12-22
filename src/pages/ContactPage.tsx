import { Mail, Instagram, Linkedin, MapPin } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se implementaría el envío del formulario
    alert('Formulario enviado (funcionalidad de ejemplo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', value: 'colibri.racingf1@gmail.com', href: 'mailto:colibri.racingf1@gmail.com' },
    { icon: Instagram, label: 'Instagram', value: '@colibri.racingf1', href: 'https://instagram.com/colibri.racingf1' },
    { icon: MapPin, label: 'Ubicación', value: 'España', href: '#' },
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400">Contacto</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta o quieres colaborar con nosotras? ¡Nos encantaría saber de ti!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-100 rounded-2xl border border-gray-200 p-8 shadow-2xl">
            <h3 className="text-2xl mb-6 text-black">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-fuchsia-600 text-white rounded-lg transition-all shadow-lg shadow-cyan-500/30"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gray-100 rounded-2xl border border-gray-200 p-8 mb-8 shadow-2xl">
              <h3 className="text-2xl mb-6 text-black">Información de Contacto</h3>
              <div className="space-y-6">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-4 text-gray-700 hover:text-cyan-400 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-fuchsia-500/20 group-hover:from-emerald-500/30 group-hover:via-cyan-500/30 group-hover:to-fuchsia-500/30 rounded-lg flex items-center justify-center transition-all">
                        <Icon className="text-cyan-400 transition-colors" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{link.label}</div>
                        <div className="text-black">{link.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 rounded-2xl p-8 text-black shadow-2xl shadow-cyan-500/30">
              <h3 className="text-2xl mb-4 font-bold text-white">Síguenos en redes</h3>
              <p className="mb-6 text-white">
                Mantente al día con nuestro progreso, competiciones y novedades del equipo.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/colibri.racingf1"
                  className="w-12 h-12 bg-gray-200 hover:bg-gray-300 backdrop-blur-sm rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
