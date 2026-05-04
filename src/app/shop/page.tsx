import type { Metadata } from "next";
import { ShopClient } from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop | MeShell Cookies",
  description:
    "Browse gourmet cookies, brownie cupcakes, and mix-and-match bundles from MeShell Cookies in Melbourne Beach, FL.",
};

export default function ShopPage() {
  return <ShopClient />;
}
