import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MeShell Cookies",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-28 font-body text-driftwood/80">
      <h1 className="font-display text-4xl text-driftwood">Privacy policy</h1>
      <p className="mt-6 leading-relaxed">
        MeShell Cookies respects your privacy. Information submitted through this
        site is used only to respond to orders and inquiries. We do not sell your
        data. For questions, email{" "}
        <a className="text-coral underline" href="mailto:meshellcookies@gmail.com">
          meshellcookies@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
