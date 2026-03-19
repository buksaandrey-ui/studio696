import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/models',
    '/prints',
    '/contact',
    '/termosy-na-zakaz',
    '/termosy-s-logotipom',
    '/termosy-s-foto',
    '/detskie-termosy',
    '/podarochnye-termosy',
    '/termosy-anime',
  ]

  return routes.map((route) => ({
    url: `https://studio696.ru${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
