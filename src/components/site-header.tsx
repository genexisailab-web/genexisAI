'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-obsidian-plum-950/40 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1600px] items-center gap-8 px-6 py-5 text-white md:w-[80vw] md:px-0 lg:w-[75vw] lg:px-0">
        <Link href="/" onClick={close} className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/12 text-lg font-semibold">
            GX
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm uppercase tracking-[0.32em] text-white/55">
              Genexsis
            </span>
            <span className="text-base font-medium text-white">
              Digital Agency
            </span>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-12 text-sm md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-white/60 transition hover:text-white ${
                  active ? "text-white" : ""
                }`}
              >
                {link.label}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-white" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden flex-shrink-0 md:flex">
          <Button asChild variant="primary" size="sm">
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white/40 hover:text-white md:hidden"
          onClick={toggle}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {open ? (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full border-b border-white/10 bg-obsidian-plum-950/70 backdrop-blur-xl shadow-lg shadow-black/30 md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className={`rounded-lg px-3 py-2 text-base transition ${
                      active
                        ? "bg-white/15 text-white"
                        : "text-white/75 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button className="mt-4" variant="primary" size="md" asChild>
                <Link href="/contact" onClick={close}>
                  Book a Strategy Call
                </Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

