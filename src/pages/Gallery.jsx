import Navbar from '../components/Navbar'

export default function Gallery() {
  const images = Array.from({ length: 15 }).map((_, i) => `https://source.unsplash.com/random/1200x800?logistics,truck,container&sig=${i}`)
  return (
    <div className="min-h-screen bg-[#0b1722]">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold text-white">Galerija</h1>
          <p className="text-[#e7e7e7] mt-2">Pogledajte deo naše svakodnevice na putu</p>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-8 [column-fill:_balance]"><div className="grid gap-4">
            {images.map((src, i) => (
              <img key={i} src={src} className="mb-4 w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md" />
            ))}
          </div></div>
        </section>
      </main>
    </div>
  )
}
