import { ChevronDown, Star, MapPin, Calendar, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt="Balneario Las Olas - piscina tropical"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/70 via-ocean-900/40 to-ocean-900/80" />
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            style={{
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-dark rounded-full text-teal-200 text-sm font-body animate-fade-up">
          <Star className="w-4 h-4 fill-teal-300 text-teal-300" />
          <span>Destino turístico #1 en la región</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Balneario
          <span className="block bg-gradient-to-r from-teal-300 via-ocean-300 to-teal-400 bg-clip-text text-transparent">
            Las Olas
          </span>
        </h1>

        <p className="text-lg md:text-xl text-ocean-100/90 font-body max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Sumérgete en aguas cristalinas, relájate bajo el sol y vive una experiencia
          inolvidable en el paraíso turístico más hermoso de la costa.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <a
            href="#contacto"
            className="px-8 py-4 bg-gradient-to-r from-teal-400 to-ocean-500 text-white font-heading font-semibold rounded-full hover:from-teal-300 hover:to-ocean-400 transition-all duration-300 shadow-xl shadow-ocean-950/40 hover:shadow-teal-400/40 hover:scale-105"
          >
            Reservar Ahora
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 glass text-white font-heading font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30"
          >
            Explorar Servicios
          </a>
        </div>

        {/* Quick info cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          {[
            { icon: MapPin, label: 'Costa Dorada', value: 'Ubicación' },
            { icon: Calendar, label: 'Todo el año', value: 'Abierto' },
            { icon: Users, label: '+50,000', value: 'Visitantes' },
          ].map((item) => (
            <div key={item.value} className="glass-dark rounded-2xl px-3 py-4 sm:px-6 sm:py-5">
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-300 mx-auto mb-2" />
              <p className="text-white font-heading font-semibold text-sm sm:text-base">{item.label}</p>
              <p className="text-ocean-200 text-xs sm:text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          className="block w-full h-[80px] md:h-[120px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C240,100 480,20 720,50 C960,80 1200,110 1440,60 L1440,120 L0,120 Z"
            fill="#f0f9ff"
            fillOpacity="1"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,60 C240,100 480,20 720,50 C960,80 1200,110 1440,60 L1440,120 L0,120 Z;
                M0,70 C240,30 480,100 720,60 C960,20 1200,50 1440,80 L1440,120 L0,120 Z;
                M0,60 C240,100 480,20 720,50 C960,80 1200,110 1440,60 L1440,120 L0,120 Z
              "
            />
          </path>
          <path
            d="M0,80 C240,40 480,110 720,70 C960,30 1200,60 1440,90 L1440,120 L0,120 Z"
            fill="#e0f2fe"
            fillOpacity="0.6"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,80 C240,40 480,110 720,70 C960,30 1200,60 1444,90 L1444,120 L0,120 Z;
                M0,90 C240,60 480,30 720,80 C960,110 1200,40 1444,70 L1444,120 L0,120 Z;
                M0,80 C240,40 480,110 720,70 C960,30 1200,60 1444,90 L1444,120 L0,120 Z
              "
            />
          </path>
        </svg>
      </div>
    </section>
  );
}
