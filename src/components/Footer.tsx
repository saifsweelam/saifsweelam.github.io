import { socialLinks } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Seif El-Din Sweilam. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground hover:scale-110 active:scale-95 duration-200"
                title={link.name}
              >
                <span className="sr-only">{link.name}</span>
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
