"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertTriangle,
  Cpu,
  TrendingUp,
  ArrowUpRight,
  Layers,
  Linkedin,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export interface CaseStudy {
  slug: string;
  id: string;
  title: string;
  title_id?: string;
  category: string;
  category_id?: string;
  shortSummary: string;
  shortSummary_id?: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  metrics_id?: { label: string; value: string }[];
  challenge: string;
  challenge_id?: string;
  solutions: string[];
  solutions_id?: string[];
  architectureHighlights?: string[];
  architectureHighlights_id?: string[];
  result: string;
  result_id?: string;
}

interface CaseStudyModalProps {
  study: CaseStudy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CaseStudyModal({
  study,
  open,
  onOpenChange,
}: CaseStudyModalProps) {
  const { lang } = useLanguage();

  if (!study) return null;

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-semibold text-blue-600 dark:text-sky-400">
              {lang === "id"
                ? `STUDI KASUS #${study.id}`
                : `CASE STUDY #${study.id}`}
            </span>
            <span className="text-slate-400 dark:text-zinc-600">•</span>
            <Badge variant="default">{category}</Badge>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-bold">
            {title}
          </DialogTitle>
          <DialogDescription className="pt-1 text-sm sm:text-base">
            {shortSummary}
          </DialogDescription>
        </DialogHeader>

        {/* Key Metrics Strip */}
        <div className="my-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-blue-950/60 dark:bg-zinc-900/70"
            >
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                {metric.label}
              </p>
              <p className="mt-1 text-base font-bold text-blue-700 dark:text-sky-300">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 py-1">
          {study.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="space-y-5 pt-2">
          {/* The Challenge */}
          <div className="rounded-xl border border-amber-300/70 bg-amber-50/80 p-4 dark:border-amber-500/20 dark:bg-amber-950/10">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-300">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span>
                {lang === "id"
                  ? "Latar Belakang Masalah"
                  : "The Engineering Challenge"}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-zinc-300">
              {challenge}
            </p>
          </div>

          {/* Engineering Solution */}
          <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-4 dark:border-blue-950/60 dark:bg-zinc-900/60">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-800 dark:text-sky-300">
              <Cpu className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>
                {lang === "id"
                  ? "Solusi yang Dikerjakan"
                  : "Engineering Solution"}
              </span>
            </div>
            <ul className="space-y-2.5">
              {solutions.map((sol) => (
                <li
                  key={sol}
                  className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deep Architecture Notes */}
          {architectureHighlights && architectureHighlights.length > 0 && (
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-zinc-200">
                <Layers className="h-4 w-4 text-blue-600 dark:text-sky-400" />
                <span>
                  {lang === "id"
                    ? "Detail Teknis & Arsitektur"
                    : "Architectural & Implementation Highlights"}
                </span>
              </div>
              <ul className="space-y-2">
                {architectureHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Result & Impact */}
          <div className="rounded-xl border border-emerald-300/70 bg-emerald-50/80 p-4 dark:border-emerald-500/25 dark:bg-emerald-950/15">
            <div className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-emerald-800 dark:text-emerald-300">
              <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>
                {lang === "id"
                  ? "Hasil & Dampak di Lapangan"
                  : "Result & Operational Impact"}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-zinc-200">
              {result}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-4 flex flex-col-reverse justify-between gap-3 border-t border-slate-200 pt-4 dark:border-zinc-800 sm:flex-row sm:items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
          >
            {lang === "id" ? "Tutup" : "Close Preview"}
          </Button>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="outline" size="sm" className="gap-1.5">
              <Link href={`/case-studies/${study.slug}`}>
                <span>
                  {lang === "id"
                    ? "Lihat Halaman Penuh"
                    : "Open Dedicated Page"}
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="sm" className="gap-1.5">
              <a
                href="https://linkedin.com/in/hamamullaiqi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span>
                  {lang === "id"
                    ? "Tanya Lebih Lanjut di LinkedIn"
                    : "Discuss on LinkedIn"}
                </span>
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
