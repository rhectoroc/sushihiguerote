import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <header id="inicio" className="hero-section">
      {/* Blurred background video to fill horizontal space on desktop */}
      <video autoPlay loop muted playsInline className="hero-video-bg blurred-bg">
        <source src="/video/video1.mp4" type="video/mp4" />
      </video>
      
      {/* Sharp centered video for the actual content */}
      <video autoPlay loop muted playsInline className="hero-video-bg sharp-center">
        <source src="/video/video1.mp4" type="video/mp4" />
      </video>
      
      <div className="hero-overlay"></div>
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img 
          src="/images/416/11924210/logo2-removebg-preview.png" 
          alt="Sushihiguerote" 
          className="hero-logo"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Disfruta de la mejor experiencia gastronómica con ingredientes frescos y de primera calidad, directamente a tu mesa.
        </motion.p>
        <motion.a 
          href="https://wa.link/ixbo6p" 
          target="_blank" 
          rel="noreferrer" 
          className="cta-button"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(211, 47, 47, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
        >
          Ordena por WhatsApp <ChevronRight size={20} />
        </motion.a>
      </motion.div>
    </header>
  );
};
