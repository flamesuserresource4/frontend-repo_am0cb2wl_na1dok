import { useState } from 'react';

const trainers = [
  {
    name: 'Ava Stone',
    role: 'Strength & Conditioning',
    bio: 'Powerlifting specialist with a focus on safe, sustainable progression.',
    img: 'https://images.unsplash.com/photo-1554298063-9c9d4d7d95f6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Maya Chen',
    role: 'Yoga & Mobility',
    bio: 'Combines Vinyasa and mobility drills to unlock full-body range.',
    img: 'https://images.unsplash.com/photo-1533399416856-3b7a3c6b5f37?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Leo Carter',
    role: 'HIIT & MetCon',
    bio: 'High-energy coach crafting efficient, sweat-drenched sessions.',
    img: 'https://images.unsplash.com/photo-1571907480495-9d7b0ae3e1f7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Noah Patel',
    role: 'Functional Training',
    bio: 'Evidence-based movement patterns for real-world performance.',
    img: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Trainers() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section id="trainers" className="relative py-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Trainers</h2>
            <p className="text-white/70 mt-2">Meet the experts behind your transformation.</p>
          </div>
          <a href="#team" className="hidden sm:inline-flex rounded-full border border-emerald-400/60 px-4 py-2 text-sm hover:bg-white/5">Meet the Team</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <div
              key={t.name}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
            >
              <img src={t.img} alt={t.name} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className={`absolute inset-x-0 bottom-0 p-4 transition-transform duration-300 ${hover===i?'-translate-y-0':'translate-y-1'}`}>
                <h3 className="text-lg font-bold">{t.name}</h3>
                <p className="text-emerald-300 text-sm">{t.role}</p>
                <p className="mt-2 text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
