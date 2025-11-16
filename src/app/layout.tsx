import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://genexsis.agency"),
  title: {
    default: "Genexis — Digital Agency",
    template: "%s · Genexis",
  },
  description:
    "Genexis designs, edits, and markets powerful websites that amplify growth through targeted digital advertising.",
  icons: {
    icon: [
      { url: "/Picsart_25-11-16_14-00-10-503.png" }, // small favicon
      { url: "/Picsart_25-11-16_14-00-00-399.png" }, // small square
      { url: "/Picsart_25-11-16_13-59-49-794.png" }, // medium square
      { url: "/Picsart_25-11-16_13-59-38-658.png" }, // large square
      { url: "/Picsart_25-11-16_13-59-26-230.png" }, // larger square
      { url: "/Picsart_25-11-16_13-58-35-357.png" }, // largest square
    ],
    apple: [
      { url: "/Picsart_25-11-16_13-59-49-794.png" },
      { url: "/Picsart_25-11-16_13-59-26-230.png" },
      { url: "/Picsart_25-11-16_13-58-35-357.png" },
    ],
  },
  openGraph: {
    title: "Genexis — Digital Agency",
    description:
      "We design, edit, and market powerful websites, driving growth with targeted digital advertising.",
    type: "website",
    url: "https://genexsis.agency",
    siteName: "Genexis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genexis — Digital Agency",
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
      <body className="min-h-screen bg-obsidian-plum-950 text-white antialiased">
        <div className="relative flex min-h-screen flex-col">
          {/* Fixed, low-opacity background logo (hidden on small screens) */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 hidden bg-[url('/Picsart_25-11-16_13-58-35-357.png')] bg-center bg-contain bg-no-repeat opacity-[0.06] sm:block"
          />
          <SiteHeader />
          <main className="flex-1 bg-obsidian-plum-950">
            <div className="flex w-full justify-center md:h-screen md:overflow-y-auto md:snap-y md:snap-mandatory">
              <div className="mx-auto flex w-full flex-col gap-0 px-0 py-0 md:gap-0 md:px-0 md:py-0">
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
