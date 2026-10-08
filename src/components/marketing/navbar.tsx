"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button href="#" variant="ghost" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button href="/#pricing" variant="solid" className="hidden sm:inline-flex">
            Get started
          </Button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full text-muted hover:bg-surface-2 hover:text-fg md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line px-4 pt-2 pb-5 md:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-base text-muted hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button href="#" variant="secondary">
              Sign in
            </Button>
            <Button href="/#pricing">Get started</Button>
          </div>
        </div>
      )}
    </header>
  );
}
