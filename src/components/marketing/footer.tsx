import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { footerLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">{site.description}</p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold">{group.title}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted transition-colors hover:text-fg">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 py-6 text-sm text-subtle sm:flex-row sm:px-6">
          <p>
            © 2026 {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-success" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
