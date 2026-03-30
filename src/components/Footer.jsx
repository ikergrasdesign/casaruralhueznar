import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, TreePine } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80" id="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <ScrollReveal animation="fadeUp">
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
            <p className="text-sm leading-relaxed text-cream/50 font-light max-w-xs">
              Alojamiento rural con encanto en el corazón del Parque Natural Sierra Norte
              de Sevilla. Un refugio de paz rodeado de naturaleza.
            </p>
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
