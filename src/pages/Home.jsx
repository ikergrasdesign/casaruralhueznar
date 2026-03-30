import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, TreePine, Mountain, Droplets, Users, Star } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="hero">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-cascadas.png"
            alt="Cascadas del Huéznar en la Sierra Norte de Sevilla"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
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
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream leading-[1.1] mb-6 text-balance"
          >
            Desconecta en el corazón
            <br />
            <span className="font-serif-alt italic font-light text-[1.1em]">de la naturaleza</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-lg text-cream/70 font-serif-alt font-light italic max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Dos casas rurales con encanto en San Nicolás del Puerto,
            donde el rumor del agua y la sombra de los castaños te invitan a quedarte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/casas"
              id="hero-cta-casas"
              className="px-8 py-3.5 bg-gold text-cream text-xs tracking-[0.25em] uppercase font-sans font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
            >
              Explorar Casas
            </Link>
            <Link
              to="/entorno"
              id="hero-cta-entorno"
              className="px-8 py-3.5 border border-cream/30 text-cream text-xs tracking-[0.25em] uppercase font-sans font-medium rounded-full hover:bg-cream/10 hover:border-cream/60 transition-all duration-300"
            >
              Descubrir el Entorno
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
          <span className="text-[10px] tracking-[0.3em] uppercase text-cream/40 font-sans">Descubre</span>
          <ChevronDown size={20} className="text-cream/40 animate-float" />
        </motion.div>
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
                <p className="text-stone/70 font-light leading-relaxed mb-10 text-[15px]">
                  Nuestras dos casas rurales, completamente equipadas, son el punto de partida 
                  perfecto para descubrir las Cascadas del Huéznar, la Vía Verde de la Sierra Norte 
                  y un patrimonio natural declarado <strong className="font-medium text-stone">Reserva de la Biosfera</strong> por la UNESCO.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <Link
                  to="/casas"
                  id="about-cta"
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-forest font-sans font-semibold hover:text-forest-light transition-colors group"
                >
                  <span>Conocer nuestras casas</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </ScrollReveal>
            </div>

            {/* Stats */}
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
                    <span className="text-[10px] text-stone/40 mt-1 font-light">
                      {stat.sublabel}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
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
                  id={`home-casa-${i + 1}`}
                  className="group block relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[3/2]"
                >
                  <img
                    src={casa.image}
                    alt={casa.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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

      {/* ===== ENVIRONMENT TEASER ===== */}
      <section className="py-24 lg:py-32 bg-cream" id="env-teaser">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.35em] uppercase text-forest font-sans font-semibold mb-4">
              El Entorno
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6 leading-[1.15]">
              Reserva de la Biosfera
              <br />
              <span className="font-serif-alt italic font-light text-forest-light">a tu puerta</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-stone/70 font-light leading-relaxed max-w-2xl mx-auto mb-12 text-[15px]">
              Cascadas cristalinas, senderos entre castaños centenarios y una vía verde 
              que atraviesa la sierra. Todo a pocos minutos de tu casa rural.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mb-12">
              {[
                { icon: Droplets, title: 'Cascadas del Huéznar', desc: 'Monumento Natural a 5 min' },
                { icon: TreePine, title: 'Vía Verde', desc: '36 km de naturaleza pura' },
                { icon: Mountain, title: 'Cerro del Hierro', desc: 'Paisaje kárstico único' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-full bg-warm-beige flex items-center justify-center mb-4 group-hover:bg-forest/10 transition-colors duration-300">
                    <item.icon size={24} className="text-forest" />
                  </div>
                  <h3 className="text-lg font-serif text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-stone/60 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <Link
              to="/entorno"
              id="env-cta"
              className="inline-flex px-8 py-3.5 bg-forest text-cream text-xs tracking-[0.25em] uppercase font-sans font-semibold rounded-full hover:bg-forest-light transition-all duration-300 hover:shadow-lg hover:shadow-forest/20 hover:-translate-y-0.5"
            >
              Descubrir el Entorno
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden" id="cta-banner">
        <div className="absolute inset-0">
          <img
            src="/images/via-verde.png"
            alt="Vía Verde de la Sierra Norte"
            className="w-full h-full object-cover"
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
