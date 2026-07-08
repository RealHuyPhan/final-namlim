import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight, FlaskConical, BookOpen, Quote, Calendar, Tag } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="w-full bg-[#FAFAFA] pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="w-full max-w-[95%] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <FadeIn direction="right" className="flex flex-col items-start w-full pr-0 lg:pr-10">
            <h3 className="text-[#8B6E53] uppercase tracking-[0.15em] text-[13px] font-bold mb-5">
              THƯ VIỆN SỨC KHỎE
            </h3>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold text-[#3E1C16] leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
              Khám phá sức<br className="hidden md:block" /> mạnh từ thảo dược<br className="hidden md:block" /> tự nhiên
            </h1>
            <p className="text-foreground/60 text-base leading-[1.8] mb-10 max-w-[480px]">
              Nơi tổng hợp những kiến thức chuyên sâu, nghiên cứu lâm sàng và hướng dẫn sử dụng Nấm Lim Xanh đúng cách để đạt hiệu quả tối ưu cho sức khỏe bền vững.
            </p>
            <Link href="#all-posts" className="bg-[#3E1C16] text-white hover:bg-[#D4A373] hover:text-white uppercase text-[13px] font-bold tracking-widest py-4 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-xl">
              XEM TẤT CẢ BÀI VIẾT
            </Link>
          </FadeIn>

          {/* Right Image */}
          <FadeIn direction="left" delay={0.2} className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-black/5">
            <Image 
              src="/images/BoxGift.jpg" 
              alt="Mô hình trồng nấm lim xanh" 
              fill 
              className="object-cover" 
            />
          </FadeIn>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="w-full bg-[#FAFAFA] pb-24 mt-16 md:mt-24">
        <div className="w-full max-w-[95%] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <FadeIn className="flex items-center gap-4 mb-10">
            <div className="w-1.5 h-8 bg-[#5C3A21] rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E1C16]">Chuyên mục nổi bật</h2>
          </FadeIn>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1: Nghiên cứu (Col-Span-2) */}
            <FadeIn direction="up" delay={0.1} className="lg:col-span-2 flex flex-col md:flex-row bg-[#F8F3ED] rounded-[24px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full md:w-[45%] h-[250px] md:h-auto relative overflow-hidden">
                <Image src="/images/HomeBG.jpg" alt="Nghiên cứu nấm" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="w-full md:w-[55%] p-8 md:p-10 flex flex-col justify-center relative">
                <ArrowRight className="absolute top-8 right-8 w-5 h-5 text-[#C67C4E] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                <span className="text-[#3E1C16] text-xs font-bold uppercase tracking-widest mb-3">NGHIÊN CỨU</span>
                <h3 className="text-2xl md:text-[26px] font-bold text-[#C67C4E] leading-[1.3] mb-4">
                  Nghiên cứu khoa học: Phục tráng và phát triển nguồn gen nấm Lim xanh bản địa
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6 line-clamp-3">
                  Đề tài khoa học cấp Bộ do Đại học Lâm nghiệp chủ trì phối hợp với HTX Hải Nam nghiên cứu phục tráng và phát triển nguồn gen...
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#EBE0D3] rounded">#namlimxanh</span>
                  <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#EBE0D3] rounded">#khoahoc</span>
                </div>
              </div>
            </FadeIn>

            {/* Card 2: Tạp chí Y học (Col-Span-1) */}
            <FadeIn direction="up" delay={0.2} className="lg:col-span-1 bg-[#F8F3ED] rounded-[24px] p-8 md:p-10 flex flex-col group cursor-pointer relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <ArrowRight className="absolute top-8 right-8 w-5 h-5 text-[#8B6E53] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              <div className="mb-8">
                <FlaskConical className="w-8 h-8 text-[#5C3A21]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-[22px] font-bold text-[#3E1C16] leading-[1.4] mb-4">
                Tạp chí Y Học: Nghiên cứu lâm sàng về hoạt chất Triterpenoids trong nã...
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-6 line-clamp-3">
                Báo cáo khoa học tổng hợp cơ chế tác động của hoạt chất Triterpenoids giúp ngăn ngừa và ức chế các tế bào gốc tự do, tăng sinh tế bào lành tính.
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#EBE0D3] rounded">#namlimxanh</span>
                <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#EBE0D3] rounded">#khoahoc</span>
              </div>
            </FadeIn>

            {/* Card 3: Báo Sức khỏe (Col-Span-1) */}
            <FadeIn direction="up" delay={0.3} className="lg:col-span-1 bg-white border border-[#EBE0D3] rounded-[24px] p-8 md:p-10 flex flex-col group cursor-pointer relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <ArrowRight className="absolute top-8 right-8 w-5 h-5 text-[#8B6E53] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              <div className="mb-8">
                <BookOpen className="w-8 h-8 text-[#5C3A21]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-[22px] font-bold text-[#3E1C16] leading-[1.4] mb-4">
                Báo Sức Khỏe Đời Sống: Cách phân biệt nấm lim xanh rừng và nấm nuô...
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-6 line-clamp-3">
                Lời khuyên từ các bác sĩ Đông Y đầu ngành trong việc lựa chọn nấm lim xanh chuẩn chất lượng, tránh mua phải hàng giả, hàng kém chất lượng.
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#F8F3ED] rounded">#namlimxanh</span>
                <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#F8F3ED] rounded">#duoclieuquy</span>
              </div>
            </FadeIn>

            {/* Card 4: Từ thực phẩm sạch (Col-Span-2) */}
            <FadeIn direction="up" delay={0.4} className="lg:col-span-2 relative rounded-[24px] overflow-hidden group cursor-pointer min-h-[320px] flex flex-col justify-end p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
              <Image src="/images/BoxGift.jpg" alt="Từ thực phẩm sạch" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="relative z-10 w-full max-w-2xl">
                <Quote className="w-12 h-12 text-white/30 mb-4 fill-current stroke-0 rotate-180" />
                <h3 className="text-3xl md:text-[34px] font-bold text-white leading-[1.2] mb-4">
                  Từ thực phẩm sạch đến siêu thực phẩm
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed line-clamp-2">
                  Thị trường nấm ăn toàn cầu đang chứng kiến mức tăng trưởng mạnh mẽ, nhờ xu hướng tiêu dùng mới: ăn sạch – bổ dưỡng – phòng bệnh tự nhiên.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="w-full max-w-[95%] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Content - Latest Articles */}
            <div className="flex-1">
              <FadeIn className="flex items-center gap-3 mb-10 border-b border-[#EBE0D3] pb-4">
                <div className="w-1.5 h-6 bg-[#5C3A21] rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3E1C16]">Bài viết mới nhất</h2>
              </FadeIn>

              <div className="flex flex-col gap-10">
                {/* Article 1 */}
                <FadeIn direction="up" className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                  <div className="w-full md:w-[280px] lg:w-[320px] shrink-0">
                    <Link href="#" className="block relative h-[200px] md:h-[220px] rounded-2xl overflow-hidden">
                      <Image 
                        src="/images/BoxGift.jpg" 
                        alt="Sinh cảnh tự nhiên" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-[#8B6E53] font-medium mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>08 Tháng 6, 2026</span>
                      <span className="mx-1">•</span>
                      <span>Nghiên Cứu</span>
                    </div>
                    <Link href="#">
                      <h3 className="text-xl md:text-2xl font-bold text-[#C67C4E] hover:text-[#A66336] leading-[1.4] mb-3 transition-colors">
                        Sinh cảnh tự nhiên: Chìa khóa tạo nên dược tính vượt trội của Nấm Lim Xanh
                      </h3>
                    </Link>
                    <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                      Tại sao nấm lim xanh Trường Lâm được nuôi cấy trong mô hình sinh cảnh mô phỏng tự nhiên lại sở hữu hàm lượng hoạt chất quý tương đương nấm rừng?
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-auto">
                      <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#F8F3ED] rounded-full">#namlimxanh</span>
                      <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#F8F3ED] rounded-full">#sinhcanh</span>
                      <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#F8F3ED] rounded-full">#duoclieuquy</span>
                    </div>
                  </div>
                </FadeIn>

                {/* Article 2 */}
                <FadeIn direction="up" delay={0.1} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                  <div className="w-full md:w-[280px] lg:w-[320px] shrink-0">
                    <Link href="#" className="block relative h-[200px] md:h-[220px] rounded-2xl overflow-hidden">
                      <Image 
                        src="/images/HomeBG.jpg" 
                        alt="Lộ trình 30 ngày giải độc gan" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-[#8B6E53] font-medium mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>01 Tháng 6, 2026</span>
                      <span className="mx-1">•</span>
                      <span>Cẩm Nang</span>
                    </div>
                    <Link href="#">
                      <h3 className="text-xl md:text-2xl font-bold text-[#3E1C16] hover:text-[#C67C4E] leading-[1.4] mb-3 transition-colors">
                        Lộ trình 30 ngày giải độc gan, thanh lọc cơ thể toàn diện cùng trà nấm
                      </h3>
                    </Link>
                    <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                      Hướng dẫn chi tiết lộ trình sử dụng nước sắc nấm lim xanh kết hợp chế độ ăn uống khoa học giúp phục hồi và tối ưu chức năng gan chỉ sau 4 tuần.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-auto">
                      <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#F8F3ED] rounded-full">#suckhoe</span>
                      <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#F8F3ED] rounded-full">#giaidocgan</span>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* View More Button */}
              <FadeIn direction="up" delay={0.2} className="mt-12">
                <button className="border border-[#5C3A21] text-[#5C3A21] hover:bg-[#5C3A21] hover:text-white uppercase text-xs font-bold tracking-widest py-3 px-8 rounded transition-all duration-300">
                  XEM THÊM BÀI VIẾT
                </button>
              </FadeIn>
            </div>

            {/* Right Sidebar - Popular Topics */}
            <div className="w-full lg:w-[350px] shrink-0">
              <FadeIn direction="left" delay={0.1} className="bg-[#F8F3ED] rounded-[24px] p-8 lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-8">
                  <Tag className="w-5 h-5 text-[#5C3A21] rotate-90" />
                  <h3 className="text-xl font-bold text-[#3E1C16]">Chủ đề phổ biến</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    "namlimxanh", "khoahoc", "duoclieuquy", 
                    "sinhcanh", "suckhoe", "giaidocgan", "chuanhaccp"
                  ].map((tag) => (
                    <Link 
                      key={tag} 
                      href={`#${tag}`}
                      className="bg-white text-[#5C3A21] text-xs font-medium px-4 py-2.5 rounded-full hover:bg-[#C67C4E] hover:text-white transition-colors border border-transparent hover:border-[#C67C4E] shadow-sm"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
