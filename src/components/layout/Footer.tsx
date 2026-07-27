import Link from "next/link";
import { Logo } from "./Logo";
import { navLinks, storeInfo } from "@/data/store";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23 7.5s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.9 4 12 4 12 4h0s-4.9 0-7.7.2c-.5.1-1.5.1-2.4 1C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.2v1.6c0 1.9.2 3.7.2 3.7s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 7.5.2 7.5.2s4.9 0 7.7-.2c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.7v-1.6c0-1.8-.2-3.7-.2-3.7zM9.8 14.8V8.9l6.2 2.95-6.2 2.95z" />
    </svg>
  );
}

const shopLinks = navLinks.filter((l) => l.label !== "Home");

const customerService = [
  { label: "Contact", href: "/contact" },
  { label: "Store Location", href: "/contact#location" },
  { label: "Delivery Information", href: "/delivery" },
  { label: "Returns and Exchanges", href: "/returns" },
  { label: "Careers", href: "/careers" },
];

const aboutLinks = [
  { label: "About Us", href: "/about" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-hl-border bg-hl-off-white mt-auto">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Logo size="sm" />
            <p className="mt-4 text-sm text-hl-muted leading-relaxed max-w-xs">
              Fashion, home, beauty and everyday essentials under one roof at
              Turfloop Plaza, Mankweng.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 border border-hl-border hover:border-hl-black"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 border border-hl-border hover:border-hl-black"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 border border-hl-border hover:border-hl-black"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[11px] tracking-[0.16em] uppercase mb-4">Shop</h2>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-hl-muted hover:text-hl-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] tracking-[0.16em] uppercase mb-4">
              Customer Service
            </h2>
            <ul className="space-y-2.5">
              {customerService.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-hl-muted hover:text-hl-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] tracking-[0.16em] uppercase mb-4">
              About & Legal
            </h2>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-hl-muted hover:text-hl-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h2 className="text-[11px] tracking-[0.16em] uppercase mb-3">
                Visit us
              </h2>
              <p className="text-sm text-hl-muted leading-relaxed">
                {storeInfo.locationName}
                <br />
                {storeInfo.addressLines.join(", ")}
              </p>
              <p className="text-sm text-hl-muted mt-2">
                <a href={`tel:${storeInfo.phone}`} className="hover:text-hl-black">
                  {storeInfo.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-hl-border flex flex-col sm:flex-row gap-3 justify-between text-xs text-hl-muted">
          <p>© {new Date().getFullYear()} Helen Lifestyle. All rights reserved.</p>
          <p>
            <a
              href={storeInfo.website}
              className="hover:text-hl-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              helenlifestyle.co.za
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
