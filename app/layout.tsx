import "@fontsource-variable/archivo";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anatole.co"),
  title: "Anatole 👨🏻",
  description: "Hello, new friend. My name is Anatole.",
  openGraph: {
    title: "Anatole 👨🏻",
    description: "Hello, new friend.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anatole 👨🏻",
    description: "Hello, new friend.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
