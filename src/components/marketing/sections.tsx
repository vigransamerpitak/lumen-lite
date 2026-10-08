import { ArrowRight, Quote } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { faqs, features, logos, stats, steps, testimonials } from "@/lib/site";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-mono text-xs tracking-widest text-accent-text uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
        {title} {accent && <span className="font-serif font-normal italic">{accent}</span>}
      </h2>
      {description && <p className="mt-4 text-lg text-pretty text-muted">{description}</p>}
    </div>
  );
}

export function LogoCloud() {
  return (
    <section className="border-y border-line py-10">
      <p className="text-center text-sm text-subtle">Trusted by fast-moving teams</p>
      <div className="mt-6 overflow-hidden mask-[linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 pr-14">
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-xl font-semibold tracking-tight text-subtle" aria-hidden={i >= logos.length}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to"
          accent="trust the answer"
          description="Built for teams that need to move quickly without guessing which doc is the current one."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <article
              key={feature.title}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong",
                // Bento rhythm on desktop: wide/narrow, narrow/wide, wide/narrow.
                [0, 3, 4].includes(i) && "lg:col-span-2",
              )}
            >
              <div
                className="glow absolute -top-20 -right-20 size-48 opacity-0 transition-opacity duration-500 group-hover:opacity-70"
                aria-hidden
              />
              <span className="relative grid size-10 place-items-center rounded-xl border border-line bg-surface-2">
                <feature.icon className="size-5 text-accent-text" />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="relative mt-2 max-w-md text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-y border-line bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="How it works" title="Live in an afternoon," accent="not a quarter" />

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-fg">
                  {i + 1}
                </span>
                {i < steps.length - 1 && <span className="hidden h-px flex-1 bg-line-strong md:block" aria-hidden />}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>

        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse bg-bg p-6 text-center">
              <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Customers" title="Teams ship faster" accent="with Lumen" />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
              <Quote className="size-6 text-accent-text" />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-pretty">{item.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <Avatar name={item.name} className="size-10 text-sm" />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Questions," accent="answered" />

        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="relative grid size-6 shrink-0 place-items-center rounded-full border border-line-strong text-muted">
                  <span className="absolute h-px w-2.5 bg-current" />
                  <span className="absolute h-2.5 w-px bg-current transition-transform duration-200 group-open:rotate-90" />
                </span>
              </summary>
              <p className="mt-3 pr-10 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line-strong bg-surface px-6 py-20 text-center">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="glow absolute inset-x-1/4 -bottom-32 h-64" aria-hidden />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Stop searching. <span className="font-serif font-normal text-accent-text italic">Start knowing.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Connect your first tool in five minutes and ask the question you have been putting off.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/#pricing" size="lg">
              Start free
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/#how-it-works" size="lg" variant="secondary">
              See how it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
