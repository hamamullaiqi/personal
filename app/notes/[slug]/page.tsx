import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import notesData from "@/content/engineering-notes.json";
import { EngineeringNote } from "@/components/engineering-notes";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EngineeringNoteDetailView } from "@/components/engineering-note-detail-view";

const siteUrl = "https://hamamullaiqi.dev";

export function generateStaticParams() {
  const notes = notesData as EngineeringNote[];
  return notes.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const notes = notesData as EngineeringNote[];
  const note = notes.find((n) => n.slug === params.slug);

  if (!note) {
    return {
      title: "Engineering Note Not Found",
    };
  }

  const canonicalUrl = `${siteUrl}/notes/${note.slug}`;

  return {
    title: note.title,
    description: note.excerpt,
    keywords: [
      note.title,
      note.title_id,
      ...note.tags,
      "M. Hamamul Fikri L.",
      "Engineering Notes",
    ],
    alternates: {
      canonical: `/notes/${note.slug}`,
    },
    openGraph: {
      title: `${note.title} | M. Hamamul Fikri L.`,
      description: note.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: note.date,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: note.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${note.title} | M. Hamamul Fikri L.`,
      description: note.excerpt,
      images: ["/og-image.png"],
    },
  };
}

export default function EngineeringNoteDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const notes = notesData as EngineeringNote[];
  const note = notes.find((n) => n.slug === params.slug);

  if (!note) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: note.title,
    description: note.excerpt,
    datePublished: note.date,
    keywords: note.tags.join(", "),
    author: {
      "@type": "Person",
      name: "M. Hamamul Fikri L.",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/notes/${note.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#0B0F19] dark:text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <EngineeringNoteDetailView note={note} />
      <Footer />
    </div>
  );
}

