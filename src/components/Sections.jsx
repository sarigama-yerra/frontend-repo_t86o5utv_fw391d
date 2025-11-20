import { Plane, Ship, Truck, ShieldCheck, Globe2, Timer, Sparkles, Building2 } from 'lucide-react'

export function Services() {
  const items = [
    { icon: <Truck className="text-[#ee5e2a]" />, title: 'Drumski transport', desc: 'FTL / LTL, specijalni transporti, ADR.' },
    { icon: <Ship className="text-[#ee5e2a]" />, title: 'Pomorski transport', desc: 'Kontejnerski prevoz i ro-ro rešenja.' },
    { icon: <Plane className="text-[#ee5e2a]" />, title: 'Avio transport', desc: 'Ekspres isporuke i prioritetni tereti.' },
    { icon: <ShieldCheck className="text-[#ee5e2a]" />, title: 'Osiguranje', desc: 'Sveobuhvatno pokriće i zaštita robe.' },
    { icon: <Globe2 className="text-[#ee5e2a]" />, title: 'Carina i logistika', desc: 'Dokumentacija, špedicija i carinski postupci.' },
    { icon: <Timer className="text-[#ee5e2a]" />, title: 'Praćenje 24/7', desc: 'Live tracking i statusne notifikacije.' },
  ]

  return (
    <section id="usluge" className="relative py-20 bg-[#0b1722]">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Naše usluge</h2>
        <p className="text-center text-[#e7e7e7] mt-2">Kompletno rešenje za lanac snabdevanja</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-[#003a75]/20">{it.icon}</div>
              <h3 className="mt-4 text-white font-semibold">{it.title}</h3>
              <p className="mt-1 text-[#e7e7e7] text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FleetShowcase() {
  const fleet = [
    { title: 'Tegljači Euro 6', desc: 'Niska emisija, vrhunska pouzdanost', img: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Hladnjače', desc: 'Kontrolisana temperatura za sve vrste robe', img: 'https://images.unsplash.com/photo-1607863780723-5fcba9c8e8ab?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Mega prikolice', desc: 'Za volumenski zahtevne pošiljke', img: 'https://images.unsplash.com/photo-1516233758813-1d03942e633b?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section className="relative py-20 bg-[#0b1722]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Flota</h2>
          <span className="text-[#e7e7e7]">50+ jedinica u pogonu</span>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {fleet.map((f, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="h-52 overflow-hidden">
                <img src={f.img} alt={f.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{f.title}</h3>
                <p className="text-[#e7e7e7] text-sm mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GlassMini() {
  const items = [
    { title: '99.2% na vreme', desc: 'Preciznost isporuke', color: '#ee5e2a' },
    { title: 'EU + Balkan', desc: 'Pokrivenost ruta', color: '#003a75' },
    { title: '24/7 NOC', desc: 'Tim za praćenje', color: '#e7e7e7' },
  ]
  return (
    <section className="relative py-10 bg-[#0b1722]">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-4">
        {items.map((i, idx) => (
          <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <div className="text-sm" style={{ color: i.color }}>{i.title}</div>
            <div className="mt-1 text-2xl font-semibold text-white">{i.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
