import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Truck, Boxes } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Početna' },
  { to: '/fleet', label: 'Flota' },
  { to: '/gallery', label: 'Galerija' },
  { to: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-[#152b3d]/40 backdrop-blur supports-[backdrop-filter]:bg-[#152b3d]/30 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between px-5 py-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-[#ee5e2a] text-white grid place-items-center shadow-[0_10px_20px_rgba(238,94,42,0.45)]">
                <Truck size={22} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-semibold">BlueLine Logistics</span>
                <span className="text-xs text-[#e7e7e7]">Road • Sea • Rail</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `px-4 py-2 rounded-xl text-sm transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-[#e7e7e7] hover:text-white hover:bg-white/5'}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg bg-white/10">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-[#e7e7e7] hover:text-white hover:bg-white/5'}`}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
