import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faUtensils,
  faDumbbell,
  faBrain,
  faMoon,
  faScaleBalanced,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, typeof faHeartPulse> = {
  utensils: faUtensils,
  dumbbell: faDumbbell,
  brain: faBrain,
  moon: faMoon,
  "scale-balanced": faScaleBalanced,
  "heart-pulse": faHeartPulse,
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} | VitalEdge Health Coaching`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-teal-50/20">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div
            className="mx-auto mb-6 flex size-20 items-center justify-center rounded-2xl"
            style={{ background: "oklch(0.52 0.18 155 / 0.1)" }}
          >
            <FontAwesomeIcon
              icon={ICON_MAP[service.icon] || faHeartPulse}
              className="size-10"
              style={{ color: "oklch(0.52 0.18 155)" }}
            />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <div className="gradient-divider mx-auto mb-4" />
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12">
            <h2 className="mb-6 text-2xl font-bold">About This Service</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            <h3 className="mb-4 text-xl font-semibold">What&apos;s Included</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: "oklch(0.52 0.18 155 / 0.1)",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="size-3"
                      style={{ color: "oklch(0.52 0.18 155)" }}
                    />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.52 0.18 155 / 0.05), oklch(0.48 0.10 210 / 0.05))",
        }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to start {service.title.toLowerCase()}?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Take the first step toward achieving your health goals. Our coaches
            are ready to guide you.
          </p>
          <Button
            size="lg"
            className="h-12 px-8 text-base"
            style={{
              backgroundColor: "oklch(0.52 0.18 155)",
              color: "#fff",
            }}
            render={<Link href="/contact" />}
          >
            Get Started Today
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
