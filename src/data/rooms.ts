// src/data/rooms.ts
import type { Room } from '../types/hotel';
import { img } from './images';

export const rooms: Room[] = [
  {
    id: 'estandar',
    name: 'Habitación Estándar',
    subtitle: 'Standard Comfort',
    guests: 2,
    size: '24 m²',
    image: img('rooms/estandar.webp') || '',
    description: 'Habitación acogedora y minuciosamente diseñada, ideal para 1 o 2 personas que buscan descansar rodeados de encanto colonial.',
    features: [
      '1 Cama King Size',
      'Wi-Fi de alta velocidad',
      'Aire acondicionado',
      'Televisión por cable',
      'Amenidades de baño exclusivas'
    ]
  },
  {
    id: 'doble-individual',
    name: 'Habitación Doble Individual',
    subtitle: 'Double Single Room',
    guests: 2,
    size: '24 m²',
    image: img('rooms/doble-individual.webp') || '',
    description: 'Excelente opción con dos camas individuales, perfectamente distribuidas para ofrecer privacidad y confort a dos huéspedes.',
    features: [
      '2 Camas Individuales',
      'Wi-Fi de alta velocidad',
      'Aire acondicionado',
      'Caja de seguridad',
      'Espacio de trabajo funcional'
    ]
  },
  {
    id: 'doble-queen',
    name: 'Habitación Doble Queen Size',
    subtitle: 'Family & Friends Suite',
    guests: 4,
    size: '33 m²',
    image: img('rooms/doble-queen.webp') || '',
    description: 'Habitación amplia y distinguida, diseñada especialmente para viajes confortables en familia o con amigos.',
    features: [
      '2 Camas Queen Size',
      'Wi-Fi de alta velocidad',
      'Aire acondicionado',
      'Tina de baño elegante',
      'Sofá o área de estar integrada'
    ]
  }
];
