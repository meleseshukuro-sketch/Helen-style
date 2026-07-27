import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Careers",
};

export default function CareersPage() {
  return (
    <LegalPage title="Careers">
      <p>
        Helen Lifestyle is a growing South African retail business committed to
        creating employment opportunities within our communities.
      </p>
      <p>
        Interested in joining our team? Send your CV and a short introduction to{" "}
        <a href="mailto:HelenLifestylestore@gmail.com" className="underline">
          HelenLifestylestore@gmail.com
        </a>{" "}
        or visit us in store at Turfloop Plaza.
      </p>
    </LegalPage>
  );
}
