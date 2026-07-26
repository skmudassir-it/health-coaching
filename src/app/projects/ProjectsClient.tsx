"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data";

const CATEGORIES = ["All", "Weight Loss", "Corporate", "Fitness", "Medical"] as const;

export function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

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
              Success Stories
            </h1>
            <div className="gradient-divider mx-auto mb-4" />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real transformations from real clients who committed to their
              health journey with VitalEdge
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="rounded-full px-5 py-2 text-sm font-medium transition-all"
                style={
                  activeCategory === cat
                    ? {
                        backgroundColor: "oklch(0.52 0.18 155)",
                        color: "#fff",
                      }
                    : {
                        backgroundColor: "oklch(0.52 0.18 155 / 0.08)",
                        color: "oklch(0.52 0.18 155)",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" as const }}
              className="grid gap-8 sm:grid-cols-2"
            >
              {filtered.map((project, i) => (
                <Card key={project.slug} className="glass-card overflow-hidden">
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-44 object-cover"
                    />
                  )}
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="text-xs"
                        style={{
                          borderColor: "oklch(0.52 0.18 155 / 0.3)",
                          color: "oklch(0.52 0.18 155)",
                        }}
                      >
                        {project.category}
                      </Badge>
                      <FontAwesomeIcon
                        icon={faTrophy}
                        className="size-5"
                        style={{ color: "oklch(0.65 0.18 80)" }}
                      />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <h4 className="mb-3 text-sm font-semibold">Key Results</h4>
                    <ul className="space-y-2">
                      {project.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="mt-0.5 size-3.5 shrink-0"
                            style={{ color: "oklch(0.52 0.18 155)" }}
                          />
                          {result}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm font-medium text-muted-foreground">
                      — {project.clientName}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">
                No stories found in this category.
              </p>
            </div>
          )}
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
            Ready to write your own success story?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Join hundreds of clients who have transformed their health with
            VitalEdge.
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
            Start Your Journey
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
