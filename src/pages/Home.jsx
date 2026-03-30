import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ChevronDown, 
  TreePine, 
  Mountain, 
  Droplets, 
  Users, 
  Star, 
  Calendar, 
  Coffee, 
  Sun, 
  Moon, 
  Instagram,
  ArrowRight
} from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden" id="hero">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-cascadas.png"
            alt="Cascadas del Huéznar en la Sierra Norte de Sevilla"
            className="w-full h-full object-cover scale-105 img-high-quality"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-gold-light font-sans font-semibold mb-6"
          >
            Sierra Norte de Sevilla
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream leading-[1.1] mb-8 text-balance"
          >
            Tu refugio de paz en
            <br />
            <span className="font-serif-alt italic font-light text-[1.1em]">plena Sierra Norte</span>
          </motion.h1>

          {/* Booking Bar (Visual Demo) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="glass-dark p-2 md:p-3 rounded-full max-w-3xl mx-auto mb-12 flex flex-col md:flex-row items-center gap-2 md:gap-4 border border-cream/10"
          >
            <div className="flex-1 flex items-center gap-3 px-6 py-2 border-b md:border-b-0 md:border-r border-cream/10 w-full">
              <Calendar size={18} className="text-gold-light" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-cream/40 font-sans">Llegada - Salida</p>
                <p className="text-sm text-cream font-sans">Seleccionar fechas</p>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-3 px-6 py-2 border-b md:border-b-0 md:border-r border-cream/10 w-full">
              <Users size={18} className="text-gold-light" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-cream/40 font-sans">Huéspedes</p>
                <p className="text-sm text-cream font-sans">2 Adultos, 0 Niños</p>
              </div>
            </div>
            <button className="w-full md:w-auto px-8 py-4 bg-gold text-cream text-[11px] tracking-[0.2em] uppercase font-sans font-semibold rounded-full hover:bg-gold-light transition-all duration-300">
              Consultar
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/casas"
              className="text-cream/60 hover:text-cream text-[11px] tracking-widest uppercase font-sans font-medium flex items-center gap-2 transition-colors group"
            >
              <span>Ver las casas</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <ChevronDown size={20} className="text-cream/40 animate-float" />
        </motion.div>
      </section>

      {/* ===== QUALITY SEALS SECTION (SUPERIORITY) ===== */}
      <section className="py-12 bg-linen/30 border-b border-linen">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {[
            { label: 'Biosfera', icon: TreePine },
            { label: 'Turismo Sostenible', icon: Star },
            { label: 'Calidad Andalucía', icon: Droplets },
            { label: 'Parque Natural', icon: Mountain },
          ].map((seal, i) => (
            <div key={i} className="flex items-center gap-3">
              <seal.icon size={20} className="text-forest" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-forest font-sans font-bold">{seal.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-24 lg:py-32 bg-cream" id="about">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text */}
            <div>
              <ScrollReveal>
                <p className="text-[11px] tracking-[0.35em] uppercase text-forest font-sans font-semibold mb-4">
                  Bienvenidos
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6 leading-[1.15]">
                  Un refugio donde el
                  <br />
                  <span className="font-serif-alt italic font-light text-forest-light">tiempo se detiene</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-stone/70 font-light leading-relaxed mb-8 text-[15px]">
                  La <strong className="font-medium text-stone">Casa Rural Nacimiento del Huéznar</strong> se 
                  encuentra en la localidad de San Nicolás del Puerto, pleno en el corazón del 
                  <strong className="font-medium text-stone"> Parque Natural Sierra Norte de Sevilla</strong>. 
                  Un lugar privilegiado donde la naturaleza, el silencio y la gastronomía se unen 
                  para ofrecerte una experiencia inolvidable.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Link
                  to="/casas"
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-forest font-sans font-semibold hover:text-forest-light transition-colors group"
                >
                  <span>Conocer nuestras casas</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </ScrollReveal>
            </div>

            {/* Stats Grid */}
            <ScrollReveal animation="slideFromRight" delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, number: '8', label: 'Plazas Casa 17', sublabel: 'Tomillo Nº17' },
                  { icon: Users, number: '9', label: 'Plazas Casa 23', sublabel: 'Tomillo Nº23' },
                  { icon: Mountain, number: '177k', label: 'Hectáreas', sublabel: 'Parque Natural' },
                  { icon: Star, number: '4.8', label: 'Valoración', sublabel: 'De nuestros huéspedes' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-warm-beige rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center hover:shadow-lg hover:shadow-forest/5 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <stat.icon
                      size={24}
                      className="text-sage mb-3 group-hover:text-forest transition-colors duration-300"
                    />
                    <span className="text-3xl lg:text-4xl font-serif text-charcoal mb-1">
                      {stat.number}
                    </span>
                    <span className="text-[11px] tracking-[0.2em] uppercase text-stone/60 font-sans font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== STORYTELLING: UN DÍA PERFECTO ===== */}
      <section className="py-24 lg:py-32 bg-charcoal text-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.35em] uppercase text-gold-light font-sans font-semibold mb-4">
                Experiencias
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.15]">
                Un día perfecto en
                <br />
                <span className="font-serif-alt italic font-light">el Nacimiento</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-cream/10 -translate-y-1/2 z-0" />
            
            {[
              { 
                time: '09:00', 
                title: 'Despertar natural', 
                desc: 'Café en la terraza escuchando el primer rumor del río.',
                icon: Coffee 
              },
              { 
                time: '11:30', 
                title: 'Exploración', 
                desc: 'Paseo de 5 min hasta las Cascadas del Huéznar.',
                icon: Sun 
              },
              { 
                time: '17:00', 
                title: 'Relax', 
                desc: 'Lectura bajo los castaños o baño en la playa fluvial.',
                icon: Droplets 
              },
              { 
                time: '21:00', 
                title: 'Chimenea', 
                desc: 'Cena local y charla al calor del fuego.',
                icon: Moon 
              },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="relative z-10">
                <div className="bg-charcoal border border-cream/10 p-8 rounded-3xl hover:border-gold/50 transition-colors duration-500 group h-full">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                    <step.icon size={20} className="text-gold group-hover:text-charcoal" />
                  </div>
                  <p className="text-gold-light font-sans font-bold text-xs tracking-widest mb-2">{step.time}</p>
                  <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                  <p className="text-cream/50 text-sm font-light leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOUSES PREVIEW ===== */}
      <section className="py-24 lg:py-32 bg-warm-beige" id="houses-preview">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[11px] tracking-[0.35em] uppercase text-forest font-sans font-semibold mb-4">
              Nuestros Alojamientos
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal leading-[1.15]">
              Dos casas, una misma
              <br />
              <span className="font-serif-alt italic font-light text-forest-light">experiencia inolvidable</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                name: 'Tomillo 17',
                subtitle: 'Casa Nº17',
                capacity: '8 plazas',
                image: '/images/casa-17.png',
                description: 'Espaciosa casa rural con jardín privado, barbacoa y vistas a la dehesa. Ideal para familias.',
              },
              {
                name: 'Tomillo 23',
                subtitle: 'Casa Nº23',
                capacity: '9 plazas',
                image: '/images/casa-23.png',
                description: 'Acogedora casa con chimenea, terraza panorámica y ambiente íntimo. Perfecta para grupos.',
              },
            ].map((casa, i) => (
              <ScrollReveal key={i} animation={i === 0 ? 'slideFromLeft' : 'slideFromRight'} delay={i * 0.15}>
                <Link
                  to="/casas"
                  className="group block relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[3/2]"
                >
                  <img
                    src={casa.image}
                    alt={casa.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 img-high-quality"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold-light font-sans font-semibold mb-2">
                      {casa.subtitle} · {casa.capacity}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-serif text-cream mb-2">
                      {casa.name}
                    </h3>
                    <p className="text-sm text-cream/60 font-light max-w-sm leading-relaxed mb-4">
                      {casa.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold-light font-sans font-semibold group-hover:gap-3 transition-all duration-300">
                      Ver detalles
                      <span>→</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS SECTION ===== */}
      <section className="py-24 lg:py-32 bg-cream" id="reviews">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[11px] tracking-[0.35em] uppercase text-forest font-sans font-semibold mb-4">
              Experiencias
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal leading-[1.15]">
              Lo que dicen nuestros
              <br />
              <span className="font-serif-alt italic font-light text-forest-light">huéspedes</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'María García',
                date: 'Octubre 2025',
                text: 'Una estancia mágica. El sonido del agua del Huéznar se escucha desde la casa. Todo impecable y con un gusto exquisito. Repetiremos sin duda.',
                rating: 5,
              },
              {
                name: 'Carlos Rodríguez',
                date: 'Enero 2026',
                text: 'Ideal para desconectar con amigos. Las casas son amplias, cómodas y muy bien equipadas. La ubicación junto al Nacimiento es inmejorable.',
                rating: 5,
              },
              {
                name: 'Elena Sánchez',
                date: 'Diciembre 2025',
                text: 'El entorno es de película. Hicimos la Vía Verde y las Cascadas, y volver a la calidez de la chimenea fue lo mejor del día. Una experiencia 10/10.',
                rating: 5,
              },
            ].map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-warm-beige p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-forest/5 flex flex-col h-full">
                  <div className="flex gap-1 mb-4 text-gold">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-stone/80 font-serif-alt italic text-lg leading-relaxed mb-6 flex-grow">
                    "{review.text}"
                  </p>
                  <div className="pt-6 border-t border-forest/10 mt-auto">
                    <p className="text-sm font-sans font-semibold text-charcoal tracking-wide">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-stone/40 mt-1">
                      {review.date}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM FEED SIMULATION ===== */}
      <section className="py-24 lg:py-32 bg-cream border-t border-linen overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.35em] uppercase text-forest font-sans font-semibold mb-4">
                Social
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal leading-tight">
                Síguenos en
                <br />
                <span className="font-serif-alt italic font-light text-forest-light">Instagram</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-forest text-cream rounded-full text-xs tracking-widest uppercase font-sans font-bold hover:bg-forest-light transition-all duration-300"
              >
                <Instagram size={16} />
                @casaruralhueznar
              </a>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
            {[
              '/images/hero-cascadas.png',
              '/images/casa-17.png',
              '/images/via-verde.png',
              '/images/casa-23.png',
              '/images/cerro-hierro.png'
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                  <img 
                    src={img} 
                    alt="Instagram post" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 img-high-quality" 
                  />
                  <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Instagram className="text-cream" size={24} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden" id="cta-banner">
        <div className="absolute inset-0">
          <img
            src="/images/via-verde.png"
            alt="Vía Verde de la Sierra Norte"
            className="w-full h-full object-cover img-high-quality"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-cream mb-6 leading-[1.15]">
              ¿Listo para tu
              <br />
              <span className="font-serif-alt italic font-light">escapada rural?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-cream/60 font-serif-alt font-light italic text-lg mb-10 max-w-xl mx-auto">
              Escríbenos y te ayudamos a planificar tu estancia perfecta
              en la Sierra Norte de Sevilla.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:jmzulategui@gmail.com"
                id="cta-email"
                className="px-8 py-3.5 bg-gold text-cream text-xs tracking-[0.25em] uppercase font-sans font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                Contactar
              </a>
              <a
                href="tel:+34607959907"
                id="cta-phone"
                className="px-8 py-3.5 border border-cream/30 text-cream text-xs tracking-[0.25em] uppercase font-sans font-medium rounded-full hover:bg-cream/10 hover:border-cream/60 transition-all duration-300"
              >
                607 959 907
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
