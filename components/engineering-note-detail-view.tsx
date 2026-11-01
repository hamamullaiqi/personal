"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Lightbulb,
  Linkedin,
  Mail,
  FileText,
} from "lucide-react";
import { EngineeringNote } from "@/components/engineering-notes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { trackEvent } from "@/lib/analytics";

export function EngineeringNoteDetailView({ note }: { note: EngineeringNote }) {
  const { lang } = useLanguage();

  const title = lang === "id" ? note.title_id : note.title;
  const category = lang === "id" ? note.category_id : note.category;
  const readTime = lang === "id" ? note.readTime_id : note.readTime;
  const excerpt = lang === "id" ? note.excerpt_id : note.excerpt;
  const keyTakeaway = lang === "id" ? note.keyTakeaway_id : note.keyTakeaway;

  return (
    <main className="mx-auto max-w-3xl px-4 pt-28 pb-24 sm:px-6 lg:px-8">
      <Link
        href="/#notes"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-sky-300"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>
          {lang === "id"
            ? "Kembali ke Daftar Tulisan Teknis"
            : "Back to Engineering Notes"}
        </span>
      </Link>

      <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 dark:border-blue-950/60 dark:bg-zinc-900/60 dark:shadow-[0_0_40px_rgba(37,99,235,0.12)]">
        {/* Header Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <Badge variant="default" className="gap-1.5">
            <FileText className="h-3 w-3" />
            <span>{category}</span>
          </Badge>
          <span className="inline-flex items-center gap-1 text-slate-500 dark:text-zinc-400">
            <Clock className="h-3.5 w-3.5" />
            <span>{readTime}</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-4xl sm:leading-tight">
          {title}
        </h1>

        {/* Subtitle / Excerpt */}
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
          {excerpt}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Key Takeaway Highlight Box */}
        <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50/70 p-5 dark:border-blue-500/30 dark:bg-blue-950/25">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-sky-400">
            <Lightbulb className="h-4 w-4" />
            <span>
              {lang === "id"
                ? "Inti Pelajaran (Key Takeaway)"
                : "Key Engineering Takeaway"}
            </span>
          </div>
          <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-800 dark:text-zinc-100">
            {keyTakeaway}
          </p>
        </div>

        {/* Article Sections */}
        <div className="mt-8 space-y-8 border-t border-slate-200/80 pt-8 dark:border-zinc-800/80">
          {note.sections.map((sec) => {
            const secHeading = lang === "id" ? sec.heading_id : sec.heading;
            const secBody = lang === "id" ? sec.body_id : sec.body;
            return (
              <section key={sec.heading} className="space-y-3">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-2xl">
                  {secHeading}
                </h2>
                <p className="text-base leading-relaxed text-slate-700 dark:text-zinc-300">
                  {secBody}
                </p>
              </section>
            );
          })}
        </div>

        {/* Author & Discussion Footer */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 dark:border-zinc-800 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-zinc-100">
              {lang === "id"
                ? "Ditulis oleh M. Hamamul Fikri L."
                : "Written by M. Hamamul Fikri L."}
            </p>
            <p className="text-xs text-slate-500 dark:text-zinc-400">
              {lang === "id"
                ? "Punya tantangan arsitektur serupa di tim Anda? Mari berdiskusi."
                : "Facing a similar engineering challenge in your team? Let's discuss."}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="sm" className="gap-2">
              <a
                href="https://linkedin.com/in/hamamullaiqi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("click_social", {
                    platform: "linkedin",
                    location: `note_${note.slug}`,
                  })
                }
              >
                <Linkedin className="h-4 w-4" />
                <span>
                  {lang === "id"
                    ? "Diskusi di LinkedIn"
                    : "Discuss on LinkedIn"}
                </span>
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a
                href="mailto:hamamullaiqi@gmail.com"
                onClick={() =>
                  trackEvent("click_social", {
                    platform: "email",
                    location: `note_${note.slug}`,
                  })
                }
              >
                <Mail className="h-4 w-4" />
                <span>{lang === "id" ? "Kirim Email" : "Send Email"}</span>
              </a>
            </Button>
          </div>
        </div>
      </article>
    </main>
  );
}

