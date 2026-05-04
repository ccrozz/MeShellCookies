import { socialQuotes } from "@/lib/data/socialQuotes";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function SocialProofTicker() {
  const doubled = [...socialQuotes, ...socialQuotes];
  return (
    <section className="relative bg-tide text-whitecap">
      <div className="overflow-hidden py-4 sm:py-5">
        <div className="animate-marquee-ticker flex w-max gap-14 whitespace-nowrap font-body text-[15px] font-medium sm:text-base">
          {doubled.map((q, i) => (
            <span key={`${q}-${i}`} className="inline-flex items-center gap-2">
              <span className="text-butter" aria-hidden>
                ★
              </span>
              <span>&ldquo;{q}&rdquo;</span>
            </span>
          ))}
        </div>
      </div>
      <WaveDivider fillColor="#E7DFD5" bgColor="#6F9499" />
    </section>
  );
}
