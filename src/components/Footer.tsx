import logo from '../assets/logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 text-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Colibrí Racing Logo" className="h-10 w-auto" />
              <span className="text-xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>Colibrí Racing</span>
            </div>
            <p className="text-gray-500">
              Un equipo español de alumnas compitiendo en F1 in Schools, impulsando la innovación y el talento STEM.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre Nosotras</a>
              </li>
              <li>
                <a href="#team" className="hover:text-cyan-400 transition-colors">El Equipo</a>
              </li>
              <li>
                <a href="#car" className="hover:text-cyan-400 transition-colors">El Coche</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Contacto</h4>
            <ul className="space-y-2 text-gray-500">
              <li>colibri.racingf1@gmail.com</li>
              <li>@colibri.racingf1</li>
              <li>España</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Colibrí Racing. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Diseñado con ❤️ por el equipo Colibrí
          </p>
        </div>
      </div>
    </footer>
  );
}
