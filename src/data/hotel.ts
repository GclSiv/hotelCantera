import type { HotelConfig } from '@/types/hotel'

/*
  Configuración global del hotel — ÚNICA fuente de verdad.
  Para reutilizar esta plantilla con otro hotel, basta con editar este archivo.

  NOTA: bookingUrl y whatsappUrl son provisionales. Sustituir por el enlace real
  de Cloudbeds (booking engine) y el número de WhatsApp del hotel.
*/
export const hotel: HotelConfig = {
  name: 'Hotel Cantera Real',
  tagline: 'Donde la historia se convierte en experiencia',
  shortDescription:
    'Un hotel boutique en el corazón del Centro Histórico de Oaxaca, donde la ' +
    'arquitectura colonial, la cantera verde y la hospitalidad oaxaqueña se ' +
    'encuentran con el confort contemporáneo.',

  // TODO: Reemplazar con el enlace real del motor de reservas (Cloudbeds).
  bookingUrl: 'https://hotels.cloudbeds.com/reservation/REEMPLAZAR',
  // TODO: Reemplazar con el número real del hotel (formato internacional).
  whatsappUrl:
    'https://wa.me/5219511234567?text=Hola,%20me%20gustar%C3%ADa%20consultar%20disponibilidad%20en%20Hotel%20Cantera%20Real',

  contact: {
    address: 'Centro Histórico',
    city: 'Oaxaca de Juárez, Oaxaca, México',
    phone: '+52 951 123 4567',
    whatsapp: '+52 951 123 4567',
    email: 'reservaciones@hotelcanterareal.com',
    // Iframe de mapa opcional (Centro Histórico de Oaxaca).
    mapEmbedUrl:
      'https://www.google.com/maps?q=Centro+Hist%C3%B3rico+Oaxaca+de+Ju%C3%A1rez&output=embed',
  },

  social: [
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/' },
    { platform: 'facebook', label: 'Facebook', url: 'https://facebook.com/' },
    { platform: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/' },
  ],

  // Bloque estadístico de la sección "El Hotel". Valores editables.
  stats: [
    { value: '3', label: 'Tipos de habitación' },
    { value: '5', suffix: ' min', label: 'Del Centro Histórico' },
    { value: '100', suffix: '%', label: 'Experiencia oaxaqueña' },
    { value: '24', suffix: '/7', label: 'Atención personalizada' },
  ],
}

// Enlaces de navegación del navbar (anclas a secciones de la landing).
import type { NavLink } from '@/types/hotel'

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El Hotel', href: '#el-hotel' },
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
]
