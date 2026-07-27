import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Helen Lifestyle — a modern retail store offering fashion, footwear, handbags, beauty, home essentials, electronics and accessories at affordable prices.",
};

const values = [
  "Customer First",
  "Honesty and Integrity",
  "Respect",
  "Teamwork",
  "Affordability",
  "Continuous Improvement",
  "Community Development",
];

const whyChoose = [
  "Affordable prices",
  "Wide variety of products",
  "Friendly customer service",
  "Convenient one-stop shopping",
  "New arrivals",
  "Growing South African retail business",
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-hl-border bg-hl-off-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 md:py-24">
          <p className="text-[11px] tracking-[0.16em] uppercase text-hl-muted mb-3">
            About Helen Lifestyle
          </p>
          <h1 className="font-display text-3xl md:text-5xl tracking-tight">
            Shopping made simple
          </h1>
          <p className="mt-6 text-sm md:text-base text-hl-muted leading-relaxed">
            Helen Lifestyle is a modern retail store offering a wide selection of
            fashion, footwear, handbags, beauty products, home essentials,
            electronics and accessories at affordable prices.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 md:px-6 py-14 md:py-20 space-y-14">
        <section>
          <h2 className="font-display text-2xl tracking-tight">Our story</h2>
          <div className="mt-5 space-y-4 text-sm text-hl-muted leading-relaxed">
            <p>
              Our goal is to make everyday shopping easy and convenient by
              bringing a variety of products together under one roof.
            </p>
            <p>
              Since opening our doors, Helen Lifestyle has continued to grow
              while creating employment opportunities and serving local
              communities with friendly customer service and affordable
              products.
            </p>
            <p>
              Whether customers are shopping for themselves, their families or
              their homes, Helen Lifestyle aims to provide a welcoming shopping
              experience and products that suit different lifestyles and
              budgets.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-xl tracking-tight">Mission</h2>
            <p className="mt-3 text-sm text-hl-muted leading-relaxed">
              To provide affordable products, friendly customer service and a
              convenient shopping experience while creating employment
              opportunities within our communities.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl tracking-tight">Vision</h2>
            <p className="mt-3 text-sm text-hl-muted leading-relaxed">
              To become one of South Africa’s trusted lifestyle retail stores by
              offering a wide variety of affordable products and continuing to
              grow alongside our customers and communities.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-tight">Values</h2>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {values.map((value) => (
              <li
                key={value}
                className="border-l-2 border-hl-black pl-4 py-1 text-sm"
              >
                {value}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl tracking-tight">
            Why choose Helen Lifestyle
          </h2>
          <ul className="mt-6 space-y-3">
            {whyChoose.map((item) => (
              <li key={item} className="text-sm text-hl-muted flex gap-3">
                <span className="text-hl-accent">—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3 pt-4">
          <Link href="/contact">
            <Button>Contact us</Button>
          </Link>
          <Link href="/women">
            <Button variant="secondary">Start shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
