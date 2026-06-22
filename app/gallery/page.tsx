import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const UNSPLASH = "https://images.unsplash.com/photo-";

const photos = [
  { id: "1519671482749-fd09be7ccebf", size: "col-span-2 row-span-2", label: "Christmas" },
  { id: "1509558567730-6c838437b06b", size: "col-span-1 row-span-1", label: "Halloween" },
  { id: "1519751138087-5bf79df62d5b", size: "col-span-1 row-span-1", label: "NYE" },
  { id: "1543258103-a62bdc069871", size: "col-span-1 row-span-2", label: "Holiday" },
  { id: "1506157786151-b8491531f063", size: "col-span-1 row-span-1", label: "Party" },
  { id: "1498931299472-f7a63a5a1cfa", size: "col-span-1 row-span-1", label: "4th of July" },
  { id: "1533174072545-7a4b6ad7a6c3", size: "col-span-2 row-span-1", label: "Celebration" },
  { id: "1546512347-3ad629c193c5", size: "col-span-1 row-span-1", label: "Holiday Party" },
  { id: "1663568399694-fa3ee4fbb972", size: "col-span-1 row-span-1", label: "Festive" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-16 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Gallery</p>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-ink leading-[0.9] tracking-tight">
              The moments<br /><span className="italic">we have captured.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Editorial grid */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-4 auto-rows-[220px] gap-3">
          {photos.map(({ id, size }, i) => (
            <FadeIn key={id} delay={i * 40} direction="none" className={size}>
              <div className="relative w-full h-full overflow-hidden group">
                <Image
                  src={`${UNSPLASH}${id}?w=800&h=800&fit=crop&q=80`}
                  alt="Seasonal celebration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-ink text-center">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 italic">Want your event here?</h2>
          <a
            href="/contact"
            className="inline-block bg-gold text-ink px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-white transition-colors"
          >
            Book Your Date
          </a>
        </FadeIn>
      </section>
    </>
  );
}
