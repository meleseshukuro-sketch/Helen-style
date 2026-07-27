import { Hero } from "@/components/home/Hero";
import { ShopByDepartment } from "@/components/home/ShopByDepartment";
import { NewArrivals } from "@/components/home/NewArrivals";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { WeeklySpecials } from "@/components/home/WeeklySpecials";
import { WhyShop } from "@/components/home/WhyShop";
import { StoreLocation } from "@/components/home/StoreLocation";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShopByDepartment />
      <NewArrivals />
      <FeaturedCollections />
      <WeeklySpecials />
      <WhyShop />
      <StoreLocation />
      <Newsletter />
    </>
  );
}
