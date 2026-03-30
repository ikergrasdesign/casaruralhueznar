import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Las Casas', path: '/casas' },
  { name: 'Entorno', path: '/entorno' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass shadow-lg shadow-charcoal/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex flex-col group" id="nav-logo">
              <span
                className={`text-[10px] tracking-[0.35em] uppercase font-sans font-semibold transition-colors duration-500 ${
                  isScrolled ? 'text-forest' : 'text-cream/80'
                }`}
              >
                Casa Rural
              </span>
              <span
                className={`text-lg lg:text-xl font-serif-alt font-light italic transition-colors duration-500 ${
                  isScrolled ? 'text-charcoal' : 'text-cream'
                }`}
              >
                Nacimiento del Huéznar
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                  className={`relative text-sm tracking-widest uppercase font-sans font-medium transition-colors duration-300 ${
                    isScrolled
                      ? location.pathname === link.path
                        ? 'text-forest'
                        : 'text-stone hover:text-forest'
                      : location.pathname === link.path
                        ? 'text-gold-light'
                        : 'text-cream/80 hover:text-cream'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className={`absolute -bottom-1 left-0 right-0 h-[2px] ${
                        isScrolled ? 'bg-forest' : 'bg-gold-light'
                      }`}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+34955720581"
                id="nav-phone"
                className={`hidden md:flex items-center gap-2 text-sm font-sans transition-colors duration-300 ${
                  isScrolled
                    ? 'text-stone hover:text-forest'
                    : 'text-cream/80 hover:text-cream'
                }`}
              >
                <Phone size={15} />
                <span>955 72 05 81</span>
              </a>

              <a
                href="mailto:jmzulategui@gmail.com"
                id="nav-reservar"
                className="hidden lg:inline-flex px-6 py-2.5 bg-gold text-cream text-xs tracking-[0.2em] uppercase font-sans font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                Reservar
              </a>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                id="nav-mobile-toggle"
                className={`lg:hidden p-2 transition-colors ${
                  isScrolled ? 'text-charcoal' : 'text-cream'
                }`}
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            id="mobile-menu"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`text-3xl font-serif tracking-wide transition-colors ${
                    location.pathname === link.path
                      ? 'text-gold-light'
                      : 'text-cream/70 hover:text-cream'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="mailto:jmzulategui@gmail.com"
                className="mt-4 px-8 py-3 bg-gold text-cream text-sm tracking-[0.2em] uppercase font-sans font-semibold rounded-full hover:bg-gold-light transition-all duration-300"
              >
                Reservar
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-cream/40 text-sm font-sans flex items-center gap-2"
            >
              <Phone size={14} />
              955 72 05 81 / 607 959 907
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
