import { Waves, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-ocean-950 text-ocean-100 overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="block w-full h-[60px] md:h-[80px]"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,0 L0,0 Z"
            fill="#f0f9ff"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,0 L0,0 Z;
                M0,50 C240,20 480,60 720,30 C960,10 1200,50 1440,20 L1440,0 L0,0 Z;
                M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,0 L0,0 Z
              "
            />
          </path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-8 h-8 text-teal-400" />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-heading font-bold text-lg">Las Olas</span>
                <span className="text-teal-400 text-xs font-body tracking-widest uppercase">Balneario</span>
              </div>
            </div>
            <p className="text-ocean-300 font-body text-sm leading-relaxed mb-6">
              Tu destino turístico de ensueño en la costa. Aguas cristalinas, naturaleza
              virgen y experiencias inolvidables te esperan.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 bg-ocean-900 hover:bg-teal-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-ocean-200 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Galería', href: '#galeria' },
                { label: 'Ubicación', href: '#ubicacion' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-ocean-300 hover:text-teal-400 font-body text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2">
              {[
                'Piscinas Naturales',
                'Aguas Termales',
                'Restaurante',
                'Cabañas Premium',
                'Actividades',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-ocean-300 hover:text-teal-400 font-body text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-ocean-300 font-body text-sm">
                  Carretera Costera Km 42, Costa Dorada
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-ocean-300 font-body text-sm">+1 (809) 555-0142</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-ocean-300 font-body text-sm">reservas@balneariolasolas.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-ocean-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ocean-400 font-body text-sm text-center md:text-left">
            © 2026 Balneario Las Olas. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-ocean-400 hover:text-teal-400 font-body text-sm transition-colors">Términos</a>
            <a href="#" className="text-ocean-400 hover:text-teal-400 font-body text-sm transition-colors">Privacidad</a>
            <a href="#" className="text-ocean-400 hover:text-teal-400 font-body text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
