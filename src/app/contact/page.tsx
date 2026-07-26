import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | VitalEdge Health Coaching",
  description:
    "Ready to transform your health? Get in touch with VitalEdge today. We're here to answer your questions and start your wellness journey.",
};

export default function ContactPage() {
  return <ContactClient />;
}
