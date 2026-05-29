import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveLeft, MoveRight, X } from "lucide-react";
import img1 from "../../assets/images/galleryimg1.png";
import img2 from "../../assets/images/galleryimg2.png";
import img3 from "../../assets/images/galleryimg3.png";
import img4 from "../../assets/images/galleryimg4.png";
const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

export function Gallery() {
  const scrollRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-section-gap bg-midnight-ink text-pure-canvas">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={transition}
        className="max-w-max-width mx-auto px-margin mb-12 flex justify-between items-end"
      >
        <div>
          <h2 className="font-section-title text-section-title">The Gallery</h2>
          <p className="text-silver mt-2">
            Choose your foundation, then make it yours.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            className="w-12 h-12 rounded-full border border-silver flex items-center justify-center hover:bg-pure-canvas hover:text-midnight-ink transition-colors"
            onClick={scrollLeft}
          >
            <MoveLeft className="w-5 h-5" />
          </button>
          <button
            className="w-12 h-12 rounded-full border border-silver flex items-center justify-center hover:bg-pure-canvas hover:text-midnight-ink transition-colors"
            onClick={scrollRight}
          >
            <MoveRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 no-scrollbar px-margin max-w-max-width mx-auto snap-x-mandatory scroll-smooth pb-8"
      >
        {/* Template Item 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={transition}
          className="flex-none w-[320px] group cursor-pointer snap-start"
          onClick={() => setSelectedImg(img1)}
        >
          <div className="aspect-[3/4] bg-graphite rounded-[12px] overflow-hidden mb-4 border border-silver/20 relative shadow-2xl">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={img1}
            />
            <div className="absolute inset-0 bg-midnight-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-pure-canvas text-midnight-ink px-6 py-2 rounded-cta font-button-label text-button-label">
                Preview
              </span>
            </div>
          </div>
          <h3 className="font-ui-emphasis text-ui-emphasis">Minimalist Manor</h3>
          <p className="text-ash text-caption-sm">Vogue Series • Editorial</p>
        </motion.div>

        {/* Template Item 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...transition, delay: 0.1 }}
          className="flex-none w-[320px] group cursor-pointer snap-start"
          onClick={() => setSelectedImg(img2)}
        >
          <div className="aspect-[3/4] bg-graphite rounded-[12px] overflow-hidden mb-4 border border-silver/20 relative shadow-2xl">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={img2}
            />
            <div className="absolute inset-0 bg-midnight-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-pure-canvas text-midnight-ink px-6 py-2 rounded-cta font-button-label text-button-label">
                Preview
              </span>
            </div>
          </div>
          <h3 className="font-ui-emphasis text-ui-emphasis">Art Haus</h3>
          <p className="text-ash text-caption-sm">Bauhaus Series • Contemporary</p>
        </motion.div>

        {/* Template Item 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...transition, delay: 0.2 }}
          className="flex-none w-[320px] group cursor-pointer snap-start"
          onClick={() => setSelectedImg(img3)}
        >
          <div className="aspect-[3/4] bg-graphite rounded-[12px] overflow-hidden mb-4 border border-silver/20 relative shadow-2xl">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={img3}
            />
            <div className="absolute inset-0 bg-midnight-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-pure-canvas text-midnight-ink px-6 py-2 rounded-cta font-button-label text-button-label">
                Preview
              </span>
            </div>
          </div>
          <h3 className="font-ui-emphasis text-ui-emphasis">Midnight Soiree</h3>
          <p className="text-ash text-caption-sm">After Hours • Premium</p>
        </motion.div>

        {/* Template Item 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...transition, delay: 0.3 }}
          className="flex-none w-[320px] group cursor-pointer snap-start"
          onClick={() => setSelectedImg(img4)}
        >
          <div className="aspect-[3/4] bg-graphite rounded-[12px] overflow-hidden mb-4 border border-silver/20 relative shadow-2xl">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={img4}
            />
            <div className="absolute inset-0 bg-midnight-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-pure-canvas text-midnight-ink px-6 py-2 rounded-cta font-button-label text-button-label">
                Preview
              </span>
            </div>
          </div>
          <h3 className="font-ui-emphasis text-ui-emphasis">Skylight Social</h3>
          <p className="text-ash text-caption-sm">Urban Series • Vibrant</p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-midnight-ink/90 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex justify-end mb-4">
                <button
                  className="text-pure-canvas hover:text-silver transition-colors"
                  onClick={() => setSelectedImg(null)}
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              <img
                src={selectedImg}
                alt="Enlarged gallery preview"
                className="w-auto h-auto max-w-full max-h-[80vh] rounded-[12px] shadow-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
