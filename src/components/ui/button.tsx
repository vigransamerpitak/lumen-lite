import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

const variants = {
  primary: "bg-accent text-accent-fg hover:brightness-95 shadow-[0_0_0_1px_rgb(0_0_0/0.08),0_8px_24px_-8px_var(--accent)]",
  solid: "bg-fg text-bg hover:opacity-90",
  secondary: "border border-line-strong bg-surface text-fg hover:bg-surface-2",
  ghost: "text-muted hover:bg-surface-2 hover:text-fg",
  danger: "border border-danger/40 text-danger hover:bg-danger/10",
};

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

type Props = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({ variant = "primary", size = "md", href, className, children, ...props }: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
