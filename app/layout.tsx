import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nấm Lim Xanh Trường Lâm",
  description: "Nấm Lim Xanh Trường Lâm",
  icons: {
    icon: "/images/LogoNoText.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">
          <SmoothScroll>{children}</SmoothScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}
