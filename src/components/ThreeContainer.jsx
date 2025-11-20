import Spline from '@splinetool/react-spline'
import ErrorBoundary from './ErrorBoundary'

export default function ThreeContainer() {
  return (
    <section className="relative py-20 bg-[#0b1722]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">3D kontejner u padu</h2>
            <p className="mt-3 text-[#e7e7e7]">
              Interaktivni 3D model kontejnera koji se elegantno spušta. Možete orbitirati i zumirati model.
            </p>
            <ul className="mt-6 space-y-2 text-[#e7e7e7]">
              <li>• Realistična animacija spuštanja</li>
              <li>• Glatke performanse</li>
              <li>• Potpuno responzivno</li>
            </ul>
          </div>
          <div className="h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-[#000] relative">
            <ErrorBoundary>
              <Spline scene="/spline/container.splinecode" />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  )
}
