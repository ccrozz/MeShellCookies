import { Hero } from "@/components/sections/Hero";
import { SocialProofTicker } from "@/components/sections/SocialProofTicker";
import { HomeQuickLinks } from "@/components/sections/HomeQuickLinks";
import { BuildBoxCTA } from "@/components/sections/BuildBoxCTA";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { PhotoMarquee } from "@/components/sections/PhotoMarquee";
import { EventOrders } from "@/components/sections/EventOrders";
import { EmailCapture } from "@/components/sections/EmailCapture";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofTicker />
      <HomeQuickLinks />
      <BuildBoxCTA />
      <FeaturedProducts />
      <BrandStatement />
      <PhotoMarquee />
      <EventOrders />
      <EmailCapture />
    </>
  );
}
