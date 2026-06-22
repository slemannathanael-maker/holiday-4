import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shimmer Co. | Holiday and Seasonal Photo Booths",
  description: "Professional photo booth rentals for every holiday and seasonal celebration — Christmas, Halloween, New Year's Eve, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-ink">

        {/* Masthead nav — centered logo, links on both sides */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-6 h-14 grid grid-cols-3 items-center">
            {/* Left nav */}
            <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-[0.12em] uppercase text-slate">
              <Link href="/gallery" className="hover:text-ink transition-colors">Gallery</Link>
              <Link href="/pricing" className="hover:text-ink transition-colors">Pricing</Link>
            </nav>

            {/* Center logo */}
            <div className="flex justify-center">
              <Link href="/" className="font-display text-xl font-bold tracking-tight text-ink">
                Shimmer<span className="text-gold italic"> Co.</span>
              </Link>
            </div>

            {/* Right nav */}
            <nav className="hidden md:flex items-center justify-end gap-7 text-xs font-medium tracking-[0.12em] uppercase text-slate">
              <Link href="/contact" className="hover:text-ink transition-colors">Contact</Link>
              <Link
                href="/contact"
                className="border border-ink text-ink text-xs font-semibold tracking-widest uppercase px-5 py-2 hover:bg-ink hover:text-white transition-colors"
              >
                Book Now
              </Link>
            </nav>

            {/* Mobile: logo + hamburger */}
            <div className="md:hidden col-span-3 flex items-center justify-between">
              <Link href="/" className="font-display text-lg font-bold text-ink">
                Shimmer<span className="text-gold italic"> Co.</span>
              </Link>
              <Link href="/contact" className="border border-ink text-ink text-xs font-semibold tracking-widest uppercase px-4 py-1.5 hover:bg-ink hover:text-white transition-colors">
                Book
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 pt-14">
          {children}
        </main>

        <footer className="bg-ink text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
              <div>
                <p className="font-display text-2xl font-bold mb-2">Shimmer<span className="text-gold italic"> Co.</span></p>
                <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                  Photo booth experiences designed for every holiday and every celebration.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Navigate</p>
                <Link href="/gallery" className="block text-sm text-white/60 hover:text-white transition-colors">Gallery</Link>
                <Link href="/pricing" className="block text-sm text-white/60 hover:text-white transition-colors">Pricing</Link>
                <Link href="/contact" className="block text-sm text-white/60 hover:text-white transition-colors">Contact</Link>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Reach Us</p>
                <a href="tel:+10000000000" className="block text-sm text-white/60 hover:text-white transition-colors">(000) 000-0000</a>
                <a href="mailto:hello@shimmerco.com" className="block text-sm text-white/60 hover:text-white transition-colors">hello@shimmerco.com</a>
                <p className="text-sm text-white/60">[City, State]</p>
              </div>
            </div>
            <p className="text-xs text-white/25">&copy; {new Date().getFullYear()} Shimmer Co. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
