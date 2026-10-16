import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="ubicacion" className="relative bg-gradient-to-b from-ocean-100 to-ocean-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-body font-medium mb-4">
            Cómo Llegar
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-ocean-900 leading-tight mb-4">
            Encuéntranos en el
            <span className="text-teal-500"> paraíso</span>
          </h2>
          <p className="text-ocean-600 font-body text-lg leading-relaxed">
            Estamos ubicados en un punto privilegiado de la costa, de fácil acceso
            y rodeado de bellezas naturales.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Map - spans 2 columns */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl shadow-ocean-900/20 h-[400px] md:h-[500px] relative border-4 border-white">
            <iframe
              title="Ubicación del Balneario Las Olas"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-68.40%2C18.40%2C-68.30%2C18.50&layer=mapnik&marker=18.45%2C-68.35"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-ocean-900/10 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-ocean-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ocean-900 mb-1">Dirección</h3>
                  <p className="text-ocean-600 font-body text-sm leading-relaxed">
                    Carretera Costera Km 42<br />
                    Costa Dorada, República Dominicana
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-ocean-900/10 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-ocean-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ocean-900 mb-1">Horarios</h3>
                  <p className="text-ocean-600 font-body text-sm leading-relaxed">
                    Lunes a Viernes: 8:00 AM - 7:00 PM<br />
                    Sábados y Domingos: 7:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-ocean-900/10 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-ocean-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ocean-900 mb-1">Teléfono</h3>
                  <p className="text-ocean-600 font-body text-sm leading-relaxed">
                    +1 (809) 555-0142<br />
                    reservas@balneariolasolas.com
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.openstreetmap.org/?mlat=18.45&mlon=-68.35#map=14/18.45/-68.35"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-teal-400 to-ocean-500 text-white font-heading font-semibold rounded-2xl hover:from-teal-300 hover:to-ocean-400 transition-all duration-300 shadow-lg shadow-ocean-900/20 hover:scale-[1.02]"
            >
              <Navigation className="w-5 h-5" />
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
