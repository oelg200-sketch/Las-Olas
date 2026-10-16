import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', alt: 'Piscina tropical con palmeras', category: 'Piscinas' },
  { src: 'https://images.pexels.com/photos/13245235/pexels-photo-13245235.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', alt: 'Aguas termales naturales', category: 'Termales' },
  { src: 'https://images.pexels.com/photos/6910147/pexels-photo-6910147.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', alt: 'Playa tropical con palmeras', category: 'Naturaleza' },
  { src: 'https://images.pexels.com/photos/5362213/pexels-photo-5362213.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', alt: 'Piscina infinita', category: 'Piscinas' },
  { src: 'https://images.pexels.com/photos/635126/pexels-photo-635126.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', alt: 'Área de descanso', category: 'Instalaciones' },
  { src: 'https://images.pexels.com/photos/33836952/pexels-photo-33836952.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', alt: 'Vista aérea del balneario', category: 'Vistas' },
  { src: 'https://images.pexels.com/photos/19450437/pexels-photo-19450437.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', alt: 'Resort tropical', category: 'Instalaciones' },
  { src: 'https://images.pexels.com/photos/18008982/pexels-photo-18008982.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200', alt: 'Playa con palmera', category: 'Naturaleza' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  return (
    <section id="galeria" className="relative bg-ocean-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-body font-medium mb-4">
            Galería
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-ocean-900 leading-tight mb-4">
            Descubre la
            <span className="text-teal-500"> belleza </span>
            de nuestro paraíso
          </h2>
          <p className="text-ocean-600 font-body text-lg leading-relaxed">
            Cada rincón de Las Olas está diseñado para ofrecerte una experiencia visual
            y sensorial inigualable.
          </p>
        </div>

        {/* Gallery grid - masonry style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              } ${index === 3 ? 'md:col-span-2' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <div className={`w-full ${index === 0 ? 'h-full min-h-[300px]' : 'h-40 md:h-52'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-teal-200 font-body uppercase tracking-wider">{image.category}</span>
                <p className="text-white font-heading font-medium text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ocean-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean-950/90 to-transparent rounded-b-2xl p-6">
              <span className="text-xs text-teal-300 font-body uppercase tracking-wider">{galleryImages[lightbox].category}</span>
              <p className="text-white font-heading font-medium text-lg">{galleryImages[lightbox].alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
