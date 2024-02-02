import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suborno's Homework",
  description: "This the project is created by suborno.dev",
  twitter: {
    description: 'This the project is created by suborno.dev',
    images: '/asus-pn63-s1-barebone-pc-11th-gen-intel-core-i3-11698668116.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
