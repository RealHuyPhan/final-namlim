"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export function useScrollRestoration() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // Không làm gì nếu không có lenis hoặc chưa render client
    if (!lenis || typeof window === "undefined") return;

    // Lấy vị trí cuộn đã lưu của pathname hiện tại
    const scrollKey = `scroll-pos-${pathname}`;
    const savedPosition = sessionStorage.getItem(scrollKey);

    if (savedPosition) {
      // Yêu cầu Lenis cuộn đến vị trí ngay lập tức khi component được mount
      requestAnimationFrame(() => {
        lenis.scrollTo(Number(savedPosition), { immediate: true });
      });
    }

    // Hàm lưu lại vị trí cuộn
    const handleScroll = () => {
      sessionStorage.setItem(scrollKey, lenis.scroll.toString());
    };

    // Lắng nghe sự kiện scroll từ Lenis
    lenis.on('scroll', handleScroll);

    // Dọn dẹp sự kiện khi unmount (ví dụ khi chuyển trang)
    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [pathname, lenis]);
}
