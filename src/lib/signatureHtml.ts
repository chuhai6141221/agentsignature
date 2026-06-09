import { SignatureForm, SignatureTemplate } from './types';

export function generateSignatureHtml(form: SignatureForm, template: SignatureTemplate): string {
  const {
    fullName, jobTitle, company, licenseNumber, phone, email, website, officeAddress,
    headshotUrl, logoUrl, brandColor, accentColor, ctaText, ctaLink, disclaimer,
    linkedInUrl, instagramUrl, facebookUrl, zillowUrl
  } = form;

  const defaultHeadshot = "https://via.placeholder.com/100x100.png?text=Photo";
  const defaultLogo = "https://via.placeholder.com/120x40.png?text=LOGO";

  const imgHeadshot = headshotUrl || defaultHeadshot;
  const imgLogo = logoUrl || defaultLogo;

  // Social Links Builder
  const socialLinks = [
    linkedInUrl && `<a href="${linkedInUrl}" style="color:${brandColor}; text-decoration:none; font-size:12px;">LinkedIn</a>`,
    instagramUrl && `<a href="${instagramUrl}" style="color:${brandColor}; text-decoration:none; font-size:12px;">Instagram</a>`,
    facebookUrl && `<a href="${facebookUrl}" style="color:${brandColor}; text-decoration:none; font-size:12px;">Facebook</a>`,
    zillowUrl && `<a href="${zillowUrl}" style="color:${brandColor}; text-decoration:none; font-size:12px;">Zillow</a>`
  ].filter(Boolean).join(' &nbsp;|&nbsp; ');

  let html = '';

  // Simple Classic Template Implementation (Table Layout)
  if (template.id === 't1' || template.id === 't3') {
    html = `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size: 14px; color: ${brandColor}; line-height: 1.4;">
  <tr>
    <td style="padding-right: 15px; vertical-align: top;">
      <img src="${imgHeadshot}" alt="${fullName}" width="90" style="border-radius: 50%; max-width: 90px; display: block;" />
    </td>
    <td style="border-left: 2px solid ${accentColor}; padding-left: 15px; vertical-align: top;">
      <div style="font-size: 18px; font-weight: bold; color: ${brandColor};">${fullName}</div>
      <div style="font-size: 14px; color: ${accentColor}; margin-bottom: 5px;">${jobTitle} ${company ? `| ${company}` : ''}</div>
      
      ${licenseNumber ? `<div style="font-size: 12px; color: #666;">License: ${licenseNumber}</div>` : ''}
      
      <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 8px; font-size: 12px;">
        ${phone ? `<tr><td style="padding-bottom: 3px;"><strong>P:</strong> <a href="tel:${phone.replace(/[^0-9]/g, '')}" style="color:${brandColor}; text-decoration:none;">${phone}</a></td></tr>` : ''}
        ${email ? `<tr><td style="padding-bottom: 3px;"><strong>E:</strong> <a href="mailto:${email}" style="color:${brandColor}; text-decoration:none;">${email}</a></td></tr>` : ''}
        ${website ? `<tr><td style="padding-bottom: 3px;"><strong>W:</strong> <a href="${website.startsWith('http') ? website : `https://${website}`}" style="color:${brandColor}; text-decoration:none;">${website}</a></td></tr>` : ''}
        ${officeAddress ? `<tr><td style="padding-bottom: 3px;"><strong>A:</strong> <span style="color:#666;">${officeAddress}</span></td></tr>` : ''}
      </table>

      ${ctaLink ? `
      <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 10px;">
        <tr>
          <td style="background-color: ${accentColor}; padding: 6px 12px; border-radius: 4px;">
            <a href="${ctaLink}" style="color: #ffffff; text-decoration: none; font-size: 12px; font-weight: bold;">${ctaText || 'View My Listings'}</a>
          </td>
        </tr>
      </table>` : ''}
      
      ${socialLinks ? `<div style="margin-top: 10px;">${socialLinks}</div>` : ''}
    </td>
  </tr>
  <tr>
    <td colspan="2" style="padding-top: 15px;">
      <img src="${imgLogo}" alt="${company}" height="40" style="max-height: 40px; display: block;" />
    </td>
  </tr>
</table>
    `;
  } else {
    // Modern Template (t2)
    html = `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Helvetica, Arial, sans-serif; font-size: 13px; color: ${brandColor};">
  <tr>
    <td colspan="2" style="padding-bottom: 10px;">
       <div style="font-size: 20px; font-weight: bold;">${fullName}</div>
       <div style="color: ${accentColor}; font-weight: bold;">${jobTitle}</div>
    </td>
  </tr>
  <tr>
    <td width="100" style="vertical-align: top; padding-right: 15px;">
       <img src="${imgHeadshot}" alt="Photo" width="100" style="display: block; border-radius: 4px;" />
       <div style="margin-top: 10px;"><img src="${imgLogo}" alt="Logo" width="100" style="display: block;" /></div>
    </td>
    <td style="vertical-align: top; border-left: 1px solid #ddd; padding-left: 15px;">
       ${company ? `<div style="font-weight: bold; margin-bottom: 4px;">${company}</div>` : ''}
       ${licenseNumber ? `<div style="font-size: 11px; color: #777; margin-bottom: 8px;">DRE: ${licenseNumber}</div>` : ''}
       
       ${phone ? `<div>M: <a href="tel:${phone.replace(/[^0-9]/g, '')}" style="color:${brandColor}; text-decoration:none;">${phone}</a></div>` : ''}
       ${email ? `<div>E: <a href="mailto:${email}" style="color:${brandColor}; text-decoration:none;">${email}</a></div>` : ''}
       ${website ? `<div>W: <a href="${website}" style="color:${brandColor}; text-decoration:none;">${website}</a></div>` : ''}
       
       ${ctaLink ? `<div style="margin-top: 10px;"><a href="${ctaLink}" style="color:${accentColor}; font-weight:bold; text-decoration:underline;">${ctaText} &rarr;</a></div>` : ''}
       ${socialLinks ? `<div style="margin-top: 10px;">${socialLinks}</div>` : ''}
    </td>
  </tr>
</table>
    `;
  }

  // Common Footer (Disclaimer + Watermark)
  let footerHtml = '';
  if (disclaimer) {
    footerHtml += `<div style="font-family: Arial, sans-serif; font-size: 10px; color: #9ca3af; margin-top: 15px; max-width: 500px; line-height: 1.3;">${disclaimer}</div>`;
  }
  
  if (!template.isPremium) {
    footerHtml += `<div style="font-family: Arial, sans-serif; font-size: 10px; color: #d1d5db; margin-top: 10px;">Made with <a href="https://agentsignature.com" style="color: #d1d5db; text-decoration: underline;">AgentSignature</a></div>`;
  }

  return `<div class="agentsignature-wrapper" style="all: initial; font-family: Arial, sans-serif;">${html}${footerHtml}</div>`;
}