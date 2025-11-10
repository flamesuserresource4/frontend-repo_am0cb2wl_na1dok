import { Star, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Chris',
    quote: 'I dropped 10% body fat and feel stronger than ever. The energy here is unreal!',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Sam',
    quote: 'Trainers who actually care. The Pro plan changed the game for me.',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Jordan',
    quote: 'HIIT classes are intense but addictive. Facilities are top-notch.',
    img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop',
    rating: 4,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 text-emerald-400">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-emerald-400" />
      ))}
    </div>
  );
}

function Testimonials() {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative py-20 bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">What Our Members Say</h2>
        <div ref={ref} className="mt-10 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mx-auto h-16 w-16 overflow-hidden rounded-full border border-white/20">
            <img src={t.img} alt={t.name} className="h-full w-full object-cover" />
          </div>
          <div className="mt-4 flex justify-center">
            <Stars count={t.rating} />
          </div>
          <p className="mt-4 text-white/80 italic">“{t.quote}”</p>
          <p className="mt-2 text-white/60">— {t.name}</p>
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                aria-label={`Go to slide ${i + 1}`}
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${index === i ? 'bg-emerald-400' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  const images = [
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559136653-6623c1b21db1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop',
  ];
  return (
    <section className="relative py-20 bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center">Facilities</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10">
              <img src={src} alt="Facility" className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/40">
                <span className="h-2.5 w-2.5 rounded-[2px] bg-emerald-400" />
              </span>
              <span className="font-extrabold tracking-tight text-xl">IronPulse</span>
            </div>
            <p className="mt-3 text-white/70 max-w-xs">High-performance training with modern facilities and coaches that care.</p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#programs" className="hover:text-white">Programs</a></li>
              <li><a href="#trainers" className="hover:text-white">Trainers</a></li>
              <li><a href="#plans" className="hover:text-white">Plans</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>Email: hello@ironpulse.fit</li>
              <li>Phone: (555) 123-4567</li>
              <li>Location: 123 Power Ave, Fit City</li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Instagram className="h-5 w-5" /></a>
              <a aria-label="Facebook" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Facebook className="h-5 w-5" /></a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3">Stay Fit with Us</h4>
            <form className="flex gap-2" onSubmit={(e)=>e.preventDefault()}>
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <input
                  type="email"
                  required
                  className="w-full rounded-xl bg-white/5 pl-10 pr-4 py-3 outline-none border border-white/10 focus:border-emerald-400 placeholder:text-white/40"
                  placeholder="Your email"
                />
              </div>
              <button className="rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-black hover:bg-emerald-400">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} IronPulse. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function TestimonialsFacilitiesFooter() {
  return (
    <>
      <Testimonials />
      <Facilities />
      <Footer />
    </>
  );
}
