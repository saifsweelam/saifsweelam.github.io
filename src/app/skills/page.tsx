import { skillGroups } from "@/data/skills";
import PageHeader from "@/components/PageHeader";
import { TechIcon } from "@/components/TechIcon";

export default function SkillsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Technical Skills" 
        description="A comprehensive overview of the technologies, languages, and tools I use to build scalable applications."
      />
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="space-y-16">
          {skillGroups.map((group) => (
            <div key={group.title} className="flex flex-col md:flex-row gap-8 items-start border-b border-border/40 pb-16 last:border-0 last:pb-0">
              <div className="md:w-1/3 shrink-0">
                <div className="flex items-center gap-3 mb-4">
                   <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                     <TechIcon icon={group.leadIcon} className="size-5 shrink-0" />
                   </div>
                   <h2 className="text-2xl font-semibold text-foreground">{group.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{group.description}</p>
              </div>
              <div className="md:w-2/3 flex flex-wrap gap-3">
                {group.items.map((item) => (
                    <div key={item.name} className="flex items-center gap-3 rounded-full border border-border/60 bg-muted/20 px-4 py-2 hover:border-emerald-600/30 hover:bg-emerald-600/5 transition-colors">
                        <div className="size-5 text-foreground shrink-0">
                          <TechIcon icon={item.icon || item.customIcon} className="w-full h-full" />
                        </div>
                        <span className="text-sm font-medium text-foreground/90">{item.name}</span>
                    </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
