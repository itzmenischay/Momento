export function Footer() {
  return (
    <footer className="bg-pure-canvas border-t border-silver">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin max-w-max-width mx-auto w-full pt-section-gap pb-margin">
        <div className="md:col-span-1">
          <div className="font-hero-display text-headline-md text-midnight-ink mb-4 italic font-black">
            Momento
          </div>
          <p className="text-slate font-body-md max-w-[200px]">
            Bring people together beautifully. The modern standard for events.
          </p>
        </div>
        <div>
          <h4 className="font-ui-emphasis text-ui-emphasis mb-6">Product</h4>
          <ul className="space-y-4">
            <li>
              <a
                className="font-pill-label text-pill-label text-slate hover:text-midnight-ink hover:underline decoration-1 underline-offset-4"
                href="#"
              >
                Templates
              </a>
            </li>
            <li>
              <a
                className="font-pill-label text-pill-label text-slate hover:text-midnight-ink hover:underline decoration-1 underline-offset-4"
                href="#"
              >
                RSVP Tracking
              </a>
            </li>
            <li>
              <a
                className="font-pill-label text-pill-label text-slate hover:text-midnight-ink hover:underline decoration-1 underline-offset-4"
                href="#"
              >
                Registry
              </a>
            </li>
            <li>
              <a
                className="font-pill-label text-pill-label text-slate hover:text-midnight-ink hover:underline decoration-1 underline-offset-4"
                href="#"
              >
                Messaging
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-ui-emphasis text-ui-emphasis mb-6">Company</h4>
          <ul className="space-y-4">
            <li>
              <a
                className="font-pill-label text-pill-label text-slate hover:text-midnight-ink hover:underline decoration-1 underline-offset-4"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="font-pill-label text-pill-label text-slate hover:text-midnight-ink hover:underline decoration-1 underline-offset-4"
                href="#"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className="font-pill-label text-pill-label text-slate hover:text-midnight-ink hover:underline decoration-1 underline-offset-4"
                href="#"
              >
                Press
              </a>
            </li>
            <li>
              <a
                className="font-pill-label text-pill-label text-slate hover:text-midnight-ink hover:underline decoration-1 underline-offset-4"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-ui-emphasis text-ui-emphasis mb-6">Legal</h4>
          <ul className="space-y-4">
            <li>
              <a
                className="font-pill-label text-pill-label text-slate hover:text-midnight-ink hover:underline decoration-1 underline-offset-4"
                href="#"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                className="font-pill-label text-pill-label text-slate hover:text-midnight-ink hover:underline decoration-1 underline-offset-4"
                href="#"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                className="font-pill-label text-pill-label text-slate hover:text-midnight-ink hover:underline decoration-1 underline-offset-4"
                href="#"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-max-width mx-auto px-margin py-8 border-t border-silver/10">
        <p className="text-ash font-body-md text-center md:text-left">
          © 2024 Momento Editorial Events. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
