// src/data/hotel.ts
import type { HotelConfig } from '../types/hotel';

export const hotelConfig: HotelConfig = {
  name: 'Hotel Cantera Real',
  tagline: 'Arquitectura colonial que enamora en cada detalle',
  description: 'Descubre el equilibrio perfecto entre el encanto colonial y el confort moderno en pleno corazón del Centro Histórico de Oaxaca.',
  bookingUrl: 'https://us2.cloudbeds.com/es/reservation/CJb6Cu?currency=mxn',
  contact: {
    address: 'Libres 404, Col. Centro, Oaxaca de Juárez, Oaxaca, México, C.P. 68000',
    phone: '+52 951 429 6521',
    email: 'reservaciones@hotelcanterareal.com',
    gmapsLink: 'https://maps.google.com/?q=Hotel+Cantera+Real+Oaxaca'
  },
  social: {
    instagram: 'https://www.instagram.com/hotelcanterareal/',
    facebook: 'https://www.facebook.com/canterarealoax',
    tiktok: 'https://www.tiktok.com/@hotelcanterareal'
  },
  stats: {
    roomsCount: 18,
    historyYears: 20,
    minutesToCenter: 5,
    satisfactionPercentage: 98
  }
};
