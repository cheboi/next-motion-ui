import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Motion UI",
  description: "A Next.js app with Framer Motion animations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
