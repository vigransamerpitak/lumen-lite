import {
  BookOpen,
  Gauge,
  Layers,
  Plug,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------
   All marketing copy lives here. Edit this file to make the kit yours.
   Company names, people and numbers below are placeholders.
   ------------------------------------------------------------------ */

export const site = {
  name: "Lumen",
  tagline: "The AI workspace for your team's knowledge",
  description:
    "Lumen connects your docs, tickets and code, then answers questions with sources your team can verify.",
};

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const logos = ["Northwind", "Halcyon", "Quanta", "Oakline", "Verge", "Parallel", "Motif", "Corsair"];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Sparkles,
    title: "Answers with sources",
    description:
      "Every reply links back to the exact paragraph it came from, so your team can check the work in one click.",
  },
  {
    icon: Plug,
    title: "40+ integrations",
    description: "Connect Notion, Slack, GitHub, Linear, Drive and more in minutes. No pipelines to maintain.",
  },
  {
    icon: ShieldCheck,
    title: "Permission aware",
    description: "Lumen only answers from what each person is already allowed to see in the source tool.",
  },
  {
    icon: Gauge,
    title: "Fast at any scale",
    description: "Hybrid search and smart caching keep median responses under a second across millions of docs.",
  },
  {
    icon: Layers,
    title: "Bring any model",
    description: "Route each request to the model that fits. Swap providers without touching your prompts.",
  },
  {
    icon: BookOpen,
    title: "Always up to date",
    description: "Incremental sync picks up edits as they happen, so answers never quote last quarter's plan.",
  },
];

export const steps = [
  {
    title: "Connect your tools",
    description: "Authorize the apps your team already uses. Lumen indexes them in the background.",
  },
  {
    title: "Ask in plain language",
    description: "Use the web app, Slack or the API. Follow-up questions keep the full context.",
  },
  {
    title: "Verify and share",
    description: "Open the cited source, then pin the answer so the next person finds it instantly.",
  },
];

export const stats = [
  { value: "12M+", label: "Questions answered" },
  { value: "0.8s", label: "Median response" },
  { value: "40+", label: "Integrations" },
  { value: "99.98%", label: "Uptime" },
];

export const testimonials = [
  {
    quote:
      "Onboarding used to take three weeks of asking around. New hires now find the answer, and the doc behind it, on day one.",
    name: "Maya Okafor",
    role: "Head of Engineering, Northwind",
  },
  {
    quote:
      "The citations are the whole point. Our support team trusts it because they can see exactly where each answer came from.",
    name: "Daniel Reyes",
    role: "VP Support, Halcyon",
  },
  {
    quote: "We replaced two internal tools and a wiki nobody read. Setup took an afternoon.",
    name: "Priya Nair",
    role: "COO, Quanta",
  },
];

export type Plan = {
  name: string;
  description: string;
  monthly: number;
  yearly: number;
  cta: string;
  featured?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Starter",
    description: "For individuals trying Lumen on a side project.",
    monthly: 0,
    yearly: 0,
    cta: "Start free",
    features: ["1 workspace", "3 integrations", "500 questions / month", "Community support"],
  },
  {
    name: "Pro",
    description: "For growing teams that need answers every day.",
    monthly: 29,
    yearly: 24,
    cta: "Start 14-day trial",
    featured: true,
    features: [
      "Unlimited workspaces",
      "All 40+ integrations",
      "10,000 questions / month",
      "Bring your own model",
      "Usage analytics",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    description: "For companies with security and compliance needs.",
    monthly: 99,
    yearly: 79,
    cta: "Talk to sales",
    features: ["Everything in Pro", "SSO and SCIM", "Audit logs", "Custom data retention", "Dedicated success manager"],
  },
];

export const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Most teams connect their first integration in under five minutes. Initial indexing runs in the background and usually finishes within an hour.",
  },
  {
    question: "Is my data used to train models?",
    answer:
      "No. Your content is only used to answer questions inside your workspace and is never used for model training.",
  },
  {
    question: "Which models does Lumen support?",
    answer:
      "Lumen works with the major hosted model providers and with self-hosted models through an OpenAI-compatible endpoint.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes. Upgrade, downgrade or cancel at any time from the billing page. Changes are prorated automatically.",
  },
  {
    question: "Do you offer a discount for startups?",
    answer: "Early-stage companies get 50% off Pro for the first year. Contact us from your work email to apply.",
  },
];

export const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];
