import { motion } from 'framer-motion'
import {
  Droplets,
  Bike,
  Waves,
  Mountain,
  TreePine,
  Camera,
  Footprints,
  MapPin,
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const destinos = [
  {
    id: 'cascadas',
    name: 'Cascadas del Huéznar',
    subtitle: 'Monumento Natural',
    icon: Droplets,
    distance: 'A 5 min en coche',
    image: '/images/hero-cascadas.png',
    description:
      'Un espectáculo natural de aguas cristalinas que caen entre travertinos y bosques de ribera. Declarado Monumento Natural de Andalucía, es uno de los rincones más bellos de la sierra.',
    highlights: ['Cascadas de travertino', 'Piscinas naturales', 'Senderismo ribereño', 'Flora autóctona'],
  },
  {
    id: 'via-verde',
    name: 'Vía Verde de la Sierra Norte',
    subtitle: 'Ruta ciclista y senderista',
    icon: Bike,
    distance: 'Acceso directo',
    image: '/images/via-verde.png',
    description:
      'Una antigua línea de ferrocarril minero reconvertida en 36 kilómetros de sendero llano entre túneles, puentes y paisajes de dehesa. Ideal para recorrer en bicicleta o a pie.',
    highlights: ['36 km de recorrido', 'Túneles iluminados', 'Puentes históricos', 'Apto para familias'],
  },
  {
    id: 'playa',
    name: 'Playa de San Nicolás',
    subtitle: 'Playa fluvial',
    icon: Waves,
    distance: 'A 2 min andando',
    image: '/images/playa-san-nicolas.png',
    description:
      'La playa fluvial del pueblo es un remanso de aguas tranquilas perfecto para refrescarse en verano. Rodeada de piedra natural y con ambiente familiar.',
    highlights: ['Aguas cristalinas', 'Zona infantil', 'Chiringuito', 'Acceso gratuito'],
  },
  {
    id: 'cerro-hierro',
    name: 'Cerro del Hierro',
    subtitle: 'Monumento Natural',
    icon: Mountain,
    distance: 'A 15 min en coche',
    image: '/images/cerro-hierro.png',
    description:
      'Un paisaje kárstico único formado por siglos de erosión y antigua minería. Sus formaciones rocosas crean un laberinto natural que parece de otro planeta.',
    highlights: ['Escalada deportiva', 'Rutas de senderismo', 'Geología única', 'Miradores panorámicos'],
  },
]

const actividades = [
  { icon: Footprints, label: 'Senderismo' },
  { icon: Bike, label: 'Ciclismo' },
  { icon: Camera, label: 'Fotografía' },
  { icon: Waves, label: 'Baño Natural' },
  { icon: Mountain, label: 'Escalada' },
  { icon: TreePine, label: 'Naturaleza' },
]

export default function Entorno() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden" id="entorno-hero">
        <div className="absolute inset-0">
          <img
            src="/images/hero-cascadas.png"
            alt="Parque Natural Sierra Norte de Sevilla"
            className="w-full h-full object-cover img-high-quality"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 lg:pb-16 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[11px] tracking-[0.35em] uppercase text-gold-light font-sans font-semibold mb-3"
          >
            Parque Natural · Reserva de la Biosfera
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-cream leading-[1.1]"
          >
            Un Entorno Natural
            <br />
            <span className="font-serif-alt italic font-light">Único</span>
          </motion.h1>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-20 lg:py-24 bg-cream" id="entorno-intro">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-stone/70 font-serif-alt font-light italic text-lg lg:text-xl leading-relaxed">
              La Sierra Norte de Sevilla es un paraíso natural declarado{' '}
              <strong className="font-medium text-stone not-italic">Reserva de la Biosfera</strong> por la UNESCO. 
              Desde nuestras casas rurales, podrás descubrir cascadas, vías verdes, 
              playas fluviales y formaciones geológicas únicas en el mundo.
            </p>
          </ScrollReveal>

          {/* Activities row */}
          <ScrollReveal delay={0.2} className="mt-12">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {actividades.map((act, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-full bg-warm-beige flex items-center justify-center group-hover:bg-forest/10 transition-colors duration-300">
                    <act.icon size={20} className="text-forest" />
                  </div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-stone/60 font-sans font-medium">
                    {act.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== DESTINATIONS ===== */}
      <section className="pb-24 lg:pb-32 bg-cream" id="destinations">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {destinos.map((dest, idx) => (
            <div
              key={dest.id}
              id={`dest-${dest.id}`}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                idx > 0 ? 'mt-20 lg:mt-28' : ''
              }`}
            >
              {/* Image */}
              <ScrollReveal
                animation={idx % 2 === 0 ? 'slideFromLeft' : 'slideFromRight'}
                className={idx % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 img-high-quality"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Distance badge */}
                  <div className="absolute top-6 left-6">
                    <span className="glass-dark px-4 py-2 rounded-full text-[11px] tracking-[0.15em] uppercase text-cream font-sans font-medium flex items-center gap-2">
                      <MapPin size={12} />
                      {dest.distance}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Info */}
              <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                <ScrollReveal delay={0.1}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                      <dest.icon size={18} className="text-forest" />
                    </div>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-forest font-sans font-semibold">
                      {dest.subtitle}
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4 leading-tight">
                    {dest.name}
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-stone/70 font-light leading-relaxed text-[15px] mb-8">
                    {dest.description}
                  </p>
                </ScrollReveal>

                {/* Highlights */}
                <ScrollReveal delay={0.25}>
                  <div className="flex flex-wrap gap-2">
                    {dest.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-warm-beige rounded-full text-[12px] text-stone/70 font-medium hover:bg-forest/10 hover:text-forest transition-colors duration-300 cursor-default"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="py-20 lg:py-24 bg-warm-beige" id="location">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="text-[11px] tracking-[0.35em] uppercase text-forest font-sans font-semibold mb-4">
              Ubicación
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal leading-[1.15]">
              San Nicolás del Puerto
            </h2>
            <p className="text-stone/60 font-serif-alt italic text-lg mt-2">
              Sierra Norte de Sevilla, Andalucía
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-3xl overflow-hidden shadow-lg shadow-charcoal/10 aspect-[16/7]">
              <iframe
                title="Ubicación Casa Rural Nacimiento del Huéznar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12712.37!2d-5.6575!3d37.9456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0d087d6bae2c4f%3A0x94eaaeb9e1a5a58f!2sSan%20Nicol%C3%A1s%20del%20Puerto%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1710000000000"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-forest" id="entorno-cta">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-serif text-cream mb-4">
              Ven a descubrir la sierra
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-cream/60 font-serif-alt font-light italic text-lg mb-8">
              Reserva tu estancia y vive la experiencia de la Sierra Norte de Sevilla
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a
              href="mailto:jmzulategui@gmail.com"
              id="entorno-cta-button"
              className="inline-flex px-8 py-3.5 bg-gold text-cream text-xs tracking-[0.25em] uppercase font-sans font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
            >
              Reservar Ahora
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
