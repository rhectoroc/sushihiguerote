import { Bike, MapPin, Sparkles, Flame } from 'lucide-react';

interface DeliveryMarqueeProps {
  onOpenModal?: () => void;
}

export const DeliveryMarquee = ({ onOpenModal }: DeliveryMarqueeProps) => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=584129960016&text=Hola!%20Quiero%20hacer%20un%20pedido%20con%20delivery%20en%20Guatire%20🍣🛵";

  const marqueeItems = [
    { text: "¡YA TENEMOS DELIVERY EN GUATIRE!", icon: Bike, highlight: true },
    { text: "SUSHI FRESCO Y DE CALIDAD A TU PUERTA", icon: Sparkles, highlight: false },
    { text: "PIDE TUS SUPER PROMOS FAVORITAS", icon: Flame, highlight: true },
    { text: "COBERTURA EN TODA LA ZONA DE GUATIRE", icon: MapPin, highlight: false },
  ];

  return (
    <div className="delivery-marquee-wrapper" onClick={onOpenModal}>
      <div className="delivery-marquee-content">
        {/* We duplicate the array 4 times for an infinite seamless CSS loop */}
        {[...Array(4)].map((_, groupIndex) => (
          <div key={groupIndex} className="marquee-group">
            {marqueeItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`marquee-item ${item.highlight ? 'highlight' : ''}`}>
                  <Icon size={18} className="marquee-icon" />
                  <span>{item.text}</span>
                  <span className="marquee-separator">•</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="marquee-action-btn"
        onClick={(e) => e.stopPropagation()}
      >
        <span>Pedir a Guatire</span>
      </a>
    </div>
  );
};
