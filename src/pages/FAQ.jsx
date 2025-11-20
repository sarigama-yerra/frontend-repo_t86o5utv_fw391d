import Navbar from '../components/Navbar'

const faqs = [
  { q: 'Koje vrste tereta prevozite?', a: 'Standardni paletizovani teret, prehrambeni proizvodi u kontrolisanoj temperaturi, ADR, kao i vangabaritne pošiljke u saradnji sa partnerima.' },
  { q: 'Da li nudite međunarodni transport?', a: 'Da, pokrivamo zemlje EU, UK, Švajcarsku i region Balkana uz pouzdanu mrežu partnera.' },
  { q: 'Kako mogu pratiti pošiljku?', a: 'Obezbeđujemo live tracking, statusne notifikacije i direktan kontakt sa dispečerom 24/7.' },
  { q: 'Koliko brzo mogu dobiti ponudu?', a: 'U proseku odgovaramo u roku od 30-60 minuta u radnom vremenu.' },
]

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#0b1722]">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold text-white text-center">FAQ</h1>
          <p className="text-[#e7e7e7] mt-2 text-center">Najčešća pitanja i odgovori</p>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 open:shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <summary className="cursor-pointer list-none text-white font-medium flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="ml-4 text-[#ee5e2a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-[#e7e7e7]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
