import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

export function SocialProof() {
  return (
    <section className="py-margin bg-pure-canvas overflow-hidden pt-0 pb-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={transition}
        className="max-w-max-width mx-auto px-margin border-y border-silver/20 py-8 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <p className="font-ui-emphasis text-ui-emphasis text-slate">
          Trusted for every kind of celebration
        </p>
        <div className="flex items-baseline gap-2">
          <span className="font-numeral-xl text-headline-lg text-midnight-ink">
            1.2M+
          </span>
          <span className="font-body-md text-body-md text-ash">
            invitations sent worldwide
          </span>
        </div>
        <div className="flex gap-8 opacity-40 grayscale">
          <span className="font-hero-display text-headline-md">VOGUE</span>
          <span className="font-hero-display text-headline-md">ELLE</span>
          <span className="font-hero-display text-headline-md">BAZAAR</span>
        </div>
      </motion.div>
    </section>
  );
}
