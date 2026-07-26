"use client";

import { useRef } from "react";
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
  faStar,
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { SERVICES, TESTIMONIALS } from "@/lib/data";

const ICON_MAP: Record<string, typeof faHeartPulse> = {
  utensils: faUtensils,
  dumbbell: faDumbbell,
  brain: faBrain,
  moon: faMoon,
  "scale-balanced": faScaleBalanced,
  "heart-pulse": faHeartPulse,
};

export function HomeClient() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesPreview />
      <TestimonialsCarousel />
      <AboutPreview />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-teal-50/20">
      {/* Decorative blobs */}
      <div
        className="absolute -top-40 -right-40 size-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "oklch(0.52 0.18 155 / 0.3)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 size-[400px] rounded-full opacity-20 blur-3xl"
        style={{ background: "oklch(0.48 0.10 210 / 0.3)" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Unlock Your{" "}
            <span style={{ color: "oklch(0.52 0.18 155)" }}>Best Self</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Personalized health coaching that transforms your nutrition,
            fitness, and mindset. Real results, sustainable habits, and a
            healthier, happier you.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="h-12 px-8 text-base"
              style={{
                backgroundColor: "oklch(0.52 0.18 155)",
                color: "#fff",
              }}
              render={<Link href="/contact" />}
            >
              Start Your Journey
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
              render={<Link href="/services" />}
            >
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Coaching Services
          </h2>
          <div className="gradient-divider mx-auto mb-4" />
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Comprehensive programs tailored to your unique health goals
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" as const }}
            >
              <Link href={`/services/${service.slug}`}>
                <Card className="glass-card h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div
                      className="mb-3 flex size-12 items-center justify-center rounded-xl"
                      style={{
                        background: "oklch(0.52 0.18 155 / 0.1)",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={ICON_MAP[service.icon] || faHeartPulse}
                        className="size-5"
                        style={{ color: "oklch(0.52 0.18 155)" }}
                      />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-medium"
                      style={{ color: "oklch(0.52 0.18 155)" }}
                    >
                      Learn more <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsCarousel() {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplayRef.current]
  );

  return (
    <section
      className="py-20 sm:py-28"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.52 0.18 155 / 0.06), oklch(0.48 0.10 210 / 0.06))",
      }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="gradient-divider mx-auto mb-4" />
        </div>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="min-w-0 flex-[0_0_100%] px-4"
                >
                  <div className="glass-card mx-auto max-w-2xl p-8 text-center sm:p-10">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="mb-4 size-8"
                      style={{ color: "oklch(0.52 0.18 155 / 0.3)" }}
                    />
                    <blockquote className="mb-6 text-lg leading-relaxed text-foreground sm:text-xl">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                          key={i}
                          icon={faStar}
                          className="size-4"
                          style={{ color: "oklch(0.65 0.18 80)" }}
                        />
                      ))}
                    </div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 rounded-full bg-background p-2 shadow-md transition-colors hover:bg-muted"
            aria-label="Previous testimonial"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="size-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 rounded-full bg-background p-2 shadow-md transition-colors hover:bg-muted"
            aria-label="Next testimonial"
          >
            <FontAwesomeIcon icon={faChevronRight} className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Why VitalEdge?
            </h2>
            <div className="gradient-divider mb-6" />
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              At VitalEdge, we believe that true health transformation comes
              from addressing the whole person — not just isolated symptoms. Our
              integrative approach combines nutrition science, fitness coaching,
              stress management, and mindset work to create lasting change.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              With over 15 years of experience and hundreds of success stories,
              our team of certified coaches is dedicated to helping you become
              the healthiest, happiest version of yourself.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8"
              render={<Link href="/about" />}
            >
              Meet Our Team
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "500+", label: "Clients Transformed" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "6", label: "Specialized Programs" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center">
                <p
                  className="text-3xl font-bold"
                  style={{ color: "oklch(0.52 0.18 155)" }}
                >
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="py-20 sm:py-28"
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
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Take the first step toward a healthier, more vibrant you. Schedule
            your free consultation today.
          </p>
          <Button
            size="lg"
            className="h-14 px-10 text-base font-semibold bg-white hover:bg-white/90"
            style={{ color: "oklch(0.52 0.18 155)" }}
            render={<Link href="/contact" />}
          >
            Get Your Free Consultation
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
