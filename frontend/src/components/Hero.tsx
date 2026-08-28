import { motion } from 'framer-motion';

const HERO_IMAGE = "/hero-image.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-page items-center gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16 lg:pb-28 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}>
          
          <p className="text-sm text-muted">Portable light, no cord, no compromise</p>
          <h1 className="mt-5 font-display text-[3.25rem] leading-[0.95] tracking-tight text-ink sm:text-[4.5rem] lg:text-[5.75rem]">
            Halo
            <span className="block text-ember">Field Lamp</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            A rechargeable lamp that carries the warmth of a candle to wherever
            the evening happens — the balcony, the tent, the long table outside.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#contact"
              className="rounded-full bg-ember px-7 py-3.5 text-sm font-medium text-surface transition-[background-color,transform] duration-150 ease-out hover:bg-[#a86118] active:scale-[0.98]">
              
              Order the Halo
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors duration-150 ease-out hover:decoration-ember">
              
              See the specs
            </a>
          </div>
        </motion.div>

        <motion.figure
          className="relative"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.06, ease: [0.23, 1, 0.32, 1] }}>
          
          <img
            src={HERO_IMAGE}
            alt="The Halo Field Lamp: a sand-coloured aluminium cylinder with a glowing frosted glass dome and a leather carry loop."
            className="w-full rounded-[1.75rem] bg-surface object-cover shadow-[0_24px_60px_-32px_rgba(28,25,23,0.35)]"
            width={936}
            height={1170} />
        </motion.figure>
      </div>
    </section>
  );
}
