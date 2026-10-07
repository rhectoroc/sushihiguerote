import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { GridSection } from '../components/GridSection';
import { CardsSwiper } from '../components/CardsSwiper';
import { CoverflowSwiper } from '../components/CoverflowSwiper';
import { Footer } from '../components/Footer';
import { ImageModal } from '../components/ImageModal';
import '../index.css';

const superPromos = [
  { id: 1, image: '/images/0,1280x2560+80+0/12030434/SuperPromo1.jpg', title: 'Super Promo 1' },
  { id: 2, image: '/images/0,1280x2560+80+0/12030437/SuperPromo2.jpg', title: 'Super Promo 2' },
  { id: 3, image: '/images/0,1280x2560+80+0/12030442/SuperPromo3.jpg', title: 'Super Promo 3' },
  { id: 4, image: '/images/0,1280x2560+80+0/12030803/SuperPromo4.jpg', title: 'Super Promo 4' },
  { id: 5, image: '/images/0,1280x2560+80+0/12030850/Superpromo5.jpg', title: 'Super Promo 5' },
];

const promos = [
  { id: 1, image: '/images/0/11982733/Promo1.jpg', title: 'Promo 1' },
  { id: 2, image: '/images/0/12031502/Promo2.jpg', title: 'Promo 2' },
  { id: 3, image: '/images/0/11982738/Promo3.jpg', title: 'Promo 3' },
  { id: 4, image: '/images/0/11982743/Promo4.jpg', title: 'Promo 4' },
  { id: 5, image: '/images/0/11982747/Promo5.jpg', title: 'Promo 5' },
];

const menuImages = [
  { id: 1, image: '/images/0,383x766+0+0/12031639/Menu1.jpg', title: 'Menú 1' },
  { id: 2, image: '/images/0,377x754+0+0/12031661/Menu2.jpg', title: 'Menú 2' },
  { id: 3, image: '/images/0,386x773+0+0/12031702/Menu3.jpg', title: 'Menú 3' },
];

function Home() {
  const [selectedImage, setSelectedImage] = useState<{ id: number; image: string; title: string } | null>(null);

  return (
    <div className="app-container">
      {/* Background glow effects */}
      <div className="glow-effect glow-red"></div>
      <div className="glow-effect glow-dark"></div>

      <Navbar />
      
      <Hero />

      <CardsSwiper 
        id="super-promos" 
        title="Super" 
        titleAccent="Promos" 
        subtitle="Las mejores combinaciones para compartir con quien más quieres." 
        images={superPromos} 
        onImageClick={setSelectedImage} 
      />

      <CoverflowSwiper 
        id="promos" 
        title="Promo" 
        titleAccent="ciones" 
        images={promos} 
        theme="light" 
        onImageClick={setSelectedImage} 
      />

      <GridSection 
        id="menu" 
        title="Nuestro" 
        titleAccent="Menú" 
        subtitle="Explora nuestra gran variedad de platillos japoneses con un toque local." 
        images={menuImages} 
        theme="dark" 
        onImageClick={setSelectedImage} 
        cardClassName="menu-card" 
      />

      <Footer />
      
      <ImageModal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}

export default Home;
