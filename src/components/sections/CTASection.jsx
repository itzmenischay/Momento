
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-[140px]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(248,196,255,0.9) 0%, rgba(240,182,224,0.7) 55%, rgba(255,255,255,1) 100%)",
        }}
      />
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pure-canvas/50 blur-[90px]" />

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[8%] top-[22%] hidden lg:block"
      >
        <img
          src="/images/wedding_invite.png"
          alt=""
          className="w-[180px] rounded-xl shadow-event rotate-[-10deg]"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[8%] bottom-[18%] hidden lg:block"
      >
        <img
          src="/images/neon_birthday.png"
          alt=""
          className="w-[180px] rounded-xl shadow-sm rotate-[10deg]"
        />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="inline-flex rounded-full border border-midnight-ink/10 bg-pure-canvas/70 px-4 py-2 text-[14px] tracking-[-0.02em] text-graphite shadow-sm backdrop-blur-sm">
            Start your next celebration
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          custom={0.08}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 max-w-[820px] font-display text-[44px] md:text-[64px] font-medium leading-[0.96] tracking-[-0.03em] text-midnight-ink"
        >
          Your next celebration deserves more than a group chat.
        </motion.h2>

        <motion.p
          custom={0.14}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 max-w-[620px] text-[18px] leading-[1.45] tracking-[-0.02em] text-graphite"
        >
          Beautiful invitations, effortless RSVPs, and event pages people
          actually want to share. Bring everyone together beautifully.
        </motion.p>

        {/* CTA */}
        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <button
            className="bg-midnight-ink text-pure-canvas rounded-cta px-9 py-4 text-[15px] tracking-[-0.03em] shadow-sm hover:opacity-90 transition-opacity duration-300 font-button-label"
          >
            Start Planning
          </button>
        </motion.div>
        
        <motion.p
          custom={0.26}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 text-[14px] tracking-[-0.02em] text-slate"
        >
          Join 180K+ celebrations planned every month
        </motion.p>
      </div>
    </section>
  );
}
