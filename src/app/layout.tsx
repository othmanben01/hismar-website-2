import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hismar — Menuiserie Bois Sur Mesure Casablanca",
  description: "Hismar Menuiserie, Casablanca depuis 1968. Porte intérieure, porte d'entrée, placards, dressings et cuisine sur mesure. Bois certifié européen E1, quincaillerie Blum. Plans 3D gratuits — devis sous 48h.",
  keywords: "menuiserie bois, porte interieure sur mesure, porte entree sur mesure, placards sur mesure, dressings sur mesure, cuisine sur mesure, menuiserie Casablanca, menuiserie Maroc, bois sur mesure, Hismar Menuiserie",
  robots: "index, follow",
  other: {
    "geo.region": "MA-05",
    "geo.placename": "Casablanca, Maroc"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
