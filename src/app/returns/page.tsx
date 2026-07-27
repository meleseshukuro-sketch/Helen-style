import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Returns and Exchanges",
};

export default function ReturnsPage() {
  return (
    <LegalPage title="Returns and Exchanges">
      <p>
        Unworn items with original tags may be returned or exchanged in store
        within 7 days of purchase, subject to store policy and proof of
        purchase.
      </p>
      <p>
        Certain products such as beauty, underwear and personal care items may
        not be eligible for return once opened. Please ask our team for
        guidance.
      </p>
      <p>
        Visit Helen Lifestyle at Turfloop Plaza or contact us on{" "}
        <a href="tel:+27609423250" className="underline">
          +27 60 942 3250
        </a>{" "}
        for assistance.
      </p>
    </LegalPage>
  );
}
