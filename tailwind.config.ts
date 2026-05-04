import type { Config } from "tailwindcss";

/**
 * MeShell Cookies — palette blends three directions:
 * 1) Coastal Gourmet: soft Atlantic teal (tide), champagne sand (shell), deep sunset coral (coral)
 * 2) Sun-Baked Shell: pearl white (whitecap), honey-brown type (driftwood), dusty shell rose (mauve)
 * 3) Classic Boardwalk: navy (deep), muted aqua pop (aqua), buttercream warmth (butter)
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Warm sand / champagne — page canvas */
        shell: "#E7DFD5",
        /** Seafoam / soft Atlantic teal — water, bands, calm accents */
        tide: "#6F9499",
        /** Muted boardwalk aqua — links, chips, energy without neon */
        aqua: "#4A8890",
        /** Deep sunset coral — primary CTAs, prices */
        coral: "#B84A3D",
        /** Seafoam companion — success, soft tags */
        seafoam: "#7D9A91",
        /** Toasted sand — borders, dividers */
        sand: "#C4AE94",
        /** Golden honey / toasted brown — body & headings */
        driftwood: "#4E3828",
        /** Creamy pearl — cards, nav, light surfaces */
        whitecap: "#FAF8F4",
        /** Boardwalk navy — footer, dark sections, contrast */
        deep: "#18242F",
        /** Dusty rose / mauve — seashell undertone, Pacifico accents */
        mauve: "#8E6670",
        /** Buttercream — sweetness highlights */
        butter: "#E3D2A6",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "cursive"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-slow": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee-slow 50s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
