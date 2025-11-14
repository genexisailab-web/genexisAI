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
      "Genexsis rebuilt our web experience and tripled inbound leads in under three months. Their team feels like an extension of ours.",
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
    impact: "The Kesar Dairy Platform has revolutionized our daily operations by digitizing the entire order-to-delivery workflow, delivering remarkable business growth and operational excellence. Since implementation, we've achieved a 67% increase in order processing efficiency through automated daily order management and streamlined workflows. The platform's intelligent inventory tracking system has optimized stock management, resulting in a 20% reduction in waste and improved product availability. Real-time delivery tracking and route optimization features have enhanced delivery performance, leading to a 78% improvement in on-time delivery rates and increased customer satisfaction. The integrated wallet system and seamless payment processing have boosted transaction completion rates by 20%, while automated daily reminders and push notifications have improved customer engagement and repeat orders. Comprehensive analytics dashboards provide actionable insights that have optimized pricing strategies and inventory planning. The mobile-first Progressive Web App design ensures accessibility across all devices, contributing to a 90% increase in mobile order conversions. These optimizations, combined with features like automated order processing, delivery assignment algorithms, and comprehensive reporting tools, have positioned Kesar Dairy as a modern, technology-driven dairy service provider, enabling scalable growth while maintaining exceptional customer service standards.",
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

