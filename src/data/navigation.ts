// src/data/navigation.ts
// Enlaces de navegación del navbar (anclas a las secciones de la landing).

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El Hotel', href: '#el-hotel' },
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Paquetes', href: '#paquetes' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];
