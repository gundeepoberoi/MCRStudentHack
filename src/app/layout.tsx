import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  // Need to specify the weight if not using a variable font
  weight: "400", 
  subsets: ["latin"], 
});

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
    <html lang="en">
      <body
        className={`${roboto.className} bg-gradient-to-b from-gray-900 to-gray-950`}
      >
        {" "}
        {children}
      </body>
    </html>
  );
}
