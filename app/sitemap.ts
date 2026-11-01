import { MetadataRoute } from "next";
import caseStudiesData from "@/content/case-studies.json";
import notesData from "@/content/engineering-notes.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hamamullaiqi.dev";

  const caseStudyUrls = caseStudiesData.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const noteUrls = notesData.map((note) => ({
    url: `${baseUrl}/notes/${note.slug}`,
    lastModified: new Date(note.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...caseStudyUrls,
    ...noteUrls,
  ];
}
