"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Workflow,
  ShieldCheck,
  Code2,
  MessageSquareCode,
  CheckCircle2,
  GitPullRequest,
  Gauge,
  Clock,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

const principles = [
  {
    number: "01",
    icon: Workflow,
    title: "Translating Complex Business Rules into Intuitive UI",
    title_id: "Menerjemahkan Alur Bisnis Rumit Jadi UI yang Simpel",
    description:
      "Aviation and cargo logistics involve strict regulations, multi-step verifications, and dense data tables. I focus on turning complicated operational requirements into clean, step-by-step interfaces that field operators can use fast without confusion.",
    description_id:
      "Operasional bandara dan kargo punya aturan bisnis yang ketat, banyak validasi, dan tabel data yang padat. Fokus saya adalah menyederhanakan alur yang rumit tersebut menjadi tampilan yang rapi, terarah, dan mudah dipakai petugas lapangan tanpa bingung.",
    points: [
      "Step-locked workflows that prevent human error on operational floors",
      "High-clarity status indicators for multi-stage processes",
    ],
    points_id: [
      "Alur kerja bertahap yang meminimalkan kesalahan input (human error)",
      "Indikator status visual yang jelas untuk memantau progres tiap tahapan",
    ],
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "End-to-End Data Consistency & Resilience",
    title_id: "Konsistensi Data Hulu-ke-Hilir & Tahan Gangguan",
    description:
      "When integrating with multiple external third-party stakeholder systems, networks can drop and payloads can differ. I build systems with strict validation, idempotent requests, and clear reconciliation states so data never silently drifts.",
    description_id:
      "Saat terhubung dengan banyak sistem pihak ketiga milik para stakeholder, jaringan bisa putus dan format data sering beragam. Saya merancang validasi yang ketat dan mekanisme auto-retry supaya data tetap sinkron dari hulu ke hilir.",
    points: [
      "Graceful error recovery and state-preserving fallbacks",
      "Single-source-of-truth synchronization across 3rd-party APIs",
    ],
    points_id: [
      "Pemulihan sesi otomatis saat koneksi sedang tidak stabil",
      "Sinkronisasi data yang konsisten antar-sistem internal dan pihak ketiga",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Clean, Type-Safe & Maintainable Architecture",
    title_id: "Kode Rapi, Type-Safe, & Mudah Dikembangkan Tim",
    description:
      "Fast delivery shouldn't mean messy code. I write modular React/Next.js components, enforce strict TypeScript contracts between frontend and backend, and keep business logic decoupled so the codebase stays easy for any engineer to pick up.",
    description_id:
      "Kecepatan rilis harus berjalan seiring dengan kualitas kode. Saya terbiasa menulis komponen React/Next.js yang modular, menjaga kontrak data dengan TypeScript, dan memisahkan logic bisnis dengan rapi agar kode mudah dirawat oleh rekan setim.",
    points: [
      "Reusable component primitives & predictable state management",
      "Performance-first mindset (query indexing, caching, zero unnecessary re-renders)",
    ],
    points_id: [
      "Komponen UI yang reusable dan pengelolaan state yang terukur",
      "Fokus pada performa sejak awal (optimasi query, caching, dan render ringan)",
    ],
  },
  {
    number: "04",
    icon: MessageSquareCode,
    title: "Proactive & Async-First Remote Collaboration",
    title_id: "Komunikasi Proaktif & Siap Kerja Remote",
    description:
      "Remote teams thrive on clarity and trust. I communicate progress early, write well-documented Pull Requests, ask the right product questions upfront, and take full ownership of features from technical design through production monitoring.",
    description_id:
      "Kunci kerja remote yang sukses adalah komunikasi yang jelas dan bisa diandalkan. Saya terbiasa menyampaikan update secara proaktif, menulis deskripsi Pull Request yang rapi, serta bertanggung jawab penuh dari tahap diskusi spesifikasi hingga rilis ke produksi.",
    points: [
      "Clear written communication, structured PRs, and self-unblocking habits",
      "Flexible daily overlap for US, EU, and APAC engineering standups",
    ],
    points_id: [
      "Dokumentasi teknis & PR yang jelas sehingga memudahkan proses code review",
      "Fleksibel menyesuaikan jam kerja untuk kolaborasi lintas zona waktu (US/EU/APAC)",
    ],
  },
];

const workflowHabits = [
  {
    icon: GitPullRequest,
    label: "Small, Reviewable PRs",
    label_id: "Pull Request Terstruktur & Mudah Direview",
  },
  {
    icon: Gauge,
    label: "Performance & SLA Focused",
    label_id: "Berorientasi Performa & Stabilitas 24/7",
  },
  {
    icon: Compass,
    label: "Product-Minded Engineering",
    label_id: "Paham Kebutuhan Bisnis & Pengguna",
  },
  {
    icon: Clock,
    label: "Reliable Async & Sync Overlap",
    label_id: "Responsif untuk Kerja Tim Remote",
  },
];

export function EngineeringPrinciples() {
  const { lang } = useLanguage();

  return (
    <section id="principles" className="relative py-20 md:py-28">
      {/* Subtle ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent dark:via-blue-950/15"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/30 dark:text-sky-400">
              <Compass className="h-3.5 w-3.5" />
              <span>
                {lang === "id"
                  ? "Cara Kerja & Prinsip Engineering"
                  : "How I Work & Engineering Principles"}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-4xl">
              {lang === "id"
                ? "Nilai Tambah yang Saya Bawa ke Tim Anda"
                : "What You Can Expect When Working With Me"}
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 dark:text-zinc-400">
            {lang === "id"
              ? "Bukan sekadar menulis kode, tetapi memastikan setiap fitur menyelesaikan masalah bisnis dengan bersih, stabil, dan mudah dikolaborasikan."
              : "Beyond writing code—focusing on business impact, system reliability, and frictionless collaboration in remote engineering teams."}
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {principles.map((item, index) => {
            const Icon = item.icon;
            const title = lang === "id" ? item.title_id : item.title;
            const description =
              lang === "id" ? item.description_id : item.description;
            const points = lang === "id" ? item.points_id : item.points;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="group relative flex h-full flex-col justify-between overflow-hidden hover:border-blue-500/50 hover:shadow-[0_8px_35px_rgba(37,99,235,0.12)] dark:hover:shadow-[0_0_35px_rgba(37,99,235,0.14)]">
                  <CardHeader className="pb-3">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-blue-500/30 dark:bg-blue-600/15 dark:text-sky-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-xs font-semibold text-slate-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                        {item.number}
                      </span>
                    </div>
                    <CardTitle className="text-xl transition-colors group-hover:text-blue-600 dark:group-hover:text-sky-300">
                      {title}
                    </CardTitle>
                    <CardDescription className="pt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300/90">
                      {description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-2">
                    <ul className="space-y-2 border-t border-slate-200/80 pt-4 dark:border-zinc-800/80">
                      {points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Workflow Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {workflowHabits.map((habit) => {
            const HabitIcon = habit.icon;
            return (
              <div
                key={habit.label}
                className="flex items-center gap-3 rounded-xl border border-slate-200/90 bg-white/90 px-4 py-3.5 shadow-sm dark:border-blue-950/50 dark:bg-zinc-900/60"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:bg-blue-500/15 dark:text-sky-400">
                  <HabitIcon className="h-4 w-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200">
                  {lang === "id" ? habit.label_id : habit.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

