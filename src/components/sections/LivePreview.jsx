import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import livePreviewImg from "../../assets/images/livepreviewimg.png";
import person1 from "../../assets/images/person1.png";
import person2 from "../../assets/images/person2.png";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

export function LivePreview() {
  return (
    <section className="py-section-gap px-margin bg-pure-canvas">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={transition}
        className="max-w-max-width mx-auto bg-surface-container-low rounded-[24px] overflow-hidden border border-silver/20 flex flex-col md:flex-row shadow-2xl"
      >
        {/* Left: Mockup Image */}
        <div className="md:w-1/2 relative min-h-[450px]">
          <img
            className="w-full h-full object-cover hero-parallax"
            alt="A wide-angle interior shot of a minimalist, high-end rooftop dining setup."
            src={livePreviewImg}
          />
          <div className="absolute top-8 left-8 bg-pure-canvas/80 backdrop-blur-md px-4 py-2 rounded-full border border-midnight-ink">
            <span className="font-pill-label text-pill-label">Live Preview</span>
          </div>
        </div>

        {/* Right: Live Updates */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="font-section-title text-section-title mb-2">
              Rooftop Summer Dinner
            </h2>
            <p className="text-slate font-subheading">Hosted by Julian & Amara</p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-pure-canvas rounded-[12px] border border-silver shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-pure-canvas object-cover"
                    src={person1}
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-pure-canvas object-cover"
                    src={person2}
                  />
                </div>
                <span className="font-ui-emphasis text-ui-emphasis">
                  +42 Attending
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="bg-[#31c431] text-white px-3 py-1 rounded-full text-[10px] font-bold">
                  GOING
                </div>
                <div className="bg-[#ffae00] text-white px-3 py-1 rounded-full text-[10px] font-bold">
                  MAYBE
                </div>
                <div className="bg-[#FF0000] text-white px-3 py-1 rounded-full text-[10px] font-bold">
                  CAN'T GO
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-pure-canvas rounded-[12px] border border-silver">
                <div className="text-ash font-caption-sm mb-1 uppercase">
                  RSVPs
                </div>
                <div className="text-headline-md font-numeral-xl text-midnight-ink">
                  84%
                </div>
                <div className="text-[#31c431] font-pill-label text-pill-label mt-2">
                  ↑ 12 today
                </div>
              </div>
              <div className="p-6 bg-pure-canvas rounded-[12px] border border-silver">
                <div className="text-ash font-caption-sm mb-1 uppercase">
                  Views
                </div>
                <div className="text-headline-md font-numeral-xl text-midnight-ink">
                  1.4k
                </div>
                <div className="text-[#ffae00] font-pill-label text-pill-label mt-2">
                  Trending
                </div>
              </div>
            </div>

            <button className="w-full bg-midnight-ink text-pure-canvas py-4 rounded-cta font-button-label text-button-label hover:scale-[1.02] transition-transform shadow-xl">
              Manage Event Dashboard
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
