'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const activeTestimonial = testimonials[index];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="card-surface relative overflow-hidden rounded-3xl p-12 text-white">
      <Quote className="mb-6 h-10 w-10 text-white/70" />
      <AnimatePresence initial={false} mode="wait">
        <motion.figure
          key={activeTestimonial.name}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-6"
          aria-live="polite"
        >
          <blockquote className="text-2xl leading-relaxed text-white/85">
            “{activeTestimonial.quote}”
          </blockquote>
          <figcaption className="text-sm uppercase tracking-[0.36em] text-white/55">
            {activeTestimonial.name} · {activeTestimonial.role}
          </figcaption>
        </motion.figure>
      </AnimatePresence>
      <div className="mt-10 flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/40">
        <button
          onClick={prev}
          className="rounded-full border border-white/25 px-5 py-2 transition hover:border-white/40 hover:text-white"
          aria-label="Previous testimonial"
        >
          Prev
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full transition ${
                idx === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="rounded-full border border-white/25 px-5 py-2 transition hover:border-white/40 hover:text-white"
          aria-label="Next testimonial"
        >
          Next
        </button>
      </div>
    </div>
  );
}

