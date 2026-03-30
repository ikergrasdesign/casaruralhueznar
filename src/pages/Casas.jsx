import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Bed, TreePine, Wifi, Flame, UtensilsCrossed, Car, Sun, Bath, Search } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import ImageLightbox from '../components/ImageLightbox'

const casas = [
  {
    id: 'casa-17',
    name: 'Tomillo 17',
    subtitle: 'Casa Nº17',
    capacity: '8 plazas',
    bedrooms: '4 dormitorios',
    area: '120 m²',
    image: '/images/casa-17.png',
    description:
      'Espaciosa casa rural completamente reformada con jardín privado, barbacoa de obra y unas vistas espectaculares a la dehesa. Equipada con todo lo necesario para una estancia confortable en familia o con amigos.',
    features: [
      { icon: Users, label: '8 plazas' },
      { icon: Bed, label: '4 dormitorios' },
      { icon: Bath, label: '2 baños' },
      { icon: UtensilsCrossed, label: 'Cocina completa' },
      { icon: Flame, label: 'Barbacoa' },
      { icon: Car, label: 'Parking privado' },
      { icon: Wifi, label: 'Wi-Fi gratis' },
      { icon: Sun, label: 'Jardín privado' },
    ],
    details: [
      'Salón-comedor con chimenea',
      'Cocina totalmente equipada',
      'Terraza con vistas a la dehesa',
      'Ropa de cama y toallas incluidas',
      'Zona de juegos exterior',
    ],
  },
  {
    id: 'casa-23',
    name: 'Tomillo 23',
    subtitle: 'Casa Nº23',
    capacity: '9 plazas',
    bedrooms: '4 dormitorios',
    area: '130 m²',
    image: '/images/casa-23.png',
    description:
      'Acogedora casa rural con un ambiente íntimo y cálido. Su chimenea de leña, techos con vigas de madera y terraza panorámica crean el escenario perfecto para desconectar del mundo.',
    features: [
      { icon: Users, label: '9 plazas' },
      { icon: Bed, label: '4 dormitorios' },
      { icon: Bath, label: '2 baños' },
      { icon: UtensilsCrossed, label: 'Cocina completa' },
      { icon: Flame, label: 'Chimenea' },
      { icon: Car, label: 'Parking privado' },
      { icon: Wifi, label: 'Wi-Fi gratis' },
      { icon: TreePine, label: 'Terraza panorámica' },
    ],
    details: [
      'Salón con chimenea de leña',
      'Techos con vigas de madera',
      'Terraza con vistas panorámicas',
      'Cocina con menaje completo',
      'Calefacción central',
    ],
  },
]

// Extra images for the gallery demo (using existing ones since we don't have more)
const galleryImages = [
  '/images/casa-17.png',
  '/images/casa-23.png',
  '/images/hero-cascadas.png',
  '/images/via-verde.png',
  '/images/cerro-hierro.png',
  '/images/playa-san-nicolas.png'
]

export default function Casas() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentImgIndex(index)
    setIsLightboxOpen(true)
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden" id="casas-hero">
        <div className="absolute inset-0">
          <img
            src="/images/casa-17.png"
            alt="Nuestras casas rurales"
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
            Nuestros Alojamientos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-cream leading-[1.1]"
          >
            Las Casas
          </motion.h1>
        </div>
      </section>

      {/* ===== CASAS GRID ===== */}
      <section className="py-24 lg:py-32 bg-cream" id="casas-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {casas.map((casa, idx) => (
            <div
              key={casa.id}
              id={casa.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                idx > 0 ? 'mt-24 lg:mt-32 pt-24 lg:pt-32 border-t border-linen' : ''
              }`}
            >
              {/* Image */}
              <ScrollReveal
                animation={idx % 2 === 0 ? 'slideFromLeft' : 'slideFromRight'}
                className={idx % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div 
                  className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer"
                  onClick={() => openLightbox(idx)} // idx matches first 2 images
                >
                  <img
                    src={casa.image}
                    alt={casa.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 img-high-quality"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-cream/20 backdrop-blur-md p-4 rounded-full border border-cream/30">
                      <Search className="text-cream" size={24} />
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="glass-dark px-4 py-2 rounded-full text-[11px] tracking-[0.2em] uppercase text-cream font-sans font-semibold">
                      {casa.subtitle}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Info */}
              <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                <ScrollReveal delay={0.1}>
                  <p className="text-[11px] tracking-[0.35em] uppercase text-forest font-sans font-semibold mb-3">
                    {casa.capacity} · {casa.area}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-2">
                    {casa.name}
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-lg font-serif-alt italic text-stone/50 font-light mb-6">
                    {casa.subtitle}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.25}>
                  <p className="text-stone/70 font-light leading-relaxed text-[15px] mb-8">
                    {casa.description}
                  </p>
                </ScrollReveal>

                {/* Amenities Grid */}
                <ScrollReveal delay={0.3}>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {casa.features.map((feat, i) => (
                      <div
                        key={i}
                        className="bg-warm-beige rounded-xl p-3 flex flex-col items-center text-center gap-2 hover:bg-forest/5 transition-colors duration-300 group"
                      >
                        <feat.icon
                          size={18}
                          className="text-sage group-hover:text-forest transition-colors"
                        />
                        <span className="text-[11px] text-stone/70 font-medium">
                          {feat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Details List */}
                <ScrollReveal delay={0.35}>
                  <div className="bg-warm-beige rounded-2xl p-6 mb-8">
                    <h4 className="text-xs tracking-[0.2em] uppercase text-forest font-sans font-semibold mb-4">
                      Incluye
                    </h4>
                    <ul className="space-y-2">
                      {casa.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-stone/70 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* CTA */}
                <ScrollReveal delay={0.4}>
                  <a
                    href="mailto:jmzulategui@gmail.com"
                    className="inline-flex px-8 py-3.5 bg-gold text-cream text-xs tracking-[0.25em] uppercase font-sans font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
                  >
                    Reservar {casa.name}
                  </a>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GALLERY GRID SECTION ===== */}
      <section className="py-24 lg:py-32 bg-warm-beige" id="gallery">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[11px] tracking-[0.35em] uppercase text-forest font-sans font-semibold mb-4">
              Galería
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal leading-[1.15]">
              Cada rincón está
              <br />
              <span className="font-serif-alt italic font-light text-forest-light">pensado para ti</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div 
                  className="relative rounded-2xl lg:rounded-3xl overflow-hidden aspect-square group cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img}
                    alt={`Galería ${i}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 img-high-quality"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Search className="text-cream" size={24} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-20 bg-forest" id="casas-cta">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-serif text-cream mb-4">
              ¿Necesitas más información?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-cream/60 font-serif-alt font-light italic text-lg mb-8">
              Escríbenos y resolveremos todas tus dudas sobre disponibilidad y tarifas
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:jmzulategui@gmail.com"
                className="px-8 py-3.5 bg-gold text-cream text-xs tracking-[0.25em] uppercase font-sans font-semibold rounded-full hover:bg-gold-light transition-all duration-300"
              >
                Enviar Email
              </a>
              <a
                href="tel:+34607959907"
                className="px-8 py-3.5 border border-cream/30 text-cream text-xs tracking-[0.25em] uppercase font-sans font-medium rounded-full hover:bg-cream/10 hover:border-cream/60 transition-all duration-300"
              >
                Llamar: 607 959 907
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox Component */}
      <ImageLightbox 
        isOpen={isLightboxOpen}
        images={galleryImages}
        currentIndex={currentImgIndex}
        setCurrentIndex={setCurrentImgIndex}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  )
}
