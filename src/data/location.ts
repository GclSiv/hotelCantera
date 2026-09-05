// src/data/location.ts
import type { NearbyPlace } from '../types/hotel';

export const nearbyPlaces: NearbyPlace[] = [
  { name: 'Paseo El Llano', distance: '600 m', timeWalking: '8 min', category: 'culture' },
  { name: 'Templo de Santo Domingo de Guzmán', distance: '900 m', timeWalking: '11 min', category: 'culture' },
  { name: 'Zócalo de Oaxaca', distance: '1.2 km', timeWalking: '15 min', category: 'culture' },
  { name: 'Mercado Benito Juárez', distance: '1.3 km', timeWalking: '16 min', category: 'culture' },
  { name: 'Restaurant Olivia', distance: '100 m', timeWalking: '1 min', category: 'dining' },
  { name: 'Restaurante Bar Las Margaritas', distance: '150 m', timeWalking: '2 min', category: 'dining' },
  { name: 'Cenaduría Carolina', distance: '350 m', timeWalking: '4 min', category: 'dining' }
];
