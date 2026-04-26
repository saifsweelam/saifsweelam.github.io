import DecryptedText from "@/components/DecryptedText";
import { Card, CardContent } from "@/components/ui/card";
import { experienceRecords } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  const totalInitiatives = experienceRecords.reduce(
    (total, record) => total + record.initiatives.length,
    0,
  );

  const totalAccomplishments = experienceRecords.reduce(
    (total, record) => total + record.accomplishments.length,
    0,
  );

  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden px-6 py-24 sm:py-28 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute left-10 top-32 h-px w-[calc(100%-5rem)] bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground/70">
            Experience
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.04em] text-foreground sm:text-4xl">
            Professional history
          </h2>

          <div className="max-w-2xl">
            <DecryptedText
              text="A concise record of the teams I joined, the systems I shaped, and the outcomes I was trusted to own."
              animateOn="view"
              sequential
              revealDirection="start"
              speed={28}
              maxIterations={10}
              className="text-sm leading-7 text-muted-foreground sm:text-base"
              encryptedClassName="text-muted-foreground/40"
              parentClassName="font-sans"
            />
          </div>
        </div>

        <Card className="border-border/70 bg-background/80 shadow-sm">
          <CardContent className="space-y-6 p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  label: "Companies",
                  value: experienceRecords.length,
                  detail: "Organizations where I contributed.",
                },
                {
                  label: "Initiatives",
                  value: totalInitiatives,
                  detail: "Wordy.me and ReactSuite shaped the work.",
                },
                {
                  label: "Outcomes",
                  value: totalAccomplishments,
                  detail: "Delivery, handoffs, and execution.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/60 bg-muted/20 p-4"
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground/60">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-medium tracking-[-0.04em] text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/50 p-4">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground/60">
                Current emphasis
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Backend systems",
                  "Product velocity",
                  "Implementation clarity",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-border/70 bg-muted/30 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {experienceRecords.map((record, index) => (
            <article key={`${record.company}-${record.period}`}>
              <ExperienceCard record={record} index={index} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
