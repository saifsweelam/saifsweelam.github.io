import { experienceRecords } from "@/data/experience";
import PageHeader from "@/components/PageHeader";
import { HugeiconsIcon } from "@hugeicons/react";
import { Rocket01Icon, Target01Icon, Briefcase01Icon } from "@hugeicons/core-free-icons";

const metricIcons = [Briefcase01Icon, Rocket01Icon, Target01Icon];

export default function ExperiencePage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Work Experience" 
        description="My professional journey, focusing on impact, technical leadership, and continuous growth."
      />
      <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-16 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border/60 hidden md:block" />
          
          {experienceRecords.map((record, idx) => (
            <div key={record.company} className="relative flex flex-col md:flex-row gap-8">
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-8 -translate-x-1/2 mt-8 size-3 rounded-full bg-emerald-600 ring-8 ring-background z-10" />
              
              <div className="md:w-1/4 md:pl-16 pt-6 shrink-0">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">{record.period}</p>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">{record.company}</h3>
                <p className="text-muted-foreground font-medium mt-1">{record.role}</p>
              </div>
              
              <div className="md:w-3/4 rounded-3xl border border-border/60 bg-card p-8 sm:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
                
                <p className="text-lg text-foreground/90 leading-relaxed mb-10 relative z-10">{record.summary}</p>
                
                <div className="space-y-10 relative z-10">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">Impact & Accomplishments</h4>
                    <ul className="space-y-4 list-disc list-outside ml-4 text-foreground/80 marker:text-emerald-600">
                      {record.accomplishments.map((acc) => (
                        <li key={acc} className="leading-relaxed pl-2">
                          {acc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6 pt-10 border-t border-border/40">
                    {record.metrics.map((metric, mIdx) => {
                       const Icon = metricIcons[mIdx] || Target01Icon;
                       return (
                         <div key={metric.label} className="bg-muted/20 rounded-2xl p-5 border border-border/40">
                           <HugeiconsIcon icon={Icon} className="size-6 text-emerald-600 mb-4" />
                           <p className="text-3xl font-bold text-foreground tracking-tight">{metric.value}</p>
                           <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-2">{metric.label}</p>
                         </div>
                       )
                    })}
                  </div>

                  <div className="pt-8 border-t border-border/40">
                     <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Key Initiatives</p>
                     <div className="flex flex-wrap gap-2.5">
                       {record.initiatives.map((init) => (
                         <span key={init} className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 border border-emerald-600/20">
                           {init}
                         </span>
                       ))}
                     </div>
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
