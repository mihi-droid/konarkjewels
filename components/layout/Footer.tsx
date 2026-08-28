import Link from "next/link";
import { footerLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-edge py-16 grid grid-cols-2 gap-10 lg:grid-cols-6">
        <div className="col-span-2 lg:col-span-2">
          <span className="font-display text-2xl tracking-widest">KONARK</span>
          <p className="mt-4 text-body-sm text-text-muted-inverse max-w-xs">
            Fine jewellery inspired by the Sun Temple of Konark — every piece cut, cast, and
            finished by hand.
          </p>
          <form className="mt-6 flex max-w-sm border border-ivory/25">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email"
              className="w-full bg-transparent px-3 py-2.5 text-body-sm placeholder:text-text-muted-inverse focus:outline-none"
            />
            <button type="submit" className="px-4 text-caption uppercase tracking-widest text-gold">
              Join
            </button>
          </form>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="text-caption uppercase tracking-widest text-text-muted-inverse mb-4">
              {heading}
            </h3>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-body-sm hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-edge py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-text-muted-inverse">
          <span>© {new Date().getFullYear()} Konark Jewels. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>UPI</span>
            <span>Razorpay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
