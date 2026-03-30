import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, TreePine, ShieldCheck, Award } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80" id="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <ScrollReveal animation="fadeUp" className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <TreePine size={20} className="text-sage" />
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase font-sans font-semibold text-sage">
                  Casa Rural
                </p>
                <p className="text-lg font-serif-alt italic text-cream">
                  Nacimiento del Huéznar
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream/50 font-light max-w-xs mb-6">
              Alojamiento rural con encanto en el corazón del Parque Natural Sierra Norte
              de Sevilla. Un refugio de paz rodeado de naturaleza.
            </p>
            {/* Quality Seals UI */}
            <div className="flex gap-4 items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck size={24} className="text-sage" />
                <span className="text-[8px] tracking-widest uppercase font-sans">Biosfera</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Award size={24} className="text-sage" />
                <span className="text-[8px] tracking-widest uppercase font-sans">Sostenible</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h3 className="text-xs tracking-[0.3em] uppercase font-sans font-semibold text-sage mb-6">
              Navegación
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Las Casas', path: '/casas' },
                { name: 'Entorno', path: '/entorno' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-cream/50 hover:text-cream transition-colors duration-300 font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <h3 className="text-xs tracking-[0.3em] uppercase font-sans font-semibold text-sage mb-6">
              Contacto
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:jmzulategui@gmail.com"
                className="flex items-center gap-3 text-sm text-cream/50 hover:text-cream transition-colors duration-300 font-light"
                id="footer-email"
              >
                <Mail size={16} className="text-sage shrink-0" />
                jmzulategui@gmail.com
              </a>
              <a
                href="tel:+34955720581"
                className="flex items-center gap-3 text-sm text-cream/50 hover:text-cream transition-colors duration-300 font-light"
                id="footer-phone"
              >
                <Phone size={16} className="text-sage shrink-0" />
                955 72 05 81 / 607 959 907
              </a>
              <div className="flex items-start gap-3 text-sm text-cream/50 font-light">
                <MapPin size={16} className="text-sage shrink-0 mt-0.5" />
                <span>
                  San Nicolás del Puerto,<br />
                  Sierra Norte de Sevilla
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Location / Mini Map UI */}
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <h3 className="text-xs tracking-[0.3em] uppercase font-sans font-semibold text-sage mb-6">
              Ubicación
            </h3>
            <div className="rounded-xl overflow-hidden grayscale opacity-50 aspect-square w-full max-w-[150px]">
               <iframe
                title="Mini Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12712.37!2d-5.6575!3d37.9456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0d087d6bae2c4f%3A0x94eaaeb9e1a5a58f!2sSan%20Nicol%C3%A1s%20del%20Puerto%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1710000000000"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/30 font-light">
            © {new Date().getFullYear()} Casa Rural Nacimiento del Huéznar. Todos los derechos reservados.
          </p>
          <p className="text-xs text-cream/30 font-light">
            Diseño por{' '}
            <span className="text-sage/60">Gras Design</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
