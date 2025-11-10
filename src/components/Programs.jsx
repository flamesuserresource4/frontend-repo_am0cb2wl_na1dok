import { Dumbbell, Heart, Flame } from 'lucide-react';

const cards = [
  {
    title: 'Strength Training',
    icon: Dumbbell,
    emoji: '🏋️‍♂️',
    desc: 'Build power with progressive overload and expert form coaching.',
    img: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Yoga & Flexibility',
    icon: Heart,
    emoji: '🧘‍♀️',
    desc: 'Improve mobility, balance, and mindfulness with guided flows.',
    img: 'https://images.unsplash.com/photo-1518609571773-39b7d303a83b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'HIIT & Functional',
    icon: Flame,
    emoji: '🔥',
    desc: 'Torch calories and boost endurance with dynamic circuits.',
    img: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-20 bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Programs</h2>
            <p className="text-white/70 mt-2">Three ways to level up — pick your path and explore.</p>
          </div>
          <a href="#programs" className="hidden sm:inline-flex rounded-full border border-emerald-400/60 px-4 py-2 text-sm hover:bg-white/5">Explore All</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="group rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-white/0 border border-white/10">
              <div className="relative h-44 overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute left-4 bottom-3 inline-flex items-center gap-2">
                  <span className="text-2xl" aria-hidden>{c.emoji}</span>
                  <span className="text-sm rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-300 border border-emerald-400/30">Featured</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-white/70">{c.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button className="rounded-full bg-emerald-500 px-4 py-2 text-black font-semibold hover:bg-emerald-400 transition">Explore</button>
                  <c.icon className="h-5 w-5 text-emerald-300/80" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
