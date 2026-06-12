export const siteConfig = {
  name: '429 Friends',
  domain: '429Friends.org',
  tagline: 'Outdoor Meeting for Worship',
  locationLine: 'Hendersonville, North Carolina',
  timezone: 'America/New_York',
  description:
    'A welcoming monthly outdoor Meeting for Worship in Hendersonville, North Carolina.',
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
      label: 'Instagram',
      href: '',
      handle: '@429friends',
    },
    {
      label: 'Newsletter',
      href: '',
      handle: 'Coming soon',
    },
  ] as Array<{ label: string; href: string; handle: string }>,
  navigation: [
    { label: 'About', href: '/about/' },
    { label: 'Visit', href: '/visit/' },
    { label: 'Schedule', href: '/schedule/' },
    { label: 'First Time Here', href: '/first-time-here/' },
    { label: 'Resources', href: '/resources/' },
    { label: 'Contact', href: '/contact/' },
  ],
} as const;
