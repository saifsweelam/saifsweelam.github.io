import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, StarIcon, GithubIcon } from "@hugeicons/core-free-icons";

export default function RoadmapSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 sm:py-24 lg:px-8 bg-emerald-600 dark:bg-transparent">
      {/* Background accents */}
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent dark:via-foreground/25" />
      <div className="absolute right-0 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-y-1/2 translate-x-1/3 rounded-full bg-emerald-400/20 blur-3xl" />
      
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-emerald-100 dark:text-emerald-500 mb-6">
              <span className="flex items-center gap-1.5 bg-emerald-700/50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-full ring-1 ring-emerald-500/50">
                <HugeiconsIcon icon={StarIcon} className="size-4" />
                840+ GitHub Stars
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-700/50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-full ring-1 ring-emerald-500/50">
                Open Source Creator
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-white dark:text-foreground sm:text-4xl lg:text-5xl mb-6">
              Node.js Backend Roadmap
            </h2>
            
            <div className="space-y-6 text-base leading-relaxed text-emerald-50 dark:text-muted-foreground">
              <p>
                I am the author and maintainer of a highly-starred open-source Node.js roadmap. It provides a comprehensive, step-by-step guide to mastering backend development—from web fundamentals and TypeScript, to building robust RESTful APIs with Express.
              </p>
              <p>
                The roadmap features structured weekly modules, curated bilingual resources (Arabic & English), practical assignments, and quizzes covering database architecture (SQL & NoSQL), secure authentication (JWT & OAuth2), and test-driven development.
              </p>
            </div>
            
            <div className="mt-10">
              <a
                href="https://github.com/cat-backend-nodejs/nodejs-roadmap"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white dark:bg-emerald-600 px-6 py-3 text-sm font-semibold text-emerald-600 dark:text-white shadow-sm hover:bg-emerald-50 dark:hover:bg-emerald-500 transition-all duration-200"
              >
                <HugeiconsIcon icon={GithubIcon} className="size-5" />
                View Repository
                <HugeiconsIcon icon={ArrowRight02Icon} className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          {/* Visual element on the right */}
          <div className="relative w-full rounded-3xl border border-emerald-400/30 bg-emerald-700/20 dark:border-border/60 dark:bg-card/50 overflow-hidden shadow-2xl flex items-center justify-center p-8 sm:p-12 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0596691a_1px,transparent_1px),linear-gradient(to_bottom,#0596691a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            <div className="relative flex flex-col gap-4 w-full max-w-sm">
               {/* Mockup roadmap nodes */}
               {[
                 { title: "Web Fundamentals", sub: "HTML, CSS & Dev Tools" },
                 { title: "JavaScript & TypeScript", sub: "Async, OOP & Typing" },
                 { title: "Node.js & Express", sub: "APIs, Routing & MVC" },
                 { title: "Databases", sub: "MongoDB, PostgreSQL & SQL Server" },
                 { title: "Security & Auth", sub: "JWT, Passport.js & OAuth2.0" }
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-3 rounded-full bg-white dark:bg-emerald-500 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                      {i !== 4 && <div className="w-px h-12 bg-emerald-400/30 dark:bg-emerald-500/30 my-1" />}
                    </div>
                    <div className="-mt-1">
                      <h4 className="text-sm font-semibold text-white dark:text-foreground">{item.title}</h4>
                      <p className="text-xs text-emerald-200 dark:text-muted-foreground mt-0.5">{item.sub}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
