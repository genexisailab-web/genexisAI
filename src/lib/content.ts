import type { Testimonial } from "@/components/testimonial-carousel";
import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  Palette,
  PenTool,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  href: string;
};

export const services: Service[] = [
  {
    id: "design",
    title: "Website Design",
    description:
      "Stunning, responsive sites engineered for conversion, performance, and brand storytelling.",
    icon: Palette,
    items: [
      "UX strategy & journey mapping",
      "High-fidelity UI design systems",
      "Responsive build & performance",
      "Analytics-informed iterations",
    ],
    href: "/services#design",
  },
  {
    id: "content",
    title: "Content Editing",
    description:
      "Keep every page sharp, current, and aligned with the Users needs and wants.",
    icon: PenTool,
    items: [
      "Design content videos and animations",
      "AI based SEO and GEO targeted content",
      "Conversion copywriting & UX microcopy",
      "CMS optimization & governance",
    ],
    href: "/services#content",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description:
      "Campaigns that connect your brand to the right people.",
    icon: Megaphone,
    items: [
      "Lifecycle email strategies",
      "SEO & demand capture programs",
      "Behavioral segmentation & nurture",
      "Performance dashboards & insights",
    ],
    href: "/services#marketing",
  },
  {
    id: "advertising",
    title: "Online Advertising",
    description:
      "High-impact paid media that amplifies reach, accelerates acquisition, and scales profitably.",
    icon: Target,
    items: [
      "Paid search & social media",
      "Creative direction & production",
      "Landing page CRO & testing",
      "Budget pacing & channel mix",
    ],
    href: "/services#advertising",
  },
];

export const process: { title: string; description: string; icon: LucideIcon }[] =
[
  {
    title: "Discovery & Differentiation",
    description:
      "We audit your current presence, competitors, and customer journeys to define what makes your brand irresistible.",
    icon: Workflow,
  },
  {
    title: "Experience Design & Build",
    description:
      "From wireframes and prototypes to pixel-perfect execution, every page is tested to deliver clarity and conversion.",
    icon: Palette,
  },
  {
    title: "Growth Engine Activation",
    description:
      "We launch targeted campaigns across organic and paid channels, tracking what works and doubling down quickly.",
    icon: TrendingUp,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Genexis rebuilt our web experience and tripled inbound leads in under three months. Their team feels like an extension of ours.",
    name: "Amit Desai",
    role: "Business Owner, kesar dairy",
  },
  {
    quote:
      "From messaging to media buys, every initiative is data-backed and obsessively optimized. We scale faster with their crew on call.",
    name: "Rahul Patel",
    role: "Founder, Venture North",
  },
  {
    quote:
      "Our brand now feels cohesive across every touchpoint. The design system and content playbook keep us shipping consistently.",
    name: "Alex Morgan",
    role: "Head of Product, Sona AI",
  },
];

export const portfolioHighlights = [
  {
    title: "Kesar Dairy",
    summary: "Dairy Products startup",
    impact: "67% increase in order processing efficiency, 78% improvement in on-time delivery rates, and 90% increase in mobile order conversions through digitized order-to-delivery workflow.",
    href: "/portfolio#kesardairy",
  },
  {
    title: "Venture North",
    summary: "Boutique investment firm",
    impact: "Lifted investor inquiries by 3.2x with a bold new narrative.",
    href: "/portfolio#venture-north",
  },
  {
    title: "Sona AI",
    summary: "CX automation platform",
    impact: "Reduced churn 18% by aligning product messaging & onboarding.",
    href: "/portfolio#sona-ai",
  },
];

