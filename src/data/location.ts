import type { NearbyPlace } from '@/types/hotel'

/*
  Lugares cercanos de interés — sección Ubicación.
  Distancias y tiempos aproximados desde el Centro Histórico; editables.
*/
export const nearbyPlaces: NearbyPlace[] = [
  { name: 'Templo de Santo Domingo', distance: '400 m', walkingTime: '5 min' },
  { name: 'Zócalo de Oaxaca', distance: '650 m', walkingTime: '8 min' },
  { name: 'Andador Turístico Macedonio Alcalá', distance: '300 m', walkingTime: '4 min' },
  { name: 'Mercado 20 de Noviembre', distance: '800 m', walkingTime: '10 min' },
  { name: 'Museo de las Culturas de Oaxaca', distance: '450 m', walkingTime: '6 min' },
  { name: 'Basílica de la Soledad', distance: '1.2 km', walkingTime: '15 min' },
]
