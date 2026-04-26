import { projects } from "@/data/projects";
import PageHeader from "@/components/PageHeader";
import { HugeiconsIcon } from "@hugeicons/react";
import { TechIcon } from "@/components/TechIcon";
import { CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";

export default function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Selected Projects" 
        description="A deep dive into the systems and applications I've built, focusing on architecture and product delivery."
      />
      <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div key={project.slug} className="relative rounded-3xl border border-border/60 bg-card p-8 md:p-12 shadow-sm flex flex-col gap-8 overflow-hidden">
               <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
               
               <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                 <div>
                   <div className="flex items-center gap-3 mb-4">
                     <span className="inline-flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600 ring-1 ring-inset ring-emerald-600/20">
                       {project.status}
                     </span>
                     <span className="text-sm font-medium text-muted-foreground">{project.year}</span>
                   </div>
                   <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{project.title}</h2>
                   <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">{project.description}</p>
                 </div>
                 
                 <div className="flex flex-wrap gap-4 shrink-0 mt-2 md:mt-0">
                   {project.links.map((link) => (
                     <a key={link.label} href={link.href} className="flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors shadow-sm">
                       <TechIcon icon={link.icon} className="size-4 shrink-0" />
                       {link.label}
                     </a>
                   ))}
                 </div>
               </div>

               <div className="relative z-10 grid md:grid-cols-2 gap-10 mt-6 pt-10 border-t border-border/40">
                 <div>
                   <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Key Highlights</h3>
                   <ul className="space-y-4">
                     {project.highlights.map((highlight) => (
                       <li key={highlight} className="flex gap-3 items-start">
                         <HugeiconsIcon icon={CheckmarkCircle01Icon} className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                         <span className="text-foreground/80 leading-relaxed">{highlight}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
                 <div>
                   <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Technologies</h3>
                   <div className="flex flex-wrap gap-2.5">
                     {project.technologies.map((tech) => (
                       <div key={tech.name} className="flex items-center gap-2 rounded-lg border border-border/60 bg-muted/30 px-3 py-2 shadow-sm">
                         <TechIcon icon={tech.icon} className="size-4 shrink-0" />
                         <span className="text-sm font-medium text-foreground">{tech.name}</span>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
