import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'

export default function ImageLightbox({ isOpen, images, currentIndex, setCurrentIndex, onClose }) {
  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen])

  if (!isOpen) return null

  const handlePrevious = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[200] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors z-[210] p-2"
        >
          <X size={32} />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream transition-colors z-[210] bg-cream/5 hover:bg-cream/10 p-3 rounded-full backdrop-blur-sm"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream transition-colors z-[210] bg-cream/5 hover:bg-cream/10 p-3 rounded-full backdrop-blur-sm"
        >
          <ChevronRight size={32} />
        </button>

        {/* Image Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
        >
          <img
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-cream/10"
          />
          
          {/* Caption / Progress */}
          <div className="mt-6 text-center">
            <p className="text-cream/50 text-[10px] tracking-[0.3em] uppercase font-sans">
              Imagen {currentIndex + 1} de {images.length}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
