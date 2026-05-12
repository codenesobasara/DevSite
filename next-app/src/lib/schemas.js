const BASE_URL = 'https://www.ponterastudios.com'

export const schemas = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pontera Studios',
    url: BASE_URL,
    description: 'Custom software development and web development studio based in the Waterloo Region, Ontario.',
    areaServed: {
      '@type': 'Place',
      name: 'Kitchener-Waterloo, Ontario, Canada',
    },
  },

  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pontera Studios',
    url: BASE_URL,
    description: 'Custom software development and web development studio based in the Waterloo Region, Ontario.',
    areaServed: [
      { '@type': 'City', name: 'Kitchener' },
      { '@type': 'City', name: 'Waterloo' },
      { '@type': 'City', name: 'Cambridge' },
      { '@type': 'City', name: 'Guelph' },
    ],
    priceRange: '$$',
  },

  service(name, description, url) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      description,
      url: `${BASE_URL}${url}`,
      provider: {
        '@type': 'Organization',
        name: 'Pontera Studios',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Kitchener-Waterloo, Ontario, Canada',
      },
    }
  },

  breadcrumbs(items) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: `${BASE_URL}${item.path}`,
      })),
    }
  },
}
