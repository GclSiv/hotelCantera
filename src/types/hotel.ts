/*
  Tipos globales del sitio — Hotel Cantera Real.
  Toda la capa de datos (src/data/*.ts) se tipa contra estas interfaces
  para que el contenido sea sustituible sin romper los componentes.
*/

/** Un enlace de red social del hotel. */
export interface SocialLink {
  /** Identificador de la red: 'instagram' | 'facebook' | 'tiktok' | 'whatsapp'... */
  platform: string
  label: string
  url: string
}

/** Enlace de navegación del navbar (ancla a una sección). */
export interface NavLink {
  label: string
  /** Ancla interna, p. ej. '#habitaciones'. */
  href: string
}

/** Bloque estadístico de la sección "El Hotel". */
export interface StatItem {
  /** Valor grande, p. ej. '3' o '15'. */
  value: string
  /** Sufijo opcional, p. ej. '+', '%', 'min'. */
  suffix?: string
  label: string
}

/** Datos de contacto y ubicación física. */
export interface ContactInfo {
  address: string
  city: string
  phone: string
  whatsapp: string
  email: string
  /** URL de mapa (iframe o enlace); opcional en sitio estático. */
  mapEmbedUrl?: string
}

/** Configuración general y de marca del hotel. */
export interface HotelConfig {
  name: string
  /** Texto corto para el hero / meta. */
  tagline: string
  shortDescription: string
  /** URL externa de reservas (Cloudbeds / booking engine). */
  bookingUrl: string
  /** URL directa de WhatsApp para reservas o dudas. */
  whatsappUrl: string
  contact: ContactInfo
  social: SocialLink[]
  stats: StatItem[]
}

/** Una habitación del hotel. */
export interface Room {
  id: string
  name: string
  /** Subtítulo editorial, p. ej. 'Descanso esencial'. */
  subtitle: string
  /** Capacidad en huéspedes. */
  guests: number
  /** Superficie, p. ej. '24 m²'. */
  size: string
  /** Imagen principal (clave para el helper img()). */
  image: string
  /** Galería de la habitación (claves para img()). */
  gallery: string[]
  description: string
  /** Amenidades / características destacadas. */
  features: string[]
}

/** Un servicio o amenidad del hotel. */
export interface HotelService {
  id: string
  /** Nombre del icono (se resolverá en el componente). */
  icon: string
  title: string
  description: string
}

/** Una experiencia del destino (sección Oaxaca, estilo magazine). */
export interface ExperienceItem {
  /** Número editorial, p. ej. '01'. */
  number: string
  title: string
  description: string
  /** Imagen asociada (clave para img()). */
  image: string
}

/** Un testimonio de huésped. */
export interface Testimonial {
  id: string
  quote: string
  author: string
  origin: string
}

/** Una pregunta frecuente (acordeón). */
export interface FAQItem {
  question: string
  answer: string
}

/** Un lugar cercano de interés (sección Ubicación). */
export interface NearbyPlace {
  name: string
  /** Distancia aproximada, p. ej. '400 m'. */
  distance: string
  /** Tiempo caminando, p. ej. '5 min'. */
  walkingTime: string
}
