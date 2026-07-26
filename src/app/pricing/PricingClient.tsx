"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck, faCrown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/lib/data";

export function PricingClient() {
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
              Simple, Transparent Pricing
            </h1>
            <div className="gradient-divider mx-auto mb-4" />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose the plan that fits your goals. No hidden fees, no surprises
              — just real coaching that delivers results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" as const }}
                className="flex"
              >
                <Card
                  className={`glass-card flex w-full flex-col ${
                    plan.featured
                      ? "relative ring-2 shadow-lg"
                      : ""
                  }`}
                  style={
                    plan.featured
                      ? {
                          borderColor: "oklch(0.52 0.18 155)",
                        }
                      : undefined
                  }
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge
                        className="flex items-center gap-1 px-4 py-1 text-xs font-semibold"
                        style={{
                          backgroundColor: "oklch(0.52 0.18 155)",
                          color: "#fff",
                        }}
                      >
                        <FontAwesomeIcon icon={faCrown} className="size-3" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="mt-0.5 size-4 shrink-0"
                            style={{ color: "oklch(0.52 0.18 155)" }}
                          />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="justify-center pt-4">
                    <Button
                      size="lg"
                      className="w-full h-12"
                      style={
                        plan.featured
                          ? {
                              backgroundColor: "oklch(0.52 0.18 155)",
                              color: "#fff",
                            }
                          : {
                              backgroundColor: "oklch(0.52 0.18 155 / 0.1)",
                              color: "oklch(0.52 0.18 155)",
                            }
                      }
                      render={<Link href="/contact" />}
                    >
                      {plan.ctaText}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.52 0.18 155 / 0.05), oklch(0.48 0.10 210 / 0.05))",
        }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold">Have Questions?</h2>
          <p className="mb-6 text-muted-foreground">
            Not sure which plan is right for you? Reach out and we&apos;ll help
            you decide.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-8"
            render={<Link href="/contact" />}
          >
            Contact Us
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
