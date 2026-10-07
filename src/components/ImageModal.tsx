import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';

interface ImageModalProps {
  image: { id: number; image: string; title: string } | null;
  onClose: () => void;
}

export const ImageModal = ({ image, onClose }: ImageModalProps) => {
  // Número de WhatsApp real del restaurante
  const phoneNumber = "584129960016"; 
  
  const isMenu = image?.title.startsWith("Menú");
  
  // Mensaje dinámico con gramática corregida
  const rawMessage = image 
    ? (isMenu ? "Hola, quiero hacer un pedido del menú." : `Hola, quiero hacer un pedido de la ${image.title}.`) 
    : "";
    
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(rawMessage)}`;

  return (
    <AnimatePresence>
      {image && (
        <motion.div 
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}><X size={24} /></button>
            
            <div className="modal-image-container">
              <img src={image.image} alt={image.title} className="modal-image" />
              
              <div className="modal-floating-actions">
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noreferrer" 
                  className="cta-button modal-order-btn-floating"
                >
                  <ShoppingBag size={20} /> {isMenu ? "Haz tu pedido" : `Pedir ${image.title}`}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
