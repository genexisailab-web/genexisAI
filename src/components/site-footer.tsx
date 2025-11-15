 'use client';

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/fade-in";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Website Design", href: "/services#design" },
      { label: "Content Editing", href: "/services#content" },
      { label: "Digital Marketing", href: "/services#marketing" },
      { label: "Online Advertising", href: "/services#advertising" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/genexis.ailabs/" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
];

export function SiteFooter() {
  return (
    <FadeIn
      as={motion.footer}
      once={false}
      className="relative flex min-h-[auto] items-center overflow-hidden bg-obsidian-plum-950 text-white py-16 sm:py-20 md:min-h-screen md:snap-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,4,15,0)_0%,rgba(8,4,15,0.8)_55%,rgba(8,4,15,1)_100%)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.06, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.4, 1] }}
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-6xl font-semibold uppercase tracking-[0.18em] sm:text-8xl lg:text-[16rem]"
      >
        Genexis
      </motion.div>

      <div className="relative mx-auto flex w-full flex-col gap-12 px-4 py-12 sm:gap-16 sm:px-6 sm:py-16 md:px-8 lg:px-12">
        <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-start lg:justify-between">
          <FadeIn className="max-w-xl space-y-5 sm:space-y-6" delay={0.05}>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#4E2A4F]/80 to-[#2D1E2F]/80 text-lg font-semibold shadow-lg sm:h-14 sm:w-14 sm:text-xl">
                GX
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.35em] text-white/55 sm:text-sm">
                  Genexis
                </span>
                <span className="text-lg font-semibold text-white sm:text-xl">
                  Digital Agency
                </span>
              </div>
            </div>
            <p className="text-base leading-relaxed text-white/78 sm:text-lg">
              We craft high-impact websites, evergreen content systems, and
              growth campaigns that keep your pipeline warm. Partner with a team
              engineered for momentum.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/70 sm:gap-3">
              <a
                className="flex items-center gap-3 transition hover:text-white"
                href="mailto:genexis.ailab@gmail.com"
              >
                <Mail size={18} />
                <span className="break-all">genexis.ailab@gmail.com</span>
              </a>
              <a
                className="flex items-center gap-3 transition hover:text-white"
                href="tel:+916354783970"
              >
                <Phone size={18} />
                +91-6354783970  
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin size={18} />
                <span>Global team operating remotely</span>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {footerLinks.map((group, index) => (
              <FadeIn key={group.title} delay={0.08 * index} className="space-y-4 sm:space-y-5">
                <p className="text-xs uppercase tracking-[0.32em] text-white/48">
                  {group.title}
                </p>
                <ul className="space-y-2 text-sm text-white/72">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
            <FadeIn delay={0.25} className="space-y-4 sm:space-y-5">
              <p className="text-xs uppercase tracking-[0.32em] text-white/48">
                Follow
              </p>
              <ul className="space-y-2 text-sm text-white/72">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 transition hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.3} className="flex flex-col gap-4 border-t border-white/12 pt-8 text-xs uppercase tracking-[0.3em] text-white/45 sm:pt-10 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Genexis. All Rights Reserved.</span>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </FadeIn>
      </div>
    </FadeIn>
  );
}

