import type { FAQItem } from '@/types/hotel'

/*
  Preguntas frecuentes. Acordeón con una sola respuesta abierta a la vez (Fase 3).
  Respuestas de ejemplo, editables según las políticas reales del hotel.
*/
export const faqs: FAQItem[] = [
  {
    question: '¿A qué hora es el check-in?',
    answer: 'El check-in está disponible a partir de las 15:00 h.',
  },
  {
    question: '¿A qué hora es el check-out?',
    answer: 'El check-out es hasta las 12:00 h. Consúltanos por salidas tardías según disponibilidad.',
  },
  {
    question: '¿Cuentan con estacionamiento?',
    answer: 'Sí, ofrecemos opciones de estacionamiento. Escríbenos para confirmar disponibilidad durante tu estancia.',
  },
  {
    question: '¿El desayuno está incluido?',
    answer: 'Contamos con desayuno oaxaqueño. La inclusión depende de la tarifa reservada; verifica al momento de reservar.',
  },
  {
    question: '¿Aceptan mascotas?',
    answer: 'Consúltanos previamente: evaluamos cada caso para garantizar el confort de todos nuestros huéspedes.',
  },
  {
    question: '¿Puedo modificar mi reservación?',
    answer: 'Sí, las modificaciones están sujetas a disponibilidad y a la política de la tarifa. Contáctanos con anticipación.',
  },
  {
    question: '¿Tienen habitaciones familiares?',
    answer: 'La Habitación Doble Queen es ideal para grupos pequeños. Escríbenos para armar la mejor opción para tu familia.',
  },
]
