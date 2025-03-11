import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mood Voyage",
  description: "Quantify emotional needs with NVC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body>
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
