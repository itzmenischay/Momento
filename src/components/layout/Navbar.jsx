export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-midnight-ink/90 backdrop-blur-md border-b border-white/5 shadow-2xl">
      <div className="flex justify-between items-center px-margin py-4 max-w-max-width mx-auto">
        <div className="font-hero-display text-headline-lg text-pure-canvas tracking-tighter italic font-black">
          Momento
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-warm-sand font-bold border-b-2 border-warm-sand pb-1 font-button-label text-button-label"
            href="#"
          >
            Weddings
          </a>
          <a
            className="text-silver font-medium hover:text-pure-canvas transition-colors font-button-label text-button-label"
            href="#"
          >
            Birthdays
          </a>
          <a
            className="text-silver font-medium hover:text-pure-canvas transition-colors font-button-label text-button-label"
            href="#"
          >
            Corporate
          </a>
          <a
            className="text-silver font-medium hover:text-pure-canvas transition-colors font-button-label text-button-label"
            href="#"
          >
            Gala
          </a>
        </div>
        <button className="bg-pure-canvas text-midnight-ink px-6 py-2 rounded-cta font-button-label text-button-label hover:opacity-80 transition-opacity active:scale-95">
          Create Event
        </button>
      </div>
    </nav>
  );
}
