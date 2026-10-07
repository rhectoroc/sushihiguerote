# 🍣 Sushihiguerote - Memoria Técnica de Avances (Advance)

**Última actualización:** 07 de Octubre, 2026  
**Repositorio:** `https://github.com/rhectoroc/sushihiguerote.git`  
**Rama:** `main`  
**Despliegue:** Easypanel (Docker + Nginx multi-stage)

---

## 📌 Resumen de lo Realizado Hoy

### 1. Inicialización y Despliegue de la Aplicación
- **Stack Base:** React 19 + TypeScript + Vite + Hono (Backend API) + Framer Motion + Lucide React + Swiper v14.
- **Configuración de Despliegue:**
  - `Dockerfile` multi-stage (Node 20 Alpine para build + Nginx Alpine para servir archivos estáticos).
  - `nginx.conf` con soporte para React Router (`try_files $uri $uri/ /index.html`).
- **SEO & Branding:**
  - Metadatos Open Graph, Twitter Cards, títulos y descripciones optimizadas en `index.html`.
  - Favicon corporativo configurado con el logo oficial.

---

### 2. Experiencia de Usuario, Animaciones y Micro-interacciones
- **Botones de Llamado a la Acción (CTA):**
  - Animación continua de pulso (`pulse`) y estados táctiles activos optimizados para móviles y escritorio.
- **Sección "Super Promos" (Cards Swiper 3D):**
  - Componente [`CardsSwiper.tsx`](src/components/CardsSwiper.tsx) con efecto 3D `EffectCards`.
  - Autoplay ajustado a 2.5s para dinamismo.
  - Blobs de luz flotantes y difuminados de fondo (`glowing-blob`).
- **Sección "Promociones" (Coverflow Swiper 3D):**
  - Componente [`CoverflowSwiper.tsx`](src/components/CoverflowSwiper.tsx) implementando efecto `EffectCoverflow`.
  - Corrección de escalado forzado de diapositivas en CSS para evitar tarjetas desproporcionadas.
  - Proporción vertical ~1:2 adaptada a pósteres (310x600 px en escritorio, 260x500 px en móviles), eliminando cortes de imagen.
- **Ajuste de Scroll y Navegación:**
  - Configuración de `scroll-padding-top: 110px` en `html` (`index.css`), evitando que el navbar fijo tape los encabezados al hacer clic en los enlaces del menú.
- **Sección "Nuestro Menú" (Efecto Lupa + Fondo Animado):**
  - Implementación de animación interactiva estilo **lupa** en [`GridSection.tsx`](src/components/GridSection.tsx): calcula dinámicamente `transform-origin` según la posición del cursor/mouse en las imágenes del menú (`scale(2.2)`).
  - Blobs ambientales flotantes agregados al fondo de la sección para dar profundidad visual.

---

### 3. Herramientas y Utilidades
- **Generador de Código QR:**
  - Script [`generate_qr.cjs`](generate_qr.cjs) para generar códigos QR de alta resolución con el logo de Sushihiguerote incrustado en el centro y nivel de corrección de error 'H'. Generó `QR_Sushihiguerote.png`.

---

### 4. Auditoría y Parches de Seguridad
- **Vulnerabilidades de Dependencias (`npm audit`):**
  - De **7 vulnerabilidades** (2 críticas en `shell-quote` y 5 moderadas en `jimp`/`file-type`/`phin`) a **0 vulnerabilidades**.
  - Se configuró `overrides` en `package.json` para fijar `shell-quote@^1.12.0`.
  - Se eliminó la dependencia huérfana de `jimp` en producción.
- **Hardening de Nginx (`nginx.conf`):**
  - `server_tokens off;` para evitar fingerprinting de versión.
  - Cabeceras de seguridad agregadas:
    - `X-Frame-Options "SAMEORIGIN"` (protección contra clickjacking).
    - `X-Content-Type-Options "nosniff"` (previene MIME sniffing).
    - `X-XSS-Protection "1; mode=block"`.
    - `Referrer-Policy "strict-origin-when-cross-origin"`.
    - `Permissions-Policy "camera=(), microphone=()"`.
  - Cache inmutable (`max-age=31536000, immutable`) para bundles en `/assets/`.
- **Hardening de API Hono (`server/index.ts`):**
  - Middleware `secureHeaders()` activado en todas las rutas `/api/*`.
- **Protección contra Reverse Tabnabbing:**
  - Todos los enlaces con `target="_blank"` (`Navbar.tsx`, `Hero.tsx`, `Footer.tsx`, `ImageModal.tsx`) actualizados con `rel="noopener noreferrer"`.
- **Protección de Secretos (`.gitignore`):**
  - Agregadas reglas estrictas para bloquear archivos `.env`, `.env.*` y credenciales locales.

---

## 🚀 Estado Actual
- **Build de producción:** `npm run build` compila con éxito (0 errores).
- **Vulnerabilidades:** 0 vulnerabilidades reportadas por `npm audit`.
- **Git:** Todos los cambios sincronizados con la rama `main` de GitHub.

---

## 📋 Tareas Pendientes / Próximos Pasos (Backlog)
1. **Configuración de Dominio & DNS:**
   - Apuntar registros DNS de `sushihiguerote.com` al servidor / Easypanel si aún requiere verificación SSL final.
2. **Optimización de Assets:**
   - Posible conversión de imágenes pesadas a formato WebP o AVIF para acelerar tiempos de carga inicial.
3. **Google Maps / Redirecciones:**
   - Validar enlace directo a Google Maps o reseña de Google My Business en el footer.
