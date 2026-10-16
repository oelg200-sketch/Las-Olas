import { useEffect, useState } from 'react';
import { Menu, X, Waves } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ocean-900/90 backdrop-blur-lg shadow-lg shadow-ocean-950/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="relative">
              <Waves className="w-8 h-8 text-teal-300 group-hover:text-teal-200 transition-colors" />
              <div className="absolute inset-0 bg-teal-400/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-heading font-bold text-lg tracking-wide">
                Las Olas
              </span>
              <span className="text-teal-300 text-xs font-body tracking-widest uppercase">
                Balneario
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-body font-medium text-ocean-50/90 hover:text-white relative group transition-colors"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-teal-300 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-3 px-6 py-2.5 bg-gradient-to-r from-teal-400 to-ocean-500 text-white font-heading font-semibold text-sm rounded-full hover:from-teal-300 hover:to-ocean-400 transition-all duration-300 shadow-lg shadow-ocean-900/40 hover:shadow-teal-400/40 hover:scale-105"
            >
              Reservar
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-ocean-900/95 backdrop-blur-lg rounded-2xl border border-ocean-700/50 overflow-hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-ocean-50/90 hover:bg-ocean-800/60 hover:text-white transition-colors font-body"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="block mx-4 mt-2 mb-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-ocean-500 text-white font-heading font-semibold text-center rounded-full"
            >
              Reservar
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
