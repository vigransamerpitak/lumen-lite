import { cn } from "@/lib/cn";

export function Avatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <span
      className={cn(
        "grid size-8 shrink-0 place-items-center rounded-full border border-line bg-surface-2 text-xs font-semibold text-muted",
        className,
      )}
    >
      {initials}
    </span>
  );
}
