import type { HotelService } from '@/types/hotel'

/*
  Servicios y amenidades. El campo 'icon' es un identificador que el componente
  ServiceItem resolverá a un icono (SVG inline / minimalista) en la Fase 3.
*/
export const services: HotelService[] = [
  {
    id: 'wifi',
    icon: 'wifi',
    title: 'WiFi de alta velocidad',
    description: 'Conexión estable en todas las áreas del hotel.',
  },
  {
    id: 'desayuno',
    icon: 'coffee',
    title: 'Desayuno oaxaqueño',
    description: 'Sabores locales para comenzar el día.',
  },
  {
    id: 'restaurante',
    icon: 'utensils',
    title: 'Restaurante',
    description: 'Cocina tradicional con identidad regional.',
  },
  {
    id: 'estacionamiento',
    icon: 'parking',
    title: 'Estacionamiento',
    description: 'Comodidad para quienes llegan en auto.',
  },
  {
    id: 'clima',
    icon: 'snowflake',
    title: 'Aire acondicionado',
    description: 'Climatización en todas las habitaciones.',
  },
  {
    id: 'atencion',
    icon: 'concierge',
    title: 'Atención personalizada',
    description: 'Hospitalidad oaxaqueña en cada detalle.',
  },
  {
    id: 'ubicacion',
    icon: 'map-pin',
    title: 'Ubicación privilegiada',
    description: 'A pasos de los principales atractivos.',
  },
  {
    id: 'terraza',
    icon: 'sun',
    title: 'Áreas comunes',
    description: 'Espacios coloniales para descansar y convivir.',
  },
]
