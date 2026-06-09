import SignatureGenerator from '@/components/SignatureGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Email Signature Generator - Professional Realtor Signatures',
  description: 'Create a professional real estate email signature with your headshot, license number, brokerage logo, social links, and listing CTA. Copy to Gmail or Outlook.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-4">
            Real Estate Email Signature Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create a professional, mobile-friendly email signature in seconds. Stand out in every inbox and drive more traffic to your listings.
          </p>
        </div>
      </div>

      <div className="py-8">
        <SignatureGenerator />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 prose prose-lg text-gray-700">
        <h2>Create a Professional Realtor Email Signature</h2>
        <p>Your email signature is your digital business card. It needs to look professional on both desktop and mobile...</p>
        
        <h2>How to Add Your Signature to Gmail</h2>
        <ol>
          <li>Click "Copy Signature" above.</li>
          <li>Open Gmail and click the gear icon (Settings) -{'>'} See all settings.</li>
          <li>Scroll down to the "Signature" section.</li>
          <li>Create a new signature, paste (Ctrl+V or Cmd+V), and Save Changes.</li>
        </ol>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <p>AgentSignature is not affiliated with the National Association of Realtors, Zillow, Realtor.com, or any brokerage.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/pricing" className="hover:text-white">Pricing</a>
        </div>
      </footer>
    </main>
  );
}