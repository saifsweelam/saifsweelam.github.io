import {
  Award01Icon,
  Briefcase01Icon,
  CheckmarkCircle01Icon,
  Rocket01Icon,
  Target01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ExperienceRecord } from "@/data/experience";

const metricIcons = [Briefcase01Icon, Rocket01Icon, Target01Icon];

type ExperienceCardProps = {
  record: ExperienceRecord;
  index: number;
};

export default function ExperienceCard({ record, index }: ExperienceCardProps) {
  return (
    <Card className="relative overflow-hidden border-border/70 bg-background/75 shadow-2xl shadow-black/5 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-foreground/15">
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-emerald-400/80 via-cyan-400/50 to-transparent" />

      <CardHeader className="border-b border-border/60 pb-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
              <HugeiconsIcon icon={Award01Icon} className="size-3.5" />
              <span>{record.company}</span>
            </div>
            <CardTitle className="text-2xl tracking-[-0.03em] text-foreground sm:text-3xl">
              {record.role}
            </CardTitle>
          </div>

          <div className="inline-flex items-center rounded-full border border-border/70 bg-muted/30 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {record.period}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6 pb-6">
        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
          {record.summary}
        </p>

        <div className="space-y-3">
          {record.accomplishments.map((accomplishment) => (
            <div
              key={accomplishment}
              className="flex gap-3 rounded-2xl border border-border/60 bg-muted/20 px-4 py-3"
            >
              <HugeiconsIcon
                icon={CheckmarkCircle01Icon}
                className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400"
              />
              <p className="text-sm leading-6 text-foreground/85">
                {accomplishment}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4 rounded-2xl border border-border/60 bg-background/50 p-4">
          <div className="grid gap-3 sm:grid-cols-3">
            {record.metrics.map((metric, metricIndex) => {
              const metricIcon = metricIcons[metricIndex] ?? Target01Icon;

              return (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 to-transparent p-4"
                >
                  <HugeiconsIcon
                    icon={metricIcon}
                    className="size-4 text-emerald-600 dark:text-emerald-400"
                  />
                  <p className="mt-4 text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground/60">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-lg font-medium tracking-[-0.03em] text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {metric.detail}
                  </p>
                </div>
              );
            })}
          </div>

          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground/60">
              Initiatives
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {record.initiatives.map((initiative) => (
                <span
                  key={initiative}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-muted/30 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-foreground/80"
                >
                  <HugeiconsIcon
                    icon={Rocket01Icon}
                    className="size-3 text-muted-foreground"
                  />
                  <span>{initiative}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
