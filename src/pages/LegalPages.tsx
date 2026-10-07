import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const PageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="legal-page">
    <div className="glow-effect glow-red"></div>
    <div className="glow-effect glow-dark"></div>
    <nav className="legal-nav">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} /> Volver al inicio
      </Link>
    </nav>
    <motion.div 
      className="legal-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="section-title text-dark" style={{ textAlign: 'left', marginBottom: '2rem' }}>{title}</h1>
      <div className="legal-text">
        {children}
      </div>
    </motion.div>
  </div>
);

export const Privacidad = () => (
  <PageLayout title="Política de Privacidad">
    <p>En <strong>Sushihiguerote</strong>, respetamos su privacidad y nos comprometemos a proteger sus datos personales de acuerdo con las leyes aplicables en la República Bolivariana de Venezuela, específicamente en conformidad con el Artículo 60 de la Constitución Nacional sobre la protección al honor y vida privada, y la Ley Especial Contra los Delitos Informáticos.</p>
    
    <h3>1. Recopilación de Información</h3>
    <p>Al utilizar nuestros canales de pedido, podemos recopilar información personal como su nombre, número de teléfono (a través de WhatsApp), dirección de entrega y detalles de su pedido. Estos datos se solicitan exclusivamente con el fin de procesar, preparar y entregar su solicitud de manera eficiente.</p>

    <h3>2. Uso de la Información</h3>
    <p>La información recopilada se utilizará estrictamente para propósitos operativos y logísticos. No vendemos, alquilamos ni compartimos su información personal con terceros para fines comerciales o de marketing sin su previo y expreso consentimiento, salvo que sea requerido por una orden judicial o autoridad competente venezolana.</p>

    <h3>3. Retención de Datos</h3>
    <p>Conservaremos su información personal únicamente durante el tiempo que sea razonablemente necesario para cumplir con los propósitos para los cuales fue recopilada, o según lo requieran las disposiciones fiscales y legales de Venezuela.</p>
  </PageLayout>
);

export const Seguridad = () => (
  <PageLayout title="Seguridad de la Información">
    <p>La seguridad de sus datos y transacciones es una prioridad absoluta para <strong>Sushihiguerote</strong>.</p>
    
    <h3>1. Protección de Datos</h3>
    <p>Implementamos medidas técnicas y organizativas razonables para proteger su información personal contra el acceso no autorizado, la alteración, divulgación o destrucción accidental o ilícita, en fiel cumplimiento con los estándares exigidos para el comercio y la Ley Especial Contra los Delitos Informáticos de Venezuela.</p>

    <h3>2. Transacciones Financieras</h3>
    <p>Sushihiguerote no almacena información de tarjetas de crédito ni de débito en nuestros servidores. Los pagos mediante transferencias bancarias o Pago Móvil se procesan a través de las plataformas seguras de las instituciones financieras venezolanas. Es su responsabilidad verificar la exactitud de los datos al momento de realizar el pago.</p>
    
    <h3>3. Canales de Comunicación</h3>
    <p>Nuestros pedidos se gestionan principalmente a través de la plataforma WhatsApp, la cual cuenta con cifrado de extremo a extremo. Le instamos a no compartir información sensible no solicitada (como contraseñas bancarias) a través de ningún canal de comunicación.</p>
  </PageLayout>
);

export const Terminos = () => (
  <PageLayout title="Términos y Condiciones">
    <p>Al acceder, navegar o utilizar los servicios de <strong>Sushihiguerote</strong>, usted acepta y se compromete a cumplir los siguientes Términos y Condiciones, los cuales se rigen por la Ley de Protección al Consumidor y al Usuario y demás legislaciones aplicables en Venezuela.</p>
    
    <h3>1. Pedidos y Entregas</h3>
    <ul>
      <li>Todos los pedidos están sujetos a disponibilidad de los ingredientes y capacidad operativa.</li>
      <li>El servicio de delivery ("entrega a domicilio") aplica para zonas específicas de Higuerote. Zonas fuera del perímetro establecido pueden incurrir en recargos o no estar disponibles.</li>
      <li>Los tiempos de entrega proporcionados son estimaciones y pueden variar debido a factores externos como clima, tráfico o volumen de pedidos.</li>
    </ul>

    <h3>2. Precios y Pagos</h3>
    <p>Los precios indicados en nuestro menú pueden estar sujetos a cambios sin previo aviso debido a las fluctuaciones del mercado. Aceptamos pagos en Bolívares (mediante transferencia o Pago Móvil a la tasa del BCV del día de la transacción) y divisas en efectivo, según las normativas del Banco Central de Venezuela.</p>

    <h3>3. Política de Devoluciones y Reclamos</h3>
    <p>Dado que nuestros productos son alimentos perecederos, cualquier reclamo sobre la calidad o exactitud del pedido debe realizarse en un plazo máximo de dos (2) horas luego de haber recibido el producto. Se evaluará cada caso para ofrecer un reemplazo del producto o una nota de crédito, según corresponda. No se realizarán reembolsos en dinero una vez el alimento haya sido consumido total o parcialmente.</p>
    
    <h3>4. Contacto</h3>
    <p>Para cualquier duda o comentario sobre estos términos, puede contactarnos directamente a través de nuestro número oficial de WhatsApp.</p>
  </PageLayout>
);
