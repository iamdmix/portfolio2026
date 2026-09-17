import type { Metadata, Viewport } from "next";
import { Geist, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const site = "https://dharmikshinde.tech";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "Dharmik Vivek Shinde — Backend & Systems Engineer",
    template: "%s — Dharmik Vivek Shinde",
  },
  description:
    "Dharmik Vivek Shinde on dharmikshinde.tech — systems, Linux, backend engineering, cloud infrastructure, and networking. Home server infrastructure, dotfiles, and writing that demystifies how computers work.",
  alternates: { canonical: site },
  openGraph: {
    type: "profile",
    url: site,
    siteName: "Dharmik Vivek Shinde",
    title: "Dharmik Vivek Shinde — Backend & Systems Engineer",
    description:
      "Systems, Linux, backend engineering, cloud infrastructure, networking. Home server infrastructure in code, keyboard-first dotfiles, and writing at dmix writes.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    site: "@dharmikshinde",
    creator: "@dharmikshinde",
    title: "Dharmik Vivek Shinde — Backend & Systems Engineer",
    description:
      "Systems, Linux, backend engineering, cloud infrastructure, networking. Home server infrastructure in code, keyboard-first dotfiles, and writing at dmix writes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${bricolage.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="flex flex-col">{children}</body>
    </html>
  );
}
