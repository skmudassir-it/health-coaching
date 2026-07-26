import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "VitalEdge Health Coaching | Transform Your Health",
  description:
    "Personalized health coaching, nutrition guidance, and wellness programs designed to help you unlock your best self. Start your transformation today.",
};

export default function HomePage() {
  return <HomeClient />;
}
