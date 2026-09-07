export type Testimonial = {
  id: string;
  /** PLACEHOLDER quote — replace with a real, consented customer statement. */
  quote: string;
  /** PLACEHOLDER name. */
  name: string;
  /** PLACEHOLDER location. */
  location: string;
  role: "Buyer" | "Seller" | "Buyer & Seller";
  /** Initials shown in the avatar tile. */
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "I compared three listings for the same model in one sitting. The condition notes were specific enough that I knew exactly what I was buying before I messaged anyone.",
    name: "Nadia K.",
    location: "Amsterdam",
    role: "Buyer",
    initials: "NK",
  },
  {
    id: "testimonial-2",
    quote:
      "Two laptops and a camera body had been sitting in a drawer for years. Listing them took an evening, and the guided fields meant I did not get twenty questions afterwards.",
    name: "Tomás R.",
    location: "Lisbon",
    role: "Seller",
    initials: "TR",
  },
  {
    id: "testimonial-3",
    quote:
      "Keeping everything in one chat made the whole thing feel considered rather than rushed. I sold my old console and picked up a tablet the same week.",
    name: "Amara O.",
    location: "Manchester",
    role: "Buyer & Seller",
    initials: "AO",
  },
];
