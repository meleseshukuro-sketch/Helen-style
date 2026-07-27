import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/data/store";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Fashion & Lifestyle Retail`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Fashion & Lifestyle Retail`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className={`${manrope.variable} ${syne.variable} antialiased flex flex-col min-h-screen`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
