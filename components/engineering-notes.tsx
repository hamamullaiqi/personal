"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Clock,
  ArrowUpRight,
  Lightbulb,
} from "lucide-react";
import notesData from "@/content/engineering-notes.json";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { trackEvent } from "@/lib/analytics";

export interface EngineeringNoteSection {
  heading: string;
  heading_id: string;
  body: string;
  body_id: string;
}

export interface EngineeringNote {
  slug: string;
  date: string;
  readTime: string;
  readTime_id: string;
  category: string;
  category_id: string;
  title: string;
  title_id: string;
  excerpt: string;
  excerpt_id: string;
  tags: string[];
  keyTakeaway: string;
  keyTakeaway_id: string;
  sections: EngineeringNoteSection[];
}

export function EngineeringNotes() {
  const { lang } = useLanguage();
  const notes = notesData as EngineeringNote[];

  return (
    <section id="notes" className="relative py-20 md:py-28">
      {/* Subtle ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent dark:via-blue-950/10"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/30 dark:text-sky-400">
              <FileText className="h-3.5 w-3.5" />
              <span>
                {lang === "id"
                  ? "Catatan Engineering & Pengalaman Lapangan"
                  : "Engineering Notes & Field Stories"}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-4xl">
              {lang === "id"
                ? "Tulisan Teknis dari Masalah Produksi Nyata"
                : "Technical Writings from Production Systems"}
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 dark:text-zinc-400">
            {lang === "id"
              ? "Catatan singkat tentang cara kami menyelesaikan tantangan integrasi API, optimasi database, dan stabilitas sistem di lapangan."
              : "First-hand architectural notes on solving data consistency, query performance, and 24/7 reliability challenges in production."}
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {notes.map((note, index) => {
            const title = lang === "id" ? note.title_id : note.title;
            const category = lang === "id" ? note.category_id : note.category;
            const readTime = lang === "id" ? note.readTime_id : note.readTime;
            const excerpt = lang === "id" ? note.excerpt_id : note.excerpt;
            const keyTakeaway =
              lang === "id" ? note.keyTakeaway_id : note.keyTakeaway;

            return (
              <motion.div
                key={note.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex"
              >
                <Card className="group relative flex w-full flex-col justify-between overflow-hidden hover:border-blue-500/50 hover:shadow-[0_8px_35px_rgba(37,99,235,0.12)] dark:hover:shadow-[0_0_35px_rgba(37,99,235,0.14)]">
                  <div>
                    <CardHeader className="pb-3">
                      <div className="mb-3 flex items-center justify-between gap-2 text-xs">
                        <span className="font-semibold text-blue-600 dark:text-sky-400">
                          {category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-slate-500 dark:text-zinc-400">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{readTime}</span>
                        </span>
                      </div>

                      <CardTitle className="text-xl leading-snug transition-colors group-hover:text-blue-600 dark:group-hover:text-sky-300">
                        <Link
                          href={`/notes/${note.slug}`}
                          onClick={() =>
                            trackEvent("open_engineering_note", {
                              note_slug: note.slug,
                              note_title: note.title,
                            })
                          }
                        >
                          {title}
                        </Link>
                      </CardTitle>

                      <CardDescription className="pt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300/90">
                        {excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 pt-2">
                      {/* Key Takeaway Callout */}
                      <div className="rounded-xl border border-blue-200/80 bg-blue-50/60 p-3.5 dark:border-blue-950/70 dark:bg-blue-950/20">
                        <div className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-blue-700 dark:text-sky-400">
                          <Lightbulb className="h-3.5 w-3.5" />
                          <span>
                            {lang === "id" ? "Inti Pelajaran" : "Key Takeaway"}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-slate-700 dark:text-zinc-300">
                          {keyTakeaway}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {note.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  <CardFooter className="border-t border-slate-200/80 pt-4 dark:border-zinc-800/80">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between px-2 text-blue-600 hover:text-blue-700 dark:text-sky-400 dark:hover:text-sky-300"
                    >
                      <Link
                        href={`/notes/${note.slug}`}
                        onClick={() =>
                          trackEvent("open_engineering_note", {
                            note_slug: note.slug,
                            note_title: note.title,
                          })
                        }
                      >
                        <span>
                          {lang === "id"
                            ? "Baca Artikel Selengkapnya"
                            : "Read Full Note"}
                        </span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

