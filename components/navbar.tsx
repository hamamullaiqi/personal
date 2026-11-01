"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Terminal,
  Sun,
  Moon,
  Menu,
  X,
  Mail,
  ArrowUpRight,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: lang === "id" ? "Keahlian" : "Capabilities",
      href: "#capabilities",
    },
    {
      label: lang === "id" ? "Studi Kasus" : "Case Studies",
      href: "#case-studies",
    },
    {
      label: lang === "id" ? "Cara Kerja" : "How I Work",
      href: "#principles",
    },
    {
      label: lang === "id" ? "Pengalaman" : "Experience",
      href: "#experience",
    },
    {
      label: lang === "id" ? "Kontak" : "Contact",
      href: "#booking",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/85 backdrop-blur-xl shadow-sm dark:border-blue-950/60 dark:bg-[#0B0F19]/85 dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-600/10 text-blue-600 shadow-sm transition-all group-hover:border-blue-500/60 group-hover:bg-blue-600/20 dark:bg-blue-600/15 dark:text-blue-400 dark:shadow-[0_0_20px_rgba(37,99,235,0.2)] dark:group-hover:border-sky-400/60 dark:group-hover:text-sky-300">
            <Terminal className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-sky-300">
              M. Hamamul Fikri L.
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-zinc-400">
              Full-Stack Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/90 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-md dark:border-blue-950/50 dark:bg-zinc-900/60 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-blue-600/15 dark:hover:text-sky-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-2.5 md:flex">
          {/* Language Switcher EN | ID */}
          <div
            className="flex h-10 items-center rounded-xl border border-slate-200 bg-white p-1 text-xs font-semibold dark:border-zinc-800 dark:bg-zinc-900/60"
            role="group"
            aria-label="Language switcher"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-lg px-2.5 py-1 transition-all ${
                lang === "en"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("id")}
              className={`rounded-lg px-2.5 py-1 transition-all ${
                lang === "id"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              ID
            </button>
          </div>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle color theme"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:text-sky-300"
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}
          <Button asChild size="sm" className="h-10 gap-2 rounded-xl px-4">
            <a href="#booking">
              <Mail className="h-4 w-4" />
              <span>{lang === "id" ? "Hubungi Saya" : "Get in Touch"}</span>
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            aria-label="Switch language"
            className="flex h-10 items-center gap-1 rounded-xl border border-slate-200 bg-white px-2.5 text-xs font-bold text-slate-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200"
          >
            <Languages className="h-3.5 w-3.5 text-blue-600 dark:text-sky-400" />
            <span>{lang.toUpperCase()}</span>
          </button>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle color theme"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-200"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white/95 px-4 pt-2 pb-6 backdrop-blur-xl dark:border-blue-950/60 dark:bg-[#0B0F19]/95 md:hidden">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 dark:text-zinc-200 dark:hover:bg-blue-600/15 dark:hover:text-sky-300"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 dark:text-zinc-500" />
              </a>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full gap-2">
                <a href="#booking" onClick={() => setMobileMenuOpen(false)}>
                  <Mail className="h-4 w-4" />
                  <span>{lang === "id" ? "Hubungi Saya" : "Get in Touch"}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
