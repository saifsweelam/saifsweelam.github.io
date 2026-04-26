import DecryptedText from "./DecryptedText";
import TextType from "./TextType";

export default function Hero() {
  const skills = ["Backend", "Frontend", "System Design", "Mentorship"];
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:min-h-[calc(100dvh-4.5rem)] lg:px-8 lg:py-0 lg:flex lg:items-center">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-border/70 bg-background/70 p-8 shadow-2xl shadow-black/5 backdrop-blur sm:p-10">
        <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground/80">
          <span className="h-px w-8 bg-foreground/20" />
          <span>Fullstack Software Engineer</span>
        </div>

        <h1 className="font-mono text-3xl leading-tight tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
          <div>
            <span className="text-muted-foreground">&lt;</span>
            <span className="text-emerald-600 dark:text-emerald-400">developer</span>
            <span className="text-muted-foreground">&gt;</span>
          </div>
          <TextType
            as="span"
            text="Seif El-Din Sweilam"
            className="text-foreground"
            cursorCharacter="▍"
            cursorClassName="text-emerald-600 dark:text-emerald-400"
            typingSpeed={70}
            initialDelay={180}
            pauseDuration={1200}
            loop={false}
          />
          <div>
            <span className="text-muted-foreground">&lt;/</span>
            <span className="text-emerald-600 dark:text-emerald-400">developer</span>
            <span className="text-muted-foreground">&gt;</span>
          </div>
        </h1>

        <div className="mt-6 max-w-xl">
          <DecryptedText
            text="A self-paced developer with a passion for building impactful software and a knack for solving complex problems."
            animateOn="view"
            sequential
            revealDirection="start"
            speed={35}
            maxIterations={8}
            className="text-foreground"
            encryptedClassName="text-muted-foreground/45"
            parentClassName="font-mono text-sm leading-7 sm:text-base"
          />
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
          {skills.join(" / ")}
        </p>

        <div className="mt-10">
          <a
            href="mailto:saifsweelam@gmail.com"
            className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-medium text-black transition hover:bg-emerald-300"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
