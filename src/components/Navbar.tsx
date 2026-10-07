import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const whatsappUrl = "https://api.whatsapp.com/send?phone=584129960016&text=Saludos%2C%20quiero%20hacer%20un%20pedido!";

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="logo-container">
          <img src="/images/416/11924210/logo2-removebg-preview.png" alt="Sushihiguerote" className="nav-logo" />
        </div>
        
        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#super-promos">Super Promos</a></li>
          <li><a href="#promos">Promociones</a></li>
          <li><a href="#menu">Menú</a></li>
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nav-order-btn">
              <ShoppingBag size={18} />
              Haz tu pedido
            </a>
          </motion.li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="mobile-nav-links">
              <li><a href="#inicio" onClick={closeMobileMenu}>Inicio</a></li>
              <li><a href="#super-promos" onClick={closeMobileMenu}>Super Promos</a></li>
              <li><a href="#promos" onClick={closeMobileMenu}>Promociones</a></li>
              <li><a href="#menu" onClick={closeMobileMenu}>Menú</a></li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nav-order-btn mobile-cta" onClick={closeMobileMenu}>
                  <ShoppingBag size={20} />
                  Haz tu pedido
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
