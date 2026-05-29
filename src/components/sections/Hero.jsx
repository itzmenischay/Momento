import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "../../utils/cn";
import heroImg from "../../assets/images/heroimg.png";
import heroCardImg from "../../assets/images/herocardimg.png";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

export function Hero() {
  return (
    <section className="relative h-[700px] mt-18 overflow-hidden flex items-center">
      {/* Full-bleed Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Rooftop Celebration"
          className="w-full h-full object-cover hero-parallax"
          src={heroImg}
        />
        <div
          className="absolute inset-0 opacity-30 bg-party-pink"
        />
        <div className="absolute inset-0 bg-midnight-ink/30" />
      </div>

      <div className="relative z-10 max-w-max-width mx-auto px-margin w-full grid grid-cols-1 md:grid-cols-2 gap-gutter items-center pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={transition}
          className="max-w-lg"
        >
          <h1 className="font-hero-display text-headline-lg md:text-numeral-xl md:leading-[100px] text-pure-canvas mb-6 tracking-tight">
            Your next unforgettable moment starts now.
          </h1>
          <p className="font-subheading text-subheading text-pure-canvas/90 mb-8">
            Bring people together beautifully with editorial invitations and
            seamless event management.
          </p>
          <button className="bg-midnight-ink text-pure-canvas px-8 py-4 rounded-cta font-button-label text-button-label hover:opacity-90 transition-all shadow-xl">
            Start Planning
          </button>
        </motion.div>

        {/* Floating UI Elements */}
        <div className="hidden md:block relative h-full">
          {/* Tilted Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...transition, delay: 0.2 }}
            className="absolute top-0 right-10 bg-pure-canvas p-6 rounded-[12px] border border-midnight-ink shadow-2xl scattered-card rotate-[12deg] w-64 animate-drift"
            style={{ "--rot": "12deg", animationDelay: "0s" }}
          >
            <div className="w-full aspect-[3/4] bg-surface-container mb-4 overflow-hidden rounded-lg">
              <img
                alt="Wedding Preview"
                src={heroCardImg}
              />
            </div>
            <div className="space-y-1">
              <div className="font-ui-emphasis text-ui-emphasis">
                The Harrison Wedding
              </div>
              <div className="font-body-md text-body-md text-slate">
                June 24, 2024
              </div>
            </div>
          </motion.div>

          {/* RSVP Notification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...transition, delay: 0.4 }}
            className="absolute bottom-10 -left-10 bg-pure-canvas py-3 px-5 rounded-full border border-silver shadow-2xl flex items-center gap-3 animate-drift"
            style={{ "--rot": "-5deg", animationDelay: "1s" }}
          >
            <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center text-pure-canvas">
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
            <div className="font-ui-emphasis text-ui-emphasis">
              Sarah Mitchell is attending!
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
