import {
  siBetterauth,
  siCloudflare,
  siDrizzle,
  siExpress,
  siGithub,
  siGooglechrome,
  siGoogleplay,
  siNextdotjs,
  siNpm,
  siPrisma,
  siReact,
  siShadcnui,
  siSimpleicons,
  siSupabase,
  siTailwindcss,
  siTurborepo,
  siTypescript,
  SimpleIcon,
} from "simple-icons";

type ProjectIcon = SimpleIcon;

export type ProjectTechnology = {
  name: string;
  icon: ProjectIcon;
};

export type ProjectLink = {
  label: string;
  href: string;
  icon: ProjectIcon;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  status: string;
  highlights: string[];
  technologies: ProjectTechnology[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "wordy",
    title: "Wordy.me",
    description:
      "An advanced note-taking application with a focus on user experience and productivity. It's available as a SaaS and as an open-source project on GitHub.",
    year: "2026",
    status: "Live",
    highlights: [
      "Supports separate spaces and fully hierarchical organization.",
      "Supports real-time updates to sync between sessions",
      "Supports markdown files and exporting notes to pdf files.",
      "Supports interactive demos and fully anonymous usage.",
    ],
    technologies: [
      { name: "Turborepo", icon: siTurborepo },
      { name: "Supabase", icon: siSupabase },
      { name: "React", icon: siReact },
      { name: "Express.JS", icon: siExpress },
      { name: "Better-Auth", icon: siBetterauth },
      { name: "Drizzle ORM", icon: siDrizzle },
      { name: "Tailwind CSS", icon: siTailwindcss },
    ],
    links: [
      { label: "Live", href: "https://wordy.me", icon: siGooglechrome },
      { label: "Source", href: "https://github.com/TeamCoderz/WordyMe", icon: siGithub },
    ],
  },
  {
    slug: "zini-hub",
    title: "Zini Hub",
    description: "A platform for interior designers to manage their projects and clients, and for clients to find the best interior designers for their needs.",
    year: "2026",
    status: "Application",
    highlights: [
      "Built-in tools for designing and planning interior design projects",
      "Social features for designers to showcase their work and clients to find the best designers for their needs",
      "Secure payments between designers and clients",
    ],
    technologies: [
      { name: "TypeScript", icon: siTypescript },
      { name: "Express.js", icon: siExpress },
      { name: "Prisma", icon: siPrisma },
      { name: "Cloudflare R2", icon: siCloudflare },
    ],
    links: [
      { label: "Live", href: "https://play.google.com/store/apps/details?id=com.spartacompany.zini", icon: siGoogleplay },
    ],
  },
  {
    slug: "typed-flash",
    title: "Typed Flash",
    description:
      "A TypeScript-aware alternative to the less-maintained connect-flash package. It extends the same core API while adding first-class TypeScript support, making it a safer and more pleasant choice for new projects.",
    year: "2025",
    status: "Package",
    highlights: [
      "First-class TypeScript support with full type safety.",
      "Minimal and predictable API with zero breaking changes from connect-flash.",
      "Easy to adopt: simply replace connect-flash with typed-flash in your existing projects.",
      "Well-documented with clear examples and migration guide.",
    ],
    technologies: [
      { name: "Express.JS", icon: siExpress },
      { name: "TypeScript", icon: siTypescript },
    ],
    links: [
      { label: "NPM", href: "https://www.npmjs.com/package/typed-flash", icon: siNpm },
      { label: "Source", href: "https://github.com/saifsweelam/typed-flash", icon: siGithub },
    ],
  },
  {
    slug: "compete-x",
    title: "CompeteX API",
    description:
      "A competitive programming platform with a modern UI and advanced features for teams participating in remote or onsite competitions.",
    year: "2025",
    status: "Featured",
    highlights: [
      "Flexible scoring system to support different competition formats.",
      "Live leaderboard and real-time updates.",
      "Simple and intuitive API for both organizers and participants.",
    ],
    technologies: [
      { name: "Express.JS", icon: siExpress },
      { name: "TypeScript", icon: siTypescript },
      { name: "Prisma", icon: siPrisma },
    ],
    links: [
      { label: "Source", href: "https://github.com/saifsweelam/CompeteX", icon: siGithub },
    ],
  },
  {
    slug: "ticket-system",
    title: "Ticket System",
    description: "A web-based ticketing system for managing customer support requests. It provides a simple and intuitive interface for creating, tracking, and resolving support tickets.",
    year: "2025",
    status: "Featured",
    highlights: [
      "Real-time updates for instant notifications.",
      "Support for multiple support agents.",
      "Seamless Authentication with Magic Links and OAuth.",
    ],
    technologies: [
      { name: "Supabase", icon: siSupabase },
      { name: "TypeScript", icon: siTypescript },
      { name: "React.JS", icon: siReact },
      { name: "TailwindCSS", icon: siTailwindcss },
      { name: "shadcn", icon: siShadcnui },
    ],
    links: [
      { label: "Source", href: "https://github.com/saifsweelam/supabase-nextjs-ticket-system", icon: siGithub },
    ],
  },
  {
    slug: "drizzle-more",
    title: "Drizzle More",
    description: "A collection of utilities for Drizzle ORM for non-trivial but still common uses.",
    year: "2025",
    status: "Package",
    highlights: [
      "Adding filtering, ordering, and pagination capabilities to Drizzle ORM.",
      "Adding application-level enums for SQLite",
    ],
    technologies: [
      { name: "Drizzle ORM", icon: siDrizzle },
      { name: "TypeScript", icon: siTypescript },
    ],
    links: [
      { label: "NPM", href: "https://www.npmjs.com/package/drizzle-more", icon: siNpm },
      { label: "Source", href: "https://github.com/saifsweelam/drizzle-more", icon: siGithub },
    ],
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
