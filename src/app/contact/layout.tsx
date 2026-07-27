import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Helen Lifestyle at Turfloop Plaza, Mankweng, Polokwane. Email, phone, WhatsApp and store hours.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
