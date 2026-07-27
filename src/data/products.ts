import type { DepartmentSlug, Product, ProductColour } from "@/types";
import { placeholderImages } from "./categories";
import { slugify } from "@/lib/utils";

const colours: Record<string, ProductColour> = {
  black: { name: "Black", hex: "#111111" },
  white: { name: "White", hex: "#F5F5F5" },
  grey: { name: "Grey", hex: "#9CA3AF" },
  navy: { name: "Navy", hex: "#1E3A5F" },
  beige: { name: "Beige", hex: "#D4C4A8" },
  red: { name: "Red", hex: "#B91C1C" },
  brown: { name: "Brown", hex: "#6B4423" },
  pink: { name: "Pink", hex: "#E8A0BF" },
  blue: { name: "Blue", hex: "#3B82F6" },
  green: { name: "Green", hex: "#4A7C59" },
};

const clothingSizes = ["XS", "S", "M", "L", "XL"];
const shoeSizes = ["3", "4", "5", "6", "7", "8", "9", "10"];
const kidsSizes = ["2–3Y", "4–5Y", "6–7Y", "8–9Y", "10–11Y"];
const oneSize = ["One Size"];

type ProductInput = {
  name: string;
  department: DepartmentSlug;
  category: string;
  categorySlug: string;
  description: string;
  price: number;
  salePrice?: number;
  sizes: string[];
  colourKeys: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  stockStatus?: Product["stockStatus"];
  imageSeed: number;
  /** Optional custom image URLs (e.g. from Photo-collection repo) */
  customImages?: string[];
};

function createProduct(input: ProductInput, index: number): Product {
  const id = `${input.department}-${String(index).padStart(3, "0")}`;
  const slug = `${slugify(input.name)}-${id}`;
  const img = placeholderImages.product(input.imageSeed);
  const img2 = placeholderImages.product(input.imageSeed + 3);
  const images =
    input.customImages && input.customImages.length > 0
      ? input.customImages
      : [img, img2];

  return {
    id,
    name: input.name,
    slug,
    department: input.department,
    category: input.category,
    categorySlug: input.categorySlug,
    description: input.description,
    price: input.price,
    salePrice: input.salePrice,
    images,
    sizes: input.sizes,
    colours: input.colourKeys.map((k) => colours[k]),
    stockStatus: input.stockStatus ?? "in_stock",
    isNew: input.isNew ?? false,
    isFeatured: input.isFeatured ?? false,
    isBestSeller: input.isBestSeller ?? false,
  };
}

const catalog: ProductInput[] = [
  // WOMEN (6+)
  {
    name: "Tiered Maxi Dress",
    department: "women",
    category: "Dresses and Jumpsuits",
    categorySlug: "dresses-and-jumpsuits",
    description:
      "A sleeveless tiered maxi dress with a flattering V-neck and flowing skirt. Available in multiple colours for everyday and occasion wear.",
    price: 449.99,
    sizes: clothingSizes,
    colourKeys: ["black", "red", "beige", "pink", "blue", "green"],
    isNew: true,
    isFeatured: true,
    imageSeed: 0,
    customImages: [placeholderImages.women],
  },
  {
    name: "Classic Crew Neck T-Shirt",
    department: "women",
    category: "Tops and T-Shirts",
    categorySlug: "tops-and-t-shirts",
    description:
      "Soft cotton crew neck tee with a comfortable regular fit. A wardrobe essential.",
    price: 149.99,
    sizes: clothingSizes,
    colourKeys: ["white", "black", "grey"],
    isBestSeller: true,
    imageSeed: 1,
  },
  {
    name: "Relaxed Fit Blouse",
    department: "women",
    category: "Shirts and Blouses",
    categorySlug: "shirts-and-blouses",
    description:
      "Lightweight blouse with a soft drape. Pair with jeans or tailored pants.",
    price: 299.99,
    salePrice: 229.99,
    sizes: clothingSizes,
    colourKeys: ["white", "pink", "beige"],
    isNew: true,
    imageSeed: 2,
  },
  {
    name: "Soft Knit Cardigan",
    department: "women",
    category: "Knitwear",
    categorySlug: "knitwear",
    description:
      "Cosy open-front cardigan for layering through cooler days.",
    price: 399.99,
    sizes: clothingSizes,
    colourKeys: ["grey", "beige", "black"],
    isFeatured: true,
    imageSeed: 3,
  },
  {
    name: "Tailored Blazer",
    department: "women",
    category: "Jackets and Blazers",
    categorySlug: "jackets-and-blazers",
    description:
      "Structured blazer with a clean silhouette. Ideal for work and smart-casual looks.",
    price: 599.99,
    salePrice: 449.99,
    sizes: clothingSizes,
    colourKeys: ["black", "navy", "beige"],
    imageSeed: 4,
  },
  {
    name: "High Rise Straight Jeans",
    department: "women",
    category: "Jeans",
    categorySlug: "jeans",
    description:
      "Classic straight-leg jeans with a flattering high rise and durable denim.",
    price: 399.99,
    sizes: ["24", "26", "28", "30", "32"],
    colourKeys: ["navy", "black", "blue"],
    isBestSeller: true,
    isNew: true,
    imageSeed: 5,
  },
  {
    name: "Everyday Leggings",
    department: "women",
    category: "Pants and Leggings",
    categorySlug: "pants-and-leggings",
    description:
      "Stretch leggings designed for comfort at home, errands or light activity.",
    price: 179.99,
    sizes: clothingSizes,
    colourKeys: ["black", "grey"],
    imageSeed: 6,
  },
  {
    name: "Pleated Midi Skirt",
    department: "women",
    category: "Skirts",
    categorySlug: "skirts",
    description:
      "Flowing pleated midi skirt that moves with you from day to evening.",
    price: 349.99,
    salePrice: 279.99,
    sizes: clothingSizes,
    colourKeys: ["black", "beige"],
    imageSeed: 7,
  },

  // MEN (6+)
  {
    name: "Essential Cotton T-Shirt",
    department: "men",
    category: "T-Shirts",
    categorySlug: "t-shirts",
    description:
      "Everyday cotton t-shirt with a regular fit. Soft, durable and easy to layer.",
    price: 129.99,
    sizes: clothingSizes,
    colourKeys: ["black", "white", "navy", "grey"],
    isNew: true,
    isBestSeller: true,
    imageSeed: 8,
  },
  {
    name: "Piqué Polo Shirt",
    department: "men",
    category: "Polo Shirts",
    categorySlug: "polo-shirts",
    description:
      "Classic polo in breathable piqué cotton. Smart enough for casual Fridays.",
    price: 249.99,
    sizes: clothingSizes,
    colourKeys: ["navy", "black", "white"],
    isFeatured: true,
    imageSeed: 9,
  },
  {
    name: "Oxford Button-Down Shirt",
    department: "men",
    category: "Shirts",
    categorySlug: "shirts",
    description:
      "Crisp oxford shirt with a button-down collar for work and weekend wear.",
    price: 349.99,
    sizes: clothingSizes,
    colourKeys: ["white", "blue", "beige"],
    isNew: true,
    imageSeed: 10,
  },
  {
    name: "Crew Neck Knit Sweater",
    department: "men",
    category: "Knitwear",
    categorySlug: "knitwear",
    description:
      "Warm crew neck sweater with a clean finish. Ideal for cooler evenings.",
    price: 399.99,
    salePrice: 319.99,
    sizes: clothingSizes,
    colourKeys: ["grey", "navy", "black"],
    imageSeed: 11,
  },
  {
    name: "Zip Hoodie",
    department: "men",
    category: "Sweatshirts and Hoodies",
    categorySlug: "sweatshirts-and-hoodies",
    description:
      "Soft fleece zip hoodie for everyday comfort and layering.",
    price: 379.99,
    sizes: clothingSizes,
    colourKeys: ["black", "grey", "navy"],
    isBestSeller: true,
    imageSeed: 12,
  },
  {
    name: "Denim Trucker Jacket",
    department: "men",
    category: "Jackets",
    categorySlug: "jackets",
    description:
      "Classic denim jacket with a timeless silhouette and sturdy feel.",
    price: 549.99,
    sizes: clothingSizes,
    colourKeys: ["blue", "black"],
    isFeatured: true,
    imageSeed: 13,
  },
  {
    name: "Slim Fit Jeans",
    department: "men",
    category: "Jeans",
    categorySlug: "jeans",
    description:
      "Slim-fit jeans in stretch denim for all-day comfort.",
    price: 399.99,
    salePrice: 299.99,
    sizes: ["28", "30", "32", "34", "36"],
    colourKeys: ["navy", "black"],
    isNew: true,
    imageSeed: 14,
  },
  {
    name: "Chino Trousers",
    department: "men",
    category: "Trousers",
    categorySlug: "trousers",
    description:
      "Versatile chino trousers that work from the office to weekends.",
    price: 349.99,
    sizes: ["28", "30", "32", "34", "36"],
    colourKeys: ["beige", "navy", "black"],
    imageSeed: 15,
  },

  // KIDS (6+)
  {
    name: "Girls Floral Day Dress",
    department: "kids",
    category: "Dresses",
    categorySlug: "girls-dresses",
    description:
      "Light floral dress for school events, weekends and family outings.",
    price: 249.99,
    sizes: kidsSizes,
    colourKeys: ["pink", "white"],
    isNew: true,
    isFeatured: true,
    imageSeed: 0,
  },
  {
    name: "Boys Graphic T-Shirt",
    department: "kids",
    category: "T-Shirts",
    categorySlug: "boys-t-shirts",
    description:
      "Soft cotton tee with a fun graphic print. Easy everyday wear.",
    price: 119.99,
    sizes: kidsSizes,
    colourKeys: ["blue", "black", "white"],
    isBestSeller: true,
    imageSeed: 1,
  },
  {
    name: "Kids Denim Jacket",
    department: "kids",
    category: "Jackets",
    categorySlug: "girls-jackets",
    description:
      "Durable denim jacket for cooler mornings and layering.",
    price: 299.99,
    sizes: kidsSizes,
    colourKeys: ["blue"],
    isNew: true,
    imageSeed: 2,
  },
  {
    name: "Boys Hoodie",
    department: "kids",
    category: "Hoodies",
    categorySlug: "boys-hoodies",
    description:
      "Warm fleece hoodie with a kangaroo pocket for everyday comfort.",
    price: 229.99,
    salePrice: 179.99,
    sizes: kidsSizes,
    colourKeys: ["grey", "navy", "black"],
    imageSeed: 3,
  },
  {
    name: "Kids Stretch Jeans",
    department: "kids",
    category: "Jeans",
    categorySlug: "boys-jeans",
    description:
      "Stretch jeans built for play, school and weekend adventures.",
    price: 249.99,
    sizes: kidsSizes,
    colourKeys: ["blue", "black"],
    imageSeed: 4,
  },
  {
    name: "School Backpack",
    department: "kids",
    category: "School Bags",
    categorySlug: "school-bags",
    description:
      "Roomy school backpack with padded straps and multiple compartments.",
    price: 279.99,
    sizes: oneSize,
    colourKeys: ["black", "navy", "pink"],
    isFeatured: true,
    isBestSeller: true,
    imageSeed: 5,
  },
  {
    name: "Baby Soft Bodysuit Set",
    department: "kids",
    category: "Babies",
    categorySlug: "babies",
    description:
      "Gentle cotton bodysuit set for everyday baby comfort.",
    price: 199.99,
    sizes: ["0–3M", "3–6M", "6–12M", "12–18M"],
    colourKeys: ["white", "beige", "pink"],
    isNew: true,
    imageSeed: 6,
  },

  // SHOES (6+)
  {
    name: "Women’s Everyday Sneakers",
    department: "shoes",
    category: "Sneakers",
    categorySlug: "women-sneakers",
    description:
      "Lightweight sneakers for walking, errands and casual outfits.",
    price: 399.99,
    sizes: shoeSizes,
    colourKeys: ["white", "black", "beige"],
    isNew: true,
    isFeatured: true,
    imageSeed: 7,
  },
  {
    name: "Block Heel Sandals",
    department: "shoes",
    category: "Heels",
    categorySlug: "women-heels",
    description:
      "Comfortable block heel sandals for occasions and evenings out.",
    price: 349.99,
    salePrice: 279.99,
    sizes: shoeSizes.slice(0, 6),
    colourKeys: ["black", "beige"],
    imageSeed: 8,
  },
  {
    name: "Men’s Leather Formal Shoes",
    department: "shoes",
    category: "Formal Shoes",
    categorySlug: "men-formal-shoes",
    description:
      "Classic formal shoes suitable for work and special occasions.",
    price: 549.99,
    sizes: shoeSizes.slice(2),
    colourKeys: ["black", "brown"],
    isBestSeller: true,
    imageSeed: 9,
  },
  {
    name: "Men’s Canvas Sneakers",
    department: "shoes",
    category: "Sneakers",
    categorySlug: "men-sneakers",
    description:
      "Casual canvas sneakers with a clean profile for everyday style.",
    price: 299.99,
    sizes: shoeSizes.slice(2),
    colourKeys: ["white", "navy", "black"],
    isNew: true,
    imageSeed: 10,
  },
  {
    name: "Kids School Shoes",
    department: "shoes",
    category: "School Shoes",
    categorySlug: "school-shoes",
    description:
      "Durable school shoes designed for comfort through long school days.",
    price: 329.99,
    sizes: ["10", "11", "12", "13", "1", "2", "3"],
    colourKeys: ["black"],
    isFeatured: true,
    imageSeed: 11,
  },
  {
    name: "Open Toe Slippers",
    department: "shoes",
    category: "Slippers",
    categorySlug: "women-slippers",
    description:
      "Soft open-toe slippers for comfortable wear around the home.",
    price: 149.99,
    salePrice: 99.99,
    sizes: shoeSizes.slice(0, 6),
    colourKeys: ["grey", "pink", "beige"],
    imageSeed: 12,
  },

  // BAGS (6+)
  {
    name: "Structured Handbag",
    department: "bags",
    category: "Handbags",
    categorySlug: "handbags",
    description:
      "Structured handbag with a secure zip and roomy interior for daily essentials.",
    price: 449.99,
    sizes: oneSize,
    colourKeys: ["black", "beige", "brown"],
    isNew: true,
    isFeatured: true,
    imageSeed: 13,
  },
  {
    name: "Crossbody Bag",
    department: "bags",
    category: "Crossbody Bags",
    categorySlug: "crossbody-bags",
    description:
      "Compact crossbody bag that keeps your hands free while you shop or travel.",
    price: 299.99,
    sizes: oneSize,
    colourKeys: ["black", "navy", "red"],
    isBestSeller: true,
    imageSeed: 14,
  },
  {
    name: "Canvas Tote Bag",
    department: "bags",
    category: "Tote Bags",
    categorySlug: "tote-bags",
    description:
      "Spacious canvas tote for shopping, work or weekend outings.",
    price: 199.99,
    salePrice: 149.99,
    sizes: oneSize,
    colourKeys: ["beige", "black"],
    imageSeed: 15,
  },
  {
    name: "Foldover Clutch",
    department: "bags",
    category: "Clutches",
    categorySlug: "clutches",
    description:
      "Simple foldover clutch for evenings and special occasions.",
    price: 249.99,
    sizes: oneSize,
    colourKeys: ["black", "beige"],
    isNew: true,
    imageSeed: 0,
  },
  {
    name: "Everyday Backpack",
    department: "bags",
    category: "Backpacks",
    categorySlug: "backpacks",
    description:
      "Practical backpack with laptop sleeve and multiple pockets.",
    price: 399.99,
    sizes: oneSize,
    colourKeys: ["black", "grey"],
    isFeatured: true,
    imageSeed: 1,
  },
  {
    name: "Travel Duffel Bag",
    department: "bags",
    category: "Travel Bags",
    categorySlug: "travel-bags",
    description:
      "Roomy duffel for short trips, gym sessions and overnight stays.",
    price: 499.99,
    salePrice: 399.99,
    sizes: oneSize,
    colourKeys: ["black", "navy"],
    imageSeed: 2,
  },
  {
    name: "Bifold Wallet",
    department: "bags",
    category: "Wallets",
    categorySlug: "wallets",
    description:
      "Slim bifold wallet with card slots and a note compartment.",
    price: 179.99,
    sizes: oneSize,
    colourKeys: ["black", "brown"],
    isBestSeller: true,
    imageSeed: 3,
  },

  // BEAUTY (6+)
  {
    name: "Everyday Foundation",
    department: "beauty",
    category: "Makeup",
    categorySlug: "makeup",
    description:
      "Buildable foundation for a natural everyday finish. Suitable for most skin types.",
    price: 189.99,
    sizes: ["30ml"],
    colourKeys: ["beige", "brown"],
    isNew: true,
    imageSeed: 4,
  },
  {
    name: "Hydrating Face Moisturiser",
    department: "beauty",
    category: "Skincare",
    categorySlug: "skincare",
    description:
      "Lightweight moisturiser to keep skin feeling soft and hydrated throughout the day.",
    price: 159.99,
    sizes: ["50ml"],
    colourKeys: ["white"],
    isFeatured: true,
    isBestSeller: true,
    imageSeed: 5,
  },
  {
    name: "Nourishing Shampoo",
    department: "beauty",
    category: "Hair Care",
    categorySlug: "hair-care",
    description:
      "Gentle shampoo that cleanses while helping hair feel soft and manageable.",
    price: 99.99,
    sizes: ["400ml"],
    colourKeys: ["white"],
    imageSeed: 6,
  },
  {
    name: "Fresh Citrus Eau de Toilette",
    department: "beauty",
    category: "Fragrances",
    categorySlug: "fragrances",
    description:
      "Light citrus fragrance for everyday freshness.",
    price: 299.99,
    salePrice: 229.99,
    sizes: ["50ml"],
    colourKeys: ["white"],
    isNew: true,
    imageSeed: 7,
  },
  {
    name: "Body Lotion",
    department: "beauty",
    category: "Body Care",
    categorySlug: "body-care",
    description:
      "Smoothing body lotion for soft, comfortable skin.",
    price: 89.99,
    sizes: ["400ml"],
    colourKeys: ["white"],
    imageSeed: 8,
  },
  {
    name: "Nail Care Set",
    department: "beauty",
    category: "Nail Products",
    categorySlug: "nail-products",
    description:
      "Simple nail care set with essentials for tidy, polished nails.",
    price: 129.99,
    sizes: oneSize,
    colourKeys: ["pink", "red", "black"],
    isFeatured: true,
    imageSeed: 9,
  },

  // HOME COLLECTION (6+)
  {
    name: "Soft Throw Blanket",
    department: "home-collection",
    category: "Blankets",
    categorySlug: "blankets",
    description:
      "Cosy throw blanket for the sofa or bedroom. Soft to the touch and easy to care for.",
    price: 299.99,
    sizes: oneSize,
    colourKeys: ["grey", "beige", "navy"],
    isNew: true,
    isFeatured: true,
    imageSeed: 10,
  },
  {
    name: "Blackout Curtain Pair",
    department: "home-collection",
    category: "Curtains",
    categorySlug: "curtains",
    description:
      "Pair of curtains designed to help reduce light for better rest.",
    price: 449.99,
    sizes: ["140x250cm"],
    colourKeys: ["grey", "beige", "navy"],
    imageSeed: 11,
  },
  {
    name: "Cotton Sheet Set",
    department: "home-collection",
    category: "Bedding",
    categorySlug: "bedding",
    description:
      "Breathable cotton sheet set for a comfortable night’s sleep.",
    price: 399.99,
    salePrice: 319.99,
    sizes: ["Single", "Double", "Queen", "King"],
    colourKeys: ["white", "grey", "beige"],
    isBestSeller: true,
    imageSeed: 12,
  },
  {
    name: "All-Season Duvet",
    department: "home-collection",
    category: "Duvets",
    categorySlug: "duvets",
    description:
      "Versatile duvet suitable for year-round comfort.",
    price: 549.99,
    sizes: ["Single", "Double", "Queen", "King"],
    colourKeys: ["white"],
    isFeatured: true,
    imageSeed: 13,
  },
  {
    name: "Support Pillow Pair",
    department: "home-collection",
    category: "Pillows",
    categorySlug: "pillows",
    description:
      "Set of two pillows designed for everyday sleep support.",
    price: 249.99,
    sizes: oneSize,
    colourKeys: ["white"],
    isNew: true,
    imageSeed: 14,
  },
  {
    name: "Decorative Cushion Cover",
    department: "home-collection",
    category: "Cushions",
    categorySlug: "cushions",
    description:
      "Simple cushion cover to refresh your living space.",
    price: 99.99,
    salePrice: 69.99,
    sizes: ["45x45cm"],
    colourKeys: ["beige", "grey", "navy"],
    imageSeed: 15,
  },
  {
    name: "Bath Towel Set",
    department: "home-collection",
    category: "Towels",
    categorySlug: "towels",
    description:
      "Absorbent bath towel set for everyday use.",
    price: 279.99,
    sizes: ["Set of 4"],
    colourKeys: ["white", "grey", "beige"],
    isBestSeller: true,
    imageSeed: 0,
  },

  // ELECTRONICS (6+)
  {
    name: "Portable Bluetooth Speaker",
    department: "electronics",
    category: "Bluetooth Speakers",
    categorySlug: "bluetooth-speakers",
    description:
      "Compact Bluetooth speaker for music at home, outdoors or on the go.",
    price: 399.99,
    sizes: oneSize,
    colourKeys: ["black", "blue"],
    isNew: true,
    isFeatured: true,
    imageSeed: 1,
  },
  {
    name: "Over-Ear Headphones",
    department: "electronics",
    category: "Headphones",
    categorySlug: "headphones",
    description:
      "Comfortable over-ear headphones for music, calls and commuting.",
    price: 449.99,
    salePrice: 349.99,
    sizes: oneSize,
    colourKeys: ["black", "grey"],
    isBestSeller: true,
    imageSeed: 2,
  },
  {
    name: "Wireless Earbuds",
    department: "electronics",
    category: "Earbuds",
    categorySlug: "earbuds",
    description:
      "True wireless earbuds with a charging case for everyday listening.",
    price: 299.99,
    sizes: oneSize,
    colourKeys: ["white", "black"],
    isNew: true,
    imageSeed: 3,
  },
  {
    name: "Smart Watch Band Set",
    department: "electronics",
    category: "Smart Watches",
    categorySlug: "smart-watches",
    description:
      "Affordable smart watch style tracker for steps, time and notifications.",
    price: 499.99,
    sizes: oneSize,
    colourKeys: ["black", "navy"],
    isFeatured: true,
    imageSeed: 4,
  },
  {
    name: "Fast Wall Charger",
    department: "electronics",
    category: "Chargers",
    categorySlug: "chargers",
    description:
      "Reliable wall charger for phones and everyday devices.",
    price: 149.99,
    sizes: oneSize,
    colourKeys: ["white", "black"],
    imageSeed: 5,
  },
  {
    name: "10 000mAh Power Bank",
    department: "electronics",
    category: "Power Banks",
    categorySlug: "power-banks",
    description:
      "Portable power bank to keep your phone charged throughout the day.",
    price: 249.99,
    salePrice: 199.99,
    sizes: oneSize,
    colourKeys: ["black"],
    isBestSeller: true,
    imageSeed: 6,
  },
  {
    name: "LED Desk Light",
    department: "electronics",
    category: "LED Lights",
    categorySlug: "led-lights",
    description:
      "Adjustable LED light for desks, reading and small workspaces.",
    price: 179.99,
    sizes: oneSize,
    colourKeys: ["white", "black"],
    imageSeed: 7,
  },

  // ACCESSORIES (6+)
  {
    name: "Minimal Pendant Necklace",
    department: "accessories",
    category: "Jewellery",
    categorySlug: "jewellery",
    description:
      "Simple pendant necklace that pairs with everyday outfits.",
    price: 149.99,
    sizes: oneSize,
    colourKeys: ["beige", "black"],
    isNew: true,
    imageSeed: 8,
  },
  {
    name: "Classic Analogue Watch",
    department: "accessories",
    category: "Watches",
    categorySlug: "watches",
    description:
      "Clean analogue watch with a leather-look strap for daily wear.",
    price: 349.99,
    sizes: oneSize,
    colourKeys: ["black", "brown"],
    isFeatured: true,
    isBestSeller: true,
    imageSeed: 9,
  },
  {
    name: "UV Protection Sunglasses",
    department: "accessories",
    category: "Sunglasses",
    categorySlug: "sunglasses",
    description:
      "Stylish sunglasses with UV protection for sunny South African days.",
    price: 199.99,
    salePrice: 149.99,
    sizes: oneSize,
    colourKeys: ["black", "brown"],
    isNew: true,
    imageSeed: 10,
  },
  {
    name: "Leather-Look Belt",
    department: "accessories",
    category: "Belts",
    categorySlug: "belts",
    description:
      "Everyday belt with a simple buckle to finish jeans and trousers.",
    price: 129.99,
    sizes: ["S", "M", "L"],
    colourKeys: ["black", "brown"],
    imageSeed: 11,
  },
  {
    name: "Cotton Baseball Cap",
    department: "accessories",
    category: "Hats and Caps",
    categorySlug: "hats-and-caps",
    description:
      "Lightweight baseball cap for casual wear and sun cover.",
    price: 99.99,
    sizes: oneSize,
    colourKeys: ["black", "navy", "beige"],
    isBestSeller: true,
    imageSeed: 12,
  },
  {
    name: "Soft Knit Scarf",
    department: "accessories",
    category: "Scarves",
    categorySlug: "scarves",
    description:
      "Soft scarf for cooler mornings and evening layering.",
    price: 159.99,
    sizes: oneSize,
    colourKeys: ["grey", "beige", "navy"],
    isFeatured: true,
    imageSeed: 13,
  },
  {
    name: "Hair Clip Set",
    department: "accessories",
    category: "Hair Accessories",
    categorySlug: "hair-accessories",
    description:
      "Set of everyday hair clips for neat and stylish looks.",
    price: 79.99,
    salePrice: 59.99,
    sizes: oneSize,
    colourKeys: ["black", "beige"],
    imageSeed: 14,
  },

  // SALE department products (cross-listed style items with sale prices)
  {
    name: "Women’s Sale Blouse",
    department: "sale",
    category: "Women’s Sale",
    categorySlug: "womens-sale",
    description:
      "Selected women’s blouse at a reduced price while stocks last.",
    price: 299.99,
    salePrice: 179.99,
    sizes: clothingSizes,
    colourKeys: ["white", "pink"],
    imageSeed: 15,
  },
  {
    name: "Men’s Sale Hoodie",
    department: "sale",
    category: "Men’s Sale",
    categorySlug: "mens-sale",
    description:
      "Warm hoodie marked down for the weekly specials selection.",
    price: 379.99,
    salePrice: 249.99,
    sizes: clothingSizes,
    colourKeys: ["grey", "black"],
    imageSeed: 0,
  },
  {
    name: "Kids’ Sale Jeans",
    department: "sale",
    category: "Kids’ Sale",
    categorySlug: "kids-sale",
    description:
      "Kids’ jeans at a special price. Perfect for school and play.",
    price: 249.99,
    salePrice: 149.99,
    sizes: kidsSizes,
    colourKeys: ["blue"],
    imageSeed: 1,
  },
  {
    name: "Shoes Sale Sandals",
    department: "sale",
    category: "Shoes Sale",
    categorySlug: "shoes-sale",
    description:
      "Comfortable sandals reduced for a limited time.",
    price: 299.99,
    salePrice: 199.99,
    sizes: shoeSizes.slice(0, 6),
    colourKeys: ["beige", "black"],
    imageSeed: 2,
  },
  {
    name: "Bags Sale Tote",
    department: "sale",
    category: "Bags Sale",
    categorySlug: "bags-sale",
    description:
      "Spacious tote bag on sale — handy for shopping and daily use.",
    price: 249.99,
    salePrice: 149.99,
    sizes: oneSize,
    colourKeys: ["beige", "black"],
    imageSeed: 3,
  },
  {
    name: "Beauty Sale Skincare Duo",
    department: "sale",
    category: "Beauty Sale",
    categorySlug: "beauty-sale",
    description:
      "Skincare duo at a special combined price.",
    price: 259.99,
    salePrice: 179.99,
    sizes: oneSize,
    colourKeys: ["white"],
    imageSeed: 4,
  },
  {
    name: "Home Sale Cushion Pack",
    department: "sale",
    category: "Home Collection Sale",
    categorySlug: "home-collection-sale",
    description:
      "Pack of decorative cushions at a reduced price.",
    price: 299.99,
    salePrice: 199.99,
    sizes: oneSize,
    colourKeys: ["beige", "grey"],
    imageSeed: 5,
  },
  {
    name: "Electronics Sale Earbuds",
    department: "sale",
    category: "Electronics Sale",
    categorySlug: "electronics-sale",
    description:
      "Wireless earbuds on promotion while stocks last.",
    price: 299.99,
    salePrice: 199.99,
    sizes: oneSize,
    colourKeys: ["black", "white"],
    imageSeed: 6,
  },
  {
    name: "Accessories Sale Sunglasses",
    department: "sale",
    category: "Accessories Sale",
    categorySlug: "accessories-sale",
    description:
      "UV sunglasses at a special sale price.",
    price: 199.99,
    salePrice: 99.99,
    sizes: oneSize,
    colourKeys: ["black"],
    imageSeed: 7,
  },
];

// Fix the duplicate colourKeys in Foldover Clutch - I accidentally wrote it twice
// Looking at my catalog, the Foldover Clutch has a syntax error with duplicate colourKeys.
// I need to fix that in the written file.

export const products: Product[] = catalog.map((item, index) =>
  createProduct(item, index + 1)
);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByDepartment(
  department: DepartmentSlug,
  categorySlug?: string
): Product[] {
  let list = products.filter((p) => p.department === department);

  if (department === "sale" && !categorySlug) {
    return products.filter((p) => p.salePrice != null);
  }

  if (categorySlug) {
    if (categorySlug === "new-arrivals" || categorySlug.endsWith("-new-arrivals")) {
      list = list.filter((p) => p.isNew);
    } else if (categorySlug === "sale" || categorySlug.endsWith("-sale") || categorySlug.includes("sale")) {
      list = list.filter((p) => p.salePrice != null);
    } else {
      const filtered = list.filter((p) => p.categorySlug === categorySlug);
      list = filtered.length > 0 ? filtered : list;
    }
  }

  return list;
}

export function getNewArrivals(limit = 8): Product[] {
  return products.filter((p) => p.isNew).slice(0, limit);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter((p) => p.isFeatured).slice(0, limit);
}

export function getWeeklySpecials(limit = 8): Product[] {
  return products.filter((p) => p.salePrice != null).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.department === product.department ||
          p.categorySlug === product.categorySlug)
    )
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.department.replace(/-/g, " ").includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}
