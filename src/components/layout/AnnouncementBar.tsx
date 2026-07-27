"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { announcements } from "@/data/store";

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const item = announcements[index];

  return (
    <div className="bg-hl-black text-white text-center text-[11px] md:text-xs tracking-[0.08em] uppercase py-2 px-4">
      {item.href ? (
        <Link href={item.href} className="hover:opacity-80 transition-opacity">
          {item.text}
        </Link>
      ) : (
        <span>{item.text}</span>
      )}
    </div>
  );
}
