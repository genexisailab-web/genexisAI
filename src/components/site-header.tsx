'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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

  const toggle = () => {
    setOpen((prev) => !prev);
  };
  const close = () => {
    setOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-obsidian-plum-950/95 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-4 text-white sm:px-6 sm:py-5 md:w-[80vw] md:px-0 lg:w-[75vw] lg:px-0">
          <Link href="/" onClick={close} className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#4E2A4F]/80 to-[#2D1E2F]/80 text-base font-semibold shadow-lg sm:h-12 sm:w-12 sm:text-lg">
              GX
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-xs uppercase tracking-[0.32em] text-white/55 sm:text-sm">
                Genexis
              </span>
              <span className="text-sm font-medium text-white sm:text-base">
                Digital Agency
              </span>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 text-sm md:flex lg:gap-12">
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
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10 hover:text-white md:hidden"
            onClick={toggle}
          >
            {open ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>
        </div>
      </header>

      {open && (
        <>
          <div
            className="fixed inset-0 z-[100] bg-black/80 md:hidden"
            onClick={close}
            aria-hidden="true"
          />
          <nav
            id="mobile-menu"
            className="fixed inset-x-0 top-[73px] bottom-0 z-[101] overflow-y-auto bg-[#1f1321] md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-4 py-8 gap-3">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className={`rounded-xl px-4 py-4 text-lg font-medium text-white transition ${
                      active
                        ? "bg-gradient-to-r from-[#4E2A4F] to-[#2D1E2F] shadow-lg"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button className="mt-6 w-full" variant="primary" size="lg" asChild>
                <Link href="/contact" onClick={close}>
                  Book a Strategy Call
                </Link>
              </Button>
            </div>
          </nav>
        </>
      )}
    </>
  );
}

