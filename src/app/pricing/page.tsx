import type { Metadata } from "next";
import { PricingClient } from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing Plans | VitalEdge Health Coaching",
  description:
    "Choose the health coaching plan that fits your goals. Transparent pricing with no hidden fees — from starter to premium support.",
};

export default function PricingPage() {
  return <PricingClient />;
}
