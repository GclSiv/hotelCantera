import type { Testimonial } from '@/types/hotel'

/*
  Testimonios de huéspedes. Contenido de ejemplo, editable.
  El slider se controla manualmente en la Fase 3 (sin autoplay agresivo).
*/
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Un espacio lleno de historia, tranquilidad y detalles que hacen especial la ' +
      'estancia. La ubicación es inmejorable para recorrer Oaxaca a pie.',
    author: 'María G.',
    origin: 'Ciudad de México',
  },
  {
    id: 't2',
    quote:
      'La arquitectura colonial y la calidez del personal nos hicieron sentir en ' +
      'casa. Volveríamos sin dudarlo.',
    author: 'Andrés R.',
    origin: 'Monterrey',
  },
  {
    id: 't3',
    quote:
      'Cada rincón invita a quedarse. El desayuno oaxaqueño y la atención fueron ' +
      'el mejor comienzo de nuestros días en la ciudad.',
    author: 'Sophie L.',
    origin: 'Francia',
  },
]
