export type ThemeMode = 'default' | 'dark' | 'light';

export type ScreenTab = 'services' | 'about-us' | 'reviews' | 'contact' | 'instant-estimate';

export type ServiceFrequency = 'Weekly' | 'Bi-Weekly' | 'One-Time';

export interface ServiceItem {
  id: string;
  title: string;
  priceTag: string;
  iconName: string;
  description: string;
  highlightTag: string;
  category: 'mowing' | 'sod' | 'design' | 'seasonal' | 'irrigation' | 'masonry' | 'tree';
  detailedInclusions: string[];
  imageUrl?: string;
}

export interface TexasGrassType {
  id: string;
  name: string;
  tagline: string;
  sunRequirement: string;
  droughtTolerance: string;
  mowingHeight: string;
  austinBestFor: string;
  colorGrade: string;
  accentColor: string;
}

export interface AustinWateringRule {
  addressType: 'even' | 'odd' | 'commercial';
  label: string;
  automaticSprinklerDays: string;
  hoseEndSprinklerDays: string;
  allowedHours: string;
  proTip: string;
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  neighborhood: string;
  rating: number;
  quote: string;
  avatarBg: string;
  date?: string;
  serviceUsed?: string;
}

export interface ProjectPhoto {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  alt: string;
  description: string;
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  neighborhood: string;
  serviceType: string;
  frequency: ServiceFrequency;
  notes?: string;
}
