"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Sản phẩm", href: "/products" },
  { name: "Về chúng tôi", href: "/about" },
  { name: "Tin tức & Cẩm nang", href: "/blog" },
  { name: "Liên hệ", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
        <div className="flex items-center justify-between bg-header-bg shadow-sm rounded-full px-4 py-3 w-full max-w-[90%] border border-black/5">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group pl-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/LogoNoText.png"
                alt="Logo Trường Lâm"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground tracking-tight leading-none">Nấm Lim Xanh</span>
              <span className="text-[12px] font-bold text-foreground/70 leading-none mt-1 uppercase tracking-wider">Trường Lâm</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden min-[1075px]:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Call to Action Button */}
            <Link
              href="/contact"
              className="hidden min-[1075px]:flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-full px-6 py-2.5 text-sm font-medium shadow-sm hover:shadow-md"
            >
              Contact us
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="min-[1075px]:hidden flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 min-[1075px]:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[80%] max-w-sm bg-background shadow-xl p-6 flex flex-col min-[1075px]:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex items-center justify-center w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/images/LogoNoText.png"
                alt="Logo Trường Lâm"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-lg font-bold text-foreground">Trường Lâm</span>
          </Link>
          <button
            className="p-2 rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="mt-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-6 py-3 text-base font-medium"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact us
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </>
  );
}
