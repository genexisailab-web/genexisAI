import { Button } from "./ui/button";

export function ContactForm() {
  return (
    <form className="card-surface space-y-6 rounded-3xl p-10 text-white">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-white/75">
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/30 backdrop-blur focus:border-white/40 focus:outline-none"
            required
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/75">
          Company
          <input
            type="text"
            name="company"
            placeholder="Brand or organization"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/30 backdrop-blur focus:border-white/40 focus:outline-none"
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
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/75">
          Timeline
          <input
            type="text"
            name="timeline"
            placeholder="When would you like to launch?"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/30 backdrop-blur focus:border-white/40 focus:outline-none"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-white/75">
        Project goals
        <textarea
          name="goals"
          rows={5}
          placeholder="Tell us about the website, marketing, or advertising outcomes you want."
          className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/30 backdrop-blur focus:border-white/40 focus:outline-none"
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-3 text-xs text-white/60">
          <input
            type="checkbox"
            name="newsletter"
            className="h-4 w-4 rounded border border-white/40 bg-transparent accent-[#4E2A4F]"
          />
          Subscribe to insights & playbooks
        </label>
        <Button type="submit" size="lg">
          Send message
        </Button>
      </div>
    </form>
  );
}

