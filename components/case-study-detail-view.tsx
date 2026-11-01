"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  TrendingUp,
  Layers,
  Linkedin,
  Mail,
} from "lucide-react";
import { CaseStudy } from "@/components/case-study-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function CaseStudyDetailView({ study }: { study: CaseStudy }) {
  const { lang } = useLanguage();

  const title = lang === "id" && study.title_id ? study.title_id : study.title;
  const category =
    lang === "id" && study.category_id ? study.category_id : study.category;
  const shortSummary =
    lang === "id" && study.shortSummary_id
      ? study.shortSummary_id
      : study.shortSummary;
  const metrics =
    lang === "id" && study.metrics_id ? study.metrics_id : study.metrics;
  const challenge =
    lang === "id" && study.challenge_id ? study.challenge_id : study.challenge;
  const solutions =
    lang === "id" && study.solutions_id ? study.solutions_id : study.solutions;
  const architectureHighlights =
    lang === "id" && study.architectureHighlights_id
      ? study.architectureHighlights_id
      : study.architectureHighlights;
  const result =
    lang === "id" && study.result_id ? study.result_id : study.result;

  return (
    <main className="mx-auto max-w-4xl px-4 pt-28 pb-24 sm:px-6 lg:px-8">
      <Link
        href="/#case-studies"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-sky-300"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>
          {lang === "id"
            ? "Kembali ke Daftar Studi Kasus"
            : "Back to All Case Studies"}
        </span>
      </Link>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 dark:border-blue-950/60 dark:bg-zinc-900/60 dark:shadow-[0_0_40px_rgba(37,99,235,0.12)]">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-md border border-blue-200 bg-blue-50 px-2.5 py-0.5 font-mono text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-sky-300">
            {lang === "id"
              ? `STUDI KASUS #${study.id}`
              : `CASE STUDY #${study.id}`}
          </span>
          <Badge variant="default">{category}</Badge>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-4xl">
          {title}
        </h1>

        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
          {shortSummary}
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {study.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-blue-950/60 dark:bg-[#0B0F19]/80"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                {metric.label}
              </p>
              <p className="mt-1 text-lg font-bold text-blue-700 dark:text-sky-300">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          {/* Challenge */}
          <section className="rounded-xl border border-amber-300/70 bg-amber-50/80 p-6 dark:border-amber-500/20 dark:bg-amber-950/10">
            <h2 className="flex items-center gap-2 text-base font-bold text-amber-800 dark:text-amber-300">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <span>
                {lang === "id"
                  ? "Latar Belakang Masalah & Tantangan"
                  : "The Operational & Engineering Challenge"}
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-zinc-300">
              {challenge}
            </p>
          </section>

          {/* Engineering Solution */}
          <section className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-6 dark:border-blue-950/60 dark:bg-[#0B0F19]/60">
            <h2 className="flex items-center gap-2 text-base font-bold text-blue-800 dark:text-sky-300">
              <Cpu className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>
                {lang === "id"
                  ? "Solusi yang Dikerjakan"
                  : "Engineering Solution"}
              </span>
            </h2>
            <ul className="mt-4 space-y-3">
              {solutions.map((solution) => (
                <li
                  key={solution}
                  className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Architecture Highlights */}
          {architectureHighlights && (
            <section className="rounded-xl border border-slate-200 bg-slate-50/80 p-6 dark:border-zinc-800 dark:bg-zinc-950/50">
              <h2 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-zinc-100">
                <Layers className="h-5 w-5 text-blue-600 dark:text-sky-400" />
                <span>
                  {lang === "id"
                    ? "Detail Teknis & Arsitektur"
                    : "Architectural Deep Dive"}
                </span>
              </h2>
              <ul className="mt-4 space-y-3">
                {architectureHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-zinc-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-sky-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Result & Impact */}
          <section className="rounded-xl border border-emerald-300/70 bg-emerald-50/80 p-6 dark:border-emerald-500/25 dark:bg-emerald-950/15">
            <h2 className="flex items-center gap-2 text-base font-bold text-emerald-800 dark:text-emerald-300">
              <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span>
                {lang === "id"
                  ? "Hasil & Dampak di Lapangan"
                  : "Result & Impact"}
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-zinc-200">
              {result}
            </p>
          </section>
        </div>

        {/* CTA Footer */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 dark:border-zinc-800 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-zinc-100">
              {lang === "id"
                ? "Tertarik berdiskusi tentang proyek serupa?"
                : "Building a similar high-reliability platform?"}
            </p>
            <p className="text-xs text-slate-500 dark:text-zinc-400">
              {lang === "id"
                ? "Silakan hubungi saya langsung lewat LinkedIn atau email."
                : "Let's connect directly on LinkedIn or via email."}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="gap-2">
              <a
                href="https://linkedin.com/in/hamamullaiqi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span>
                  {lang === "id"
                    ? "Hubungi via LinkedIn"
                    : "Connect on LinkedIn"}
                </span>
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href="mailto:hamamullaiqi@gmail.com">
                <Mail className="h-4 w-4" />
                <span>{lang === "id" ? "Kirim Email" : "Send Email"}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
