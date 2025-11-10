import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 19,
    features: ['24/7 Access', 'Group Classes', 'Locker Access'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: 39,
    features: ['Personal Training', 'Nutrition Plan', '24/7 Access'],
    highlight: true,
  },
  {
    name: 'Elite',
    price: 69,
    features: ['1:1 Coaching', 'Custom Nutrition', 'Recovery Sessions'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="plans" className="relative py-20 bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Membership Plans</h2>
          <p className="text-white/70 mt-2">Choose the plan that fits your goals.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border ${
                p.highlight
                  ? 'border-emerald-400/50 bg-emerald-400/5 shadow-[0_0_40px_6px_rgba(16,185,129,0.25)]'
                  : 'border-white/10 bg-white/5'
              } p-6`}
            >
              {p.highlight && (
                <div className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-black">
                  <Star className="h-3.5 w-3.5" /> Pro Recommended
                </div>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-extrabold">${p.price}</span>
                <span className="text-white/60 mb-1">/mo</span>
              </div>
              <ul className="mt-5 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/90">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-full px-4 py-2 font-semibold transition ${
                p.highlight ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'border border-white/20 hover:bg-white/5'
              }`}>Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
