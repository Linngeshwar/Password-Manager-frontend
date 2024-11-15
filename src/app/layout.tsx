import type { Metadata } from "next";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";


export const metadata: Metadata = {
  title: "Password Manager",
  description: "Password manager to remember passwords with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {   
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
