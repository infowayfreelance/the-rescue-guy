import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en" className={`dark ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100..700,0..1,0&display=swap"
        />
      </head>
      <body className="bg-background font-body-md text-on-surface relative min-h-screen selection:bg-primary selection:text-on-primary-fixed">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
