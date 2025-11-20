import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Simple scroll-controlled video component
function ScrollVideo({ src, poster }) {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.pause()

    const handle = scrollYProgress.on('change', (v) => {
      if (video.duration && !isNaN(video.duration)) {
        video.currentTime = v * video.duration
      }
    })
    return () => handle()
  }, [scrollYProgress])

  return (
    <div ref={containerRef} className="relative h-[140vh] md:h-[160vh]">
      <div className="sticky top-24 md:top-28 h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>
    </div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -60])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.7])

  const poster = 'https://images.unsplash.com/photo-1494415859740-21e878dd929d?q=80&w=1600&auto=format&fit=crop'
  const videoSrc = 'https://storage.googleapis.com/coverr-main/mp4/Truck%20Driving%20on%20a%20Highway.mp4'

  return (
    <section className="pt-28 bg-[#0b1722] relative">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(0,58,117,0.35),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_0%,rgba(238,94,42,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div style={{ y, opacity }} className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            End-to-end logistika kamiona
          </h1>
          <p className="mt-4 text-[#e7e7e7] text-lg">
            Transport robe drumski • intermodalni • brzi carinski procesi • praćenje u realnom vremenu
          </p>
          
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#kontakt" className="px-5 py-3 rounded-xl bg-[#ee5e2a] text-white font-medium shadow-[0_10px_30px_rgba(238,94,42,0.35)] hover:shadow-[0_16px_40px_rgba(238,94,42,0.45)] transition-shadow">Zatraži ponudu</a>
            <a href="#usluge" className="px-5 py-3 rounded-xl bg-white/10 text-white font-medium border border-white/10 hover:bg-white/15">Saznaj više</a>
          </div>
        </motion.div>

        <div className="mt-10">
          <ScrollVideo src={videoSrc} poster={poster} />
        </div>
      </div>
    </section>
  )
}
