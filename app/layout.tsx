import type {Metadata} from "next";
import "./globals.css";

import {interRegular} from "./ui/fonts";
import Footer from "./ui/Footer";
import NavBar from "./ui/NavBar";

export const metadata: Metadata = {
  title: "MOCOM - Mobile Phone Accessories",
  description:
    "Discover premium mobile phone accessories at unbeatable prices. Shop cases, chargers, headphones, and more with fast shipping.",
  keywords: [
    "mobile accessories",
    "phone cases",
    "chargers",
    "wireless headphones",
    "gadgets",
    "smartphone shop",
    "affordable phone accessories",
  ],
  authors: [{name: "Mobile Accessories Store"}],
  openGraph: {
    title: "MOCOM - Mobile Phone Accessories",
    description:
      "Discover premium mobile phone accessories at unbeatable prices. Shop cases, chargers, headphones, and more with fast shipping.",
    url: "https://mocomstore.com",
    siteName: "Mobile Accessories Store",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Accessories Store | Affordable Phone Gadgets",
    description:
      "Premium mobile phone accessories: cases, chargers, headphones, and more. Great prices, fast shipping.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interRegular.className} flex min-h-screen flex-col justify-between antialiased`}
      >
        <div className="mx-64">
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
