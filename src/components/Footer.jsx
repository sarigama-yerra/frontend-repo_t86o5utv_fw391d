export default function Footer() {
  return (
    <footer className="bg-[#0b1722] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#e7e7e7] text-sm">© {new Date().getFullYear()} BlueLine Logistics. Sva prava zadržana.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-[#e7e7e7] hover:text-white">Politika privatnosti</a>
            <a href="#" className="text-[#e7e7e7] hover:text-white">Uslovi korišćenja</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
