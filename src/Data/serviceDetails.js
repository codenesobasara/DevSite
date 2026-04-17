export const serviceCategories = [
  {
    id: "web-development",
    name: "Web Development",
    tabs: [
      {
        id: "custom-websites",
        title: "Custom Website Development",
        headline: "Your business deserves more than a template.",
        description:
          "Every website we build is designed and coded from scratch. We don't use WordPress, Wix, or any page builders. The result is a site that's fast, unique to your brand, and built to grow with your business. You own everything when we're done.",
        highlights: [
          "Fully custom design and development",
          "Mobile responsive across all devices",
          "Performance optimized for speed",
          "Built to scale as your business grows",
        ],
      },
      {
        id: "web-apps",
        title: "Web Application Development",
        headline: "Full-stack applications built from the ground up.",
        description:
          "We build custom web applications that solve real business problems. Whether it's an internal tool, a customer-facing platform, or a complex SaaS product, we handle everything from database architecture to the interface your users interact with. No templates, no shortcuts.",
        highlights: [
          "Custom dashboards and admin panels",
          "SaaS platforms and portals",
          "Database design and API development",
          "Authentication and role-based access",
        ],
      },
      {
        id: "landing-pages",
        title: "Landing Pages",
        headline: "Pages that convert visitors into customers.",
        description:
          "Sometimes you don't need a full site, you need one page that does its job. We build high-converting landing pages for product launches, ad campaigns, and lead generation. Fast turnaround, sharp design, optimized for results.",
        highlights: [
          "Conversion-focused design",
          "A/B testing ready",
          "Fast load times",
          "Analytics and tracking integration",
        ],
      },
      {
        id: "seo",
        title: "SEO & Web Optimization",
        headline: "Get found by the people who are looking for you.",
        description:
          "We handle technical SEO, on-page optimization, and site performance tuning. Whether you need a full SEO strategy or just need your existing site cleaned up so Google can actually find it, we dig into the details and make it work.",
        highlights: [
          "Technical SEO audits",
          "On-page optimization",
          "Site speed and Core Web Vitals",
          "Search Console and analytics setup",
        ],
      },
    ],
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    tabs: [
      {
        id: "ios",
        title: "iOS Development",
        headline: "Native iOS apps from concept to the App Store.",
        description:
          "We build native iOS applications that feel right at home on Apple devices. From the first wireframe to App Store submission, we handle the full lifecycle. And because we're full-stack, we build the entire backend too. APIs, databases, server infrastructure. One team, everything connected.",
        highlights: [
          "Native Swift development",
          "Full backend and API development",
          "App Store submission and optimization",
          "Push notifications and integrations",
        ],
      },
    ],
  },
  {
    id: "integrations-automation",
    name: "Integrations & Automation",
    tabs: [
      {
        id: "integrations",
        title: "System Integrations",
        headline: "If it has an API, we can connect it.",
        description:
          "Your tools should talk to each other. We build custom integrations that connect your existing software so data flows where it needs to go without manual work. CRM to email, payments to accounting, inventory to storefront. Whatever the workflow, we wire it up.",
        highlights: [
          "CRM and email integrations",
          "Payment and accounting connections",
          "Custom API development",
          "Data syncing across platforms",
        ],
      },
      {
        id: "automation",
        title: "Workflow Automation",
        headline: "Stop doing the same thing twice.",
        description:
          "We build automation workflows that eliminate repetitive tasks and let your systems do the heavy lifting. Whether that's Zapier, n8n, AI-powered workflows, or something fully custom, we figure out where the bottleneck is and make it disappear.",
        highlights: [
          "Zapier and n8n workflows",
          "AI-powered automation",
          "Custom funnel and CRM automation",
          "Process mapping and optimization",
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug) {
  for (const category of serviceCategories) {
    for (const tab of category.tabs) {
      if (tab.id === slug) {
        return { ...tab, category: category.name, categoryId: category.id }
      }
    }
  }
  return null
}
