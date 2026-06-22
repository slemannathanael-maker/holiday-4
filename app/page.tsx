import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const UNSPLASH = "https://images.unsplash.com/photo-";

const seasons = [
  {
    label: "Christmas",
    tagline: "Festive moments that last",
    id: "1573484557528-94c8b21329bc",
    overlay: "from-xmas/80 to-xmas/40",
    border: "border-xmas/40",
  },
  {
    label: "Halloween",
    tagline: "Costumes, candy, and cameras",
    id: "1509558567730-6c838437b06b",
    overlay: "from-halloween/80 to-halloween/40",
    border: "border-halloween/40",
  },
  {
    label: "New Year's Eve",
    tagline: "Ring in the new year in style",
    id: "1492684223066-81342ee5ff30",
    overlay: "from-nye/80 to-nye/40",
    border: "border-nye/40",
  },
  {
    label: "4th of July",
    tagline: "Stars, stripes, and sparklers",
    id: "1499233983070-99a5f004e720",
    overlay: "from-july/80 to-july/40",
    border: "border-july/40",
  },
];

const editorialPoints = [
  { number: "01", heading: "Fully branded setups", body: "Every backdrop, print, and digital file matches your event's palette. No generic backgrounds." },
  { number: "02", heading: "Instant prints on site", body: "Guests walk away with a physical photo strip before the night is over." },
  { number: "03", heading: "Same-night gallery", body: "Every shot delivered to a shareable link before your guests get home." },
];

const galleryPreview = [
  "1543258103-a62bdc069871",
  "1506157786151-b8491531f063",
  "1533174072545-7a4b6ad7a6c3",
];

export default function HomePage() {
  return (
    <>
      {/* Full-screen editorial hero */}
      <section className="relative h-[100svh] min-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${UNSPLASH}1533174072545-7a4b6ad7a6c3?w=1800&h=1200&fit=crop&q=85`}
            alt="Holiday celebration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24">
          <FadeIn direction="none" delay={100}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6">
              Holiday and Seasonal Photo Booths
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[110px] font-bold text-white leading-[0.88] tracking-tight mb-8 max-w-4xl">
              Every<br />season<br />
              <span className="italic text-gold">deserves</span><br />
              a moment.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-gold text-ink px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-white transition-colors"
              >
                Book Your Event
              </Link>
              <Link
                href="/gallery"
                className="inline-block border border-white/50 text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-colors"
              >
                View Gallery
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 right-6 z-10 hidden md:flex items-center gap-3 text-white/40">
          <div className="w-10 h-px bg-white/30" />
          <p className="text-xs font-medium uppercase tracking-widest">Scroll</p>
        </div>
      </section>

      {/* Intro statement */}
      <section className="py-20 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="font-display text-3xl md:text-5xl font-medium text-ink leading-[1.2] tracking-tight">
              Christmas parties, Halloween bashes, NYE countdowns.{" "}
              <span className="italic text-gold">Shimmer Co.</span> brings the booth to every occasion.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Holiday seasons — 4-card editorial grid */}
      <section className="py-20 px-6 bg-silver">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3">The Seasons We Serve</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">Pick your celebration.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {seasons.map(({ label, tagline, id, overlay }, i) => (
              <FadeIn key={label} delay={i * 80} direction="none">
                <div className="relative h-72 overflow-hidden group cursor-default">
                  <Image
                    src={`${UNSPLASH}${id}?w=900&h=600&fit=crop&q=80`}
                    alt={label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${overlay}`} />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <p className="font-display text-3xl font-bold text-white mb-1">{label}</p>
                    <p className="text-sm text-white/75 font-medium">{tagline}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial split — what we offer */}
      <section className="bg-white border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Left: large photo */}
          <div className="relative h-[500px] lg:h-auto min-h-[500px]">
            <Image
              src={`${UNSPLASH}1543258103-a62bdc069871?w=900&h=900&fit=crop&q=80`}
              alt="Photo booth setup"
              fill
              className="object-cover"
            />
          </div>
          {/* Right: editorial text */}
          <div className="px-10 py-16 lg:px-16 flex flex-col justify-center">
            <FadeIn direction="right">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">How We Work</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-12 leading-tight">
                Seamless from setup<br />to last call.
              </h2>
              <div className="space-y-8">
                {editorialPoints.map(({ number, heading, body }) => (
                  <div key={number} className="flex gap-6 border-t border-border pt-6">
                    <span className="font-display text-4xl font-bold text-silver-mid leading-none flex-shrink-0 select-none">{number}</span>
                    <div>
                      <h3 className="font-semibold text-ink mb-1.5">{heading}</h3>
                      <p className="text-sm text-slate leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/pricing"
                className="inline-block mt-10 border border-ink text-ink text-xs font-semibold uppercase tracking-widest px-7 py-3.5 hover:bg-ink hover:text-white transition-colors"
              >
                See Packages
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery preview — staggered editorial layout */}
      <section className="py-20 px-6 bg-silver border-t border-border">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3">Recent Work</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">The moments<br />we captured.</h2>
            </div>
            <Link href="/gallery" className="hidden md:inline-block text-xs font-semibold uppercase tracking-widest text-slate border-b border-slate pb-px hover:text-ink hover:border-ink transition-colors">
              Full Gallery
            </Link>
          </FadeIn>
          <div className="grid grid-cols-12 gap-4">
            <FadeIn direction="none" className="col-span-12 md:col-span-7">
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={`${UNSPLASH}${galleryPreview[0]}?w=900&h=600&fit=crop&q=80`}
                  alt="Holiday party moment"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
            <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
              <FadeIn direction="none" delay={80} className="flex-1">
                <div className="relative h-[200px] md:h-full overflow-hidden">
                  <Image
                    src={`${UNSPLASH}${galleryPreview[1]}?w=600&h=400&fit=crop&q=80`}
                    alt="Holiday party moment"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="none" delay={140} className="flex-1">
                <div className="relative h-[200px] md:h-full overflow-hidden">
                  <Image
                    src={`${UNSPLASH}${galleryPreview[2]}?w=600&h=400&fit=crop&q=80`}
                    alt="Holiday party moment"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
          <FadeIn className="mt-6 md:hidden text-center">
            <Link href="/gallery" className="text-xs font-semibold uppercase tracking-widest text-slate border-b border-slate pb-px">
              Full Gallery
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Pull-quote testimonial */}
      <section className="py-24 px-6 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="font-display text-8xl font-bold text-gold leading-none block mb-4">&ldquo;</span>
            <blockquote className="font-display text-2xl md:text-4xl font-medium italic text-ink leading-snug mb-8">
              They showed up, set everything up without a word, and the booth was the single best part of our company Christmas party. Our employees are still talking about it.
            </blockquote>
            <p className="text-sm font-semibold text-slate uppercase tracking-widest">Sarah K., Corporate Events Manager</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA — full bleed dark */}
      <section className="relative py-28 px-6 bg-ink overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src={`${UNSPLASH}1506157786151-b8491531f063?w=1800&h=600&fit=crop&q=60`}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">Ready to Book?</p>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-10">
              Your next event<br />
              <span className="italic text-gold">deserves a booth.</span>
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-gold text-ink px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
