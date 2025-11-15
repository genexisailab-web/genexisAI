import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/fade-in";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Privacy Policy"
        description="We respect your data and outline exactly how we collect, use, and protect it below."
      />
      <section className="py-20 md:flex md:min-h-screen md:items-center md:justify-center md:snap-center">
        <FadeIn once={false} className="w-full max-w-4xl">
          <div className="card-surface space-y-6 rounded-3xl p-12 text-base leading-relaxed text-white/80">
            <p>
              This site stores limited information from contact form submissions.
              We only use these details to respond to your inquiry. We never sell
              your data, and you can request deletion at any time by emailing{" "}
              <a href="mailto:privacy@genexsis.agency" className="text-white">
                privacy@genexsis.agency
              </a>
              .
            </p>
            <p>
              We utilize privacy-friendly analytics to understand aggregate
              engagement and improve our experience. All data is anonymized and
              retained for no longer than 24 months.
            </p>
            <p>
              Genexis complies with GDPR, CCPA, and other applicable regulations.
              For detailed documentation or data requests, please contact our
              team.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

