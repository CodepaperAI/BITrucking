export interface Capability {
  title: string;
  description: string;
  to?: string;
  image: string;
  alt: string;
}

export const capabilities: Capability[] = [
  {
    title: 'Powder Coating',
    description: 'Commercial and industrial powder coating services.',
    to: '/powder-coating',
    image: '/bi-assets/images/BI-5.jpg',
    alt: 'Industrial powder coating process on metal components',
  },
  {
    title: 'Custom Decals',
    description: 'Custom wraps with our partner, B.I. Print Works.',
    image: '/bi-assets/images/BI-12.jpg',
    alt: 'Custom fleet decals and wraps',
  },
  {
    title: 'Solar Framing',
    description: 'Work vehicles configured for solar set ups.',
    image: '/bi-assets/images/BI-20.jpg',
    alt: 'Work vehicle configured for solar power set ups',
  },
  {
    title: 'Custom Designs',
    description: 'Truck bodies built for your unique operation.',
    image: '/bi-assets/images/BI-19.jpg',
    alt: 'Custom truck body design and fabrication',
  },
  {
    title: 'Experience',
    description: 'Our leadership team brings more than 40 years of experience.',
    image: '/bi-assets/images/BI-1.jpg',
    alt: 'BI Truck & Body facility and team in Madison, Georgia',
  },
  {
    title: 'Tight Timelines',
    description: 'Reliable builds delivered on schedule.',
    image: '/bi-assets/images/BI-25.jpg',
    alt: 'BI Truck & Body flatbed build ready for delivery on schedule',
  },
];