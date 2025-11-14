'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden px-6 py-24 text-white sm:px-10 md:min-h-screen md:px-20 md:snap-center">
      <div className="absolute inset-0 -z-20 bg-plum-noise opacity-60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),transparent_55%)]" />
      <div className="absolute -right-36 top-16 hidden h-[520px] w-[520px] animate-float-slow rounded-full bg-[#4E2A4F]/40 blur-[180px] md:block" />
      <div className="absolute -left-48 bottom-10 h-[360px] w-[360px] animate-float-slow rounded-full bg-[#2D1E2F]/45 blur-[150px]" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-2 text-center sm:px-4">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[42px] font-semibold leading-tight sm:text-[56px] md:text-[64px]"
        >
          Design, optimize, and market a digital experience that converts.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl leading-relaxed text-white/80"
        >
          We craft bold websites, keep your content sharp, and orchestrate
          always-on marketing and advertising that keeps the right customers
          knocking. When your online presence performs, growth follows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Start a project</Link>
          </Button>
          {/* <Button asChild size="lg" variant="secondary">
            <Link href="/portfolio">View portfolio</Link>
          </Button> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-8 text-left text-xs uppercase tracking-[0.36em] text-white/40"
        >
          <span>Design Systems</span>
          <span>Always-On Optimization</span>
          <span>Targeted Advertising</span>
        </motion.div>
      </div>
    </section>
  );
}

