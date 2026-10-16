import { useState } from 'react';
import { Send, User, Mail, Calendar, MessageSquare, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', date: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="relative bg-ocean-50 py-20 md:py-28 overflow-hidden">
      {/* Decorative wave at top */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="block w-full h-[60px] md:h-[80px]"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,0 L0,0 Z"
            fill="#e0f2fe"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Info */}
          <div className="pt-8">
            <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-body font-medium mb-4">
              Contáctanos
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ocean-900 leading-tight mb-6">
              Reserva tu
              <span className="text-teal-500"> escapada perfecta</span>
            </h2>
            <p className="text-ocean-600 font-body text-lg leading-relaxed mb-8">
              Estamos listos para recibirte. Envíanos tu consulta y te responderemos
              en menos de 24 horas con toda la información que necesitas.
            </p>

            {/* Pricing teaser */}
            <div className="bg-gradient-to-br from-ocean-900 to-ocean-800 rounded-3xl p-6 text-white shadow-xl shadow-ocean-900/30">
              <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-300 rounded-full animate-pulse" />
                Paquetes Disponibles
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Día completo', price: '$25', desc: 'Acceso a todas las piscinas' },
                  { name: 'Pareja', price: '$45', desc: 'Entrada para dos + almuerzo' },
                  { name: 'Familiar', price: '$80', desc: 'Hasta 4 personas + cabaña' },
                ].map((pkg) => (
                  <div key={pkg.name} className="flex items-center justify-between pb-3 border-b border-ocean-700/50 last:border-0">
                    <div>
                      <p className="font-heading font-medium">{pkg.name}</p>
                      <p className="text-ocean-300 text-sm font-body">{pkg.desc}</p>
                    </div>
                    <span className="text-2xl font-heading font-bold text-teal-300">{pkg.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-ocean-900/15">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-ocean-900 mb-2">¡Mensaje enviado!</h3>
                <p className="text-ocean-600 font-body">
                  Gracias por contactarnos. Te responderemos muy pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading font-semibold text-xl text-ocean-900 mb-2">
                  Envíanos un mensaje
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-sm font-body font-medium text-ocean-700 mb-1.5">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full pl-12 pr-4 py-3.5 bg-ocean-50 border border-ocean-200 rounded-xl text-ocean-900 placeholder-ocean-400 font-body focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-body font-medium text-ocean-700 mb-1.5">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full pl-12 pr-4 py-3.5 bg-ocean-50 border border-ocean-200 rounded-xl text-ocean-900 placeholder-ocean-400 font-body focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-body font-medium text-ocean-700 mb-1.5">
                    Fecha de visita
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean-400" />
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 bg-ocean-50 border border-ocean-200 rounded-xl text-ocean-900 font-body focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-body font-medium text-ocean-700 mb-1.5">
                    Mensaje
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-ocean-400" />
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos qué necesitas..."
                      className="w-full pl-12 pr-4 py-3.5 bg-ocean-50 border border-ocean-200 rounded-xl text-ocean-900 placeholder-ocean-400 font-body focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-400 to-ocean-500 text-white font-heading font-semibold rounded-xl hover:from-teal-300 hover:to-ocean-400 transition-all duration-300 shadow-lg shadow-ocean-900/20 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Reserva
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
