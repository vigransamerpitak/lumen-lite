import { ArrowRight, FileText, MessageSquare, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/ui/logo";

const sources = [
  { name: "Launch plan v4", app: "Notion" },
  { name: "#launch-q3", app: "Slack" },
  { name: "PRC-218 Pricing copy", app: "Linear" },
];

function ProductPreview() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl animate-fade-up [animation-delay:300ms]">
      <div className="glow absolute inset-x-10 -top-10 h-64" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl shadow-black/20">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <div className="mx-auto flex h-7 w-full max-w-xs items-center gap-2 rounded-lg bg-surface-2 px-3 text-xs text-subtle">
            <Search className="size-3" />
            app.lumen.example
          </div>
        </div>

        <div className="grid text-left md:grid-cols-[220px_1fr]">
          <aside className="hidden border-r border-line p-4 md:block">
            <p className="mb-3 text-xs font-medium tracking-wider text-subtle uppercase">Recent</p>
            <ul className="space-y-1 text-sm">
              {["Q3 launch checklist", "Refund policy", "SSO provisioning", "Incident summary"].map((item, i) => (
                <li
                  key={item}
                  className={
                    i === 0
                      ? "flex items-center gap-2 rounded-lg bg-surface-2 px-2.5 py-2 font-medium"
                      : "flex items-center gap-2 rounded-lg px-2.5 py-2 text-muted"
                  }
                >
                  <MessageSquare className="size-3.5 shrink-0" />
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-5 p-5 sm:p-7">
            <div className="ml-auto w-fit max-w-md rounded-2xl rounded-br-md bg-surface-2 px-4 py-2.5 text-sm">
              What is still blocking the Q3 launch?
            </div>

            <div className="flex gap-3">
              <LogoMark className="mt-0.5 shrink-0" />
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  Three items are open. The pricing page copy is waiting on legal review
                  <sup className="ml-0.5 rounded bg-accent/20 px-1 text-[10px] font-semibold text-accent-text">1</sup>, the
                  status page still needs a production key
                  <sup className="ml-0.5 rounded bg-accent/20 px-1 text-[10px] font-semibold text-accent-text">2</sup>, and
                  onboarding emails are not scheduled yet
                  <sup className="ml-0.5 rounded bg-accent/20 px-1 text-[10px] font-semibold text-accent-text">3</sup>.
                </p>
                <div className="flex flex-wrap gap-2">
                  {sources.map((source, i) => (
                    <span
                      key={source.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-line bg-bg px-2.5 py-1.5 text-xs"
                    >
                      <FileText className="size-3.5 text-accent-text" />
                      <span className="font-medium">
                        {i + 1}. {source.name}
                      </span>
                      <span className="text-subtle">{source.app}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-line-strong bg-bg px-4 py-3 text-sm text-subtle">
              <Sparkles className="size-4 text-accent-text" />
              Ask a follow-up
              <span className="h-4 w-px animate-blink bg-fg" />
              <span className="ml-auto grid size-7 place-items-center rounded-lg bg-accent text-accent-fg">
                <ArrowRight className="size-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />

      <div className="mx-auto max-w-6xl px-4 pt-20 pb-24 text-center sm:px-6 sm:pt-28">
        <Link
          href="/#features"
          className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-line-strong bg-surface py-1 pr-3 pl-1 text-sm text-muted transition-colors hover:text-fg"
        >
          <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-fg">New</span>
          Bring your own model is here
          <ArrowRight className="size-3.5" />
        </Link>

        <h1 className="mx-auto mt-7 max-w-4xl animate-fade-up text-5xl leading-[1.02] font-semibold tracking-tighter text-balance [animation-delay:80ms] sm:text-7xl">
          Answers from everything your team{" "}
          <span className="font-serif font-normal tracking-normal text-accent-text italic">already knows</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg text-pretty text-muted [animation-delay:160ms]">
          Lumen connects your docs, tickets and code, then answers in seconds with sources you can verify. No more
          digging through five tools to find one decision.
        </p>

        <div className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-3 [animation-delay:220ms] sm:flex-row">
          <Button href="/#pricing" size="lg">
            Start free
            <ArrowRight className="size-4" />
          </Button>
          <Button href="/#how-it-works" size="lg" variant="secondary">
            See how it works
          </Button>
        </div>
        <p className="mt-4 animate-fade-up text-sm text-subtle [animation-delay:260ms]">
          Free for 14 days. No credit card required.
        </p>

        <ProductPreview />
      </div>
    </section>
  );
}
