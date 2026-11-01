"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Send,
  Mail,
  Linkedin,
  Github,
  CheckCircle2,
  ExternalLink,
  Globe,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/components/language-provider";

export function BookingSection() {
  const { lang } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFeedbackMessage(
          lang === "id"
            ? "Terima kasih! Pesan Anda sudah masuk dan akan segera saya balas lewat email."
            : data.message ||
                "Thank you! Your message has been received. I will respond within 24 hours."
        );
        setFormState({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        setFeedbackMessage(
          lang === "id"
            ? "Maaf, terjadi kendala saat mengirim pesan. Silakan kirim email langsung ke hamamullaiqi@gmail.com."
            : data.error ||
                "Something went wrong. Please email hamamullaiqi@gmail.com directly."
        );
      }
    } catch {
      setStatus("error");
      setFeedbackMessage(
        lang === "id"
          ? "Belum bisa mengirim pesan saat ini. Silakan hubungi langsung lewat email hamamullaiqi@gmail.com."
          : "Unable to send right now. Please email hamamullaiqi@gmail.com directly."
      );
    }
  };

  return (
    <section id="booking" className="relative py-20 md:py-28">
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px] dark:bg-blue-600/10"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:border-blue-500/30 dark:bg-blue-950/30 dark:text-sky-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>
                {lang === "id"
                  ? "Kontak & Kolaborasi"
                  : "Direct Contact & Availability"}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 sm:text-4xl">
              {lang === "id"
                ? "Tertarik Bekerja Sama atau Berdiskusi?"
                : "Let's Discuss Your Engineering Roadmap"}
            </h2>
          </div>

          {/* Timezone Pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-2 text-xs sm:text-sm font-medium text-blue-700 shadow-sm dark:border-blue-500/30 dark:bg-blue-950/40 dark:text-sky-300 dark:shadow-[0_0_20px_rgba(37,99,235,0.12)]">
            <Clock className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
            <span>
              {lang === "id"
                ? "Zona Waktu: WIB (UTC+7) — Jam kerja fleksibel untuk tim di US, Eropa, maupun Asia-Pasifik."
                : "Timezone: UTC+7 (Western Indonesia Time) — Readily flexible for US, EU, and APAC operational hours."}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Direct LinkedIn & Email Channels + Timezone Windows (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7"
          >
            <Card className="flex h-full flex-col justify-between overflow-hidden">
              <CardHeader className="border-b border-slate-200/80 pb-4 dark:border-zinc-800/80">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>
                    {lang === "id"
                      ? "Hubungi Langsung Lewat LinkedIn atau Email"
                      : "Connect Directly via LinkedIn or Email"}
                  </span>
                </CardTitle>
                <CardDescription className="mt-1">
                  {lang === "id"
                    ? "Silakan hubungi saya untuk tawaran posisi full-time remote, proyek kontrak, maupun diskusi seputar pengembangan sistem."
                    : "Reach out directly for full-time remote engineering roles, contract engagements, or technical discussions."}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 p-6">
                {/* Direct Contact Cards (LinkedIn & Email) */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <a
                    href="https://linkedin.com/in/hamamullaiqi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between rounded-xl border border-blue-200 bg-blue-50/60 p-4 transition-all hover:border-blue-500 hover:bg-blue-50 hover:shadow-md dark:border-blue-500/30 dark:bg-blue-950/25 dark:hover:border-sky-400/60 dark:hover:bg-blue-950/40"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-sky-400" />
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-sky-400">
                        LinkedIn
                      </p>
                      <p className="mt-0.5 text-base font-bold text-slate-900 dark:text-zinc-100">
                        in/hamamullaiqi
                      </p>
                      <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
                        {lang === "id"
                          ? "Jalur paling cepat untuk ngobrol atau kirim pesan langsung"
                          : "Fastest response for recruiters & hiring managers"}
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:hamamullaiqi@gmail.com"
                    className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/80 p-4 transition-all hover:border-blue-500 hover:bg-blue-50/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:border-blue-500/50 dark:hover:bg-blue-950/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-200 bg-blue-100/80 text-blue-700 dark:border-blue-500/30 dark:bg-blue-600/20 dark:text-sky-300">
                        <Mail className="h-5 w-5" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600 dark:text-zinc-500 dark:group-hover:text-sky-400" />
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Email
                      </p>
                      <p className="mt-0.5 text-base font-bold text-slate-900 dark:text-zinc-100 break-all">
                        hamamullaiqi@gmail.com
                      </p>
                      <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
                        {lang === "id"
                          ? "Cocok untuk kirim detail lowongan atau dokumen proyek"
                          : "Ideal for role specs, RFPs & architecture docs"}
                      </p>
                    </div>
                  </a>
                </div>

                {/* Global Timezone Overlap Info */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-blue-500/20 dark:bg-blue-950/20">
                  <div className="flex items-start gap-3">
                    <Globe className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-sky-400" />
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <p className="font-semibold text-slate-900 dark:text-zinc-100">
                        {lang === "id"
                          ? "Kesiapan Jam Kerja Lintas Zona Waktu (WIB / UTC+7)"
                          : "Global Timezone Overlap Windows (UTC+7)"}
                      </p>
                      <p className="mt-1 text-slate-600 dark:text-zinc-400">
                        {lang === "id"
                          ? "Terbiasa berkolaborasi secara remote dan siap menyesuaikan waktu untuk daily standup, diskusi teknis, atau sesi interview dengan tim internasional."
                          : "Available daily for synchronous standups, technical interviews, and architecture reviews across US, European, and APAC windows."}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border border-slate-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950/60">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
                        US (EST / PST)
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-900 dark:text-zinc-100">
                        07:00 – 11:00 EST
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500 dark:text-zinc-400">
                        19:00 – 23:00 WIB (UTC+7)
                      </p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950/60">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
                        EU / UK (CET / GMT)
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-900 dark:text-zinc-100">
                        08:00 – 16:00 CET
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500 dark:text-zinc-400">
                        14:00 – 22:00 WIB (UTC+7)
                      </p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950/60">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
                        APAC / SG / AU
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-900 dark:text-zinc-100">
                        09:00 – 18:00 SGT
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500 dark:text-zinc-400">
                        08:00 – 17:00 WIB (UTC+7)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Button asChild className="gap-2">
                    <a
                      href="https://linkedin.com/in/hamamullaiqi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>
                        {lang === "id"
                          ? "Chat di LinkedIn"
                          : "Message on LinkedIn"}
                      </span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a href="mailto:hamamullaiqi@gmail.com">
                      <Mail className="h-4 w-4" />
                      <span>Email hamamullaiqi@gmail.com</span>
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="gap-2">
                    <a
                      href="https://github.com/hamamullaiqi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: Direct Contact Form (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>
                    {lang === "id" ? "Kirim Pesan" : "Send a Quick Message"}
                  </span>
                </CardTitle>
                <CardDescription>
                  {lang === "id"
                    ? "Isi form singkat di bawah ini dan saya akan membalas ke email Anda secepatnya (maksimal 1x24 jam)."
                    : "Leave your details and message below and I will get back to you via email within 24 hours."}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {status === "success" ? (
                  <div className="space-y-3 rounded-xl border border-emerald-300 bg-emerald-50 p-6 text-center dark:border-emerald-500/30 dark:bg-emerald-950/20">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-zinc-100">
                      {lang === "id" ? "Pesan Terkirim!" : "Message Received"}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-zinc-300">
                      {feedbackMessage}
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setStatus("idle")}
                    >
                      {lang === "id"
                        ? "Kirim Pesan Lagi"
                        : "Send Another Message"}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-xs font-medium text-slate-700 dark:text-zinc-300"
                      >
                        {lang === "id" ? "Nama *" : "Your Name *"}
                      </label>
                      <Input
                        id="name"
                        required
                        placeholder={
                          lang === "id" ? "Budi Santoso" : "Alex Rivera"
                        }
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs font-medium text-slate-700 dark:text-zinc-300"
                      >
                        {lang === "id" ? "Alamat Email *" : "Work Email *"}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-1.5 block text-xs font-medium text-slate-700 dark:text-zinc-300"
                      >
                        {lang === "id"
                          ? "Perusahaan / Tim (Opsional)"
                          : "Company / Team (Optional)"}
                      </label>
                      <Input
                        id="company"
                        placeholder={
                          lang === "id"
                            ? "Nama Perusahaan / Startup"
                            : "Acme Aviation / Remote Startup"
                        }
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            company: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-xs font-medium text-slate-700 dark:text-zinc-300"
                      >
                        {lang === "id" ? "Pesan *" : "Message *"}
                      </label>
                      <Textarea
                        id="message"
                        required
                        placeholder={
                          lang === "id"
                            ? "Tulis gambaran singkat tentang kebutuhan tim, posisi, atau proyek Anda..."
                            : "Tell me about the role, technical stack, or project timeline..."
                        }
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs text-red-600 dark:text-red-400">
                        {feedbackMessage}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full gap-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>
                        {status === "submitting"
                          ? lang === "id"
                            ? "Sedang Mengirim..."
                            : "Sending Message..."
                          : lang === "id"
                            ? "Kirim Pesan"
                            : "Send Message"}
                      </span>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
