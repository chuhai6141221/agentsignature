import SignatureGenerator from '@/components/SignatureGenerator';
import { SEO_PAGES } from '@/lib/seoPages';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export function generateStaticParams() {
  return SEO_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = SEO_PAGES.find(p => p.slug === params.slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
  };
}

export default function SeoPage({ params }: { params: { slug: string } }) {
  const pageData = SEO_PAGES.find(p => p.slug === params.slug);
  
  if (!pageData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <div className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">
            {pageData.h1}
          </h1>
        </div>
      </div>
      <div className="py-8">
        <SignatureGenerator />
      </div>
      {/* 可以在此注入针对特定页面的 FAQ JSON-LD 及其渲染内容 */}
    </main>
  );
}