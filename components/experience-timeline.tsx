"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

const contributionsEn = [
  "Developing and maintaining enterprise frontend architectures and backend endpoints for airport, cargo, and warehouse workflows.",
  "Architecting secure RBAC access policies across core operations.",
  "Optimizing database query performance and UI rendering for mission-critical 24/7 operations.",
];

const contributionsId = [
  "Mengembangkan dan merawat aplikasi frontend maupun layanan API backend untuk operasional bandara, kargo udara, dan manajemen gudang.",
  "Merancang sistem pembatasan hak akses (Role-Based Access Control / RBAC) untuk menjaga keamanan data operasional.",
  "Mengoptimalkan performa query database dan kecepatan tampilan aplikasi agar tetap responsif untuk pemakaian operasional 24/7.",
];

const keySystemsDeliveredEn = [
  {
    name: "Airport Self-Service Check-in Kiosk Engine",
    role: "Backend & Airline API Integration",
  },
  {
    name: "CIS 2.0 & Real-Time Cargo Analytics Dashboard",
    role: "Full-Stack & MongoDB Aggregations",
  },
  {
    name: "AWARES — Air Cargo Warehouse System",
    role: "Frontend Engineering & Real-Time Logistics UI",
  },
  {
    name: "SIPP — Passenger Profiling & Security System",
    role: "Full-Stack Engineering & RBAC Security",
  },
];

const keySystemsDeliveredId = [
  {
    name: "Sistem Backend Kiosk Self Check-in Bandara",
    role: "Backend & Integrasi API Maskapai",
  },
  {
    name: "CIS 2.0 & Dashboard Analitik Kargo Real-Time",
    role: "Full-Stack & Agregasi Data MongoDB",
  },
  {
    name: "AWARES — Sistem Manajemen Gudang Kargo Udara",
    role: "Frontend Engineering & Sinkronisasi Data Hulu-Hilir",
  },
  {
    name: "SIPP — Sistem Profiling & Keamanan Penumpang",
    role: "Full-Stack Engineering & Keamanan RBAC",
  },
];

export function ExperienceTimeline() {
  const { lang } = useLanguage();
  const contributions = lang === "id" ? contributionsId : contributionsEn;
  const keySystemsDelivered =
    lang === "id" ? keySystemsDeliveredId : keySystemsDeliveredEn;

  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/30 dark:text-sky-400">
              <Briefcase className="h-3.5 w-3.5" />
              <span>
                {lang === "id" ? "Perjalanan Karier" : "Career Track Record"}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-4xl">
              {lang === "id" ? "Pengalaman Kerja" : "Professional Experience"}
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 dark:text-zinc-400">
            {lang === "id"
              ? "Lebih dari 4 tahun terlibat langsung dalam pengembangan dan pemeliharaan sistem teknologi kebandarudaraan dan logistik kargo."
              : "4+ years of continuous production ownership delivering enterprise aviation and cargo technology systems."}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 before:absolute before:left-2.5 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-sky-400/60 before:to-blue-200 dark:before:to-blue-950">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Glowing Timeline Dot */}
            <div className="absolute -left-6 sm:-left-8 top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-600 bg-white shadow-[0_0_15px_rgba(37,99,235,0.5)] dark:border-blue-500 dark:bg-[#0B0F19] dark:shadow-[0_0_15px_rgba(37,99,235,0.8)]">
              <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-sky-400" />
            </div>

            <Card className="p-6 sm:p-8 hover:border-blue-500/40">
              <div className="flex flex-col justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-zinc-800/80 lg:flex-row lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
                      Full-Stack Developer
                    </h3>
                    <Badge variant="status">
                      {lang === "id"
                        ? "4+ Tahun • Aktif"
                        : "4+ Years • Active"}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-700 dark:text-zinc-300">
                    <span className="inline-flex items-center gap-1.5 font-medium text-blue-700 dark:text-sky-300">
                      <Building2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      PT Edifly Solusi Indonesia
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-zinc-400">
                      <MapPin className="h-4 w-4 text-slate-400 dark:text-zinc-500" />
                      {lang === "id"
                        ? "Indonesia (Solusi IT Bandara & Kargo)"
                        : "Indonesia (Aviation & Enterprise IT Solutions)"}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 self-start rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-xs sm:text-sm font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/30 dark:text-sky-300 lg:self-center">
                  <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>
                    {lang === "id"
                      ? "Apr 2022 – Sekarang (4+ Tahun)"
                      : "Apr 2022 – Present (4+ Years)"}
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* Key Contributions */}
                <div className="lg:col-span-7">
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    {lang === "id"
                      ? "Tanggung Jawab & Kontribusi Utama"
                      : "Key Engineering Contributions"}
                  </h4>
                  <ul className="space-y-3.5">
                    {contributions.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "Ant Design",
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "PostgreSQL",
                      "MySQL",
                      "RBAC",
                      "Git",
                      "Docker",
                      "Gemini",
                      "Claude",
                      "ChatGPT",
                    ].map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Production Systems Box */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/90 p-5 dark:border-blue-950/60 dark:bg-[#0B0F19]/70 lg:col-span-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-sky-400">
                    <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span>
                      {lang === "id"
                        ? "Sistem Utama yang Dikerjakan"
                        : "Mission-Critical Systems Shipped"}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {keySystemsDelivered.map((sys) => (
                      <div
                        key={sys.name}
                        className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/60"
                      >
                        <p className="text-sm font-semibold text-slate-900 dark:text-zinc-100">
                          {sys.name}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
                          {sys.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
