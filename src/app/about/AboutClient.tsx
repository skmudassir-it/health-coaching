"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faArrowRight,
  faBullseye,
  faEye,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TEAM } from "@/lib/data";

const VALUES = [
  {
    icon: faBullseye,
    title: "Integrity",
    description:
      "We believe in transparent, honest coaching. No fad diets, no false promises — just science-backed guidance.",
  },
  {
    icon: faEye,
    title: "Personalization",
    description:
      "Every client is unique. We create custom plans that respect your body, lifestyle, and preferences.",
  },
  {
    icon: faHandHoldingHeart,
    title: "Compassion",
    description:
      "We meet you where you are, without judgment. Your journey is yours, and we're here to support it.",
  },
  {
    icon: faHeartPulse,
    title: "Holistic Health",
    description:
      "True wellness integrates nutrition, fitness, mindset, and lifestyle. We address the whole person.",
  },
];

export function AboutClient() {
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
              About VitalEdge
            </h1>
            <div className="gradient-divider mx-auto mb-4" />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We&apos;re on a mission to help people transform their health
              through personalized, science-backed coaching
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <div className="gradient-divider mx-auto mb-6" />
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              At VitalEdge Health Coaching, we believe that everyone deserves to
              feel vibrant, strong, and confident in their own body. Our mission
              is to bridge the gap between knowing what&apos;s healthy and
              actually living it — by providing personalized, evidence-based
              coaching that fits into real life. We don&apos;t do quick fixes.
              We build sustainable habits, one step at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section
        className="py-20 sm:py-28"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.52 0.18 155 / 0.05), oklch(0.48 0.10 210 / 0.05))",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Meet Our Team</h2>
            <div className="gradient-divider mx-auto mb-4" />
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Passionate professionals dedicated to your transformation
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" as const }}
              >
                <Card className="glass-card h-full text-center">
                  <CardHeader>
                    <div
                      className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full text-xl font-bold text-white"
                      style={{ background: "oklch(0.52 0.18 155)" }}
                    >
                      {member.initials}
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Core Values</h2>
            <div className="gradient-divider mx-auto mb-4" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" as const }}
                className="text-center"
              >
                <div
                  className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl"
                  style={{ background: "oklch(0.52 0.18 155 / 0.1)" }}
                >
                  <FontAwesomeIcon
                    icon={value.icon}
                    className="size-7"
                    style={{ color: "oklch(0.52 0.18 155)" }}
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
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
            "linear-gradient(135deg, oklch(0.52 0.18 155), oklch(0.48 0.10 210))",
        }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Work With Us?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Let&apos;s start your transformation journey together.
            </p>
            <Button
              size="lg"
              className="h-14 px-10 text-base font-semibold bg-white hover:bg-white/90"
              style={{ color: "oklch(0.52 0.18 155)" }}
              render={<Link href="/contact" />}
            >
              Get Started
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
