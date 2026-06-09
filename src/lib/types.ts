export type SignatureForm = {
  fullName: string;
  jobTitle: string;
  company: string;
  licenseNumber?: string;
  phone?: string;
  email?: string;
  website?: string;
  officeAddress?: string;
  headshotUrl?: string;
  logoUrl?: string;
  brandColor: string;
  accentColor: string;
  viewListingsUrl?: string;
  scheduleCallUrl?: string;
  zillowUrl?: string;
  realtorUrl?: string;
  linkedInUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  youtubeUrl?: string;
  ctaText: string;
  ctaLink?: string;
  disclaimer?: string;
};

export type SignatureTemplate = {
  id: string;
  name: string;
  slug: string;
  category: 'classic' | 'modern' | 'minimal' | 'luxury' | 'headshot' | 'listing' | 'team' | 'property-manager';
  isPremium: boolean;
  description: string;
};