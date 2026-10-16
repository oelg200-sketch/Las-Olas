import { Waves, Sun, Leaf, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Waves,
      title: 'Aguas Cristalinas',
      description: 'Piscinas naturales y termales con agua de manantial pura y cristalina, ideales para relajarse.',
    },
    {
      icon: Sun,
      title: 'Sol Todo el Año',
      description: 'Disfruta de un clima privilegiado con más de 300 días de sol al año en un entorno paradisíaco.',
    },
    {
      icon: Leaf,
      title: 'Naturaleza Virgen',
      description: 'Rodeado de vegetación exuberante y paisajes naturales que te conectarán con la esencia del lugar.',
    },
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Certificado como uno de los mejores balnearios de la región por su excelencia en servicio.',
    },
  ];

  return (
    <section id="nosotros" className="relative bg-ocean-50 py-20 md:py-28 overflow-hidden">
      {/* Decorative wave background */}
      <div className="absolute top-0 left-0 right-0 opacity-5">
        <svg viewBox="0 0 1440 200" className="w-full" preserveAspectRatio="none">
          <path d="M0,100 Q360,200 720,100 T1440,100 L1440,200 L0,200 Z" fill="#0c4a6e" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-ocean-900/20 aspect-[3/4] group">
                  <img
                    src="https://images.pexels.com/photos/13245235/pexels-photo-13245235.jpeg?auto=compress&cs=tinysrgb&h=650&w=500"
                    alt="Piscinas termales naturales"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-ocean-900/20 aspect-square group">
                  <img
                    src="https://images.pexels.com/photos/635126/pexels-photo-635126.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                    alt="Área de descanso junto a la piscina"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-ocean-900/20 aspect-square group">
                  <img
                    src="https://images.pexels.com/photos/5362213/pexels-photo-5362213.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                    alt="Piscina infinita con vista al mar"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-ocean-900/20 aspect-[3/4] group">
                  <img
                    src="https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&h=650&w=500"
                    alt="Playa tropical con palmeras"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl shadow-ocean-900/20 p-6 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-ocean-500 rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-ocean-900">15+</p>
                  <p className="text-ocean-600 text-sm font-body">Años de experiencia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-body font-medium mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ocean-900 leading-tight mb-6">
              Un paraíso natural donde el
              <span className="text-teal-500"> agua y la serenidad </span>
              se encuentran
            </h2>
            <p className="text-ocean-700 font-body text-lg leading-relaxed mb-8">
              En Balneario Las Olas ofrecemos una experiencia única de relajación y diversión.
              Nuestras instalaciones combinan la belleza natural del entorno con comodidades
              de primer nivel, creando el destino perfecto para escapar del estrés cotidiano
              y reconectar con la naturaleza.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-5 bg-white rounded-2xl shadow-md shadow-ocean-900/5 hover:shadow-xl hover:shadow-ocean-900/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-ocean-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-teal-400 group-hover:to-ocean-500 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-teal-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading font-semibold text-ocean-900 mb-2">{feature.title}</h3>
                  <p className="text-ocean-600 text-sm font-body leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
