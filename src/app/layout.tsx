import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudySphere AI — Learn your way",
  description: "Your colourful, personal learning universe.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
