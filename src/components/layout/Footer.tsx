import Image from "next/image";
import Link from "next/link";
import { logoUrl } from "@/lib/data/galleryPhotos";

export function Footer() {
  return (
    <footer className="bg-deep text-whitecap/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-3 sm:px-6">
        <div>
          <Image
            src={logoUrl}
            alt="MeShell Cookies"
            width={180}
            height={64}
            className="mb-4 h-16 w-auto rounded-lg opacity-90 brightness-110 contrast-110"
          />
          <p className="font-accent text-lg text-whitecap">
            Melt in Your Mouth Deliciousness. 🐚
          </p>
          <p className="mt-3 font-body text-sm leading-relaxed">
            Baked by Michelle in Melbourne Beach, FL.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg text-whitecap">Quick Links</h3>
          <ul className="mt-4 space-y-2 font-body text-sm">
            <li>
              <Link className="hover:text-whitecap" href="/shop">
                Shop Cookies
              </Link>
            </li>
            <li>
              <Link className="hover:text-whitecap" href="/build-your-box">
                Build Your Box
              </Link>
            </li>
            <li>
              <Link className="hover:text-whitecap" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-whitecap" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg text-whitecap">Find Us</h3>
          <p className="mt-4 font-body text-sm">Melbourne Beach, FL</p>
          <p className="font-body text-sm">Brevard County Mobile Bakery</p>
          <p className="mt-3 font-body text-sm">
            <a className="hover:text-whitecap" href="tel:+14079277966">
              (407) 927-7966
            </a>
          </p>
          <p className="font-body text-sm">
            <a
              className="hover:text-whitecap"
              href="mailto:meshellcookies@gmail.com"
            >
              meshellcookies@gmail.com
            </a>
          </p>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-whitecap/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-whitecap hover:bg-whitecap/10"
          >
            Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-whitecap/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>🌴 Free local delivery in Brevard County</p>
          <p>© {new Date().getFullYear()} MeShell Cookies, LLC · All Rights Reserved</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-whitecap">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-whitecap">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
