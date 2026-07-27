import Image from "next/image";
import Link from "next/link";
import { placeholderImages } from "@/data/categories";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[520px] max-h-[900px] overflow-hidden bg-hl-black">
      <Image
        src={placeholderImages.hero}
        alt="Fashion lifestyle at Helen Lifestyle"
        fill
        priority
        className="object-cover opacity-90"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10" />
      <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-4 md:px-10 lg:px-16 pb-16 md:pb-0">
        <div className="max-w-xl animate-slide-up">
          <p className="text-white/80 text-[11px] md:text-xs tracking-[0.2em] uppercase mb-4">
            Helen Lifestyle
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05]">
            Discover Your Lifestyle
          </h1>
          <p className="mt-5 text-white/90 text-sm md:text-base leading-relaxed max-w-md">
            Fashion, home, beauty and everyday essentials under one roof.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/women?category=new-arrivals">
              <Button size="lg" className="bg-white text-hl-black hover:bg-hl-off-white w-full sm:w-auto">
                Shop New Arrivals
              </Button>
            </Link>
            <Link href="#departments">
              <Button
                size="lg"
                variant="secondary"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Explore Departments
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
