"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { storeInfo } from "@/data/store";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "");
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-2xl">
        <h1 className="font-display text-3xl md:text-5xl tracking-tight">
          Contact
        </h1>
        <p className="mt-4 text-sm text-hl-muted leading-relaxed">
          Get in touch with Helen Lifestyle — we&apos;re happy to help with
          product questions, store information and more.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-xl">Helen Lifestyle</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <dt className="text-hl-muted text-xs uppercase tracking-wider">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${storeInfo.email}`}
                      className="hover:underline"
                    >
                      {storeInfo.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <dt className="text-hl-muted text-xs uppercase tracking-wider">
                    Phone
                  </dt>
                  <dd>
                    <a href={`tel:${storeInfo.phone}`} className="hover:underline">
                      {storeInfo.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <dt className="text-hl-muted text-xs uppercase tracking-wider">
                    Location
                  </dt>
                  <dd id="location">
                    {storeInfo.locationName}
                    <br />
                    {storeInfo.addressLines.join(", ")}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="font-display text-lg">Business hours</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-hl-muted">
              {storeInfo.hours.map((h) => (
                <li key={h.day}>
                  <span className="text-hl-black">{h.day}:</span> {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={`tel:${storeInfo.phone}`}>
              <Button>Call</Button>
            </a>
            <a href={`mailto:${storeInfo.email}`}>
              <Button variant="secondary">Email</Button>
            </a>
            <a
              href={`https://wa.me/${storeInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="inline-flex gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </a>
          </div>

          <div className="relative aspect-[4/3] border border-hl-border bg-hl-off-white flex items-center justify-center">
            <div className="text-center px-6">
              <MapPin className="h-7 w-7 mx-auto text-hl-muted" />
              <p className="mt-3 text-sm font-medium">Google Maps placeholder</p>
              <p className="mt-1 text-xs text-hl-muted">
                Turfloop Plaza, Mankweng, Polokwane
              </p>
              <a
                href={storeInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs uppercase tracking-[0.12em] underline underline-offset-4"
              >
                Open map
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="font-display text-xl">Send a message</h2>
          <label className="block text-xs">
            <span className="block mb-1.5 tracking-[0.08em] uppercase text-hl-muted">
              Name
            </span>
            <input
              name="name"
              required
              className="w-full border border-hl-border px-3 py-2.5 text-sm outline-none focus:border-hl-black"
            />
          </label>
          <label className="block text-xs">
            <span className="block mb-1.5 tracking-[0.08em] uppercase text-hl-muted">
              Email
            </span>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-hl-border px-3 py-2.5 text-sm outline-none focus:border-hl-black"
            />
          </label>
          <label className="block text-xs">
            <span className="block mb-1.5 tracking-[0.08em] uppercase text-hl-muted">
              Message
            </span>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full border border-hl-border px-3 py-2.5 text-sm outline-none focus:border-hl-black resize-y"
            />
          </label>
          <Button type="submit">Send message</Button>
          {status === "success" && (
            <p className="text-sm text-hl-muted" role="status">
              Thank you — your message has been noted. We&apos;ll get back to you
              soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-hl-accent" role="alert">
              Please check your details and try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
