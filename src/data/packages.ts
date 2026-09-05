// src/data/packages.ts
import type { PackageItem } from '../types/hotel'
import { img } from './images'

/*
  Paquetes / experiencias del hotel. Contenido editable.
  No se incluyen precios ni descuentos: el CTA lleva a WhatsApp para consultar
  disponibilidad y tarifa vigente. Imágenes reales del hotel.
*/
export const packages: PackageItem[] = [
  {
    id: 'escapada',
    name: 'Escapada de fin de semana',
    subtitle: 'Dos noches en el corazón de Oaxaca',
    description:
      'Desconéctate entre patios coloniales y calles empedradas. Ideal para una pausa ' +
      'breve que se siente como un viaje completo.',
    image: img('hotel/hotel-08.webp'),
    includes: ['2 noches de estancia', 'Desayuno oaxaqueño', 'Recomendaciones personalizadas'],
  },
  {
    id: 'luna-de-miel',
    name: 'Luna de miel oaxaqueña',
    subtitle: 'Una celebración a la altura',
    description:
      'Una estancia pensada para dos, con los detalles que convierten una noche en un ' +
      'recuerdo. Confort, privacidad y la calidez de Oaxaca.',
    image: img('rooms/doble-queen-02.webp'),
    includes: ['Habitación superior', 'Detalle de bienvenida', 'Late check-out (según disponibilidad)'],
  },
  {
    id: 'cultural',
    name: 'Estancia cultural',
    subtitle: 'Vive el Centro Histórico',
    description:
      'A pasos de Santo Domingo, mercados y museos. Una base perfecta para recorrer el ' +
      'Patrimonio de la Humanidad a pie.',
    image: img('gallery/gallery-03.webp'),
    includes: ['3 noches de estancia', 'Guía de experiencias locales', 'Ubicación privilegiada'],
  },
]
