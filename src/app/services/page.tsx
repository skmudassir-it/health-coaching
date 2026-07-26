import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | VitalEdge Health Coaching",
  description:
    "Explore our comprehensive health coaching services — nutrition, fitness, stress management, sleep optimization, weight management, and holistic wellness.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
