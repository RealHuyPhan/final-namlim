"use client";

import { useState } from "react";
import ParallaxHero from "@/components/ui/ParallaxHero";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { Package, ArrowRight, PhoneCall, Hexagon, Coffee } from "lucide-react";
import productsData from "@/data/products.json";

const categories = [
  { id: "all", label: "Tất Cả Sản Phẩm", icon: Package },
  { id: "nam-lim-xanh-kho-nguyen-tai", label: "Nấm lim xanh khô nguyên tai", icon: Hexagon },
  { id: "nam-lim-xanh-thai-lat", label: "Nấm lim xanh thái lát", icon: Package },
  { id: "tra-tui-loc-nam-lim-xanh", label: "Trà túi lọc nấm lim xanh", icon: Coffee },
  { id: "phoi-nam-lim-xanh", label: "Phôi nấm lim xanh chất lượng cao", icon: Package },
];

export default function ProductsPage() {
  const allProducts = productsData.products;
  const [activeCategory, setActiveCategory] = useState("all");

  const activeCategoryLabel = categories.find(c => c.id === activeCategory)?.label || "Tất Cả Sản Phẩm";

  const filteredProducts = activeCategory === "all"
    ? allProducts
    : allProducts.filter(p => p.category.toLowerCase() === activeCategoryLabel.toLowerCase());

  return (
    <div className="w-full bg-[#FAFAFA]">
      <ParallaxHero
        backgroundImage="/images/HomeBG.jpg"
        containerClass="h-[400px] md:h-[500px] flex flex-col items-center justify-center"
        overlayClass="bg-black/30"
      >
        <FadeIn className="relative z-10 text-start px-4 flex flex-col w-full max-w-[90%]">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-md">
            Sản phẩm <br />Nấm Lim Xanh<br /> Trường Lâm
          </h1>
        </FadeIn>
      </ParallaxHero>

      {/* Main Content */}
      <section className="w-full py-16 px-4 flex justify-center bg-[#FAFAFA]">
        <div className="w-full max-w-[95%] 2xl:max-w-[1440px] flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 flex flex-col gap-8">
            {/* Categories Menu */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-[#D4A373] rounded-full"></div>
                <h3 className="text-xl font-bold text-[#3E1C16]">Phân Loại</h3>
              </div>
              <div className="flex flex-col gap-3">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm transition-colors text-left ${
                        isActive
                          ? "bg-[#3E1C16] text-white"
                          : "bg-white text-foreground hover:bg-black/5 border border-black/5"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "" : "text-[#D4A373]"}`} />
                      <span className={`font-semibold text-sm ${isActive ? "" : "text-[#3E1C16]/80 hover:text-[#3E1C16]"}`}>
                        {cat.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Widget */}
            <div className="bg-[#3E1C16] rounded-2xl p-6 flex flex-col items-center text-center shadow-lg mt-4">
              <span className="text-white/60 text-[10px] font-semibold tracking-widest uppercase mb-2">Chăm sóc khách hàng</span>
              <h4 className="text-white text-xl font-bold mb-6">Bạn cần tư vấn?</h4>
              <Link href="tel:0123456789" className="w-full py-3.5 bg-[#D4A373] hover:bg-[#c39162] text-[#3E1C16] font-bold rounded-full transition-colors flex items-center justify-center gap-2 text-sm tracking-wider shadow-sm">
                <PhoneCall className="w-4 h-4" />
                GỌI NGAY
              </Link>
            </div>
          </aside>

          {/* Product List Area */}
          <div className="w-full lg:w-3/4 flex flex-col">
            {/* Header */}
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3E1C16] mb-4">{activeCategoryLabel}</h2>
              <p className="text-foreground/70 leading-relaxed max-w-3xl text-sm md:text-base">
                Khám phá tinh hoa Nấm Lim Xanh được nuôi trồng sinh thái tại vùng trồng Đông Anh, Hà Nội. Sản phẩm được tuyển chọn kỹ lưỡng, kiểm định nghiêm ngặt cho sức khỏe trọn vẹn.
              </p>
            </div>

            <div className="flex items-end justify-between border-b border-black/10 pb-4 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#3E1C16]">Danh sách chế phẩm</h3>
              <span className="text-foreground/50 text-sm mb-1">{filteredProducts.length} sản phẩm</span>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((item, index) => (
                  <Link href={`/products/${item.id}`} key={index} className="flex flex-col group cursor-pointer h-full">
                    {/* Image Container */}
                    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-black/5">
                      <div className="absolute top-4 left-4 bg-white text-[#3E1C16] px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm z-10">
                        {item.tag}
                      </div>
                      <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col flex-grow">
                      <span className="text-[#3E1C16]/60 text-[10px] font-bold uppercase tracking-widest mb-2">
                        {item.category}
                      </span>
                      <h4 className="text-[#3E1C16] font-bold text-lg md:text-xl leading-snug mb-3 group-hover:text-[#D4A373] transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-foreground/70 text-sm leading-relaxed mb-6 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Footer / Meta */}
                      <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-4">
                        <p className="text-foreground/50 text-[10px] leading-relaxed max-w-[70%] italic">
                          {item.packing}
                        </p>
                        <span className="flex items-center gap-1 text-[#3E1C16] text-xs font-bold group-hover:text-[#D4A373] transition-colors whitespace-nowrap">
                          Chi tiết <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white rounded-2xl shadow-sm border border-black/5">
                <Package className="w-16 h-16 text-[#3E1C16]/20 mb-4" />
                <h4 className="text-xl font-bold text-[#3E1C16] mb-2">Chưa có sản phẩm</h4>
                <p className="text-foreground/60 max-w-md">
                  Hiện tại danh mục này chưa có sản phẩm nào. Vui lòng quay lại sau hoặc xem các danh mục khác.
                </p>
                <button 
                  onClick={() => setActiveCategory("all")}
                  className="mt-6 px-6 py-2.5 bg-[#3E1C16] text-white rounded-full text-sm font-semibold hover:bg-[#3E1C16]/90 transition-colors"
                >
                  Xem tất cả sản phẩm
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
