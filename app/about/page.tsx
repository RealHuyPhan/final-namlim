"use client";

import ParallaxHero from "@/components/ui/ParallaxHero";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { Quote, Leaf, Eye, Target, Gem, X, Search } from "lucide-react";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
              Về Chúng Tôi <br />
              <span className="text-[#D4A373]">Trường Lâm</span>
            </h1>

            <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed drop-shadow-md max-w-xl">
              Hành trình mang tinh hoa Nấm Lim Xanh đến với sức khỏe của cộng đồng.
            </p>
          </FadeIn>
        </div>
      </ParallaxHero>

      {/* Open Letter Section */}
      <section className="w-full py-16 md:py-24 px-6 flex justify-center">
        <div className="w-full max-w-[95%] 2xl:max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Image */}
          <FadeIn direction="right" className="lg:col-span-5 mx-auto max-w-md lg:max-w-full relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl border-8 border-white bg-black/5">
            <Image src="/images/CEO.jpg" alt="CEO Lê Văn Hợp" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-white font-bold text-3xl drop-shadow-md mb-1">Ông Lê Văn Hợp</p>
              <p className="text-[#D4A373] text-sm font-bold uppercase tracking-widest">CEO & Founder</p>
            </div>
          </FadeIn>

          {/* Right Column - Letter Content */}
          <FadeIn direction="left" delay={0.2} className="lg:col-span-7 flex flex-col pt-12 md:pt-0 pl-0 lg:pl-10">
            <div className="relative w-full">
              {/* Quote Mark */}
              <span className="absolute -top-8 -left-4 md:-top-16 md:-left-8 text-[100px] md:text-[140px] font-serif text-[#D4A373]/20 leading-none select-none">“</span>

              <div className="relative z-10 w-full mb-10 flex justify-center">
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#3E1C16]">
                  Thư Ngỏ
                </h2>
              </div>

              <div className="relative z-10 text-foreground/70 font-light text-base md:text-[17px] leading-[1.8] space-y-6">
                <p>
                  Kính gửi Quý khách hàng, Quý đối tác,
                </p>
                <p>
                  Chúng tôi bắt đầu hành trình với niềm tin rằng nấm lim xanh của Việt Nam có thể sánh ngang với những nguồn dược liệu quý trên thế giới. Để hiện thực hóa điều đó, Hợp tác xã thương mại và dịch vụ Hải Nam đã đầu tư bài bản từ vùng nguyên liệu đạt chuẩn GACP-WHO, hệ thống sản xuất hiện đại, hợp tác nghiên cứu với các viện uy tín, cùng đội ngũ kỹ sư nông nghiệp giàu kinh nghiệm.
                </p>
                <p>
                  Với phương châm <strong className="text-[#3E1C16] font-medium">“Minh bạch – Khoa học – Bền vững”</strong>, chúng tôi cam kết mang đến những sản phẩm chất lượng cao, an toàn, đạt chuẩn quốc tế, phục vụ sức khỏe cộng đồng và khẳng định thương hiệu Việt trên bản đồ dược liệu toàn cầu.
                </p>

                <div className="pt-10 flex flex-col items-end text-right">
                  <p className="text-xl md:text-2xl font-bold text-[#3E1C16] mb-1">Trân trọng !</p>
                  <p className="text-xl md:text-2xl font-bold text-[#3E1C16] mb-1">Ceo & Founder</p>
                  <p className="text-lg md:text-xl text-[#D4A373]">Mr Lê Văn Hợp</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-16 md:py-32 px-4 flex justify-center bg-white overflow-hidden">
        <div className="w-full max-w-[95%] 2xl:max-w-[1200px] flex flex-col items-center">

          <FadeIn className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#D4A373]"></div>
              <span className="text-[#D4A373] uppercase tracking-widest text-sm font-bold">
                Lịch Sử Phát Triển
              </span>
              <div className="w-10 h-[2px] bg-[#D4A373]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#3E1C16] leading-tight">
              Hành Trình Phát Triển <br />Nấm Lim Xanh Trường Lâm
            </h2>
          </FadeIn>

          <div ref={timelineRef} className="relative w-full">
            {/* Faint Background Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-black/10 md:-translate-x-1/2"></div>

            {/* Growing Active Line */}
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-[#bd4545] md:-translate-x-1/2 origin-top z-10"
              style={{ height: lineHeight }}
            >
              {/* Red Dot at the bottom of the line */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-[#bd4545] rounded-full"></div>
            </motion.div>

            <div className="flex flex-col gap-16 md:gap-32 w-full py-10 relative z-20">
              {[
                { title: "2018", desc: "Nấm lim xanh được thu hái cẩn thận từ những gốc lim xanh mục trong rừng sâu, đảm bảo độ tuổi và chất lượng tốt nhất.", img: "/images/BoxGift.jpg" },
                { title: "2021", desc: "Sau khi thu hái, nấm được làm sạch loại bỏ độc tố và sấy khô tự nhiên bằng hệ thống khép kín đạt chuẩn.", img: "/images/HomeBG.jpg" },
                { title: "2023", desc: "Mỗi lô nấm đều được kiểm định hàm lượng dược chất tại các viện nghiên cứu uy tín trước khi đóng gói.", img: "/images/BoxGift.jpg" },
                { title: "2026", desc: "Sản phẩm được đóng gói bằng vật liệu thân thiện, bảo quản an toàn tuyệt đối và trao đến tay người tiêu dùng.", img: "/images/HomeBG.jpg" }
              ].map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`relative flex flex-col md:flex-row items-center w-full group ${!isEven ? 'md:flex-row-reverse' : ''}`}>

                    {/* Content Container */}
                    <div className={`w-full md:w-1/2 flex flex-col pl-12 md:py-0 ${isEven ? 'md:pl-0 md:pr-16 lg:pr-24 md:items-end' : 'md:pl-16 lg:pl-24 md:items-start'}`}>
                      <FadeIn direction={isEven ? "right" : "left"} className="w-full max-w-lg flex flex-col gap-6">
                        <div className="relative w-full aspect-[16/9] md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
                          <Image src={item.img} alt={item.title} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-4 mt-2 w-full text-left">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-[#bd4545] text-white rounded-[10px] flex items-center justify-center shrink-0 shadow-sm">
                              <Leaf className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">{item.title}</h3>
                          </div>
                          <p className="text-foreground/70 leading-relaxed text-sm md:text-[15px] font-medium text-left">
                            {item.desc}
                          </p>
                        </div>
                      </FadeIn>
                    </div>

                    {/* Empty Space for the other half */}
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Vision, Mission, Core Values Section */}
      <section className="relative w-full py-20 md:py-32 px-4 flex justify-center bg-[#3E1C16] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#D4A373]/5 blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#D4A373]/5 blur-[120px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-[95%] 2xl:max-w-[1200px] flex flex-col items-center">
          <FadeIn className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#D4A373]"></div>
              <span className="text-[#D4A373] uppercase tracking-widest text-sm font-bold">
                Triết Lý Hoạt Động
              </span>
              <div className="w-10 h-[2px] bg-[#D4A373]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Tầm Nhìn & Sứ Mệnh
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            {/* Tầm Nhìn (2 columns, 2 rows wide) */}
            <FadeIn className="lg:col-span-2 lg:row-span-2 relative rounded-[32px] overflow-hidden group shadow-2xl p-8 md:p-12 flex flex-col justify-between min-h-[500px]">
              <Image src="/images/HomeBG.jpg" alt="Tầm nhìn" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3E1C16]/95 via-[#3E1C16]/80 to-[#3E1C16]/40"></div>

              <div className="relative z-10 w-full mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <Eye className="w-7 h-7 text-[#D4A373]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Tầm Nhìn</h3>
                </div>
                <p className="text-white/90 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl">
                  Trở thành top 3 thương hiệu nấm dược liệu tại Việt Nam, top 1 nấm lim xanh. Phát triển vùng trồng chuẩn HACCP.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* HACCP */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="mt-1 w-7 h-7 rounded-full bg-[#D4A373] flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-4 h-4 text-[#3E1C16]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#D4A373]">Tiêu Chuẩn Quốc Tế HACCP</h4>
                      <p className="text-white/60 text-sm font-medium italic mt-1">Hazard Analysis and Critical Control Points</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed text-[15px]">
                    Hệ thống phân tích mối nguy và điểm kiểm soát tới hạn. Đây là tiêu chuẩn quản lý chất lượng và an toàn thực phẩm quốc tế, đảm bảo an toàn tuyệt đối từ vùng trồng đến thành phẩm.
                  </p>
                </div>

                {/* Vùng trồng */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="mt-1 w-7 h-7 rounded-full bg-[#D4A373] flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-4 h-4 text-[#3E1C16]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#D4A373]">Vùng trồng kiểm soát</h4>
                      <p className="text-white/60 text-sm font-medium italic mt-1">Đạt chuẩn</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed text-[15px]">
                    ≥ 3 ha, hoàn thiện chuỗi chuẩn hóa từ giống đến dược phẩm và phân phối quốc tế.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Sứ Mệnh (Right Top, 1 column) */}
            <FadeIn delay={0.2} className="lg:col-span-1 bg-gradient-to-b from-[#4A241D] to-[#3E1C16] rounded-[32px] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group shadow-2xl border border-white/5">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4A373]/10 rounded-full blur-3xl group-hover:bg-[#D4A373]/20 transition-colors duration-700"></div>
              <div className="w-14 h-14 bg-[#D4A373]/20 rounded-2xl flex items-center justify-center mb-6 relative z-10 border border-[#D4A373]/10 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-7 h-7 text-[#D4A373]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Sứ Mệnh</h3>
              <p className="text-white/80 leading-relaxed relative z-10 text-[15px]">
                Trao sức khỏe bền vững cho cộng đồng bằng sản phẩm nấm lim xanh chuẩn khoa học. Nâng tầm giá trị dược liệu Việt, xây dựng chuỗi kinh tế xanh và tạo sinh kế bền vững cho người dân.
              </p>
            </FadeIn>

            {/* Giá Trị Cốt Lõi (Right Bottom, 1 column) */}
            <FadeIn delay={0.4} className="lg:col-span-1 bg-[#FAFAFA] rounded-[32px] p-8 md:p-10 shadow-2xl flex flex-col justify-center group">
              <div className="w-14 h-14 bg-[#3E1C16]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Gem className="w-7 h-7 text-[#3E1C16]" />
              </div>
              <h3 className="text-3xl font-bold text-[#3E1C16] mb-4">Giá Trị Cốt Lõi</h3>
              <p className="text-foreground/70 leading-relaxed text-[15px]">
                Khoa học minh bạch, thuần chất thiên nhiên, trách nhiệm với hệ sinh thái và tận tâm đồng hành cùng người bệnh như một giải pháp hỗ trợ tin cậy.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="w-full py-24 md:py-32 px-4 flex justify-center bg-white border-t border-black/5">
        <div className="w-full max-w-[95%] 2xl:max-w-[1200px] flex flex-col">
          <FadeIn className="mb-20">
            <span className="text-[#D4A373] uppercase tracking-widest text-sm font-bold block mb-4">
              Quy Trình Sản Xuất
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-[#3E1C16] leading-[1.2] max-w-4xl">
              Những Tiêu Chuẩn Khắt Khe Trong Quy Trình Sản Xuất Của Chúng Tôi.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full">
            {[
              { num: "01", title: "Thu Hái", desc: "Nấm lim xanh được thu hái cẩn thận từ những gốc lim xanh mục trong rừng sâu, đảm bảo độ tuổi và chất lượng tốt nhất." },
              { num: "02", title: "Sơ Chế", desc: "Sau khi thu hái, nấm được làm sạch loại bỏ độc tố và sấy khô tự nhiên bằng hệ thống khép kín đạt chuẩn." },
              { num: "03", title: "Kiểm Định", desc: "Mỗi lô nấm đều được kiểm định hàm lượng dược chất tại các viện nghiên cứu uy tín trước khi đóng gói." },
              { num: "04", title: "Thành Phẩm", desc: "Sản phẩm được đóng gói bằng vật liệu thân thiện, bảo quản an toàn tuyệt đối và trao đến tay người tiêu dùng." }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.15} direction="up" className="flex flex-col group">
                <span className="text-4xl md:text-[56px] font-light text-[#3E1C16] mb-8 group-hover:-translate-y-2 transition-transform duration-500 block">
                  {item.num}
                </span>
                <div className="w-full h-[1px] bg-black/15 mb-8 relative">
                  <div className="absolute top-0 left-0 h-full bg-[#D4A373] w-0 group-hover:w-full transition-all duration-700 ease-out z-10"></div>
                </div>
                <h3 className="text-xl font-bold text-[#3E1C16] mb-4 group-hover:text-[#D4A373] transition-colors">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-[15px]">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="w-full py-24 md:py-32 px-4 flex justify-center bg-[#FAFAFA]">
        <div className="w-full max-w-[95%] 2xl:max-w-[1200px] flex flex-col items-center">
          <FadeIn className="text-center mb-16 md:mb-20">
            <span className="text-[#D4A373] uppercase tracking-widest text-sm font-bold block mb-4">
              Chứng Nhận & Giấy Phép
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#3E1C16] leading-[1.2] max-w-4xl mx-auto">
              Được Cấp Phép, Kiểm Định, Và Tin Tưởng Khắp Mọi Nơi.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            {[1, 2, 3].map((item, index) => (
              <FadeIn key={index} delay={index * 0.15} direction="up" className="w-full">
                <div
                  className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-black/5 bg-white p-4 cursor-pointer"
                  onClick={() => setSelectedCert('/images/CamKet.webp')}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#FAFAFA]">
                    <Image
                      src="/images/CamKet.webp"
                      alt={`Giấy phép ${item}`}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Hover overlay with zoom icon */}
                    <div className="absolute inset-0 bg-[#3E1C16]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                        <Search className="w-6 h-6 text-[#3E1C16]" />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-white/20 z-50 group"
              onClick={() => setSelectedCert(null)}
            >
              <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl h-full rounded-2xl overflow-hidden bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedCert}
                alt="Certificate Detail"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
