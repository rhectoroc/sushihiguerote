import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface ImageItem {
  id: number;
  image: string;
  title: string;
}

interface CoverflowSwiperProps {
  id: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  images: ImageItem[];
  theme?: 'dark' | 'light';
  onImageClick: (item: ImageItem) => void;
}

export const CoverflowSwiper: React.FC<CoverflowSwiperProps> = ({ id, title, titleAccent, subtitle, images, theme = 'dark', onImageClick }) => {
  return (
    <section id={id} className={`section coverflow-section theme-${theme}`}>
      <div className="section-header">
        <h2 className={`section-title ${theme === 'light' ? 'text-dark' : ''}`}>
          {title} {titleAccent && <span className="accent-text">{titleAccent}</span>}
        </h2>
        {subtitle && <p className={`section-subtitle ${theme === 'light' ? 'text-dark-muted' : ''}`}>{subtitle}</p>}
      </div>
      
      <div className="swiper-container-wrapper">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="coverflow-swiper"
        >
          {images.map((item) => (
            <SwiperSlide key={item.id} onClick={() => onImageClick(item)} className="coverflow-slide">
              <img src={item.image} alt={item.title} />
              <div className="coverflow-overlay">
                <h3>{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
