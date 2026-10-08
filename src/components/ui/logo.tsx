import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("grid size-7 place-items-center rounded-lg bg-accent text-accent-fg", className)}>
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
      </svg>
    </span>
  );
}

export function Logo({ href = "/", className }: { href?: string; className?: string }) {
  return (
    <Link href={href} className={cn("inline-flex items-center gap-2 text-base font-semibold tracking-tight", className)}>
      <LogoMark />
      {site.name}
    </Link>
  );
}
