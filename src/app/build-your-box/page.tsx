import { Suspense } from "react";
import type { Metadata } from "next";
import { BuildYourBoxClient } from "./BuildYourBoxClient";

export const metadata: Metadata = {
  title: "Build Your Box | MeShell Cookies",
  description:
    "Mix and match gourmet cookies and brownies. Half dozen, full dozen, or party box — baked fresh in Melbourne Beach, FL.",
};

export default function BuildYourBoxPage() {
  return (
    <Suspense fallback={<div className="min-h-[50vh] bg-shell pt-32 text-center font-body text-driftwood/60">Loading…</div>}>
      <BuildYourBoxClient />
    </Suspense>
  );
}
