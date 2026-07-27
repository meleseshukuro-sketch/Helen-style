import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Delivery Information",
};

export default function DeliveryPage() {
  return (
    <LegalPage title="Delivery Information">
      <p>
        Online delivery is being prepared for a future release. For now,
        customers are welcome to shop and collect in store at Helen Lifestyle –
        Turfloop Plaza, Mankweng, Polokwane.
      </p>
      <p>
        Estimated delivery options, fees and service areas will be published
        here once online ordering is enabled.
      </p>
    </LegalPage>
  );
}
