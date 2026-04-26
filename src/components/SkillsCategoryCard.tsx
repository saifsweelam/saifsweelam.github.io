import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SkillGroup } from "@/data/skills";

function SkillGlyph({
  icon,
  className,
}: {
  icon: NonNullable<SkillGroup["items"][number]["icon"]>;
  className?: string;
}) {
  if (!icon?.hex) return null;
  const hex = icon.hex.toUpperCase();
  const isNeutral = ["000000", "FFFFFF", "181717", "010101"].includes(hex);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      role="img"
      style={{ color: isNeutral ? "currentColor" : `#${icon.hex}` }}
    >
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

function SkillBadge({
  name,
  icon,
  customIcon: CustomIcon,
}: {
  name: string;
  icon?: SkillGroup["items"][number]["icon"];
  customIcon?: SkillGroup["items"][number]["customIcon"];
}) {
  return (
    <li className="flex items-center gap-3 rounded-xl bg-muted/25 px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted/40">
      <span className="flex size-9 items-center justify-center rounded-lg bg-background/80 text-foreground/70 shadow-sm">
        {CustomIcon ? (
          <CustomIcon className="size-5 shrink-0" />
        ) : (
          icon && <SkillGlyph icon={icon} className="size-5 shrink-0" />
        )}
      </span>
      <span className="text-sm font-medium text-foreground/85">{name}</span>
    </li>
  );
}

type SkillsCategoryCardProps = {
  group: SkillGroup;
};

export default function SkillsCategoryCard({ group }: SkillsCategoryCardProps) {
  return (
    <Card className="flex h-full flex-col border-border/70 bg-background/90 dark:bg-background/50 shadow-lg shadow-black/5 backdrop-blur transition-colors duration-200 hover:border-foreground/20">
      <CardHeader className="p-4 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted/30 text-foreground/80 transition-colors group-hover:bg-muted/50 group-hover:text-foreground">
            <SkillGlyph icon={group.leadIcon} className="size-5 shrink-0" />
          </div>

          <CardTitle className="text-lg tracking-[-0.03em] text-foreground sm:text-xl">
            {group.title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {group.items.map((item) => (
            <SkillBadge
              key={item.name}
              name={item.name}
              icon={item.icon}
              customIcon={item.customIcon}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
