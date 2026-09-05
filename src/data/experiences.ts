// src/data/experiences.ts
import type { ExperienceItem } from '../types/hotel';
import { img } from './images';

export const experiences: ExperienceItem[] = [
  { id: 1, number: '01', title: 'Gastronomía Ancestral', description: 'Sabores que cuentan historias. Desde el legendario mole negro hasta el aroma del cacao artesanal en los mercados locales.', image: img('gallery/gastronomia.webp') || '' },
  { id: 2, number: '02', title: 'Arquitectura Colonial', description: 'Un viaje en el tiempo a través de majestuosas canteras verdes, arcos coloniales y patios históricos de gran belleza.', image: img('gallery/arquitectura.webp') || '' },
  { id: 3, number: '03', title: 'Cultura del Mezcal', description: 'Visita palenques tradicionales y descubre la magia y los procesos artesanales detrás del elixir sagrado oaxaqueño.', image: img('gallery/mezcal.webp') || '' }
];
