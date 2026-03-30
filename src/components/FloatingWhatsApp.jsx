import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  const phoneNumber = "34607959907" // El número que vi en la web
  const message = "Hola! Me gustaría consultar disponibilidad para una estancia en Casa Rural Nacimiento del Huéznar."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: 2, 
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-charcoal text-cream text-[10px] tracking-widest uppercase py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-cream/10">
        ¿Te ayudamos?
      </span>
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />
      
      <MessageCircle size={28} fill="currentColor" className="relative z-10" />
    </motion.a>
  )
}
