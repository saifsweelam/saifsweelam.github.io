import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative isolate px-6 pt-32 pb-16 sm:pt-40 sm:pb-24 lg:px-8 border-b border-border/40 bg-background overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
      <div className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
      
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
