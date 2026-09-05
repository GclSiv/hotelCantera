/*
  Registro centralizado de imágenes.
  Usamos import.meta.glob (nativo de Vite) con { eager: true } para que Vite
  procese, hashee y optimice cada asset en el build de producción. Así las
  rutas NUNCA se rompen al compilar (a diferencia de strings relativos en JS).

  Uso en los archivos de datos:
    import { img } from '@/data/images'
    image: img('hero/hero-01.webp')
*/

// Todas las imágenes optimizadas viven bajo src/assets/images/**.
const modules = import.meta.glob<string>('@/assets/images/**/*.{webp,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})

// Normalizamos las claves a rutas relativas a la carpeta de imágenes:
//   '/src/assets/images/hero/hero-01.webp'  ->  'hero/hero-01.webp'
const registry: Record<string, string> = {}
const BASE = '/src/assets/images/'

for (const [absolutePath, url] of Object.entries(modules)) {
  const key = absolutePath.startsWith(BASE) ? absolutePath.slice(BASE.length) : absolutePath
  registry[key] = url as string
}

/**
 * Devuelve la URL final (hasheada por Vite) de una imagen a partir de su clave
 * relativa dentro de src/assets/images/. Ej: img('rooms/estandar-01.webp').
 */
export function img(path: string): string {
  const url = registry[path]
  if (!url && import.meta.env.DEV) {
    console.warn(`[images] No se encontró la imagen: "${path}"`)
  }
  return url ?? ''
}

/** Devuelve todas las claves registradas (útil para galerías dinámicas). */
export function imageKeys(prefix = ''): string[] {
  return Object.keys(registry)
    .filter((k) => k.startsWith(prefix))
    .sort()
}
