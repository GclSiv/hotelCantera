// src/types/hotel.ts

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  twitter?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  gmapsLink?: string;
}

export interface HotelConfig {
  name: string;
  tagline: string;
  description: string;
  bookingUrl: string;
  contact: ContactInfo;
  social: SocialLinks;
  stats: {
    roomsCount: number;
    historyYears: number;
    minutesToCenter: number;
    satisfactionPercentage: number;
  };
}

export interface Room {
  id: string;
  name: string;
  subtitle: string;
  guests: number;
  size: string;
  image: string;
  description: string;
  features: string[];
  bookingUrlOverride?: string;
}

export interface HotelService {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  origin: string;
  stars: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ExperienceItem {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface NearbyPlace {
  name: string;
  distance: string;
  timeWalking: string;
  category: 'culture' | 'dining' | 'transit';
}
