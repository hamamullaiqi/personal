"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Network,
  Database,
  ShieldAlert,
  CheckCircle2,
  Layers,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

const capabilities = [
  {
    id: "frontend",
    title: "Frontend Engineering & UI Architecture",
    title_id: "Pengembangan Frontend & Arsitektur UI",
    icon: Layout,
    span: "md:col-span-7",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "Material-UI",
    ],
    focus:
      "High-performance responsive layouts, modular component systems, client-side caching, and low-latency state orchestration.",
    focus_id:
      "Membangun antarmuka web yang responsif, komponen UI yang rapi dan mudah dipakai ulang, serta pengelolaan state yang ringan di sisi pengguna.",
    highlights: [
      "Design-system-driven UI libraries with accessible, reusable primitives",
      "Optimistic UI updates & client-side query caching for sub-100ms perceived speed",
      "Ergonomic data-dense operator interfaces built for 24/7 operational floors",
    ],
    highlights_id: [
      "Merancang komponen UI modular yang konsisten dan mudah dikembangkan tim",
      "Optimasi caching di sisi client agar perpindahan halaman dan interaksi terasa instan",
      "Mendesain tampilan tabel dan form operasional yang nyaman dipakai petugas lapangan 24/7",
    ],
  },
  {
    id: "apis",
    title: "Mission-Critical APIs & Integrations",
    title_id: "Pengembangan API & Integrasi Pihak Ketiga",
    icon: Network,
    span: "md:col-span-5",
    stack: ["Node.js", "Express.js", "Hono", "RESTful Microservices"],
    focus:
      "Seamless integration with complex third-party platforms (multi-airline reservation systems, logistics hubs), idempotent request handling, and automated retry mechanisms.",
    focus_id:
      "Menghubungkan sistem internal dengan berbagai platform eksternal (sistem reservasi maskapai & logistik), lengkap dengan penanganan error dan auto-retry.",
    highlights: [
      "Multi-airline PSS reservation & PNR synchronization engines",
      "Exponential backoff retries & circuit-breaking fault isolation",
    ],
    highlights_id: [
      "Integrasi API reservasi multi-maskapai untuk sinkronisasi data PNR & manifest",
      "Mekanisme auto-retry dan penanganan request yang aman dari duplikasi data",
    ],
  },
  {
    id: "databases",
    title: "Databases & Analytics Pipelines",
    title_id: "Optimasi Database & Olah Data Analitik",
    icon: Database,
    span: "md:col-span-5",
    stack: ["MongoDB (Aggregation Pipelines)", "PostgreSQL", "MySQL"],
    focus:
      "Synthesizing massive operational logs, indexed query optimization, and decoupled analytical read loads for real-time dashboards.",
    focus_id:
      "Mengolah jutaan baris data transaksi menjadi dashboard laporan yang cepat diakses tanpa membuat database utama menjadi lambat.",
    highlights: [
      "Multi-stage MongoDB aggregations over millions of cargo telemetry logs",
      "Compound index tuning & zero-contention analytical query pathways",
    ],
    highlights_id: [
      "Menyusun pipeline agregasi MongoDB untuk merangkum jutaan log kargo secara efisien",
      "Tuning indexing database & caching agar query laporan selalu dieksekusi di bawah satu detik",
    ],
  },
  {
    id: "reliability",
    title: "System Reliability & Security",
    title_id: "Keandalan Sistem & Keamanan Akses",
    icon: ShieldAlert,
    span: "md:col-span-7",
    stack: [
      "Git",
      "Docker",
      "CI/CD",
      "Role-Based Access Control (RBAC)",
      "SLA 24/7 Compliance",
    ],
    focus:
      "Strict data authorization policies, fail-safe fallback routines during network degradation, and fault-tolerant transaction processing.",
    focus_id:
      "Menjaga sistem tetap stabil di lingkungan produksi 24/7 dengan pembatasan hak akses pengguna (RBAC) yang ketat dan mekanisme pemulihan saat gangguan jaringan.",
    highlights: [
      "Granular multi-tenant RBAC enforcing least-privilege across passenger & cargo records",
      "State-preserving session fallbacks & transactional rollbacks during link instability",
      "Containerized deployments with automated health checks for 24/7 SLA environments",
    ],
    highlights_id: [
      "Pengaturan hak akses berlapis (RBAC) untuk melindungi data sensitif penumpang dan kargo",
      "Penanganan fallback sesi dan rollback otomatis agar transaksi tidak rusak saat jaringan putus",
      "Deployment terstandarisasi dengan Docker dan monitoring layanan untuk operasional 24/7",
    ],
  },
];

export function CapabilitiesBento() {
  const { lang } = useLanguage();

  return (
    <section id="capabilities" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/30 dark:text-sky-400">
              <Layers className="h-3.5 w-3.5" />
              <span>
                {lang === "id"
                  ? "Keahlian & Fokus Teknis"
                  : "Core Engineering Capabilities"}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-4xl">
              {lang === "id"
                ? "Solusi End-to-End untuk Sistem Skala Produksi"
                : "Built for High-Reliability Production Systems"}
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 dark:text-zinc-400">
            {lang === "id"
              ? "Berpengalaman menangani pengembangan dari sisi frontend (React/Next.js) hingga integrasi API backend (Node.js) dan optimasi performa database."
              : "End-to-end ownership from responsive React/Next.js interfaces down to fault-tolerant Node.js APIs and high-volume analytical databases."}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            const title = lang === "id" ? cap.title_id : cap.title;
            const focus = lang === "id" ? cap.focus_id : cap.focus;
            const highlights =
              lang === "id" ? cap.highlights_id : cap.highlights;

            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={cap.span}
              >
                <Card className="group relative flex h-full flex-col justify-between overflow-hidden hover:border-blue-500/50 hover:shadow-[0_8px_35px_rgba(37,99,235,0.12)] dark:hover:shadow-[0_0_35px_rgba(37,99,235,0.14)]">
                  {/* Top right radial accent */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-sky-400/20"
                  />

                  <CardHeader className="pb-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-400 dark:border-blue-500/30 dark:bg-blue-600/15 dark:text-sky-400 dark:shadow-[0_0_15px_rgba(37,99,235,0.2)] dark:group-hover:border-sky-400/50">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-xs text-slate-400 dark:text-zinc-500">
                        0{index + 1} / 04
                      </span>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl transition-colors group-hover:text-blue-600 dark:group-hover:text-sky-300">
                      {title}
                    </CardTitle>
                    <CardDescription className="pt-2 text-sm sm:text-base text-slate-600 dark:text-zinc-300/90">
                      {focus}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-5 pt-2">
                    {/* Engineering Highlights */}
                    <ul className="space-y-2 border-t border-slate-200/80 pt-4 dark:border-zinc-800/80">
                      {highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {cap.stack.map((tech) => (
                        <Badge key={tech} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
