import { HugeiconsIcon } from "@hugeicons/react";
import { SimpleIcon } from "simple-icons";

type TechIconProps = {
  icon: any; // Can be a HugeIcon component or SimpleIcon object
  className?: string;
};

export function TechIcon({ icon: Icon, className }: TechIconProps) {
  if (!Icon) return null;

  // Handle Hugeicons or Custom Components
  if (typeof Icon === "function") {
    return <Icon className={className} />;
  }

  // Handle forwardRef objects (Hugeicons)
  if (typeof Icon === "object" && "render" in Icon) {
    return <HugeiconsIcon icon={Icon} className={className} />;
  }

  // Handle SimpleIcon
  if (Icon.hex && Icon.path) {
    const isNeutral = ["000000", "FFFFFF", "181717", "010101"].includes(Icon.hex.toUpperCase());
    
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={className}
        role="img"
        style={{ color: isNeutral ? "currentColor" : `#${Icon.hex}` }}
      >
        <path d={Icon.path} fill="currentColor" />
      </svg>
    );
  }

  return null;
}
