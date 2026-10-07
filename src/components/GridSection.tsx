import { motion } from 'framer-motion';

interface ImageItem {
  id: number;
  image: string;
  title: string;
}

interface GridSectionProps {
  id: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  images: ImageItem[];
  theme: 'light' | 'dark';
  onImageClick: (image: ImageItem) => void;
  cardClassName?: string;
}

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export const GridSection = ({ id, title, titleAccent, subtitle, images, theme, onImageClick, cardClassName = "image-card" }: GridSectionProps) => {
  const sectionClass = theme === 'dark' ? 'section dark-section relative' : 'section light-section';
  const titleClass = theme === 'light' ? 'section-title text-dark' : 'section-title';

  return (
    <section id={id} className={sectionClass}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 className={titleClass} variants={itemVariants}>
          {title} {titleAccent && <span className="title-accent">{titleAccent}</span>}
        </motion.h2>
        
        {subtitle && (
          <motion.p className="section-subtitle" variants={itemVariants}>
            {subtitle}
          </motion.p>
        )}
        
        <motion.div className={cardClassName === 'menu-card' ? 'menu-grid' : 'images-grid'}>
          {images.map((img) => (
            <motion.div 
              key={img.id} 
              className={cardClassName}
              variants={itemVariants}
              whileHover={cardClassName === 'menu-card' ? { scale: 1.03, zIndex: 10 } : { y: -15, scale: 1.02 }}
              transition={cardClassName === 'menu-card' ? { type: 'spring', stiffness: 200 } : { type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => onImageClick(img)}
            >
              {cardClassName === 'image-card' && <div className="card-glare"></div>}
              <img src={img.image} alt={img.title} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
