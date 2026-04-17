import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Pontera Studios'
const BASE_URL = 'https://slatecode.dev'

function SEO({ title, description, path = '/', schema }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Custom Software & Web Development`
  const url = `${BASE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}

// Reusable schema builders
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

export default SEO
