import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import fs from "fs";
import path from "path";
import { Providers } from "@/components/Providers";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-DPBNLCDD0V";
const FB_PIXEL_ID = "1234567890"; // Remplacez par votre ID de Pixel Facebook

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

function getInitialSlots(): Record<string, any> {
  const configFile = path.join(process.cwd(), "slots-config.json");
  try {
    if (fs.existsSync(configFile)) {
      const data = fs.readFileSync(configFile, "utf8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading slots-config.json in layout.tsx:", err);
  }
  return {};
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialSlots = getInitialSlots();

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
        <Providers initialSlots={initialSlots}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
