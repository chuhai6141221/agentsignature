import { SignatureTemplate } from './types';

export const TEMPLATES: SignatureTemplate[] = [
  { id: 't1', name: 'Classic Realtor', slug: 'classic-realtor', category: 'classic', isPremium: false, description: 'Traditional, professional layout.' },
  { id: 't2', name: 'Modern Agent', slug: 'modern-agent', category: 'modern', isPremium: false, description: 'Clean lines with emphasis on branding.' },
  { id: 't3', name: 'Minimal Broker', slug: 'minimal-broker', category: 'minimal', isPremium: false, description: 'Simple, text-focused design.' },
  { id: 't4', name: 'Luxury Real Estate', slug: 'luxury-real-estate', category: 'luxury', isPremium: true, description: 'Elegant layout for high-end markets.' },
  { id: 't5', name: 'Headshot Focus', slug: 'headshot-focus', category: 'headshot', isPremium: true, description: 'Prominent headshot placement.' },
  { id: 't6', name: 'Listing CTA', slug: 'listing-cta', category: 'listing', isPremium: true, description: 'Optimized for driving traffic to listings.' },
  { id: 't7', name: 'Team Brokerage', slug: 'team-brokerage', category: 'team', isPremium: true, description: 'Standardized look for entire teams.' },
  { id: 't8', name: 'Property Manager', slug: 'property-manager', category: 'property-manager', isPremium: true, description: 'Tailored for property management professionals.' },
];