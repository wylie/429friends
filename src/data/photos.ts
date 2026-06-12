import type { ImageMetadata } from 'astro';
import backyardWide from '../assets/IMG_6690.jpeg';
import honeysuckleBloom from '../assets/IMG_6692.jpeg';
import honeysuckleCluster from '../assets/IMG_6693.jpeg';
import yellowFlowerFence from '../assets/IMG_6694.jpeg';
import entryGate from '../assets/IMG_6696.jpeg';
import drivewayParking from '../assets/IMG_6697.jpeg';

export interface PhotoItem {
  src: ImageMetadata;
  alt: string;
  caption: string;
}

export const backyardGallery: PhotoItem[] = [
  {
    src: backyardWide,
    alt: 'The shaded backyard lawn where 429 Friends gathers beneath wide tree branches.',
    caption: 'The backyard gathering space under the trees.',
  },
  {
    src: honeysuckleBloom,
    alt: 'A coral honeysuckle blossom growing among green leaves near the meeting space.',
    caption: 'Native plantings around the yard add color and shade.',
  },
  {
    src: yellowFlowerFence,
    alt: 'A bright yellow flower blooming beside the wooden fence at the property.',
    caption: 'Simple garden details help the space feel informal and lived in.',
  },
];

export const arrivalGallery: PhotoItem[] = [
  {
    src: backyardWide,
    alt: 'A wide view of the backyard clearing where visitors arrive and settle into the circle.',
    caption: 'The side path opens into the shaded backyard gathering space.',
  },
  {
    src: entryGate,
    alt: 'A wooden gate along the approach into the backyard at 429 Friends.',
    caption: 'The approach is residential, quiet, and easy to follow.',
  },
  {
    src: honeysuckleCluster,
    alt: 'Coral honeysuckle blossoms in afternoon light near the entry side of the yard.',
    caption: 'Garden details along the way make the arrival feel informal and welcoming.',
  },
];

export const parkingGallery: PhotoItem[] = [
  {
    src: drivewayParking,
    alt: 'The driveway and nearby roadside area available for parking at 429 Friends.',
    caption: 'Driveway and nearby street parking are both available.',
  },
  {
    src: yellowFlowerFence,
    alt: 'A yellow flower framed by the wooden fence along the property line.',
    caption: 'The property remains residential and low-key from the street.',
  },
  {
    src: entryGate,
    alt: 'A wooden gate beside the side approach into the backyard.',
    caption: 'Once parked, visitors follow the side path toward the garden and lawn.',
  },
];

export const siteSharePhoto = backyardWide;
export const heroPhotos = {
  home: backyardWide,
  about: honeysuckleBloom,
  visit: entryGate,
  schedule: backyardWide,
  firstTime: honeysuckleCluster,
  resources: honeysuckleBloom,
  contact: yellowFlowerFence,
} as const;
