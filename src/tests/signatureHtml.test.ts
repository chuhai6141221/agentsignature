import { describe, it, expect } from 'vitest';
import { generateSignatureHtml } from '../lib/signatureHtml';
import { TEMPLATES } from '../lib/templates';
import { SignatureForm } from '../lib/types';

describe('generateSignatureHtml', () => {
  const mockForm: SignatureForm = {
    fullName: 'Test Agent',
    jobTitle: 'Realtor',
    company: 'Test Brokerage',
    brandColor: '#000000',
    accentColor: '#FF0000',
    ctaText: 'View Listings',
    ctaLink: 'https://test.com'
  };

  it('should generate valid html and include full name', () => {
    const html = generateSignatureHtml(mockForm, TEMPLATES[0]);
    expect(html).toContain('Test Agent');
    expect(html).toContain('Test Brokerage');
  });

  it('should skip empty optional fields', () => {
    const html = generateSignatureHtml(mockForm, TEMPLATES[0]);
    expect(html).not.toContain('License:');
  });

  it('should include disclaimer if provided', () => {
    const formWithDisclaimer = { ...mockForm, disclaimer: 'Test Disclaimer 123' };
    const html = generateSignatureHtml(formWithDisclaimer, TEMPLATES[0]);
    expect(html).toContain('Test Disclaimer 123');
  });

  it('should include watermark for free templates', () => {
    const freeTemplate = TEMPLATES.find(t => !t.isPremium)!;
    const html = generateSignatureHtml(mockForm, freeTemplate);
    expect(html).toContain('Made with');
  });

  it('should NOT include watermark for pro templates', () => {
    const proTemplate = TEMPLATES.find(t => t.isPremium)!;
    const html = generateSignatureHtml(mockForm, proTemplate);
    expect(html).not.toContain('Made with');
  });
});