"use client";

import { Moon, Sun } from "lucide-react";
import { useLayoutEffect } from "react";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  // Re-apply after React clears the attribute on the dev remount. No-op in production.
  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, []);

  function toggle() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={cn(
        "grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg",
        className,
      )}
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </button>
  );
}
