import { motion } from "framer-motion";
import { Sparkles, Image as ImageIcon } from "lucide-react";
import { cn } from "../../utils/cn";
import occasionImg1 from "../../assets/images/occassionimg1.png";
import occasionImg2 from "../../assets/images/ocassionimg2.png";
import occasionImg3 from "../../assets/images/ocassionimg3.png";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

export function Occasion() {
  return (
    <section className="py-section-gap relative overflow-hidden bg-sky-periwinkle">
      <div className="max-w-max-width mx-auto px-margin grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={transition}
        >
          <h2 className="font-section-title text-section-title text-midnight-ink mb-6">
            For Every Occasion
          </h2>
          <p className="font-subheading text-subheading text-slate mb-8 max-w-md">
            From intimate dinner parties to grand galas, Momento provides the
            architectural framework to showcase your event's unique spirit. Our
            editorial layouts transform simple gatherings into curated
            experiences.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-midnight-ink flex items-center justify-center group-hover:bg-midnight-ink group-hover:text-pure-canvas transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-ui-emphasis text-ui-emphasis">
                Curated AI Copywriting
              </span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-midnight-ink flex items-center justify-center group-hover:bg-midnight-ink group-hover:text-pure-canvas transition-colors">
                <ImageIcon className="w-5 h-5" />
              </div>
              <span className="font-ui-emphasis text-ui-emphasis">
                Photography First Design
              </span>
            </div>
          </div>
        </motion.div>

        {/* Scattered Cards Area */}
        <div className="relative h-[450px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...transition, delay: 0.1 }}
            className="absolute top-0 right-0 bg-pure-canvas p-2 border border-midnight-ink rounded-[12px] shadow-lg scattered-card -rotate-[10deg] w-48 z-10 overflow-hidden animate-drift"
            style={{ "--rot": "-10deg", animationDelay: "0s" }}
          >
            <img
              className="w-full aspect-[3/4] object-cover rounded-lg"
              alt="A sophisticated birthday brunch scene"
              src={occasionImg1}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...transition, delay: 0.3 }}
            className="absolute top-10 left-20 bg-pure-canvas p-2 border border-midnight-ink rounded-[12px] shadow-lg scattered-card rotate-[0deg] w-48 z-20 overflow-hidden animate-drift"
            style={{ "--rot": "0deg", animationDelay: "0.5s" }}
          >
            <img
              className="w-full aspect-[3/4] object-cover rounded-lg"
              alt="A moody, elegant corporate gala"
              src={occasionImg2}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...transition, delay: 0.5 }}
            className="absolute bottom-0 right-20 bg-pure-canvas p-2 border border-midnight-ink rounded-[12px] shadow-lg scattered-card rotate-[12deg] w-48 z-30 overflow-hidden animate-drift"
            style={{ "--rot": "12deg", animationDelay: "1s" }}
          >
            <img
              className="w-full aspect-[3/4] object-cover rounded-lg"
              alt="An artistic garden party"
              src={occasionImg3}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
