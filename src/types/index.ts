export type DepartmentSlug =
  | "women"
  | "men"
  | "kids"
  | "shoes"
  | "bags"
  | "beauty"
  | "home-collection"
  | "electronics"
  | "accessories"
  | "sale";

export type StockStatus = "in_stock" | "low_stock" | "out_of_stock";

export interface ProductColour {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  department: DepartmentSlug;
  category: string;
  categorySlug: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  sizes: string[];
  colours: ProductColour[];
  stockStatus: StockStatus;
  isNew: boolean;
  isFeatured: boolean;
  isBestSeller?: boolean;
}

export interface CategoryItem {
  label: string;
  slug: string;
  href: string;
}

export interface CategoryGroup {
  title?: string;
  items: CategoryItem[];
}

export interface Department {
  slug: DepartmentSlug;
  name: string;
  href: string;
  description: string;
  image: string;
  menu: CategoryGroup[];
}

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  salePrice?: number;
  size: string;
  colour: string;
  quantity: number;
}

export interface Announcement {
  id: string;
  text: string;
  href?: string;
}

export interface FeaturedCollection {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface StoreInfo {
  name: string;
  locationName: string;
  addressLines: string[];
  phone: string;
  email: string;
  website: string;
  hours: { day: string; time: string }[];
  mapUrl: string;
  whatsapp: string;
}

export type SortOption =
  | "newest"
  | "price-asc"
  | "price-desc"
  | "best-selling";

export interface ProductFilters {
  sizes: string[];
  colours: string[];
  priceMin?: number;
  priceMax?: number;
  category?: string;
  availability?: StockStatus | "all";
}
