'use client';

import React, { useState, useRef } from 'react';
import { SignatureForm, SignatureTemplate } from '@/lib/types';
import { TEMPLATES } from '@/lib/templates';
import { generateSignatureHtml } from '@/lib/signatureHtml';

const DEFAULT_FORM: SignatureForm = {
  fullName: 'Sarah Johnson',
  jobTitle: 'Luxury Real Estate Agent',
  company: 'Sunrise Realty Group',
  licenseNumber: 'DRE #01234567',
  phone: '(555) 123-4567',
  email: 'sarah@sunriserealty.com',
  website: 'sarahjohnsonhomes.com',
  officeAddress: '123 Ocean Ave, Los Angeles, CA',
  ctaText: 'View My Listings',
  ctaLink: 'https://example.com/listings',
  brandColor: '#1F2937',
  accentColor: '#B89B5E',
  disclaimer: 'This email and any attachments are confidential and intended solely for the recipient. Real estate services are subject to applicable licensing requirements.'
};

export default function SignatureGenerator() {
  const [form, setForm] = useState<SignatureForm>(DEFAULT_FORM);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(TEMPLATES[0].id);
  const [showProModal, setShowProModal] = useState(false);

  const selectedTemplate = TEMPLATES.find(t => t.id === selectedTemplateId) || TEMPLATES[0];
  const signatureHtml = generateSignatureHtml(form, selectedTemplate);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopyRich = async () => {
    if (selectedTemplate.isPremium) {
      setShowProModal(true); return;
    }
    try {
      const blob = new Blob([signatureHtml], { type: 'text/html' });
      const clipboardItem = new ClipboardItem({ 'text/html': blob });
      await navigator.clipboard.write([clipboardItem]);
      alert('Signature copied! You can now paste it into Gmail/Outlook.');
    } catch (err) {
      // Fallback
      navigator.clipboard.writeText(signatureHtml);
      alert('Copied as HTML due to browser restrictions. Use "Copy HTML" instead.');
    }
  };

  const handleCopyHtml = () => {
    if (selectedTemplate.isPremium) {
      setShowProModal(true); return;
    }
    navigator.clipboard.writeText(signatureHtml);
    alert('HTML code copied!');
  };

  const handleDownload = () => {
    if (selectedTemplate.isPremium) {
      setShowProModal(true); return;
    }
    const blob = new Blob([signatureHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'signature.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto p-4">
      {/* Left Form */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-[800px] overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">1. Enter Your Details</h3>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input name="fullName" value={form.fullName} onChange={handleChange} className="w-full border rounded p-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Job Title</label>
              <input name="jobTitle" value={form.jobTitle} onChange={handleChange} className="w-full border rounded p-2 text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded p-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input name="email" value={form.email} onChange={handleChange} className="w-full border rounded p-2 text-sm" />
            </div>
          </div>
          {/* Add more fields here (Company, URLs, Colors, CTA) following the same pattern */}
          <div>
              <label className="block text-sm font-medium mb-1">Headshot URL</label>
              <input name="headshotUrl" value={form.headshotUrl || ''} onChange={handleChange} placeholder="https://..." className="w-full border rounded p-2 text-sm" />
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4">2. Select Template</h3>
        <div className="grid grid-cols-2 gap-3">
          {TEMPLATES.map(t => (
            <button 
              key={t.id} 
              onClick={() => setSelectedTemplateId(t.id)}
              className={`p-3 text-left border rounded-lg ${selectedTemplateId === t.id ? 'border-[#1F2937] ring-1 ring-[#1F2937]' : 'border-gray-200'}`}
            >
              <div className="font-medium text-sm flex items-center justify-between">
                {t.name}
                {t.isPremium && <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded">PRO</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Preview */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-4">
          <h3 className="text-xl font-bold mb-4">3. Preview & Export</h3>
          
          <div className="bg-[#F8F6F1] p-8 rounded-lg mb-6 flex justify-center items-center min-h-[300px] overflow-x-auto">
            <div 
              ref={previewRef}
              className="bg-white p-6 rounded shadow-sm w-full max-w-[500px]"
              dangerouslySetInnerHTML={{ __html: signatureHtml }} 
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button onClick={handleCopyRich} className="bg-[#1F2937] text-white px-4 py-2 rounded font-medium hover:bg-gray-800 transition">
              Copy Signature
            </button>
            <button onClick={handleCopyHtml} className="bg-white border border-[#1F2937] text-[#1F2937] px-4 py-2 rounded font-medium hover:bg-gray-50 transition">
              Copy HTML
            </button>
            <button onClick={handleDownload} className="text-gray-600 px-4 py-2 text-sm hover:underline">
              Download .html
            </button>
          </div>
        </div>
      </div>

      {/* Pro Modal */}
      {showProModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h4 className="text-lg font-bold mb-2">Pro Templates Coming Soon</h4>
            <p className="text-gray-600 mb-4">For now, please use the free templates to generate your signature.</p>
            <button onClick={() => setShowProModal(false)} className="bg-[#1F2937] text-white px-4 py-2 rounded w-full">Got it</button>
          </div>
        </div>
      )}
    </div>
  );
}