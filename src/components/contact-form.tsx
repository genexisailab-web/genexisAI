'use client';

import { useState, FormEvent, useRef } from "react";
import { Button } from "./ui/button";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    if (!formRef.current) {
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      timeline: formData.get('timeline') as string,
      goals: formData.get('goals') as string,
      newsletter: formData.get('newsletter') === 'on',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent. We\'ll get back to you soon.',
      });
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="card-surface space-y-6 rounded-3xl p-6 sm:p-10 text-white">
      {submitStatus.type && (
        <div
          className={`rounded-2xl px-4 py-3 text-sm ${
            submitStatus.type === 'success'
              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-white/75">
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/30 backdrop-blur focus:border-white/40 focus:outline-none"
            required
            disabled={isSubmitting}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/75">
          Company
          <input
            type="text"
            name="company"
            placeholder="Brand or organization"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/30 backdrop-blur focus:border-white/40 focus:outline-none"
            disabled={isSubmitting}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/75">
          Email
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/30 backdrop-blur focus:border-white/40 focus:outline-none"
            required
            disabled={isSubmitting}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/75">
          Timeline
          <input
            type="text"
            name="timeline"
            placeholder="When would you like to launch?"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/30 backdrop-blur focus:border-white/40 focus:outline-none"
            disabled={isSubmitting}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-white/75">
        Project goals
        <textarea
          name="goals"
          rows={5}
          placeholder="Tell us about the website, marketing, or advertising outcomes you want."
          className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/30 backdrop-blur focus:border-white/40 focus:outline-none resize-none"
          disabled={isSubmitting}
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-3 text-xs text-white/60">
          <input
            type="checkbox"
            name="newsletter"
            className="h-4 w-4 rounded border border-white/40 bg-transparent accent-[#4E2A4F]"
            disabled={isSubmitting}
          />
          Subscribe to insights & playbooks
        </label>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send message'}
        </Button>
      </div>
    </form>
  );
}

