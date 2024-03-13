import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/sections/Lenis";
//import { Providers } from '@/components/sections/providers';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudentHack 2024",
  description: "MCRStudentHack2024 organised by UniCS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}> {children}
    </body>
    </html>
  );
}
