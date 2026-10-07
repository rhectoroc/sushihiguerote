import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import { ShoppingBag } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

interface ImageItem {
  id: number;
  image: string;
  title: string;
}

interface CardsSwiperProps {
  id: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  images: ImageItem[];
  onImageClick: (item: ImageItem) => void;
}

export const CardsSwiper: React.FC<CardsSwiperProps> = ({ id, title, titleAccent, subtitle, images, onImageClick }) => {
  return (
    <section id={id} className="section cards-swiper-section">
      <div className="section-header">
        <h2 className="section-title">
          {title} {titleAccent && <span className="accent-text">{titleAccent}</span>}
        </h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      
      <div className="swiper-container-wrapper">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="cards-swiper-deck"
        >
          {images.map((item) => (
            <SwiperSlide key={item.id} onClick={() => onImageClick(item)} className="card-slide">
              <div className="card-inner-swiper">
                <img src={item.image} alt={item.title} className="swiper-img" />
                <div className="swiper-card-overlay">
                  <h3>{item.title}</h3>
                  <button className="cta-button swiper-order-btn">
                    <ShoppingBag size={18} /> Ordenar
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
