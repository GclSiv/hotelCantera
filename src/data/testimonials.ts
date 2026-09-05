// src/data/testimonials.ts
import type { Testimonial } from '../types/hotel';

export const testimonials: Testimonial[] = [
  { id: 1, text: 'Excelente hotel, es pequeño, muy limpio, y confortable, con una muy buena atmósfera. El servicio es muy bueno, el personal muy amable y te dan recomendaciones excelentes de lugares para visitar.', author: 'Jessica Rivera', origin: 'Ciudad de México', stars: 5 },
  { id: 2, text: 'Excelente servicio por parte de todo el personal. La comida del restaurante tiene muy buen sazón, es un lugar sumamente tranquilo para descansar en lo absoluto.', author: 'Mauricio Ocampo', origin: 'Viajero de Negocios', stars: 5 },
  { id: 3, text: 'Todo excelente en el hotel. El mesero del restaurante es sumamente atento y ameno, nos brindó valiosos consejos y recomendaciones para conocer Oaxaca a fondo.', author: 'Sabino Rosales', origin: 'Turista Nacional', stars: 5 }
];
