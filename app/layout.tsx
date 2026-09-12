import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MATERIAL_SYMBOLS_HREF =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100..700,0..1,0&display=swap";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: { default: "The Road Rescue Guys | 24/7 UK Vehicle Recovery", template: "%s | The Road Rescue Guys" },
  description: "24/7 vehicle recovery, roadside assistance and vehicle transport across the UK.",
  icons: { icon: "/site-icon.webp" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${plusJakartaSans.variable}`} style={{ backgroundColor: "#0d131f", colorScheme: "dark" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={MATERIAL_SYMBOLS_HREF} media="print" id="material-symbols-link" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var l=document.getElementById('material-symbols-link');if(!l)return;function a(){l.media='all';}if(l.sheet){a();}else{l.addEventListener('load',a);}})();",
          }}
        />
        <noscript>
          <link rel="stylesheet" href={MATERIAL_SYMBOLS_HREF} />
        </noscript>
      </head>
      <body
        className="bg-background font-body-md text-on-surface relative min-h-screen selection:bg-primary selection:text-on-primary-fixed"
        style={{ backgroundColor: "#0d131f", color: "#dde2f3" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
