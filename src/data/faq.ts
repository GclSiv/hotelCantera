// src/data/faq.ts
import type { FAQItem } from '../types/hotel';

export const faqs: FAQItem[] = [
  { id: 1, question: '¿Cuál es el horario de check-in y check-out?', answer: 'El ingreso (check-in) es a las 3:00 p.m. y la salida (check-out) es a las 12:00 p.m. Las solicitudes fuera de horario están sujetas a disponibilidad y pueden generar cargos.' },
  { id: 2, question: '¿Tienen estacionamiento en el hotel?', answer: 'Sí, contamos con estacionamiento propio y seguro sin costo adicional para todos nuestros huéspedes registrados.' },
  { id: 3, question: '¿El desayuno está incluido en la tarifa?', answer: 'Las tarifas base no incluyen el desayuno. No obstante, ofrecemos paquetes que ya lo integran en nuestra cafetería/restaurante.' },
  { id: 4, question: '¿Aceptan mascotas?', answer: 'Sí, aceptamos mascotas en el hotel con ciertas limitaciones y bajo un cargo adicional. Te recomendamos contactarnos antes de tu llegada.' },
  { id: 5, question: '¿Es posible agregar una cama extra en mi habitación?', answer: 'No, por motivos de espacio y para preservar la comodidad de los huéspedes, no se permite la instalación de camas supletorias.' },
  { id: 6, question: '¿Cómo puedo cancelar o modificar mi reservación?', answer: 'Si reservaste de forma directa, escríbenos a reservaciones@hotelcanterareal.com. Si reservaste por una plataforma externa (Booking, Expedia), debes gestionarlo directamente en ella.' }
];
