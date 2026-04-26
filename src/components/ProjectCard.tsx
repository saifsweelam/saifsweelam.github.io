import { TechIcon } from "./TechIcon";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group border-border/70 bg-background/90 dark:bg-background/80 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-md">
      <CardHeader className="border-b border-border/60 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground/60">
              {project.year}
            </p>
            <CardTitle className="mt-3 text-lg tracking-[-0.02em] text-foreground">
              <Link
                href={`/projects/${project.slug}`}
                className="transition-colors hover:text-foreground/70"
              >
                {project.title}
              </Link>
            </CardTitle>
          </div>

          <span className="rounded-full border border-border/70 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
            {project.status}
          </span>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <CardDescription className="text-sm leading-6 text-muted-foreground">
          {project.description}
        </CardDescription>

        <div className="mt-5 flex flex-wrap gap-1.5">
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
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 border-t border-border/60 pt-3">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            title={link.label}
            className="inline-flex size-8 items-center justify-center rounded-full border border-border/70 bg-background text-foreground transition-colors hover:border-foreground/20 hover:bg-muted/40"
          >
            <TechIcon
              icon={link.icon}
              className="size-3.5 shrink-0"
            />
            <span className="sr-only">{link.label}</span>
          </a>
        ))}
      </CardFooter>
    </Card>
  );
}
