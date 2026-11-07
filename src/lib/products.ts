const bowBlossomPouch = "/products/bow-blossom-pouch.avif";
const flowerMirror = "/products/flower-mirror.avif";
const goldHairbrush = "/products/gold-hairbrush.avif";
const goldHeartLipCharm = "/products/gold-heart-lip-charm.avif";
const laceHandFan = "/products/lace-hand-fan.avif";
const lemonKeychain = "/products/lemon-keychain.avif";
const silverHeartLipCharm = "/products/silver-heart-lip-charm.avif";
const strawberryKeychain = "/products/strawberry-keychain.avif";
const strawberryPouch = "/products/strawberry-pouch.avif";
const stripedMakeupPouch = "/products/striped-makeup-pouch.avif";
const watermelonKeychain = "/products/watermelon-keychain.avif";

// Photos live in /public/products. They are referenced by path rather than
// imported because Turbopack cannot process AVIF imports at build time;
// next/image still optimizes them at request time.

export const categories = ["Accessories", "Beauty", "Desk & home"] as const;
export type Category = (typeof categories)[number];

export type Product = {
  id: string;
  name: string;
  /** Display price, e.g. "₹499". Placeholder until real prices exist. */
  price: string;
  category: Category;
  /** Path under /public. */
  image: string;
  badge?: "New" | "Bestseller" | "Back in stock";
};

/** The three products featured in the hero collage. */
export const heroPhotos = {
  main: { image: stripedMakeupPouch, alt: "Pink striped quilted makeup pouch with a bow" },
  top: { image: flowerMirror, alt: "Pink flower-shaped hand mirrors with beaded straps" },
  bottom: { image: goldHeartLipCharm, alt: "Gold heart mirror and lipstick holder bag charm" },
};

export const products: Product[] = [
  { id: "watermelon-keychain", name: "Watermelon crochet keychain", price: "[Price]", category: "Accessories", image: watermelonKeychain, badge: "New" },
  { id: "bow-blossom-pouch", name: "Bow & blossom pouch", price: "[Price]", category: "Desk & home", image: bowBlossomPouch },
  { id: "gold-hairbrush", name: "Gold hairbrush", price: "[Price]", category: "Beauty", image: goldHairbrush, badge: "Bestseller" },
  { id: "silver-heart-lip-charm", name: "Heart mirror lip charm — silver", price: "[Price]", category: "Beauty", image: silverHeartLipCharm },
  { id: "lace-hand-fan", name: "White lace hand fan", price: "[Price]", category: "Accessories", image: laceHandFan },
  { id: "strawberry-keychain", name: "Strawberry crochet keychain", price: "[Price]", category: "Accessories", image: strawberryKeychain, badge: "New" },
  { id: "strawberry-pouch", name: "Strawberry pouch", price: "[Price]", category: "Desk & home", image: strawberryPouch },
  { id: "lemon-keychain", name: "Lemon crochet keychain", price: "[Price]", category: "Accessories", image: lemonKeychain, badge: "Back in stock" },
];
