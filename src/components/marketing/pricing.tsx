"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { plans } from "@/lib/site";
import { SectionHeading } from "./sections";

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="scroll-mt-20 border-y border-line bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that"
          accent="scales with you"
          description="Start free. Upgrade when your team is asking more questions than you can count."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-line-strong bg-bg p-1 text-sm" role="group" aria-label="Billing period">
            {[
              { label: "Monthly", value: false },
              { label: "Yearly", value: true },
            ].map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => setYearly(option.value)}
                aria-pressed={yearly === option.value}
                className={cn(
                  "rounded-full px-4 py-1.5 font-medium transition-colors",
                  yearly === option.value ? "bg-fg text-bg" : "text-muted hover:text-fg",
                )}
              >
                {option.label}
                {option.value && <span className="ml-1.5 text-xs opacity-70">-20%</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-start gap-4 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;

            return (
              <article
                key={plan.name}
                className={cn(
                  "relative rounded-2xl border bg-bg p-7",
                  plan.featured ? "border-accent-text shadow-[0_24px_60px_-30px_var(--accent)]" : "border-line",
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-fg">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 min-h-10 text-sm text-muted">{plan.description}</p>

                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-5xl font-semibold tracking-tight">${price}</span>
                  <span className="text-sm text-muted">/ seat / month</span>
                </p>
                <p className="mt-1 h-5 text-sm text-subtle">
                  {price > 0 && (yearly ? "Billed annually" : "Billed monthly")}
                </p>

                <Button
                  href="#"
                  variant={plan.featured ? "primary" : "secondary"}
                  className="mt-6 w-full"
                >
                  {plan.cta}
                </Button>

                <ul className="mt-7 space-y-3 border-t border-line pt-7 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent-text" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
