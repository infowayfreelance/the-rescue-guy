import type { Metadata } from "next"; import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata={title:{default:"The Road Rescue Guys | 24/7 UK Vehicle Recovery",template:"%s | The Road Rescue Guys"},description:"24/7 vehicle recovery, roadside assistance and vehicle transport across the UK.",icons:{icon:"/site-icon.webp"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className="dark"><body className="bg-background font-body-md text-on-surface relative min-h-screen selection:bg-primary selection:text-on-primary-fixed"><Header/>{children}<Footer/></body></html>}
