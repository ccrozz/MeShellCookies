import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Pacifico } from "next/font/google";
import "./globals.css";
import { ClientShell } from "@/components/layout/ClientShell";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meshellcookies.com"),
  title: {
    default:
      "MeShell Cookies | Gourmet Cookies & Brownies · Melbourne Beach, FL",
    template: "%s | MeShell Cookies",
  },
  description:
    "Melt-in-your-mouth gourmet cookies and dark chocolate toffee brownies, baked fresh by Michelle in Melbourne Beach, FL. Order online — free Brevard County delivery.",
  keywords: [
    "gourmet cookies Melbourne FL",
    "brownies Brevard County",
    "cookie delivery Space Coast",
    "MeShell Cookies",
  ],
  openGraph: {
    title: "MeShell Cookies — Melt in Your Mouth Deliciousness!",
    description:
      "Fresh-baked gourmet cookies & brownies. Order online, free local delivery in Brevard County.",
    images: [
      {
        url: "https://img1.wsimg.com/isteam/ip/b2941aba-bb90-4194-869d-f744500c6e62/brownie%20with%20dome%20lid%20on%20and%20spoon.jpg",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://meshellcookies.com",
    siteName: "MeShell Cookies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${pacifico.variable}`}
    >
      <body className="min-h-screen bg-shell font-body">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
