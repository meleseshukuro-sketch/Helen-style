import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions">
      <p>
        By using the Helen Lifestyle website you agree to browse product
        information for general shopping purposes. Prices and availability are
        subject to change and may differ in store.
      </p>
      <p>
        Online ordering, payments and delivery services will be governed by
        updated terms once those features are enabled.
      </p>
      <p>
        Helen Lifestyle is located at Turfloop Plaza, Mankweng, Polokwane,
        Limpopo, South Africa.
      </p>
    </LegalPage>
  );
}
