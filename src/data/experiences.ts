import type { ExperienceItem } from '@/types/hotel'
import { img } from '@/data/images'

/*
  Experiencias del destino — sección editorial estilo magazine "Oaxaca".
  Las imágenes reutilizan fotografías reales de áreas del hotel / galería.
*/
export const experiences: ExperienceItem[] = [
  {
    number: '01',
    title: 'Gastronomía',
    description:
      'Sabores que cuentan historias: mole, tlayudas, quesillo y el mercado como ' +
      'templo de la cocina oaxaqueña.',
    image: img('gallery/gallery-04.webp'),
  },
  {
    number: '02',
    title: 'Arquitectura colonial',
    description:
      'Cantera verde, arcos y patios que resguardan siglos de historia en cada ' +
      'rincón del Centro Histórico.',
    image: img('hotel/hotel-01.webp'),
  },
  {
    number: '03',
    title: 'Mercados tradicionales',
    description:
      'Color, aroma y artesanía viva. Los mercados de Oaxaca son una experiencia ' +
      'para todos los sentidos.',
    image: img('gallery/gallery-07.webp'),
  },
  {
    number: '04',
    title: 'Mezcal',
    description:
      'La bebida de los dioses. Un ritual ancestral que se degusta despacio, con ' +
      'respeto por la tierra y el maguey.',
    image: img('gallery/gallery-05.webp'),
  },
  {
    number: '05',
    title: 'Arte y cultura',
    description:
      'Galerías, talleres y tradición. Oaxaca es cuna de artistas y guardiana de ' +
      'un patrimonio vivo.',
    image: img('gallery/gallery-08.webp'),
  },
  {
    number: '06',
    title: 'Centro Histórico',
    description:
      'Templo de Santo Domingo, el Zócalo y calles empedradas: Patrimonio de la ' +
      'Humanidad a tus pies.',
    image: img('hotel/hotel-05.webp'),
  },
]
