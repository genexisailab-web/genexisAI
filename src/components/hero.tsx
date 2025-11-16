'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] w-full items-center justify-center overflow-hidden bg-obsidian-plum-950 py-16 text-white sm:min-h-[calc(100vh-81px)] sm:py-20 md:min-h-screen md:snap-center">
      <div className="absolute inset-0 -z-20 bg-plum-noise opacity-60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),transparent_55%)]" />
      <div className="absolute -right-36 top-16 hidden h-[520px] w-[520px] animate-float-slow rounded-full bg-[#4E2A4F]/40 blur-[180px] md:block" />
      <div className="absolute -left-32 bottom-10 h-[280px] w-[280px] animate-float-slow rounded-full bg-[#2D1E2F]/45 blur-[120px] sm:-left-48 sm:h-[360px] sm:w-[360px] sm:blur-[150px]" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-4 text-center sm:gap-10 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-[64px]"
        >
          Design, optimize, and market a digital experience that converts.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base leading-relaxed text-white/80 sm:text-lg md:text-xl"
        >
          We craft bold websites, keep your content sharp, and orchestrate
          always-on marketing and advertising that keeps the right customers
          knocking. When your online presence performs, growth follows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
        >
          <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
            <Link href="/contact">Start a project</Link>
          </Button>
          {/* <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
            <Link href="/portfolio">View portfolio</Link>
          </Button> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.36em] text-white/50 sm:mt-6 sm:gap-6 sm:text-xs"
        >
          <span>Design Systems</span>
          <span>Always-On Optimization</span>
          <span>Targeted Advertising</span>
        </motion.div>
      </div>
    </section>
  );
}

