export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative isolate px-6 py-24 sm:py-28 lg:px-8 bg-emerald-600 dark:bg-transparent"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl rounded-3xl border border-border/70 bg-background/70 p-8 shadow-2xl shadow-black/5 backdrop-blur sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground/80">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-foreground sm:text-4xl">
              Have a project or role in mind?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Send me an email if you want to discuss a product, collaboration,
              or a full-time opportunity.
            </p>
          </div>

          <a
            href="mailto:saifsweelam@gmail.com"
            className="inline-flex h-11 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400 px-6 text-sm font-medium text-black transition hover:bg-emerald-300"
          >
            saifsweelam@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
