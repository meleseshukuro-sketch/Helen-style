"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <section className="py-16 md:py-24 bg-hl-black text-white">
      <div className="mx-auto max-w-xl px-4 text-center">
        <h2 className="font-display text-2xl md:text-4xl tracking-tight">
          Be the First to Know
        </h2>
        <p className="mt-4 text-sm text-white/75 leading-relaxed">
          Receive updates about new arrivals, promotions and Helen Lifestyle
          news.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
            placeholder="Your email address"
            required
            className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white"
          />
          <Button
            type="submit"
            className="bg-white text-hl-black hover:bg-hl-off-white shrink-0"
          >
            Subscribe
          </Button>
        </form>
        {status === "success" && (
          <p className="mt-4 text-sm text-white/80" role="status">
            Thank you — you&apos;re on the list.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-300" role="alert">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  );
}
