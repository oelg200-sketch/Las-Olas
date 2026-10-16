import { Waves, UtensilsCrossed, Tent, Bath, Dumbbell, Wifi, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Waves,
    title: 'Piscinas Naturales',
    description: 'Piscinas de agua cristalina alimentadas por manantiales naturales, con diferentes profundidades para todas las edades.',
    image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    tag: 'Más popular',
  },
  {
    icon: Bath,
    title: 'Aguas Termales',
    description: 'Relájate en nuestras piscinas termales con propiedades curativas y relajantes, ideales para el bienestar.',
    image: 'https://images.pexels.com/photos/13245235/pexels-photo-13245235.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    tag: 'Bienestar',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurante Gourmet',
    description: 'Cocina local e internacional con ingredientes frescos de la región, junto a las piscinas con vista al mar.',
    image: 'https://images.pexels.com/photos/635126/pexels-photo-635126.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    tag: 'Gastronomía',
  },
  {
    icon: Tent,
    title: 'Zona de Acampada',
    description: 'Áreas delimitadas para acampar bajo las estrellas, rodeadas de naturaleza y con todas las comodidades.',
    image: 'https://images.pexels.com/photos/19450437/pexels-photo-19450437.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    tag: 'Aventura',
  },
  {
    icon: Dumbbell,
    title: 'Actividades Deportivas',
    description: 'Voleibol de playa, kayak, paddle board y más actividades acuáticas y deportivas para toda la familia.',
    image: 'https://images.pexels.com/photos/33836952/pexels-photo-33836952.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    tag: 'Diversión',
  },
  {
    icon: Wifi,
    title: 'Cabañas Premium',
    description: 'Alojamiento confortable con todas las comodidades: WiFi, aire acondicionado y vista directa al mar.',
    image: 'https://images.pexels.com/photos/5362213/pexels-photo-5362213.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    tag: 'Estadía',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-gradient-to-b from-ocean-50 to-ocean-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-body font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-ocean-900 leading-tight mb-4">
            Todo lo que necesitas para
            <span className="text-teal-500"> vacaciones perfectas</span>
          </h2>
          <p className="text-ocean-600 font-body text-lg leading-relaxed">
            Ofrecemos una amplia gama de servicios pensados para que tu visita sea una
            experiencia completa e inolvidable.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-ocean-900/10 hover:shadow-2xl hover:shadow-ocean-900/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 bg-teal-400/90 text-ocean-950 text-xs font-heading font-semibold rounded-full backdrop-blur-sm">
                  {service.tag}
                </span>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-ocean-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-ocean-600 font-body text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1 text-teal-600 font-body font-medium text-sm group-hover:text-teal-500 transition-colors"
                >
                  Más información
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Bottom wave accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-ocean-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
