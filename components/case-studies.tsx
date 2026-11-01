"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  CheckCircle2,
  ArrowUpRight,
  BookOpen,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import caseStudiesData from "@/content/case-studies.json";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudy, CaseStudyModal } from "@/components/case-study-modal";
import { useLanguage } from "@/components/language-provider";
import { trackEvent } from "@/lib/analytics";

export function CaseStudies() {
  const { lang } = useLanguage();
  const studies = caseStudiesData as CaseStudy[];
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenStudy = (study: CaseStudy) => {
    trackEvent("open_case_study_modal", {
      case_study_slug: study.slug,
      case_study_title: study.title,
    });
    setSelectedStudy(study);
    setModalOpen(true);
  };

  return (
    <section id="case-studies" className="relative py-20 md:py-28">
      {/* Subtle section background tint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent dark:via-blue-950/10"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/30 dark:text-sky-400">
              <Code2 className="h-3.5 w-3.5" />
              <span>
                {lang === "id"
                  ? "Portofolio Sistem Produksi"
                  : "Selected Production Systems"}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-4xl">
              {lang === "id"
                ? "Proyek & Studi Kasus"
                : "Engineering Case Studies"}
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 dark:text-zinc-400">
            {lang === "id"
              ? "Rangkuman proyek nyata di industri penerbangan, analitik kargo, dan logistik bandara yang sudah berjalan di lingkungan produksi."
              : "Deep-dive architectural breakdowns of mission-critical aviation, cargo analytics, and enterprise logistics platforms running in production."}
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-8">
          {studies.map((study, index) => {
            const title =
              lang === "id" && study.title_id ? study.title_id : study.title;
            const category =
              lang === "id" && study.category_id
                ? study.category_id
                : study.category;
            const challenge =
              lang === "id" && study.challenge_id
                ? study.challenge_id
                : study.challenge;
            const solutions =
              lang === "id" && study.solutions_id
                ? study.solutions_id
                : study.solutions;
            const metrics =
              lang === "id" && study.metrics_id
                ? study.metrics_id
                : study.metrics;
            const result =
              lang === "id" && study.result_id ? study.result_id : study.result;

            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden hover:border-blue-500/50 hover:shadow-[0_8px_40px_rgba(37,99,235,0.12)] dark:hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Column: Overview & Challenge */}
                    <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7">
                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-2.5">
                          <span className="rounded-md border border-blue-200 bg-blue-50 px-2.5 py-0.5 font-mono text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-sky-300">
                            #{study.id}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            {category}
                          </span>
                        </div>

                        <CardTitle className="text-2xl sm:text-3xl font-bold transition-colors group-hover:text-blue-600 dark:group-hover:text-sky-300">
                          {title}
                        </CardTitle>

                        {/* Tech Stack */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {study.techStack.map((tech) => (
                            <Badge key={tech} variant="default">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Challenge */}
                        <div className="mt-6 rounded-xl border border-amber-200/90 bg-amber-50/70 p-4 dark:border-zinc-800/90 dark:bg-zinc-950/50">
                          <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                            <AlertCircle className="h-3.5 w-3.5" />
                            <span>
                              {lang === "id"
                                ? "Masalah & Tantangan"
                                : "The Challenge"}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-700 dark:text-zinc-300">
                            {challenge}
                          </p>
                        </div>
                      </div>

                      {/* Result Banner */}
                      <div className="mt-5 rounded-xl border border-emerald-200/90 bg-emerald-50/70 p-4 dark:border-emerald-500/20 dark:bg-emerald-950/10">
                        <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                          <TrendingUp className="h-3.5 w-3.5" />
                          <span>
                            {lang === "id"
                              ? "Hasil & Dampak"
                              : "Result & Impact"}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-800 dark:text-zinc-200">
                          {result}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Engineering Solution & Actions */}
                    <div className="flex flex-col justify-between border-t border-slate-200/80 bg-slate-50/80 p-6 sm:p-8 dark:border-zinc-800/80 dark:bg-[#0B0F19]/60 lg:col-span-5 lg:border-l lg:border-t-0">
                      <div>
                        <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-sky-400">
                          {lang === "id"
                            ? "Solusi yang Dikerjakan"
                            : "Engineering Solution"}
                        </h4>
                        <ul className="space-y-3">
                          {solutions.map((solution) => (
                            <li
                              key={solution}
                              className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700 dark:text-zinc-300"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Metrics */}
                        <div className="mt-6 grid grid-cols-3 gap-2.5 border-t border-slate-200/80 pt-5 dark:border-zinc-800/80">
                          {metrics.map((m) => (
                            <div
                              key={m.label}
                              className="rounded-lg border border-slate-200 bg-white p-2.5 text-center shadow-sm dark:border-blue-950/50 dark:bg-zinc-900/70"
                            >
                              <p className="text-xs font-bold text-blue-700 dark:text-sky-300">
                                {m.value}
                              </p>
                              <p className="mt-0.5 text-[10px] text-slate-500 dark:text-zinc-400">
                                {m.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-6 flex flex-wrap items-center gap-3 pt-4">
                        <Button
                          onClick={() => handleOpenStudy(study)}
                          size="sm"
                          className="flex-1 gap-2"
                        >
                          <BookOpen className="h-4 w-4" />
                          <span>
                            {lang === "id"
                              ? "Ringkasan Teknis"
                              : "Technical Breakdown"}
                          </span>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="gap-1.5"
                        >
                          <Link
                            href={`/case-studies/${study.slug}`}
                            onClick={() =>
                              trackEvent("open_case_study_page", {
                                case_study_slug: study.slug,
                                case_study_title: study.title,
                              })
                            }
                          >
                            <span>
                              {lang === "id" ? "Baca Selengkapnya" : "Full Page"}
                            </span>
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Deep Technical Modal */}
      <CaseStudyModal
        study={selectedStudy}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
