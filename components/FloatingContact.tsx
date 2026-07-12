"use client";

import Image from "next/image";
import Link from "next/link";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-4 bg-white px-1.5 py-3 rounded-4xl">
      {/* Facebook */}
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 relative rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <Image
          src="/images/Facebook.png"
          alt="Facebook"
          fill
          sizes="48px"
          className="object-cover"
        />
      </Link>

      {/* Zalo */}
      <Link
        href="https://zalo.me/84943363363"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 relative rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <Image
          src="/images/Zalo.png"
          alt="Zalo"
          fill
          sizes="48px"
          className="object-cover"
        />
      </Link>

      {/* Phone */}
      <Link
        href="tel:+84943363363"
        className="w-12 h-12 relative rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <Image
          src="/images/Phone.png"
          alt="Phone"
          fill
          sizes="48px"
          className="object-cover"
        />
      </Link>
    </div>
  );
}
