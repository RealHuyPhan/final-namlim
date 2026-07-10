"use client";

import { useSearchParams, useRouter } from "next/navigation";

const CATEGORIES = [
  { id: "all", label: "Tất cả bài viết" },
  { id: "gioi-thieu", label: "Giới thiệu nấm lim xanh" },
  { id: "cong-dung", label: "Công dụng, lợi ích" },
  { id: "cach-su-dung", label: "Cách bảo quản, sử dụng" },
  { id: "tin-tuc", label: "Tin tức, sự kiện" },
  { id: "trai-nghiem", label: "Trải nghiệm khách hàng" },
];

export default function CategoryFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") || "all";

  const handleCategoryClick = (id: string) => {
    if (id === "all") {
      router.push("/blog", { scroll: false });
    } else {
      router.push(`/blog?category=${id}`, { scroll: false });
    }
  };

  return (
    <div className="w-full overflow-x-auto pb-4 mb-8 hide-scrollbar">
      <div className="flex items-center gap-3 w-max">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border whitespace-nowrap ${
                isActive
                  ? "bg-[#8B6E53] text-white border-[#8B6E53] shadow-md"
                  : "bg-white text-[#5C3A21] border-[#EBE0D3] hover:border-[#8B6E53] hover:bg-[#F8F3ED]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
