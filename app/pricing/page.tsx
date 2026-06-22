import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const packages = [
  {
    name: "Essential",
    tagline: "Smaller gatherings and office parties",
    price: "$[###]",
    hours: "2 hours",
    featured: false,
    features: [
      "2-hour booth rental",
      "Unlimited photo sessions",
      "Instant 4x6 prints",
      "Digital gallery next day",
      "Prop box included",
      "1 on-site attendant",
    ],
  },
  {
    name: "Signature",
    tagline: "Our most booked package",
    price: "$[###]",
    hours: "4 hours",
    featured: true,
    features: [
      "4-hour booth rental",
      "Unlimited photo sessions",
      "Instant 4x6 prints",
      "Digital gallery same night",
      "Custom seasonal overlay",
      "Premium prop box",
      "1 on-site attendant",
      "Guest scrapbook station",
    ],
  },
  {
    name: "Grand",
    tagline: "Full-scale holiday events",
    price: "$[###]",
    hours: "6 hours",
    featured: false,
    features: [
      "6-hour booth rental",
      "Unlimited photo sessions",
      "4x6 prints and photo strips",
      "Digital gallery same night",
      "Fully custom overlay and backdrop",
      "Luxury seasonal prop box",
      "2 on-site attendants",
      "Guest scrapbook station",
      "GIF and boomerang mode",
    ],
  },
];

const faqs = [
  { q: "Do you handle setup and breakdown?", a: "Yes. Our team arrives 45 to 60 minutes before your event, handles the full setup, and returns at the end to break everything down." },
  { q: "Can you customize the prints for our holiday?", a: "Absolutely. Every package includes at least a basic overlay. The Signature and Grand packages include fully custom overlays matched to your event." },
  { q: "How far in advance should I book?", a: "Holiday weekends fill up fast — often 6 to 10 weeks out. We recommend booking as early as possible for December, Halloween, and NYE dates." },
  { q: "Do you service events outside the city?", a: "Yes, with a travel fee depending on distance. Contact us with your location and we will provide a full quote." },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-20 pb-16 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Packages</p>
            <h1 className="font-display text-6xl md:text-7xl font-bold text-ink leading-[0.9] tracking-tight">
              Straightforward<br /><span className="italic">pricing.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {packages.map(({ name, tagline, price, hours, featured, features }) => (
            <FadeIn key={name} direction="none">
              <div className={`p-10 h-full flex flex-col ${featured ? "bg-ink text-white" : "bg-white"}`}>
                {featured && (
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Most Popular</p>
                )}
                <h2 className={`font-display text-3xl font-bold mb-1 ${featured ? "text-white" : "text-ink"}`}>{name}</h2>
                <p className={`text-sm mb-8 ${featured ? "text-white/50" : "text-muted"}`}>{tagline}</p>
                <div className="mb-8 border-t border-b py-6 ${featured ? 'border-white/10' : 'border-border'}">
                  <span className={`font-display text-5xl font-bold ${featured ? "text-white" : "text-ink"}`}>{price}</span>
                  <span className={`text-sm ml-2 ${featured ? "text-white/50" : "text-muted"}`}>{hours}</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${featured ? "text-white/80" : "text-slate"}`}>
                      <span className={`mt-1 flex-shrink-0 w-4 h-4 flex items-center justify-center ${featured ? "text-gold" : "text-gold"}`}>
                        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                          <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-4 text-xs font-semibold uppercase tracking-widest transition-colors ${
                    featured
                      ? "bg-gold text-ink hover:bg-white"
                      : "border border-ink text-ink hover:bg-ink hover:text-white"
                  }`}
                >
                  Book {name}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-8 text-center">
          <p className="text-sm text-muted">
            Need something custom?{" "}
            <Link href="/contact" className="text-ink font-semibold border-b border-ink hover:text-gold hover:border-gold transition-colors">
              Contact us and we will build a quote.
            </Link>
          </p>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-silver border-t border-border">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">FAQ</p>
            <h2 className="font-display text-4xl font-bold text-ink">Common questions.</h2>
          </FadeIn>
          <div className="space-y-0 border-t border-border">
            {faqs.map(({ q, a }, i) => (
              <FadeIn key={q} delay={i * 60}>
                <div className="border-b border-border py-8">
                  <h3 className="font-semibold text-ink mb-3">{q}</h3>
                  <p className="text-sm text-slate leading-relaxed">{a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-ink text-center">
        <FadeIn>
          <h2 className="font-display text-4xl font-bold text-white italic mb-6">Still have questions?</h2>
          <Link href="/contact" className="inline-block bg-gold text-ink px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-white transition-colors">
            Reach Out
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
