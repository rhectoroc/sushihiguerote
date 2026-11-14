import { motion, AnimatePresence } from 'framer-motion';
import { Bike, X, ShoppingBag, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface GuatireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuatireModal = ({ isOpen, onClose }: GuatireModalProps) => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=584129960016&text=Hola!%20Quiero%20hacer%20un%20pedido%20con%20delivery%20en%20Guatire%20🍣🛵";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="guatire-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="guatire-modal-card"
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button className="guatire-modal-close" onClick={onClose} aria-label="Cerrar">
              <X size={22} />
            </button>

            {/* Glowing Accent Top Bar */}
            <div className="guatire-modal-glow-bar" />

            {/* Badge de Anuncio */}
            <div className="guatire-badge-wrapper">
              <span className="guatire-badge">
                <Bike size={16} className="badge-icon-animate" />
                ¡NUEVA ZONA DE COBERTURA!
              </span>
            </div>

            {/* Encabezado */}
            <div className="guatire-modal-header">
              <h2 className="guatire-modal-title">
                ¡Llegamos a <span className="text-highlight">Guatire</span>! 🍣🛵
              </h2>
              <p className="guatire-modal-subtitle">
                A partir de hoy, disfruta de la mejor gastronomía japonesa de <strong>Sushihiguerote</strong> directamente en la puerta de tu casa u oficina en Guatire.
              </p>
            </div>

            {/* Beneficios / Puntos Clave */}
            <div className="guatire-features-list">
              <div className="guatire-feature-item">
                <CheckCircle2 size={18} className="feature-icon" />
                <span><strong>Entregas directas</strong> en toda la zona de Guatire y alrededores.</span>
              </div>
              <div className="guatire-feature-item">
                <Sparkles size={18} className="feature-icon" />
                <span><strong>Misma frescura y calidad</strong> de nuestras Super Promos y Menú.</span>
              </div>
              <div className="guatire-feature-item">
                <MapPin size={18} className="feature-icon" />
                <span><strong>Atención personalizada</strong> y pedidos inmediatos por WhatsApp.</span>
              </div>
            </div>

            {/* Acciones */}
            <div className="guatire-modal-actions">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="guatire-btn-primary"
                onClick={onClose}
              >
                <ShoppingBag size={20} />
                Pedir Delivery a Guatire
              </a>
              <button 
                type="button" 
                className="guatire-btn-secondary" 
                onClick={() => {
                  onClose();
                  const promosElem = document.getElementById('super-promos');
                  if (promosElem) {
                    promosElem.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Ver Promociones
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
