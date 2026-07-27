import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        Helen Lifestyle respects your privacy. Personal information collected
        through this website (such as contact form submissions or newsletter
        sign-ups) will only be used to respond to enquiries and improve our
        customer experience.
      </p>
      <p>
        We do not sell customer information to third parties. As online ordering
        features are added, this policy will be updated to cover payments,
        delivery and account data.
      </p>
      <p>
        For privacy questions, contact us at{" "}
        <a href="mailto:HelenLifestylestore@gmail.com" className="underline">
          HelenLifestylestore@gmail.com
        </a>
        .
      </p>
    </LegalPage>
  );
}
