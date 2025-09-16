import type { ReactNode } from "react";

import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: { default: "Portfolio", template: "%s | Portfolio" },
  description: "Portfolio – Inhalte werden 1:1 übernommen.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
