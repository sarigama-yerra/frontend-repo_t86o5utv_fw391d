import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ThreeContainer from './components/ThreeContainer'
import { Services, FleetShowcase, GlassMini } from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1722]">
      <Navbar />
      <main>
        <Hero />
        <GlassMini />
        <ThreeContainer />
        <Services />
        <FleetShowcase />
        <section id="kontakt" className="relative py-20 bg-[#0b1722]">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#003a75]/30 to-[#152b3d]/50 p-8 md:p-12 backdrop-blur-md">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white">Spremni za sledeću isporuku?</h3>
                  <p className="text-[#e7e7e7] mt-2">Pošaljite nam detalje pošiljke i naš tim će vam se javiti u najkraćem roku.</p>
                  <ul className="mt-6 text-[#e7e7e7] space-y-1">
                    <li>• FTL / LTL • Hladnjače • ADR</li>
                    <li>• EU + Balkan pokrivenost</li>
                    <li>• Praćenje 24/7</li>
                  </ul>
                </div>
                <form className="grid grid-cols-1 gap-4">
                  <input className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-[#e7e7e7]" placeholder="Ime i prezime" />
                  <input className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-[#e7e7e7]" placeholder="Email" />
                  <input className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-[#e7e7e7]" placeholder="Relacija (npr. Beograd → Berlin)" />
                  <textarea className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-[#e7e7e7]" placeholder="Opis tereta" rows="4" />
                  <button type="button" className="mt-2 px-5 py-3 rounded-xl bg-[#ee5e2a] text-white font-medium shadow-[0_10px_30px_rgba(238,94,42,0.35)]">Pošalji upit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
