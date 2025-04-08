import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthony Catanzariti Portfolio",
  description: "Professional portfolio of Anthony Catanzariti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container">
        {children}
      </body>
    </html>
  );
}
