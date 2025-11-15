import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Terms & Conditions"
        description="These terms govern your access to and use of the Genexis website and services."
      />
      <section className="py-20 md:flex md:min-h-screen md:items-center md:justify-center md:snap-center">
        <FadeIn once={false} className="w-full max-w-4xl">
          <div className="card-surface space-y-6 rounded-3xl p-12 text-base leading-relaxed text-white/80">
            <ul className="space-y-4">
              <li>
                <span className="text-white">Use of content:</span> You may browse
                and share site content for personal reference. Reproducing
                materials requires written permission.
              </li>
              <li>
                <span className="text-white">Engagement terms:</span> Project
                scopes, pricing, and timelines are defined in individual
                statements of work and supersede information on this site.
              </li>
              <li>
                <span className="text-white">Liability:</span> Genexis is not
                liable for indirect or consequential damages arising from use of
                this site or services.
              </li>
              <li>
                <span className="text-white">Updates:</span> We may update these
                terms periodically. Continued use of the site constitutes
                acceptance of the latest version.
              </li>
            </ul>
            <p>
              Questions? Reach out to{" "}
              <a href="mailto:legal@genexsis.agency" className="text-white">
                legal@genexsis.agency
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

