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
      className="relative flex min-h-screen items-center overflow-hidden bg-transparent text-white md:snap-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,4,15,0)_0%,rgba(8,4,15,0.8)_55%,rgba(8,4,15,1)_100%)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.06, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.2, 0.8, 0.4, 1] }}
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9rem] font-semibold uppercase tracking-[0.18em] sm:text-[12rem] lg:text-[16rem]"
      >
        Genexsis
      </motion.div>

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-16 px-6 py-24 md:w-[80vw] md:px-0 lg:w-[75vw] lg:px-0">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <FadeIn className="max-w-xl space-y-6" delay={0.05}>
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/12 text-xl font-semibold">
                GX
              </div>
              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-[0.35em] text-white/55">
                  Genexsis
                </span>
                <span className="text-xl font-semibold text-white">
                  Digital Agency
                </span>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-white/78">
              We craft high-impact websites, evergreen content systems, and
              growth campaigns that keep your pipeline warm. Partner with a team
              engineered for momentum.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a
                className="flex items-center gap-3 transition hover:text-white"
                href="mailto:hello@genexsis.agency"
              >
                <Mail size={18} />
                genexis.ailab@gmail.com
              </a>
              <a
                className="flex items-center gap-3 transition hover:text-white"
                href="tel:+11234567890"
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

          <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {footerLinks.map((group, index) => (
              <FadeIn key={group.title} delay={0.08 * index} className="space-y-5">
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
            <FadeIn delay={0.25} className="space-y-5">
              <p className="text-xs uppercase tracking-[0.32em] text-white/48">
                Follow
              </p>
              <ul className="space-y-2 text-sm text-white/72">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
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

        <FadeIn delay={0.3} className="flex flex-col gap-4 border-t border-white/12 pt-10 text-xs uppercase tracking-[0.3em] text-white/45 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Genexsis. All Rights Reserved.</span>
          <div className="flex gap-6">
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

