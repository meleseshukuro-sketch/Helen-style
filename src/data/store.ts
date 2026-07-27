import type { Announcement, StoreInfo } from "@/types";

export const SITE_NAME = "Helen Lifestyle";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://helenlifestyle.co.za";
export const SITE_DESCRIPTION =
  "Fashion, home, beauty and everyday essentials under one roof. Shop Women, Men, Kids, Shoes, Bags, Beauty, Home Collection, Electronics and Accessories at Helen Lifestyle.";

export const storeInfo: StoreInfo = {
  name: "Helen Lifestyle",
  locationName: "Helen Lifestyle – Turfloop Plaza",
  addressLines: ["Mankweng, Polokwane", "Limpopo, South Africa"],
  phone: "+27 60 942 3250",
  email: "HelenLifestylestore@gmail.com",
  website: "https://helenlifestyle.co.za",
  hours: [
    { day: "Monday to Friday", time: "08:00–17:00" },
    { day: "Saturday", time: "08:00–16:00" },
    { day: "Sunday", time: "08:00–14:00" },
  ],
  mapUrl: "https://maps.google.com/?q=Turfloop+Plaza+Mankweng+Polokwane",
  whatsapp: "27609423250",
};

export const announcements: Announcement[] = [
  {
    id: "1",
    text: "New arrivals in store weekly — discover the latest looks",
    href: "/women?category=new-arrivals",
  },
  {
    id: "2",
    text: "Free in-store collection at Turfloop Plaza",
    href: "/contact",
  },
  {
    id: "3",
    text: "Sale on now — shop selected styles at reduced prices",
    href: "/sale",
  },
  {
    id: "4",
    text: "Open daily — Mon–Fri 08:00–17:00 · Sat 08:00–16:00 · Sun 08:00–14:00",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "Kids", href: "/kids" },
  { label: "Shoes", href: "/shoes" },
  { label: "Bags", href: "/bags" },
  { label: "Beauty", href: "/beauty" },
  { label: "Home Collection", href: "/home-collection" },
  { label: "Electronics", href: "/electronics" },
  { label: "Accessories", href: "/accessories" },
  { label: "Sale", href: "/sale" },
] as const;

export const popularSearches = [
  "Dresses",
  "Sneakers",
  "Handbags",
  "Jeans",
  "Kids shoes",
  "Skincare",
  "Blankets",
  "Sunglasses",
];

export const suggestedSearches = [
  "New arrivals women",
  "Men's t-shirts",
  "School bags",
  "Beauty essentials",
  "Home décor",
];
