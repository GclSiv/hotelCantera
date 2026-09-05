import type { Room } from '@/types/hotel'
import { img } from '@/data/images'

/*
  Habitaciones reales del hotel (3 tipos respaldados por fotografía).
  Los valores de huéspedes y m² son aproximados y editables por el desarrollador.
  Las imágenes se resuelven con el helper img() → Vite hashea las rutas en build.
*/
export const rooms: Room[] = [
  {
    id: 'estandar',
    name: 'Habitación Estándar',
    subtitle: 'Descanso esencial',
    guests: 2,
    size: '24 m²',
    image: img('rooms/estandar-01.webp'),
    gallery: [
      img('rooms/estandar-01.webp'),
      img('rooms/estandar-02.webp'),
      img('rooms/estandar-03.webp'),
      img('rooms/estandar-04.webp'),
    ],
    description:
      'Un espacio sereno y luminoso, pensado para descansar después de descubrir ' +
      'Oaxaca. Confort contemporáneo con el carácter cálido de la arquitectura local.',
    features: ['WiFi de alta velocidad', 'Aire acondicionado', 'Baño privado', 'TV', 'Amenidades'],
  },
  {
    id: 'doble-individual',
    name: 'Habitación Doble Individual',
    subtitle: 'Ideal para compartir',
    guests: 2,
    size: '22 m²',
    image: img('rooms/doble-individual-01.webp'),
    gallery: [
      img('rooms/doble-individual-01.webp'),
      img('rooms/doble-individual-02.webp'),
      img('rooms/doble-individual-03.webp'),
      img('rooms/doble-individual-04.webp'),
    ],
    description:
      'Dos camas individuales en un ambiente acogedor, perfecta para viajes de ' +
      'amistad o trabajo. Comodidad y privacidad en el corazón de la ciudad.',
    features: ['Dos camas individuales', 'WiFi de alta velocidad', 'Aire acondicionado', 'Baño privado', 'TV'],
  },
  {
    id: 'doble-queen',
    name: 'Habitación Doble Queen',
    subtitle: 'Amplitud y confort',
    guests: 3,
    size: '28 m²',
    image: img('rooms/doble-queen-01.webp'),
    gallery: [
      img('rooms/doble-queen-01.webp'),
      img('rooms/doble-queen-02.webp'),
      img('rooms/doble-queen-03.webp'),
      img('rooms/doble-queen-04.webp'),
    ],
    description:
      'Nuestra habitación más amplia, con cama Queen y espacio adicional para una ' +
      'estancia relajada. La opción ideal para disfrutar Oaxaca con todo el confort.',
    features: ['Cama Queen', 'Espacio ampliado', 'WiFi de alta velocidad', 'Aire acondicionado', 'Baño privado'],
  },
]
