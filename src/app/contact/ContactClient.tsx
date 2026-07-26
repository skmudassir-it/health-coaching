"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const SERVICES_OPTIONS = [
  { value: "", label: "Select a service (optional)" },
  { value: "nutrition-coaching", label: "Nutrition Coaching" },
  { value: "fitness-training", label: "Fitness Training" },
  { value: "stress-management", label: "Stress Management" },
  { value: "sleep-optimization", label: "Sleep Optimization" },
  { value: "weight-management", label: "Weight Management" },
  { value: "holistic-wellness", label: "Holistic Wellness" },
  { value: "not-sure", label: "Not Sure — Help Me Decide" },
];

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Failed to submit form");
      }
      setSubmitted(true);
      reset();
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col">
        <section className="flex min-h-[60vh] items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            className="glass-card mx-4 max-w-md p-10 text-center"
          >
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="mx-auto mb-4 size-16"
              style={{ color: "oklch(0.52 0.18 155)" }}
            />
            <h2 className="mb-2 text-2xl font-bold">Message Sent!</h2>
            <p className="mb-6 text-muted-foreground">
              Thank you for reaching out. We&apos;ll get back to you within
              24 hours.
            </p>
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="h-10"
              >
                Send Another Message
              </Button>
              <Button
                className="h-10"
                style={{
                  backgroundColor: "oklch(0.52 0.18 155)",
                  color: "#fff",
                }}
                render={<Link href="/" />}
              >
                Back to Home
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[30vh] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-teal-50/20">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Get In Touch
            </h1>
            <div className="gradient-divider mx-auto mb-4" />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Ready to start your transformation? Fill out the form and
              we&apos;ll be in touch within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8 sm:p-10">
                <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>

                {error && (
                  <div className="mb-6 rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      {...register("name")}
                      placeholder="John Doe"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="john@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      {...register("phone")}
                      type="tel"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Service Interested In
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setValue("service", String(value ?? ""))
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES_OPTIONS.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Your Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      {...register("message")}
                      placeholder="Tell us about your health goals and how we can help..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="h-12 w-full text-base"
                    style={{
                      backgroundColor: "oklch(0.52 0.18 155)",
                      color: "#fff",
                    }}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          className="ml-2 size-4"
                        />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8">
                <h2 className="mb-6 text-2xl font-bold">Contact Info</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        background: "oklch(0.52 0.18 155 / 0.1)",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="size-4"
                        style={{ color: "oklch(0.52 0.18 155)" }}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href="mailto:hello@vitaledge.co"
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        hello@vitaledge.co
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        background: "oklch(0.52 0.18 155 / 0.1)",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="size-4"
                        style={{ color: "oklch(0.52 0.18 155)" }}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        background: "oklch(0.52 0.18 155 / 0.1)",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="size-4"
                        style={{ color: "oklch(0.52 0.18 155)" }}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Office</p>
                      <p className="text-sm text-muted-foreground">
                        123 Wellness Way, Suite 200
                        <br />
                        Austin, TX 78701
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-8 rounded-xl p-6 text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.52 0.18 155 / 0.08), oklch(0.48 0.10 210 / 0.08))",
                  }}
                >
                  <p className="mb-2 text-sm font-semibold">
                    Free 15-Minute Consultation
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Not sure where to start? Book a free intro call and
                    we&apos;ll help you find the right path.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
