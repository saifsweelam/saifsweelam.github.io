import SkillsCategoryCard from "@/components/SkillsCategoryCard";
import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden px-6 py-20 sm:py-24 lg:px-8 bg-emerald-600 dark:bg-transparent"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-100 dark:text-muted-foreground/70">
              Skills
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.04em] text-white dark:text-foreground sm:text-4xl">
              Stack by category
            </h2>

            <p className="max-w-2xl text-sm leading-7 text-emerald-100 dark:text-muted-foreground sm:text-base">
              A categorized snapshot of the tools I reach for most often,
              grouped by how I actually ship work.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillsCategoryCard key={group.title} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
