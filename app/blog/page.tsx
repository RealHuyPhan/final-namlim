import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { BLOG_POSTS } from "@/data/blog";
import { ArrowRight, FlaskConical, BookOpen, Quote, Calendar, Tag } from "lucide-react";

export default async function BlogPage(props: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const activeCategory = (searchParams?.category as string) || "all";

  const filteredPosts = activeCategory === "all"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="w-full bg-[#FAFAFA] pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="w-full max-w-[95%] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <FadeIn direction="right" className="flex flex-col items-start w-full pr-0 lg:pr-10">
            <h3 className="text-[#8B6E53] uppercase tracking-[0.15em] text-[13px] font-bold mb-5">
              THƯ VIỆN SỨC KHỎE
            </h3>
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-bold text-[#3E1C16] leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
              Khám phá<br className="hidden md:block" />Nấm Lim Xanh<br className="hidden md:block" /> Trường Lâm
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
            <div className="w-1.5 h-6 bg-[#5C3A21] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3E1C16]">Chuyên mục nổi bật</h2>
          </FadeIn>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

            {/* Card 1: Nghiên cứu (Col-Span-2) */}
            <FadeIn direction="up" delay={0.1} className="lg:col-span-2">
              <Link href="/blog/phuc-trang-nguon-gen" className="flex flex-col md:flex-row bg-[#F8F3ED] rounded-[24px] overflow-hidden group shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-full md:w-[45%] h-[200px] md:h-auto relative overflow-hidden">
                  <Image src="/images/HomeBG.jpg" alt="Nghiên cứu nấm" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-center relative">
                  <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-[#C67C4E] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span className="text-[#3E1C16] text-xs font-bold uppercase tracking-widest mb-2">NGHIÊN CỨU</span>
                  <h3 className="text-xl md:text-[22px] font-bold text-[#C67C4E] leading-[1.3] mb-3">
                    Nghiên cứu khoa học: Phục tráng và phát triển nguồn gen nấm Lim xanh bản địa
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-4 line-clamp-2">
                    Đề tài khoa học cấp Bộ do Đại học Lâm nghiệp chủ trì phối hợp với HTX Hải Nam nghiên cứu phục tráng và phát triển nguồn gen...
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#EBE0D3] rounded">#namlimxanh</span>
                    <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#EBE0D3] rounded">#khoahoc</span>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Card 2: Tạp chí Y học (Col-Span-1) */}
            <FadeIn direction="up" delay={0.2} className="lg:col-span-1">
              <Link href="/blog/tap-chi-y-hoc-triterpenoids" className="bg-[#F8F3ED] rounded-[24px] p-6 md:p-8 flex flex-col group relative overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-[#8B6E53] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                <div className="mb-6">
                  <FlaskConical className="w-8 h-8 text-[#5C3A21]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-[20px] font-bold text-[#3E1C16] leading-[1.4] mb-3">
                  Tạp chí Y Học: Nghiên cứu lâm sàng về hoạt chất Triterpenoids trong nã...
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4 line-clamp-3">
                  Báo cáo khoa học tổng hợp cơ chế tác động của hoạt chất Triterpenoids giúp ngăn ngừa và ức chế các tế bào gốc tự do, tăng sinh tế bào lành tính.
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#EBE0D3] rounded">#namlimxanh</span>
                  <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#EBE0D3] rounded">#khoahoc</span>
                </div>
              </Link>
            </FadeIn>

            {/* Card 3: Báo Sức khỏe (Col-Span-1) */}
            <FadeIn direction="up" delay={0.3} className="lg:col-span-1">
              <Link href="/blog/phan-biet-nam-lim-xanh" className="bg-white border border-[#EBE0D3] rounded-[24px] p-6 md:p-8 flex flex-col group relative overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-[#8B6E53] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                <div className="mb-6">
                  <BookOpen className="w-8 h-8 text-[#5C3A21]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-[20px] font-bold text-[#3E1C16] leading-[1.4] mb-3">
                  Báo Sức Khỏe Đời Sống: Cách phân biệt nấm lim xanh rừng và nấm nuô...
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-4 line-clamp-3">
                  Lời khuyên từ các bác sĩ Đông Y đầu ngành trong việc lựa chọn nấm lim xanh chuẩn chất lượng, tránh mua phải hàng giả, hàng kém chất lượng.
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#F8F3ED] rounded">#namlimxanh</span>
                  <span className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#F8F3ED] rounded">#duoclieuquy</span>
                </div>
              </Link>
            </FadeIn>

            {/* Card 4: Từ thực phẩm sạch (Col-Span-2) */}
            <FadeIn direction="up" delay={0.4} className="lg:col-span-2">
              <Link href="/blog/tu-thuc-pham-sach-den-sieu-thuc-pham" className="relative rounded-[24px] overflow-hidden group min-h-[260px] flex flex-col justify-end p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow h-full block">
                <Image src="/images/BoxGift.jpg" alt="Từ thực phẩm sạch" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="relative z-10 w-full max-w-2xl">
                  <Quote className="w-8 h-8 text-white/30 mb-3 fill-current stroke-0 rotate-180" />
                  <h3 className="text-2xl md:text-[28px] font-bold text-white leading-[1.2] mb-3">
                    Từ thực phẩm sạch đến siêu thực phẩm
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed line-clamp-2">
                    Thị trường nấm ăn toàn cầu đang chứng kiến mức tăng trưởng mạnh mẽ, nhờ xu hướng tiêu dùng mới: ăn sạch – bổ dưỡng – phòng bệnh tự nhiên.
                  </p>
                </div>
              </Link>
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
              <FadeIn className="flex items-center gap-3 mb-6 border-b border-[#EBE0D3] pb-4">
                <div className="w-1.5 h-6 bg-[#5C3A21] rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3E1C16]">Bài viết mới nhất</h2>
              </FadeIn>

              {/* Horizontal Category Filter */}
              <Suspense fallback={<div className="h-12 w-full animate-pulse bg-gray-100 rounded-full mb-8"></div>}>
                <CategoryFilter />
              </Suspense>

              <div className="flex flex-col gap-10">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <FadeIn key={post.id} direction="up" delay={index * 0.1} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                      <div className="w-full md:w-[280px] lg:w-[320px] shrink-0">
                        <Link href={`/blog/${post.id}`} className="block relative h-[200px] md:h-[220px] rounded-2xl overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </Link>
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-sm text-[#8B6E53] font-medium mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                          <span className="mx-1">•</span>
                          <span className="capitalize">{post.category.replace(/-/g, ' ')}</span>
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <h3 className="text-xl md:text-2xl font-bold text-[#3E1C16] hover:text-[#C67C4E] leading-[1.4] mb-3 transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-auto">
                          {post.tags.map(tag => (
                            <span key={tag} className="text-[11px] text-[#8B6E53] font-medium px-3 py-1 bg-[#F8F3ED] rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </FadeIn>
                  ))
                ) : (
                  <div className="text-center py-10 text-[#5C3A21]">
                    Chưa có bài viết nào trong danh mục này.
                  </div>
                )}
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
