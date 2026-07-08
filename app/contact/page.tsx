"use client";

import ParallaxHero from "@/components/ui/ParallaxHero";
import FadeIn from "@/components/ui/FadeIn";
import { Building2, ShieldCheck, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      <ParallaxHero
        backgroundImage="/images/HomeBG.jpg"
        containerClass="h-[40vh] md:h-[50vh] min-h-[400px] flex flex-col items-center justify-center mt-10 md:mt-0"
        overlayClass="bg-gradient-to-r from-black/80 via-black/40 to-transparent"
      >
        <div className="relative z-10 w-full max-w-[95%] 2xl:max-w-[1440px] px-6 flex flex-col items-start mt-16 md:mt-20">
          <FadeIn className="flex flex-col max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-4 drop-shadow-lg">
              Liên Hệ <br />
              <span className="text-[#D4A373]">Với Chúng Tôi</span>
            </h1>

            <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed drop-shadow-md max-w-xl">
              Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn về Nấm Lim Xanh.
            </p>
          </FadeIn>
        </div>
      </ParallaxHero>

      {/* Contact Info and Map Section */}
      <section className="w-full bg-[#FAFAFA] py-12">
        <div className="w-full max-w-[95%] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left Column - Contact Info */}
            <div className="flex flex-col gap-6">
              {/* Card 1: Company */}
              <FadeIn direction="up" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/5">
                <div className="flex items-start gap-4 md:gap-6 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F8F3ED] flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-[#C67C4E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#3E1C16] mb-1">HTX TM & DV Hải Nam</h3>
                    <p className="text-foreground/60 text-sm">Thương Hiệu Nấm Lim Xanh Trường Lâm</p>
                  </div>
                </div>
                <div className="bg-[#F8F3ED] rounded-xl p-4 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C67C4E]" />
                  <span className="text-[#3E1C16] font-medium text-sm">Mã số thuế / GPKD: 0109756450</span>
                </div>
              </FadeIn>

              {/* Card 2: Address */}
              <FadeIn direction="up" delay={0.1} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/5 flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#F8F3ED] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#C67C4E]" />
                </div>
                <div>
                  <h3 className="text-[#8B6E53] uppercase tracking-widest text-xs font-bold mb-2">ĐỊA CHỈ TRỤ SỞ</h3>
                  <p className="text-lg font-bold text-[#3E1C16] mb-2 leading-relaxed">
                    Đội 1, thôn Võng La, xã Thiên Lộc, Đông Anh, Hà Nội
                  </p>
                  <p className="text-foreground/50 text-sm">Vùng nguyên liệu: Xã Phúc Thịnh, Đông Anh, Hà Nội</p>
                </div>
              </FadeIn>

              {/* Card 3: Hotline */}
              <FadeIn direction="up" delay={0.2} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/5 flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#F8F3ED] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#C67C4E]" />
                </div>
                <div>
                  <h3 className="text-[#8B6E53] uppercase tracking-widest text-xs font-bold mb-2">HOTLINE LIÊN HỆ</h3>
                  <p className="text-xl font-bold text-[#3E1C16] mb-2">+84 943 363 363</p>
                  <p className="text-foreground/50 text-sm">Hỗ trợ trực tiếp: Mr Lê Văn Hợp</p>
                </div>
              </FadeIn>

              {/* Card 4: Email */}
              <FadeIn direction="up" delay={0.3} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/5 flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#F8F3ED] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#C67C4E]" />
                </div>
                <div>
                  <h3 className="text-[#8B6E53] uppercase tracking-widest text-xs font-bold mb-2">ĐỊA CHỈ EMAIL</h3>
                  <p className="text-xl font-bold text-[#3E1C16]">hophit90@gmail.com</p>
                </div>
              </FadeIn>

              {/* Card 5: Working Hours */}
              <FadeIn direction="up" delay={0.4} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/5 flex items-start gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#F8F3ED] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#C67C4E]" />
                </div>
                <div>
                  <h3 className="text-[#8B6E53] uppercase tracking-widest text-xs font-bold mb-2">GIỜ LÀM VIỆC</h3>
                  <p className="text-lg font-bold text-[#3E1C16]">8:00 - 18:00 (Thứ 2 - Chủ Nhật)</p>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Map */}
            <FadeIn direction="left" delay={0.2} className="flex flex-col h-full min-h-[500px]">
              <div className="flex items-center justify-between mb-6 px-2">
                <h2 className="text-2xl font-bold text-[#3E1C16]">Bản Đồ Chỉ Đường</h2>
                <span className="text-foreground/50 text-sm hidden sm:block">Võng La, Đông Anh, Hà Nội</span>
              </div>
              <div className="w-full flex-1 rounded-[24px] overflow-hidden shadow-md border border-black/5 relative min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14890.354228945624!2d105.77259461536767!3d21.089098670732896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350a41d9c22823%3A0x6a2c26219f8602b9!2zVsO1bmcgTGEsIMSQw7RuZyBBbmgsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
