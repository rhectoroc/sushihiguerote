import { ShoppingBag, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/images/416/11924210/logo2-removebg-preview.png" alt="Sushihiguerote" className="footer-logo" />
          <p>El Mejor Sushi de Higuerote.</p>
          <p className="footer-contact-text"><MapPin size={16}/> Higuerote, Venezuela</p>
          
          <div className="social-networks">
            <a href="https://www.instagram.com/sushihiguerote?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="social-round-btn insta-btn">
              <svg viewBox="0 0 448 512" width="22" height="22" fill="currentColor">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@sushi.higuerote" target="_blank" rel="noreferrer" className="social-round-btn tiktok-btn">
              <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
              </svg>
            </a>
          </div>

          <a href="https://wa.link/ixbo6p" target="_blank" rel="noreferrer" className="social-icon">
            <ShoppingBag /> Pedidos por WhatsApp
          </a>
        </div>
        
        <div className="footer-links-section">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacidad">Política de Privacidad</Link></li>
            <li><Link to="/seguridad">Seguridad</Link></li>
            <li><Link to="/terminos">Términos y Condiciones</Link></li>
          </ul>
        </div>

        <div className="footer-map">
          <iframe 
            src="https://maps.google.com/maps?q=10.4782146,-66.0999784&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="180" 
            style={{ border: 0, borderRadius: '15px' }} 
            allowFullScreen={true}
            loading="lazy"
            title="Ubicación de Sushihiguerote"
          ></iframe>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=10.4782146,-66.0999784" 
            target="_blank" 
            rel="noreferrer" 
            className="map-route-btn"
          >
            <MapPin size={18} /> Trazar Ruta (Cómo llegar)
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-info">
          <p>&copy; {new Date().getFullYear()} Sushihiguerote. Todos los derechos reservados. | RIF: J-502286284</p>
        </div>
        <p className="creator-signature">
          Desarrollado por <a href="https://adrielssystems.com" target="_blank" rel="noreferrer">Adriel's Systems</a>
        </p>
      </div>
    </footer>
  );
};
