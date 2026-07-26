import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | VitalEdge Health Coaching",
  description:
    "Meet the VitalEdge team — passionate health coaches dedicated to transforming lives through personalized wellness and nutrition coaching.",
};

export default function AboutPage() {
  return <AboutClient />;
}
