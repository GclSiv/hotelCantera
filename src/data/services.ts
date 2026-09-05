// src/data/services.ts
import type { HotelService } from '../types/hotel';

export const services: HotelService[] = [
  { id: 'wifi', name: 'Wi-Fi de Alta Velocidad', description: 'Conexión inalámbrica veloz en todas las habitaciones y áreas comunes.', iconName: 'wifi' },
  { id: 'restaurante', name: 'Restaurante del Hotel', description: 'Prueba la gastronomía regional con un sazón tradicional e inolvidable.', iconName: 'utensils' },
  { id: 'estacionamiento', name: 'Estacionamiento Propio', description: 'Estacionamiento privado gratuito y seguro para todos nuestros huéspedes.', iconName: 'car' },
  { id: 'climatizacion', name: 'Aire Acondicionado', description: 'Habitaciones perfectamente climatizadas para tu máximo bienestar.', iconName: 'wind' },
  { id: 'recepcion', name: 'Atención Personalizada', description: 'Atención cálida y profesional para brindarte las mejores recomendaciones locales.', iconName: 'heart' },
  { id: 'jacuzzi', name: 'Tina de Hidromasaje', description: 'Disfruta de espacios de relajación exclusivos dentro de instalaciones seleccionadas.', iconName: 'sparkles' }
];
