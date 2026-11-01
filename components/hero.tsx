"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Globe2,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Radial & Linear Blue Glow Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent dark:from-blue-600/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px] dark:bg-blue-600/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 h-[360px] w-[360px] rounded-full bg-sky-400/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Frameless Profile Cutout (Mobile Top, Desktop Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
          >
            <div className="relative flex items-end justify-center">
              {/* Soft Ambient Glow Behind Subject (No Border/Box Frame) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-10 h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-gradient-to-tr from-blue-600/25 via-sky-400/20 to-transparent blur-3xl dark:from-blue-600/35 dark:via-sky-400/25"
              />

              <div className="relative h-[400px] w-[330px] sm:h-[470px] sm:w-[390px] lg:h-[530px] lg:w-[440px]">
                <Image
                  src="/personal-photo.png"
                  alt="M. Hamamul Fikri L. — Frontend-Focused Full-Stack Engineer"
                  fill
                  priority
                  sizes="(max-width: 768px) 390px, 440px"
                  className="object-contain object-bottom drop-shadow-[0_18px_32px_rgba(37,99,235,0.22)] transition-transform duration-500 hover:scale-[1.02]"
                />
                {/* Subtle bottom fade so cutout blends seamlessly */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-50 via-slate-50/60 to-transparent dark:from-[#0B0F19] dark:via-[#0B0F19]/60"
                />
              </div>
            </div>
          </motion.div>

          {/* Copywriting & Actions (Mobile Bottom, Desktop Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="order-2 flex flex-col items-start text-left lg:order-1 lg:col-span-7"
          >
            {/* Status Pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-700 shadow-sm backdrop-blur-md dark:border-blue-500/30 dark:bg-blue-950/40 dark:text-sky-300 dark:shadow-[0_0_20px_rgba(37,99,235,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 dark:bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              </span>
              <span>
                {lang === "id"
                  ? "Terbuka untuk Peluang Kerja Remote & Kontrak (Global / US / EU / APAC)"
                  : "Available for Global Remote Roles & Contracts (US/EU/APAC)"}
              </span>
            </div>

            {/* Name Eyebrow */}
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              M. Hamamul Fikri L.
            </p>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Frontend-Focused{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent dark:from-blue-400 dark:via-sky-300 dark:to-blue-500">
                Full-Stack Engineer
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
              {lang === "id"
                ? "Software Engineer dengan pengalaman lebih dari 4 tahun membangun aplikasi web berskala produksi, antarmuka yang cepat dan nyaman dipakai, serta integrasi API untuk operasional bandara dan logistik kargo."
                : "Software Engineer with 4+ years of professional experience building high-reliability web systems, responsive UI architectures, and mission-critical API integrations for aviation and enterprise logistics."}
            </p>

            {/* Key Value Pillars */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-700 dark:text-zinc-300">
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 shadow-sm dark:border-blue-950/60 dark:bg-zinc-900/60">
                <Cpu className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" />
                <span>React • Next.js • TypeScript • Node.js</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 shadow-sm dark:border-blue-950/60 dark:bg-zinc-900/60">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" />
                <span>
                  {lang === "id"
                    ? "Sistem Bandara & Kargo 24/7"
                    : "24/7 SLA Aviation & Cargo Systems"}
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 shadow-sm dark:border-blue-950/60 dark:bg-zinc-900/60">
                <Globe2 className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" />
                <span>
                  {lang === "id"
                    ? "Siap Kerja Remote Lintas Zona Waktu"
                    : "Async-First Global Collaboration"}
                </span>
              </div>
            </div>

            {/* Call to Actions — Direct LinkedIn / Email & Case Studies */}
            <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">
              <Button asChild size="lg" className="gap-2.5">
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
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="mailto:hamamullaiqi@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span>{lang === "id" ? "Kirim Email" : "Send an Email"}</span>
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="gap-2">
                <a href="#case-studies">
                  <span>
                    {lang === "id" ? "Lihat Studi Kasus" : "View Case Studies"}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex w-full flex-wrap items-center gap-4 border-t border-slate-200 pt-4 dark:border-zinc-800/80 sm:w-auto">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-zinc-500">
                {lang === "id" ? "Kontak & Profil:" : "Profiles:"}
              </span>
              <a
                href="https://github.com/hamamullaiqi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-700 dark:border-zinc-800/90 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:bg-blue-950/30 dark:hover:text-sky-300"
              >
                <Github className="h-3.5 w-3.5" />
                <span>github.com/hamamullaiqi</span>
              </a>
              <a
                href="https://linkedin.com/in/hamamullaiqi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-700 dark:border-zinc-800/90 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:bg-blue-950/30 dark:hover:text-sky-300"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>linkedin.com/in/hamamullaiqi</span>
              </a>
              <a
                href="mailto:hamamullaiqi@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-700 dark:border-zinc-800/90 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:bg-blue-950/30 dark:hover:text-sky-300"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>hamamullaiqi@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
