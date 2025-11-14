import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://genexsis.agency"),
  title: {
    default: "Genexsis — Digital Agency",
    template: "%s · Genexsis",
  },
  description:
    "Genexsis designs, edits, and markets powerful websites that amplify growth through targeted digital advertising.",
  openGraph: {
    title: "Genexsis — Digital Agency",
    description:
      "We design, edit, and market powerful websites, driving growth with targeted digital advertising.",
    type: "website",
    url: "https://genexsis.agency",
    siteName: "Genexsis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genexsis — Digital Agency",
    description:
      "Website design, content editing, digital marketing, and online advertising with measurable impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-obsidian-plum-950/90 text-white antialiased">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 overflow-hidden">
            <div className="snap-container flex w-full justify-center md:h-screen md:overflow-y-auto md:snap-y md:snap-mandatory">
              <div className="mx-auto flex w-full  flex-col gap-24 px-6 py-24  md:gap-0 md:px-0 md:py-0 ">
                {children}
                <SiteFooter />
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
