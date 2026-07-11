"use client";

import { useState } from "react";
import ParallaxHero from "@/components/ui/ParallaxHero";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { HelpCircle, Info, Heart, Shield, Newspaper, FileText, BookOpen, PhoneCall } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";

const categoryList = [
  { id: "all", label: "Tất Cả Câu Hỏi", icon: HelpCircle },
  { id: "gioi-thieu", label: "Giới thiệu chung", icon: Info },
  { id: "cong-dung", label: "Công dụng sức khỏe", icon: Heart },
  { id: "cach-su-dung", label: "Cách sử dụng & bảo quản", icon: Shield },
  { id: "tin-tuc", label: "Tin tức & Thị trường", icon: Newspaper },
  { id: "nghien-cuu", label: "Nghiên cứu khoa học", icon: FileText },
  { id: "bao-chi", label: "Báo chí", icon: BookOpen },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const activeCategoryLabel = categoryList.find(c => c.id === activeCategory)?.label || "Tất Cả Câu Hỏi";

  const filteredPosts = activeCategory === "all"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="w-full bg-[#FAFAFA]">
      <ParallaxHero
        backgroundImage="/images/HomeBG.jpg"
        containerClass="h-[40vh] md:h-[50vh] min-h-[400px] flex flex-col items-center justify-center mt-10 md:mt-0"
        overlayClass="bg-gradient-to-r from-black/80 via-black/40 to-transparent"
      >
        <div className="relative z-10 w-full max-w-[95%] 2xl:max-w-[1440px] px-6 flex flex-col items-start mt-16 md:mt-20">
          <FadeIn className="flex flex-col max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-4 drop-shadow-lg">
              Câu Hỏi <br />
              <span className="text-[#D4A373]">Thường Gặp</span>
            </h1>

            <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed drop-shadow-md max-w-xl">
              Tổng hợp giải đáp thắc mắc về Nấm Lim Xanh Trường Lâm
            </p>
          </FadeIn>
        </div>
      </ParallaxHero>

      {/* Main Content */}
      <section className="w-full py-16 px-4 flex justify-center bg-[#FAFAFA]">
        <div className="w-full max-w-[95%] 2xl:max-w-[1440px] flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Sidebar */}
          <aside className="w-full lg:w-[320px] flex flex-col gap-8 shrink-0">
            {/* Categories Menu */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-[#D4A373] rounded-full"></div>
                <h3 className="text-xl font-bold text-[#3E1C16]">Chủ Đề Hỏi Đáp</h3>
              </div>
              <div className="flex flex-col gap-3">
                {categoryList.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm transition-colors text-left ${isActive
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
            <div className="bg-[#3E1C16] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg mt-4">
              <span className="text-white/60 text-[10px] font-semibold tracking-widest uppercase mb-2">ĐỒNG HÀNH CÙNG KHÁCH HÀNG</span>
              <h4 className="text-white text-xl font-bold mb-6">Chưa tìm thấy câu hỏi của bạn?</h4>
              <Link href="tel:0123456789" className="w-full py-3.5 bg-[#D4A373] hover:bg-[#c39162] text-[#3E1C16] font-bold rounded-full transition-colors flex items-center justify-center gap-2 text-sm tracking-wider shadow-sm">
                <PhoneCall className="w-4 h-4" />
                GỌI TỔNG ĐÀI
              </Link>
            </div>
          </aside>

          {/* FAQ List Area */}
          <div className="w-full flex-1 flex flex-col">
            {/* Header */}
            <div className="mb-10">
              <span className="text-[#D4A373] text-[10px] font-bold uppercase tracking-widest mb-2 block">
                CẨM NANG GIẢI ĐÁP
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3E1C16] mb-4">{activeCategoryLabel}</h2>
              <p className="text-foreground/70 leading-relaxed max-w-3xl text-sm md:text-base">
                Dưới đây là danh sách tổng hợp các câu hỏi thắc mắc được nhiều khách hàng quan tâm gửi về Trường Lâm. Nhấp vào từng câu hỏi để xem câu trả lời chi tiết nhất.
              </p>
            </div>

            {/* List */}
            <div className="flex flex-col gap-4">
              {filteredPosts.map((post, postIdx) => (
                <details key={post.id} className="group border border-[#EBE0D3] rounded-[16px] bg-white overflow-hidden shadow-sm" open={activeCategory !== "all" && postIdx === 0}>
                  <summary className="flex justify-between items-center font-bold cursor-pointer list-none [&::-webkit-details-marker]:hidden p-5 md:p-6 text-base md:text-lg text-[#3E1C16] hover:text-[#C67C4E] transition-colors">
                    <span className="pr-4 leading-snug">{post.title}</span>
                    <span className="relative h-8 w-8 shrink-0 text-[#C67C4E]/70 group-hover:text-[#C67C4E] group-open:text-[#C67C4E] bg-black/5 rounded-full flex items-center justify-center">
                      <svg className="absolute inset-0 m-auto h-4 w-4 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                      <svg className="absolute inset-0 m-auto h-4 w-4 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>
                    </span>
                  </summary>
                  <div className="p-5 md:p-6 text-foreground/80 leading-relaxed border-t border-[#EBE0D3] bg-[#FAFAFA]/50 text-sm md:text-base">
                    <p className="mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-[#C67C4E] hover:text-[#A66336] font-semibold text-sm underline underline-offset-4 transition-colors">
                      Xem chi tiết câu trả lời
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
