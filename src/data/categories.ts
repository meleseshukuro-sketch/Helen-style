import type { Department, FeaturedCollection } from "@/types";

const img = (id: string, w = 1200, h = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const placeholderImages = {
  hero: img("1483985988355-763728e1935b", 1920, 1080),
  women: img("1469334031218-e382a71b716b", 900, 1200),
  men: img("1490114538077-0a7f8cb49891", 900, 1200),
  kids: img("1503454537195-1dcabb73ffb9", 900, 1200),
  shoes: img("1543163521-1bf539c55dd2", 900, 1200),
  bags: img("1590874103328-eac38a683ce7", 900, 1200),
  beauty: img("1596462502278-27bfdc403348", 900, 1200),
  home: img("1616486338812-3dadae4b4ace", 900, 1200),
  electronics: img("1505740420928-5e560c06d30e", 900, 1200),
  accessories: img("1573408301185-51446e5dc549", 900, 1200),
  sale: img("1441986300917-64674bd600d8", 900, 1200),
  product: (seed: number) =>
    `https://images.unsplash.com/photo-${
      [
        "1515372039744-b8f02a3ae446",
        "1434389677669-e08b4cac3105",
        "1489980557510-980d5a8d09e5",
        "1552374196-1ab2a1c593e8",
        "1503342217505-b0a15ec3261c",
        "1525507112278-d53ee00fead1",
        "1467043232710-804ab2d5a8d8",
        "1542291026-7eec264c27ff",
        "1553062407-98eeb64c6a62",
        "1523275335684-37898b6baf30",
        "1572635196237-14b3f281503f",
        "1560343090-f0409e92791a",
        "1496747611176-843222e1e57c",
        "1479064555552-3ef4971750f3",
        "1583292650898-ff6e0e0e0f5f",
        "1601924994987-6d231a7a8c0a",
      ][seed % 16]
    }?auto=format&fit=crop&w=800&h=1000&q=80`,
};

function cat(
  label: string,
  slug: string,
  department: string
): { label: string; slug: string; href: string } {
  return {
    label,
    slug,
    href: `/${department}?category=${slug}`,
  };
}

export const departments: Department[] = [
  {
    slug: "women",
    name: "Women",
    href: "/women",
    description:
      "Discover everyday fashion for women — dresses, tops, denim, jackets and more at affordable prices.",
    image: placeholderImages.women,
    menu: [
      {
        items: [
          cat("New Arrivals", "new-arrivals", "women"),
          cat("Dresses and Jumpsuits", "dresses-and-jumpsuits", "women"),
          cat("Tops and T-Shirts", "tops-and-t-shirts", "women"),
          cat("Shirts and Blouses", "shirts-and-blouses", "women"),
          cat("Knitwear", "knitwear", "women"),
          cat("Jackets and Blazers", "jackets-and-blazers", "women"),
          cat("Jeans", "jeans", "women"),
          cat("Pants and Leggings", "pants-and-leggings", "women"),
          cat("Skirts", "skirts", "women"),
          cat("Shorts", "shorts", "women"),
          cat("Lingerie", "lingerie", "women"),
          cat("Shoes", "shoes", "women"),
          cat("Bags", "bags", "women"),
          cat("Accessories", "accessories", "women"),
          cat("Sale", "sale", "women"),
        ],
      },
    ],
  },
  {
    slug: "men",
    name: "Men",
    href: "/men",
    description:
      "Shop men’s everyday style — t-shirts, shirts, denim, jackets and accessories for every occasion.",
    image: placeholderImages.men,
    menu: [
      {
        items: [
          cat("New Arrivals", "new-arrivals", "men"),
          cat("T-Shirts", "t-shirts", "men"),
          cat("Polo Shirts", "polo-shirts", "men"),
          cat("Shirts", "shirts", "men"),
          cat("Knitwear", "knitwear", "men"),
          cat("Sweatshirts and Hoodies", "sweatshirts-and-hoodies", "men"),
          cat("Jackets", "jackets", "men"),
          cat("Blazers", "blazers", "men"),
          cat("Jeans", "jeans", "men"),
          cat("Trousers", "trousers", "men"),
          cat("Shorts", "shorts", "men"),
          cat("Suits", "suits", "men"),
          cat("Activewear", "activewear", "men"),
          cat("Shoes", "shoes", "men"),
          cat("Accessories", "accessories", "men"),
          cat("Sale", "sale", "men"),
        ],
      },
    ],
  },
  {
    slug: "kids",
    name: "Kids",
    href: "/kids",
    description:
      "Clothing, shoes and accessories for girls and boys — plus school essentials and baby basics.",
    image: placeholderImages.kids,
    menu: [
      {
        title: "Girls",
        items: [
          cat("New Arrivals", "girls-new-arrivals", "kids"),
          cat("Dresses", "girls-dresses", "kids"),
          cat("Tops", "girls-tops", "kids"),
          cat("T-Shirts", "girls-t-shirts", "kids"),
          cat("Jackets", "girls-jackets", "kids"),
          cat("Jeans", "girls-jeans", "kids"),
          cat("Pants and Leggings", "girls-pants-and-leggings", "kids"),
          cat("Skirts", "girls-skirts", "kids"),
          cat("Shorts", "girls-shorts", "kids"),
          cat("Shoes", "girls-shoes", "kids"),
          cat("Accessories", "girls-accessories", "kids"),
        ],
      },
      {
        title: "Boys",
        items: [
          cat("New Arrivals", "boys-new-arrivals", "kids"),
          cat("T-Shirts", "boys-t-shirts", "kids"),
          cat("Shirts", "boys-shirts", "kids"),
          cat("Jackets", "boys-jackets", "kids"),
          cat("Hoodies", "boys-hoodies", "kids"),
          cat("Jeans", "boys-jeans", "kids"),
          cat("Pants", "boys-pants", "kids"),
          cat("Shorts", "boys-shorts", "kids"),
          cat("Shoes", "boys-shoes", "kids"),
          cat("Accessories", "boys-accessories", "kids"),
        ],
      },
      {
        title: "More",
        items: [
          cat("School Shoes", "school-shoes", "kids"),
          cat("School Bags", "school-bags", "kids"),
          cat("Babies", "babies", "kids"),
          cat("Kids’ Sale", "kids-sale", "kids"),
        ],
      },
    ],
  },
  {
    slug: "shoes",
    name: "Shoes",
    href: "/shoes",
    description:
      "Footwear for the whole family — sneakers, sandals, boots, flats, formal shoes and more.",
    image: placeholderImages.shoes,
    menu: [
      {
        title: "Women",
        items: [
          cat("Sneakers", "women-sneakers", "shoes"),
          cat("Heels", "women-heels", "shoes"),
          cat("Sandals", "women-sandals", "shoes"),
          cat("Boots", "women-boots", "shoes"),
          cat("Flats", "women-flats", "shoes"),
          cat("Slippers", "women-slippers", "shoes"),
          cat("Clogs", "women-clogs", "shoes"),
        ],
      },
      {
        title: "Men",
        items: [
          cat("Sneakers", "men-sneakers", "shoes"),
          cat("Formal Shoes", "men-formal-shoes", "shoes"),
          cat("Boots", "men-boots", "shoes"),
          cat("Sandals", "men-sandals", "shoes"),
          cat("Slippers", "men-slippers", "shoes"),
          cat("Clogs", "men-clogs", "shoes"),
        ],
      },
      {
        title: "Kids",
        items: [
          cat("Boys’ Shoes", "boys-shoes", "shoes"),
          cat("Girls’ Shoes", "girls-shoes", "shoes"),
          cat("School Shoes", "school-shoes", "shoes"),
          cat("Sandals", "kids-sandals", "shoes"),
          cat("Sneakers", "kids-sneakers", "shoes"),
          cat("Slippers", "kids-slippers", "shoes"),
        ],
      },
    ],
  },
  {
    slug: "bags",
    name: "Bags",
    href: "/bags",
    description:
      "Handbags, totes, backpacks, school bags, travel bags and luggage for every day.",
    image: placeholderImages.bags,
    menu: [
      {
        items: [
          cat("Handbags", "handbags", "bags"),
          cat("Crossbody Bags", "crossbody-bags", "bags"),
          cat("Tote Bags", "tote-bags", "bags"),
          cat("Shoulder Bags", "shoulder-bags", "bags"),
          cat("Clutches", "clutches", "bags"),
          cat("Wallets", "wallets", "bags"),
          cat("Backpacks", "backpacks", "bags"),
          cat("School Bags", "school-bags", "bags"),
          cat("Travel Bags", "travel-bags", "bags"),
          cat("Luggage", "luggage", "bags"),
          cat("Sale", "sale", "bags"),
        ],
      },
    ],
  },
  {
    slug: "beauty",
    name: "Beauty",
    href: "/beauty",
    description:
      "Makeup, skincare, hair care, fragrances and beauty accessories for everyday routines.",
    image: placeholderImages.beauty,
    menu: [
      {
        items: [
          cat("Makeup", "makeup", "beauty"),
          cat("Skincare", "skincare", "beauty"),
          cat("Hair Care", "hair-care", "beauty"),
          cat("Fragrances", "fragrances", "beauty"),
          cat("Body Care", "body-care", "beauty"),
          cat("Nail Products", "nail-products", "beauty"),
          cat("Beauty Accessories", "beauty-accessories", "beauty"),
          cat("New Arrivals", "new-arrivals", "beauty"),
          cat("Sale", "sale", "beauty"),
        ],
      },
    ],
  },
  {
    slug: "home-collection",
    name: "Home Collection",
    href: "/home-collection",
    description:
      "Blankets, bedding, towels, kitchenware, storage and décor to make your space feel like home.",
    image: placeholderImages.home,
    menu: [
      {
        items: [
          cat("Blankets", "blankets", "home-collection"),
          cat("Curtains", "curtains", "home-collection"),
          cat("Bedding", "bedding", "home-collection"),
          cat("Duvets", "duvets", "home-collection"),
          cat("Pillows", "pillows", "home-collection"),
          cat("Cushions", "cushions", "home-collection"),
          cat("Towels", "towels", "home-collection"),
          cat("Kitchenware", "kitchenware", "home-collection"),
          cat("Storage", "storage", "home-collection"),
          cat("Home Décor", "home-decor", "home-collection"),
          cat("New Arrivals", "new-arrivals", "home-collection"),
          cat("Sale", "sale", "home-collection"),
        ],
      },
    ],
  },
  {
    slug: "electronics",
    name: "Electronics",
    href: "/electronics",
    description:
      "Speakers, headphones, smart watches, chargers, power banks and everyday tech accessories.",
    image: placeholderImages.electronics,
    menu: [
      {
        items: [
          cat("Bluetooth Speakers", "bluetooth-speakers", "electronics"),
          cat("Headphones", "headphones", "electronics"),
          cat("Earbuds", "earbuds", "electronics"),
          cat("Smart Watches", "smart-watches", "electronics"),
          cat("Chargers", "chargers", "electronics"),
          cat("Charging Cables", "charging-cables", "electronics"),
          cat("Power Banks", "power-banks", "electronics"),
          cat("Phone Accessories", "phone-accessories", "electronics"),
          cat("LED Lights", "led-lights", "electronics"),
          cat("Small Electronics", "small-electronics", "electronics"),
          cat("New Arrivals", "new-arrivals", "electronics"),
          cat("Sale", "sale", "electronics"),
        ],
      },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    href: "/accessories",
    description:
      "Jewellery, watches, sunglasses, belts, hats and finishing touches for every outfit.",
    image: placeholderImages.accessories,
    menu: [
      {
        items: [
          cat("Jewellery", "jewellery", "accessories"),
          cat("Watches", "watches", "accessories"),
          cat("Sunglasses", "sunglasses", "accessories"),
          cat("Belts", "belts", "accessories"),
          cat("Hats and Caps", "hats-and-caps", "accessories"),
          cat("Socks", "socks", "accessories"),
          cat("Scarves", "scarves", "accessories"),
          cat("Hair Accessories", "hair-accessories", "accessories"),
          cat("Fashion Accessories", "fashion-accessories", "accessories"),
          cat("Wallets", "wallets", "accessories"),
          cat("New Arrivals", "new-arrivals", "accessories"),
          cat("Sale", "sale", "accessories"),
        ],
      },
    ],
  },
  {
    slug: "sale",
    name: "Sale",
    href: "/sale",
    description:
      "Shop reduced prices across women’s, men’s, kids’, shoes, bags, beauty, home and more.",
    image: placeholderImages.sale,
    menu: [
      {
        items: [
          cat("Women’s Sale", "womens-sale", "sale"),
          cat("Men’s Sale", "mens-sale", "sale"),
          cat("Kids’ Sale", "kids-sale", "sale"),
          cat("Shoes Sale", "shoes-sale", "sale"),
          cat("Bags Sale", "bags-sale", "sale"),
          cat("Beauty Sale", "beauty-sale", "sale"),
          cat("Home Collection Sale", "home-collection-sale", "sale"),
          cat("Electronics Sale", "electronics-sale", "sale"),
          cat("Accessories Sale", "accessories-sale", "sale"),
        ],
      },
    ],
  },
];

export function getDepartment(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}

export const featuredCollections: FeaturedCollection[] = [
  {
    id: "1",
    title: "Women’s New Season",
    description: "Fresh styles for everyday wear",
    href: "/women?category=new-arrivals",
    image: placeholderImages.women,
  },
  {
    id: "2",
    title: "Men’s Everyday Style",
    description: "Easy pieces for work and weekends",
    href: "/men?category=new-arrivals",
    image: placeholderImages.men,
  },
  {
    id: "3",
    title: "Kids’ Collection",
    description: "Comfortable looks for growing kids",
    href: "/kids",
    image: placeholderImages.kids,
  },
  {
    id: "4",
    title: "Home Comfort",
    description: "Bedding, blankets and soft living",
    href: "/home-collection",
    image: placeholderImages.home,
  },
  {
    id: "5",
    title: "Beauty Essentials",
    description: "Everyday makeup and skincare",
    href: "/beauty",
    image: placeholderImages.beauty,
  },
  {
    id: "6",
    title: "Electronics and Accessories",
    description: "Tech and finishing touches",
    href: "/electronics",
    image: placeholderImages.electronics,
  },
];

export const shopByDepartment = [
  { name: "Women", href: "/women", image: placeholderImages.women },
  { name: "Men", href: "/men", image: placeholderImages.men },
  { name: "Kids", href: "/kids", image: placeholderImages.kids },
  { name: "Shoes", href: "/shoes", image: placeholderImages.shoes },
  { name: "Handbags", href: "/bags", image: placeholderImages.bags },
  { name: "Beauty", href: "/beauty", image: placeholderImages.beauty },
  {
    name: "Home Collection",
    href: "/home-collection",
    image: placeholderImages.home,
  },
  {
    name: "Electronics",
    href: "/electronics",
    image: placeholderImages.electronics,
  },
  {
    name: "Accessories",
    href: "/accessories",
    image: placeholderImages.accessories,
  },
];
