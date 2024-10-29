import type { Metadata } from "next";
import localFont from "next/font/local";
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
      <body>
        {children}
      </body>
    </html>
  );
}
