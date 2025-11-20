import Navbar from '../components/Navbar'

export default function Fleet() {
  return (
    <div className="min-h-screen bg-[#0b1722]">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold text-white">Naša flota</h1>
          <p className="text-[#e7e7e7] mt-2 max-w-2xl">Specijalizovani vozni park spreman za sve tipove tereta: standard, mega, hladnjače, ADR i van-gabarit.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
                <img src={`https://source.unsplash.com/random/800x600?truck&sig=${i}`} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-white font-semibold">Vozilo #{i + 1}</h3>
                  <p className="text-[#e7e7e7] text-sm mt-1">Euro 6 • Telematika • Održavanje po planu</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
