import FadeIn from "@/components/FadeIn";

const eventTypes = [
  "Christmas Party", "Halloween Party", "New Year's Eve", "4th of July",
  "Thanksgiving", "Easter", "Other Holiday", "Seasonal Corporate Event",
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 pb-16 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Get in Touch</p>
            <h1 className="font-display text-6xl md:text-7xl font-bold text-ink leading-[0.9] tracking-tight">
              Let&apos;s make your<br /><span className="italic">event unforgettable.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Direct contact — always visible first */}
      <section className="py-12 px-6 bg-ink">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn>
            <a href="tel:+10000000000" className="group block">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">Call Us</p>
              <p className="font-display text-2xl font-bold text-white group-hover:text-gold transition-colors">(000) 000-0000</p>
              <p className="text-sm text-white/40 mt-1">Mon to Sat, 9am to 7pm</p>
            </a>
          </FadeIn>
          <FadeIn delay={80}>
            <a href="mailto:hello@shimmerco.com" className="group block">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">Email Us</p>
              <p className="font-display text-2xl font-bold text-white group-hover:text-gold transition-colors">hello@shimmerco.com</p>
              <p className="text-sm text-white/40 mt-1">We reply within a few hours</p>
            </a>
          </FadeIn>
          <FadeIn delay={160}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">Location</p>
              <p className="font-display text-2xl font-bold text-white">[City, State]</p>
              <p className="text-sm text-white/40 mt-1">Serving the surrounding region</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="bg-silver border-b border-border px-6 py-6">
        <p className="text-sm text-slate max-w-2xl">
          Want a quote? Fill out the form below and we will follow up with availability and pricing within a few hours.
        </p>
      </div>

      {/* Quote form */}
      <section className="py-20 px-6 bg-silver">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-2">Optional</p>
            <h2 className="font-display text-3xl font-bold text-ink mb-10 italic">Request a Quote</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">First Name</label>
                  <input type="text" placeholder="Alex" className="w-full bg-white border border-border px-4 py-3 text-sm text-ink placeholder:text-silver-dark focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">Last Name</label>
                  <input type="text" placeholder="Morgan" className="w-full bg-white border border-border px-4 py-3 text-sm text-ink placeholder:text-silver-dark focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">Email</label>
                  <input type="email" placeholder="alex@email.com" className="w-full bg-white border border-border px-4 py-3 text-sm text-ink placeholder:text-silver-dark focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">Phone</label>
                  <input type="tel" placeholder="(000) 000-0000" className="w-full bg-white border border-border px-4 py-3 text-sm text-ink placeholder:text-silver-dark focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">Event Date</label>
                  <input type="date" className="w-full bg-white border border-border px-4 py-3 text-sm text-ink/60 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">Event Type</label>
                  <select className="w-full bg-white border border-border px-4 py-3 text-sm text-ink/60 focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option value="">Select...</option>
                    {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">Expected Guests</label>
                  <input type="text" placeholder="e.g. 80 guests" className="w-full bg-white border border-border px-4 py-3 text-sm text-ink placeholder:text-silver-dark focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">Venue</label>
                  <input type="text" placeholder="The Grand Hall, City" className="w-full bg-white border border-border px-4 py-3 text-sm text-ink placeholder:text-silver-dark focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-muted mb-2">Tell Us About the Event</label>
                <textarea rows={4} placeholder="Theme, details, any special requests..." className="w-full bg-white border border-border px-4 py-3 text-sm text-ink placeholder:text-silver-dark focus:outline-none focus:border-gold transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-ink text-white py-4 text-xs font-semibold uppercase tracking-widest hover:bg-gold hover:text-ink transition-colors">
                Send Request
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
