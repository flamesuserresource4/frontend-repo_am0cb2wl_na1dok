import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black text-white">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-colors duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/40">
              <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-400 shadow-[0_0_20px_2px_rgba(16,185,129,0.75)]" />
            </span>
            <span className="font-extrabold tracking-tight text-xl">IronPulse</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#programs" className="hover:text-white transition-colors">Programs</a>
            <a href="#trainers" className="hover:text-white transition-colors">Trainers</a>
            <a href="#plans" className="hover:text-white transition-colors">Plans</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#join" className="rounded-full bg-emerald-500 px-4 py-2 font-semibold text-black hover:bg-emerald-400 transition">Join Now</a>
          </nav>
        </div>
      </header>

      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Unleash Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">Strength</span>
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Transform your body and mind with IronPulse’s expert trainers and dynamic workouts.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-black shadow-[0_0_40px_6px_rgba(16,185,129,0.35)] hover:shadow-[0_0_50px_12px_rgba(16,185,129,0.45)] transition"
            >
              Join Now
            </a>
            <a
              href="#plans"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/60 px-6 py-3 font-semibold text-white hover:bg-white/5 transition"
            >
              View Plans
            </a>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <a
        href="#join"
        className="fixed z-30 bottom-6 right-6 sm:bottom-8 sm:right-8 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-black shadow-[0_0_30px_8px_rgba(16,185,129,0.35)] hover:scale-105 transition"
      >
        Join Now
      </a>
    </section>
  );
}
