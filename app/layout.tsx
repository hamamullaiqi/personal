import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

const siteUrl = "https://hamamullaiqi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "M. Hamamul Fikri L. | Frontend-Focused Full-Stack Engineer",
    template: "%s | M. Hamamul Fikri L.",
  },
  description:
    "Software Engineer with 4+ years of experience building high-reliability web systems, responsive React/Next.js UI architectures, and mission-critical Node.js API integrations for aviation and enterprise logistics.",
  keywords: [
    "M. Hamamul Fikri L.",
    "Hamamul Fikri",
    "Hamamul Laiqi",
    "Full-Stack Engineer",
    "Frontend-Focused Full-Stack Engineer",
    "Frontend Engineer Indonesia",
    "React Developer",
    "Next.js Engineer",
    "TypeScript Developer",
    "Node.js Backend Engineer",
    "Aviation Software Engineer",
    "Cargo Logistics Software",
    "Remote Software Engineer",
    "Software Engineer Indonesia",
  ],
  authors: [
    { name: "M. Hamamul Fikri L.", url: "https://github.com/hamamullaiqi" },
  ],
  creator: "M. Hamamul Fikri L.",
  publisher: "M. Hamamul Fikri L.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "id-ID": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "M. Hamamul Fikri L. | Frontend-Focused Full-Stack Engineer",
    description:
      "Software Engineer specializing in high-reliability web applications, mission-critical API integrations, and real-time analytics dashboards for aviation & enterprise logistics.",
    url: siteUrl,
    siteName: "M. Hamamul Fikri L. — Portfolio",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "M. Hamamul Fikri L. — Frontend-Focused Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Hamamul Fikri L. | Frontend-Focused Full-Stack Engineer",
    description:
      "Software Engineer specializing in high-reliability web applications, mission-critical API integrations, and real-time analytics dashboards.",
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "M. Hamamul Fikri L.",
    jobTitle: "Frontend-Focused Full-Stack Engineer",
    description:
      "Software Engineer with 4+ years of professional experience building high-reliability web systems, responsive UI architectures, and mission-critical API integrations for aviation and enterprise logistics.",
    url: siteUrl,
    image: `${siteUrl}/personal-photo.png`,
    email: "mailto:hamamullaiqi@gmail.com",
    sameAs: [
      "https://github.com/hamamullaiqi",
      "https://linkedin.com/in/hamamullaiqi",
    ],
    worksFor: {
      "@type": "Organization",
      name: "PT Edifly Solusi Indonesia",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "Node.js",
      "Express.js",
      "Hono",
      "MongoDB Aggregation Pipelines",
      "PostgreSQL",
      "MySQL",
      "RESTful APIs",
      "Role-Based Access Control (RBAC)",
      "Aviation & Cargo Logistics Systems",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen antialiased selection:bg-blue-600 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
