import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import caseStudiesData from "@/content/case-studies.json";
import { CaseStudy } from "@/components/case-study-modal";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CaseStudyDetailView } from "@/components/case-study-detail-view";

const siteUrl = "https://hamamullaiqi.dev";

export function generateStaticParams() {
  const studies = caseStudiesData as CaseStudy[];
  return studies.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const studies = caseStudiesData as CaseStudy[];
  const study = studies.find((s) => s.slug === params.slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  const canonicalUrl = `${siteUrl}/case-studies/${study.slug}`;

  return {
    title: `${study.title} — Case Study`,
    description: study.shortSummary,
    keywords: [
      study.title,
      study.category,
      ...study.techStack,
      "M. Hamamul Fikri L.",
      "Engineering Case Study",
    ],
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} | M. Hamamul Fikri L.`,
      description: study.shortSummary,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | M. Hamamul Fikri L.`,
      description: study.shortSummary,
      images: ["/og-image.png"],
    },
  };
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const studies = caseStudiesData as CaseStudy[];
  const study = studies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: study.title,
    description: study.shortSummary,
    keywords: study.techStack.join(", "),
    author: {
      "@type": "Person",
      name: "M. Hamamul Fikri L.",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/case-studies/${study.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#0B0F19] dark:text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <CaseStudyDetailView study={study} />
      <Footer />
    </div>
  );
}
