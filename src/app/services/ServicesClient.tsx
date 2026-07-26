"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUtensils,
  faDumbbell,
  faBrain,
  faMoon,
  faScaleBalanced,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, typeof faHeartPulse> = {
  utensils: faUtensils,
  dumbbell: faDumbbell,
  brain: faBrain,
  moon: faMoon,
  "scale-balanced": faScaleBalanced,
  "heart-pulse": faHeartPulse,
};

export function ServicesClient() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-teal-50/20">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <div className="gradient-divider mx-auto mb-4" />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive health coaching programs designed to transform every
              aspect of your well-being
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" as const }}
              >
                <Link href={`/services/${service.slug}`}>
                  <Card className="glass-card h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                    {service.imageUrl && (
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-44 object-cover"
                      />
                    )}
                    <CardHeader>
                      <div
                        className="mb-4 flex size-14 items-center justify-center rounded-xl"
                        style={{
                          background: "oklch(0.52 0.18 155 / 0.1)",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={ICON_MAP[service.icon] || faHeartPulse}
                          className="size-6"
                          style={{ color: "oklch(0.52 0.18 155)" }}
                        />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="mb-4 space-y-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="mt-0.5 size-3 shrink-0"
                              style={{ color: "oklch(0.52 0.18 155)" }}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <span
                        className="inline-flex items-center gap-1 text-sm font-medium"
                        style={{ color: "oklch(0.52 0.18 155)" }}
                      >
                        View details{" "}
                        <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
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
            Not sure which service is right for you?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Schedule a free consultation and we&apos;ll help you find the
            perfect program for your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center gap-2 rounded-lg px-8 text-base font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "oklch(0.52 0.18 155)" }}
          >
            Book Free Consultation
            <FontAwesomeIcon icon={faArrowRight} className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
