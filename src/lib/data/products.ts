const BASE =
  "https://img1.wsimg.com/isteam/ip/b2941aba-bb90-4194-869d-f744500c6e62";

export type ProductCategory = "cookies" | "brownies" | "bundles";

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  price: number;
  bundlePrice?: number;
  category: ProductCategory;
  tags: string[];
  description: string;
  flavourNotes: string[];
  size: string;
  image: string;
  imageAlt: string;
  inStock: boolean;
  /** When set, shop card links to bundle builder with this size */
  builderSize?: 6 | 12 | 24;
  /**
   * When greater than 1, `price` is for this many cookies (e.g. a 2-pack). Cart
   * quantity is the number of those packs.
   */
  unitsPerPrice?: number;
}

export const bundleOptions = {
  half: { count: 6, label: "Half Dozen 🐚", price: 21.0, savings: "Save $3" },
  full: { count: 12, label: "Full Dozen 🌊", price: 40.0, savings: "Save $8" },
  party: { count: 24, label: "Party Box 🎉", price: 75.0, savings: "Save $21" },
} as const;

export const products: Product[] = [
  {
    id: "chocolate-chip",
    slug: "chocolate-chip",
    name: "Classic Chocolate Chip Cookie",
    shortName: "Choc Chip",
    price: 4.0,
    bundlePrice: 3.5,
    category: "cookies",
    tags: ["bestseller", "fan-fave"],
    description:
      "Our most beloved cookie — golden-brown, gooey in the center, crisp on the edge. Packed with premium chocolate chips in every single bite.",
    flavourNotes: ["rich chocolate", "buttery", "golden-brown"],
    size: "3 inch diameter",
    image: `${BASE}/20240203_163242%20(1).jpg`,
    imageAlt: "Close-up of a golden-brown chocolate chip cookie",
    inStock: true,
    unitsPerPrice: 2,
  },
  {
    id: "sprinkle",
    slug: "sprinkle",
    name: "Sprinkle Sugar Cookie",
    shortName: "Sprinkle",
    price: 4.0,
    bundlePrice: 3.5,
    category: "cookies",
    tags: ["fan-fave", "bestseller"],
    description:
      "Soft, pillowy sugar cookies loaded with colorful pastel sprinkles. Pure happiness in every bite — great for celebrations or just because.",
    flavourNotes: ["sweet vanilla", "soft & chewy", "festive"],
    size: "3 inch diameter",
    image: `${BASE}/Sprinkle%20cookies.jpg`,
    imageAlt: "Cookies covered in colorful pastel sprinkles",
    inStock: true,
    unitsPerPrice: 2,
  },
  {
    id: "peanut-butter",
    slug: "peanut-butter",
    name: "Classic Peanut Butter Cookie",
    shortName: "PB Cookie",
    price: 4.0,
    bundlePrice: 3.5,
    category: "cookies",
    tags: ["fan-fave"],
    description:
      "Cracked-top, crumbly-perfect peanut butter cookies made the old-fashioned way. Rich, nutty, and absolutely irresistible.",
    flavourNotes: ["peanut butter", "crumbly", "rich & nutty"],
    size: "3 inch diameter",
    image: `${BASE}/20240203_163201.jpg`,
    imageAlt: "Single cracked peanut butter cookie on parchment paper",
    inStock: true,
    unitsPerPrice: 2,
  },
  {
    id: "almond",
    slug: "almond",
    name: "Almond Cookie",
    shortName: "Almond",
    price: 4.0,
    bundlePrice: 3.5,
    category: "cookies",
    tags: ["new"],
    description:
      "Delicate and fragrant almond cookies with a light, melt-in-your-mouth texture. A sophisticated twist for the cookie connoisseur.",
    flavourNotes: ["almond", "light & delicate", "subtle sweetness"],
    size: "3 inch diameter",
    image: `${BASE}/20240605_164612.jpg`,
    imageAlt: "Almond cookie in a clear plastic bag",
    inStock: true,
    unitsPerPrice: 2,
  },
  {
    id: "ginger",
    slug: "ginger",
    name: "Ginger Cookie",
    shortName: "Ginger",
    price: 4.0,
    bundlePrice: 3.5,
    category: "cookies",
    tags: ["seasonal"],
    description:
      "Warmly spiced ginger cookies with a beautiful golden color and just the right amount of snap. Like a hug in cookie form.",
    flavourNotes: ["warm ginger", "spiced", "crisp edges"],
    size: "3 inch diameter",
    image: `${BASE}/Ginger%20Cookie.jpg`,
    imageAlt: "Ginger cookie on display",
    inStock: true,
    unitsPerPrice: 2,
  },
  {
    id: "chunky-mix",
    slug: "chunky-mix",
    name: "Chunky Mix-In Cookie",
    shortName: "Chunky Mix",
    price: 4.5,
    bundlePrice: 4.0,
    category: "cookies",
    tags: ["bestseller"],
    description:
      "An absolute loaded cookie — packed with premium mix-ins in every bite. Ask us what's in the current batch (it changes seasonally)!",
    flavourNotes: ["loaded", "rich", "seasonal mix-ins"],
    size: "3 inch diameter",
    image: `${BASE}/20240605_164513.jpg`,
    imageAlt:
      "Close-up of a cookie with chunks inside, wrapped in clear plastic",
    inStock: true,
    unitsPerPrice: 2,
  },
  {
    id: "dark-choc-toffee-brownie",
    slug: "dark-choc-toffee-brownie",
    name: "Dark Chocolate Toffee Brownie Cupcake",
    shortName: "Toffee Brownie",
    price: 5.0,
    bundlePrice: 4.5,
    category: "brownies",
    tags: ["bestseller", "fan-fave"],
    description:
      "THE brownie that started it all. Dark chocolate brownie baked in a silver foil cupcake cup with a dome lid. Fudgy, rich, and downright insane. Includes a little fork — because you'll need it immediately.",
    flavourNotes: ["dark chocolate", "toffee", "fudgy", "rich"],
    size: "2.5 inch diameter",
    image: `${BASE}/ols/20240614_131636.jpg`,
    imageAlt:
      "Chocolate brownie cupcake in silver foil cup with dome lid and fork",
    inStock: true,
  },
  {
    id: "brownie-multipack",
    slug: "brownie-multipack",
    name: "Brownie Cupcake Multipack",
    shortName: "Brownie Pack",
    price: 22.0,
    category: "brownies",
    tags: ["bestseller"],
    description:
      "A full tray of our legendary Dark Chocolate Toffee Brownie Cupcakes in clear containers — perfect for events, gifts, or when you just can't pick one.",
    flavourNotes: ["dark chocolate", "toffee", "gift-ready"],
    size: "2.5 inch each · 6-pack",
    image: `${BASE}/Multiple%20Brownie%20Cupcakes.jpg`,
    imageAlt: "Rows of chocolate brownies in clear plastic containers",
    inStock: true,
  },
  {
    id: "bundle-half-dozen",
    slug: "bundle-half-dozen",
    name: "Half Dozen Cookie Box",
    shortName: "Half Dozen Box",
    price: bundleOptions.half.price,
    category: "bundles",
    tags: ["bestseller"],
    description:
      "Mix and match six cookies or brownie cupcakes — you pick every flavor. Perfect for small gatherings or weekday treats.",
    flavourNotes: ["mix & match", "local delivery", "gift-ready"],
    size: `${bundleOptions.half.count} treats`,
    image: `${BASE}/20240605_102851.jpg`,
    imageAlt: "Assorted gourmet cookies",
    inStock: true,
    builderSize: 6,
  },
  {
    id: "bundle-full-dozen",
    slug: "bundle-full-dozen",
    name: "Full Dozen Cookie Box",
    shortName: "Full Dozen Box",
    price: bundleOptions.full.price,
    category: "bundles",
    tags: ["fan-fave"],
    description:
      "Twelve treats, your way — our best value for families, offices, and anyone who believes sharing is optional.",
    flavourNotes: ["mix & match", "best value", "party-ready"],
    size: `${bundleOptions.full.count} treats`,
    image: `${BASE}/20240605_103244.jpg`,
    imageAlt: "Packaged cookie assortment",
    inStock: true,
    builderSize: 12,
  },
  {
    id: "bundle-party",
    slug: "bundle-party",
    name: "Party Cookie Box",
    shortName: "Party Box",
    price: bundleOptions.party.price,
    category: "bundles",
    tags: ["new"],
    description:
      "Twenty-four treats for celebrations, client gifts, and the ultimate cookie table. We’ll help you nail the mix.",
    flavourNotes: ["events", "corporate", "celebrations"],
    size: `${bundleOptions.party.count} treats`,
    image: `${BASE}/20240605_102612.jpg`,
    imageAlt: "Cookie batch overview",
    inStock: true,
    builderSize: 24,
  },
];

export const featuredProductIds = [
  "chocolate-chip",
  "sprinkle",
  "peanut-butter",
  "dark-choc-toffee-brownie",
  "almond",
  "ginger",
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function boxBuilderProducts(): Product[] {
  return products.filter((p) => p.category !== "bundles");
}
