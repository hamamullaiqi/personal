"use client";

import React from "react";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-600 dark:border-blue-950/60 dark:bg-[#0B0F19] dark:text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-600/10 text-blue-600 dark:bg-blue-600/15 dark:text-blue-400">
            <Terminal className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-zinc-100">
              M. Hamamul Fikri L.
            </p>
            <p className="text-xs text-slate-500 dark:text-zinc-500">
              Frontend-Focused Full-Stack Engineer • UTC+7
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://github.com/hamamullaiqi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-sky-300"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/hamamullaiqi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-sky-300"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:hamamullaiqi@gmail.com"
            className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-sky-300"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </a>
        </div>

        <p className="text-xs text-slate-500 dark:text-zinc-500">
          © {new Date().getFullYear()} M. Hamamul Fikri L.{" "}
          {lang === "id"
            ? "Seluruh hak cipta dilindungi."
            : "All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
