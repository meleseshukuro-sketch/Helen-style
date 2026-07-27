import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";
import { storeInfo } from "@/data/store";
import { Button } from "@/components/ui/Button";

export function StoreLocation() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 mx-auto max-w-[1600px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="font-display text-2xl md:text-4xl tracking-tight">
            Store Location
          </h2>
          <p className="mt-4 text-sm text-hl-muted leading-relaxed max-w-md">
            Visit us in store for friendly service and a wide selection of
            affordable lifestyle products.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">{storeInfo.locationName}</p>
                {storeInfo.addressLines.map((line) => (
                  <p key={line} className="text-sm text-hl-muted">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="h-5 w-5 shrink-0 mt-0.5" />
              <div className="space-y-1">
                {storeInfo.hours.map((h) => (
                  <p key={h.day} className="text-sm text-hl-muted">
                    <span className="text-hl-black">{h.day}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 mt-0.5" />
              <a
                href={`tel:${storeInfo.phone}`}
                className="text-sm hover:underline"
              >
                {storeInfo.phone}
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={storeInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View Map</Button>
            </a>
            <Link href="/contact">
              <Button variant="secondary">Contact Store</Button>
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] bg-hl-off-white border border-hl-border flex items-center justify-center">
          <div className="text-center px-6">
            <MapPin className="h-8 w-8 mx-auto text-hl-muted" />
            <p className="mt-3 font-display text-lg">Turfloop Plaza</p>
            <p className="mt-1 text-sm text-hl-muted">
              Mankweng, Polokwane · Limpopo
            </p>
            <a
              href={storeInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs tracking-[0.12em] uppercase underline underline-offset-4"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
