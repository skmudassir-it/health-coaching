import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Success Stories | VitalEdge Health Coaching",
  description:
    "Real transformations from real clients. See how VitalEdge has helped people achieve their health and wellness goals.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
