export const siteConfig = {
  name: '429 Friends',
  domain: '429Friends.org',
  tagline: 'Outdoor Meeting for Worship',
  locationLine: 'Hendersonville, North Carolina',
  timezone: 'America/New_York',
  description:
    'A welcoming monthly outdoor Meeting for Worship in Hendersonville, North Carolina, with shared silence, practical guidance for first-time visitors, and a relaxed backyard setting.',
  contact: {
    email: 'hello@429friends.org',
    emailLabel: 'hello@429friends.org',
  },
  address: {
    street: 'Private residence address shared before your first visit',
    city: 'Hendersonville',
    state: 'North Carolina',
    postalCode: '',
    publicLabel: 'A private backyard in Hendersonville, North Carolina',
    directionsNote: 'The full address is shared directly with visitors before they attend.',
  },
  meeting: {
    name: 'Outdoor Meeting for Worship',
    cadence: 'Second Sunday of each month',
    duration: 'About 45–60 minutes',
    communityTime: 'Informal conversation afterward',
    arrival: 'Enter along the right side of the house and continue directly into the backyard.',
  },
  socialLinks: [
    {
      label: 'Email',
      href: 'mailto:hello@429friends.org',
      handle: 'hello@429friends.org',
    },
  ] as Array<{ label: string; href: string; handle: string }>,
  seo: {
    title: '429 Friends',
    ogImage: '/social-share.jpg',
    ogImageAlt: 'A shaded backyard lawn beneath wide green tree branches at 429 Friends.',
  },
  navigation: [
    { label: 'About', href: '/about/' },
    { label: 'Visit', href: '/visit/' },
    { label: 'Schedule', href: '/schedule/' },
    { label: 'First Time Here', href: '/first-time-here/' },
    { label: 'Resources', href: '/resources/' },
    { label: 'Contact', href: '/contact/' },
  ],
} as const;
