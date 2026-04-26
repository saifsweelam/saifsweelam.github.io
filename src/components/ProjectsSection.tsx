import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative isolate px-6 py-24 sm:py-28 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-foreground sm:text-4xl">
              Showcase
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            A concise view of recent work, shaped around clarity, useful
            details, and a restrained presentation that keeps the focus on the
            product.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
