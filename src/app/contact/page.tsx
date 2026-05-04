import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | MeShell Cookies",
  description:
    "Reach MeShell Cookies for custom orders, catering questions, and Melbourne Beach pickup or Brevard County delivery.",
};

export default function ContactPage() {
  return (
    <div className="bg-shell pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-center font-display text-5xl text-driftwood sm:text-7xl md:text-8xl">
          Say hello 🌊
        </h1>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-4 font-body text-driftwood/80">
            <p className="text-lg">📍 Melbourne Beach, FL</p>
            <p>
              📞{" "}
              <a className="text-coral underline" href="tel:+14079277966">
                (407) 927-7966
              </a>
            </p>
            <p>
              📧{" "}
              <a
                className="text-coral underline"
                href="mailto:meshellcookies@gmail.com"
              >
                meshellcookies@gmail.com
              </a>
            </p>
            <p>🌴 Free local Brevard County delivery</p>
            <p>🕐 Up to 1 week for large orders</p>
            <p>📦 Special orders welcome</p>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-coral px-4 py-2 text-sm font-semibold text-coral hover:bg-coral/10"
            >
              Facebook →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
