import {
  ArrowLeft01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { TechIcon } from "./TechIcon";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/data/projects";

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="relative isolate px-6 py-20 sm:py-24 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-foreground/[0.08] via-transparent to-transparent" />

      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-muted-foreground/70 transition-colors hover:text-foreground"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} className="size-3.5" />
          Back to projects
        </Link>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-border/70 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                {project.status}
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.32em] text-muted-foreground/60">
                {project.year}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-foreground sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              {project.description}
            </p>

            <div className="mt-8 rounded-2xl border border-border/70 bg-muted/20 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
                Highlights
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/85">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
                Technologies
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-muted/30 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-foreground/80"
                  >
                    <TechIcon
                      icon={technology.icon}
                      className="size-3 shrink-0"
                    />
                    <span>{technology.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-border/70 bg-background/80 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
                  Links
                </CardTitle>
                <CardDescription>
                  Open the live project or source code.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl border border-border/70 bg-muted/20 px-4 py-3 text-sm text-foreground transition-colors hover:border-foreground/15 hover:bg-muted/40"
                  >
                    <span className="flex items-center gap-2">
                      <TechIcon
                        icon={link.icon}
                        className="size-4 shrink-0"
                      />
                      <span>{link.label}</span>
                    </span>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      className="size-4 text-muted-foreground"
                    />
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-background/80 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
                  Summary
                </CardTitle>
                <CardDescription>
                  A concise read on the direction and presentation.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm leading-7 text-muted-foreground">
                  The layout stays intentionally minimal so the project details,
                  the stack, and the actions remain easy to scan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
