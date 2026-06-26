import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan To",
  description: "Portfolio of Nathan To - Engineering, code, and research.",
  openGraph: {
    title: "Nathan To",
    description: "Portfolio of Nathan To - Engineering, code, and research.",
    url: "https://nathanwto.vercel.app/",
    siteName: "Nathan To",
    type: "website",
    images: [
      {
        url: "https://nathanto.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nathan To – Engineering, code, and research.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathan To",
    description: "Portfolio of Nathan To - Engineering, code, and research.",
    images: ["https://nathanto.dev/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}