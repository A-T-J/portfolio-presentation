import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio · Preuve par le travail",
  description:
    "Pourquoi un CV est un passif statique et un portfolio une preuve vivante : méthode, outils, automatisation et check-list. Présentation portfolio en français et en anglais.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
