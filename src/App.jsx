import { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { SocialProof } from "./components/sections/SocialProof";
import { Occasion } from "./components/sections/Occasion";
import { Gallery } from "./components/sections/Gallery";
import { LivePreview } from "./components/sections/LivePreview";
import { CtaSection } from "./components/sections/CTASection";

function App() {
  // Scroll restoration: automatic scroll-to-top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root>
      <div className="bg-pure-canvas text-midnight-ink font-body-md overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <SocialProof />
          <Occasion />
          <Gallery />
          <LivePreview />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
