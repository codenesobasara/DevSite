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
    description: 'Custom web design and software development studio based in the Waterloo Region, Ontario.',
    telephone: '+1-519-575-1573',
    image: `${BASE_URL}/images/og-image.png`,
    areaServed: [
      { '@type': 'City', name: 'Kitchener' },
      { '@type': 'City', name: 'Waterloo' },
      { '@type': 'City', name: 'Cambridge' },
      { '@type': 'City', name: 'Guelph' },
    ],
    founder: {
      '@type': 'Person',
      name: 'Neso Basara',
      url: `${BASE_URL}/about`,
    },
    sameAs: ['https://g.page/r/Cf6iqLJbOhcnEBM'],
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

  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Neso Basara',
    jobTitle: 'Founder',
    worksFor: {
      '@type': 'Organization',
      name: 'Pontera Studios',
      url: BASE_URL,
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Western University',
    },
    url: `${BASE_URL}/about`,
  },

  aboutPage: {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Pontera Studios',
    url: `${BASE_URL}/about`,
    description:
      'Pontera Studios is a custom web and software development studio in the Waterloo Region, Ontario, founded by Neso Basara.',
  },

  faq(items) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
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
