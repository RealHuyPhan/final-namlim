import ParallaxHero from "@/components/ui/ParallaxHero";
import { ArrowRight, Leaf, Tractor, Sprout, CheckCircle2, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="w-full">
      <ParallaxHero
        backgroundImage="/images/HomeBG.jpg"
        containerClass="h-[80vh] md:h-[90vh] min-h-[600px] flex flex-col items-center justify-center"
        overlayClass="bg-gradient-to-r from-black/80 via-black/40 to-transparent"
      >
        <div className="relative z-10 w-full max-w-[95%] 2xl:max-w-[1440px] px-6 flex flex-col items-start mt-16 md:mt-24">
          <FadeIn className="flex flex-col max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
              Nấm Lim Xanh <br />
              <span className="text-[#D4A373]">Trường Lâm</span>
            </h1>

            <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 drop-shadow-md">
              Món quà kết tinh từ quy trình nuôi trồng khép kín đạt chuẩn quốc tế, mang lại sức khỏe
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/products" className="flex items-center justify-center gap-2 bg-[#D4A373] text-[#3E1C16] hover:bg-[#c39162] transition-colors duration-300 rounded-full px-8 py-4 text-sm md:text-base font-bold shadow-lg w-full sm:w-auto">
                Khám phá sản phẩm
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white transition-colors duration-300 rounded-full px-8 py-4 text-sm md:text-base font-bold w-full sm:w-auto backdrop-blur-sm">
                Về chúng tôi
              </Link>
            </div>
          </FadeIn>
        </div>
      </ParallaxHero>

      {/* Combined Wrapper for About and Vườn dược liệu Sections */}
      <div className="relative w-full overflow-hidden pb-10">
        {/* Shared Wavy Background Decor */}
        <div className="absolute inset-x-0 bottom-0 top-[120px] md:top-[160px] pointer-events-none z-0 flex flex-col opacity-5 text-primary">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-56 shrink-0">
            <path fill="currentColor" d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"></path>
          </svg>
          <div className="w-full grow bg-current"></div>
        </div>

        {/* About Section */}
        <section className="relative w-full pt-20 md:pt-32 pb-10 md:pb-16 px-4 flex justify-center z-10">
          <div className="w-full max-w-[95%] 2xl:max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Column - Image Collage */}
            <FadeIn direction="right" className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
              {/* Main Large Image */}
              <div className="absolute top-0 right-4 sm:right-10 md:right-20 w-[75%] sm:w-[70%] h-[80%] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-black/5">
                <Image src="/images/BoxGift.jpg" alt="Vườn dược liệu Nấm Lim Xanh" fill sizes="100vw" className="object-cover" />
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute bottom-0 left-0 w-[60%] sm:w-[55%] h-[55%] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white bg-black/5 z-10">
                <Image src="/images/HomeBG.jpg" alt="Thu hoạch Nấm Lim Xanh" fill sizes="100vw" className="object-cover" />
              </div>

              {/* Floating Badge */}

            </FadeIn>

            {/* Right Column - Content */}
            <FadeIn direction="left" delay={0.2} className="flex flex-col items-start w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#D4A373]"></div>
                <span className="text-[#D4A373] uppercase tracking-widest text-sm font-bold">
                  VỀ NẤM LIM XANH TRƯỜNG LÂM
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#3E1C16] leading-[1.15] tracking-tight mb-6">
                Tinh hoa Nấm Lim Xanh <br />
                <span className="text-[#D4A373]">Trường Lâm</span>
              </h2>

              <div className="text-foreground/70 text-base md:text-lg leading-relaxed mb-8 space-y-4 text-justify">
                <p>
                  Sản phẩm là kết quả của nhiều năm nghiên cứu chuyên sâu trên nền tảng khoa học, đề tài cấp Bộ của Bộ Nông nghiệp và Phát triển nông thôn phát triển nguồn gen nấm lim xanh.
                </p>
                <p>
                  Được nuôi trồng tại Vườn Dược Liệu Hợp Tác Xã Hải Nam, sản phẩm là sự kết hợp hài hòa giữa di sản tri thức thảo dược truyền thống và công nghệ sinh học hiện đại.
                </p>
              </div>

              {/* Checklist */}
              <div className="flex flex-col gap-4 mb-10 w-full">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A373] shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Quy trình nuôi trồng kiểm soát khép kín đạt tiêu chuẩn HACCP.</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A373] shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Sự kết hợp hoàn hảo giữa công nghệ sinh học và di sản y học.</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A373] shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Chất lượng vàng ổn định từ nguồn giống gốc đến thành phẩm.</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
                <Link href="/products" className="flex items-center justify-center gap-2 bg-[#3E1C16] text-white hover:bg-[#D4A373] transition-colors duration-300 rounded-full px-8 py-4 text-base font-bold shadow-md hover:shadow-lg w-full sm:w-auto">
                  Xem sản phẩm
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#3E1C16] hover:text-[#D4A373] font-bold flex items-center justify-center gap-2 transition-colors text-sm underline underline-offset-4 w-full sm:w-auto text-center">
                  Tải sổ tay HACCP, GMP & GHP (PDF)
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Mô hình vườn dược liệu Section */}
        <section className="relative w-full py-16 md:py-24 px-4 flex justify-center z-10">
          <div className="w-full max-w-[95%] 2xl:max-w-[1440px] flex flex-col gap-10 lg:gap-12">
            {/* Title */}
            <div className="flex flex-col items-center text-center">
              <div className="w-fit border border-[#D4A373]/40 text-[#D4A373] uppercase tracking-widest text-[11px] font-bold px-4 py-1.5 rounded-full mb-4 bg-background/50 backdrop-blur-sm">
                Vườn Dược Liệu Hải Nam
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E1C16]">
                Mô Hình Trồng Nấm Khép Kín
              </h2>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 w-full lg:h-[480px]">
              {/* Item 1 - Large Left */}
              <Link href="/blog/quy-trinh-san-xuat-khep-kin" className="block relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[350px] lg:min-h-0 border-2 border-white/20 bg-black/10">
                <Image src="/images/BoxGift.jpg" alt="Kỹ thuật Trồng Nấm Khép Kín" fill sizes="100vw" className="object-cover transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Quy trình sản xuất nấm khép kín
                  </h3>
                  <p className="text-white/90 text-sm md:text-base line-clamp-2 md:line-clamp-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Từ phôi giống đến thành phẩm: Khám phá quy trình nuôi trồng nghiêm ngặt đạt chuẩn HACCP, đảm bảo giữ nguyên hàm lượng dược chất quý giá.
                  </p>
                </div>
              </Link>

              {/* Item 2 - Middle Top */}
              <Link href="/blog/nam-nuoi-trong-va-tu-nhien" className="block relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group lg:col-span-1 lg:row-span-1 min-h-[250px] lg:min-h-0 border-2 border-white/20 bg-black/10">
                <Image src="/images/BoxGift.jpg" alt="Bảo Tồn Nguồn Gen Quý" fill sizes="100vw" className="object-cover transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 md:p-6">
                  <h3 className="text-white text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Nấm nuôi trồng & tự nhiên
                  </h3>
                  <p className="text-white/90 text-sm line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Khác nhau như thế nào? Tìm hiểu sự khác biệt về dược tính, hình thái và môi trường phát triển của hai loại nấm.
                  </p>
                </div>
              </Link>

              {/* Item 3 - Middle Bottom */}
              <Link href="/blog/say-lanh-va-say-nhiet" className="block relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group lg:col-span-1 lg:row-span-1 lg:col-start-3 lg:row-start-2 min-h-[250px] lg:min-h-0 border-2 border-white/20 bg-black/10">
                <Image src="/images/BoxGift.jpg" alt="Thu Hoạch Hữu Cơ" fill sizes="100vw" className="object-cover transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 md:p-6">
                  <h3 className="text-white text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Sấy lạnh hay sấy nhiệt?
                  </h3>
                  <p className="text-white/90 text-sm line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Phương pháp nào bảo toàn dược chất tốt hơn? Phân tích công nghệ chế biến sau thu hoạch giúp giữ lại tối đa dưỡng chất.
                  </p>
                </div>
              </Link>

              {/* Item 4 - Tall Right */}
              <Link href="/blog/quoc-bao-duoc-lieu" className="block relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group md:col-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-1 min-h-[400px] lg:min-h-0 border-2 border-white/20 bg-black/10">
                <Image src="/images/BoxGift.jpg" alt="Môi Trường Sinh Thái" fill sizes="100vw" className="object-cover transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 md:p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    &quot;Quốc bảo dược liệu&quot; Việt Nam
                  </h3>
                  <p className="text-white/90 text-sm md:text-base line-clamp-3 md:line-clamp-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Tại sao nấm lim xanh xứng đáng trở thành &quot;quốc bảo dược liệu&quot;? Khám phá giá trị y học to lớn và hành trình đưa nấm lim xanh Việt Nam vươn tầm quốc tế.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Lợi Ích Của Nấm Section */}
      <section className="w-full py-20 md:py-32 px-4 bg-white flex flex-col items-center overflow-hidden">
        <FadeIn className="w-full max-w-[90%] flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="w-fit border border-primary/40 text-primary uppercase tracking-widest text-[11px] font-bold px-4 py-1.5 rounded-full mb-4 bg-background/50 backdrop-blur-sm">
            Công dụng tuyệt vời
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Công dụng của Nấm Lim Xanh
          </h2>
        </FadeIn>

        <div className="w-full max-w-[90%] grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <FadeIn direction="right" className="flex flex-col gap-10 md:gap-16 order-2 lg:order-1">
            {[
              { title: "Hỗ trợ điều trị ung thư", desc: "Hoạt chất Triterpenes giúp cô lập và ngăn ngừa sự phát triển của tế bào ung thư." },
              { title: "Tăng cường hệ miễn dịch", desc: "Kích thích cơ thể sản sinh kháng thể, chống lại vi khuẩn và virus gây bệnh." },
              { title: "Giải độc & Bảo vệ gan", desc: "Giảm gánh nặng cho gan, hỗ trợ điều trị viêm gan, xơ gan và gan nhiễm mỡ." },
              { title: "Ổn định huyết áp", desc: "Điều hòa huyết áp, tăng cường tuần hoàn máu và bảo vệ hệ tim mạch." },
            ].map((item, index) => {
              const translateClass = index === 0 || index === 3 ? "lg:translate-x-8" : "lg:-translate-x-4";
              return (
                <div key={index} className={`flex flex-col items-center lg:items-end text-center lg:text-right group cursor-default transition-transform duration-500 hover:scale-105 ${translateClass}`}>
                  <div className="flex flex-col lg:flex-row items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                      {item.title}
                    </h3>
                    {/* Decorative wavy line for desktop */}
                    <svg className="hidden lg:block w-8 h-8 text-primary opacity-30 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12c-2.66 0-2.66-4-5.33-4-2.66 0-2.66 4-5.33 4-2.66 0-2.66-4-5.33-4-2.66 0-2.66 4-5.33 4z"></path>
                    </svg>
                  </div>
                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </FadeIn>

          {/* Center Image */}
          <FadeIn direction="up" delay={0.2} className="relative w-full max-w-[300px] md:max-w-[400px] aspect-square mx-auto order-1 lg:order-2 rounded-full overflow-hidden shadow-2xl border-[8px] border-white z-10 bg-black/5">
            <Image src="/images/BenefitReishi.jpg" alt="Lợi ích nấm lim xanh" fill sizes="100vw" className="object-cover hover:scale-105 transition-transform duration-700" />
          </FadeIn>

          {/* Right Column */}
          <FadeIn direction="left" delay={0.4} className="flex flex-col gap-10 md:gap-16 order-3 lg:order-3">
            {[
              { title: "Giảm mỡ máu", desc: "Triệt tiêu lượng cholesterol thừa, ngăn ngừa xơ vữa động mạch hiệu quả." },
              { title: "Kiểm soát đường huyết", desc: "Cân bằng lượng đường trong máu, rất tốt cho bệnh nhân tiểu đường." },
              { title: "Chống lão hóa", desc: "Chứa nhiều chất chống oxy hóa mạnh giúp làm chậm quá trình lão hóa da và cơ thể." },
              { title: "Cải thiện giấc ngủ", desc: "Làm dịu hệ thần kinh, giảm căng thẳng mệt mỏi, mang lại giấc ngủ sâu và ngon hơn." },
            ].map((item, index) => {
              const translateClass = index === 0 || index === 3 ? "lg:-translate-x-8" : "lg:translate-x-4";
              return (
                <div key={index} className={`flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default transition-transform duration-500 hover:scale-105 ${translateClass}`}>
                  <div className="flex flex-col lg:flex-row-reverse items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                      {item.title}
                    </h3>
                    {/* Decorative wavy line for desktop */}
                    <svg className="hidden lg:block w-8 h-8 text-primary opacity-30 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12c2.66 0 2.66-4 5.33-4 2.66 0 2.66 4 5.33 4 2.66 0 2.66-4 5.33-4 2.66 0 2.66 4 5.33 4z"></path>
                    </svg>
                  </div>
                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </FadeIn>
        </div>
      </section>

      {/* Nấm và Chế phẩm Section */}
      <section className="w-full py-16 md:py-20 px-4 bg-white flex flex-col items-center overflow-hidden">
        <FadeIn className="w-full max-w-[95%] 2xl:max-w-[1440px] mb-10 flex flex-col items-center text-center">
          <div className="w-fit border border-[#D4A373]/40 text-[#D4A373] uppercase tracking-widest text-[11px] font-bold px-4 py-1.5 rounded-full mb-4 bg-background/50 backdrop-blur-sm">
            Nấm và Chế phẩm
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E1C16]">
            Sản Phẩm Của Chúng Tôi
          </h2>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.1} className="flex items-center gap-2 md:gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide max-w-[95%] 2xl:max-w-[1440px] w-full justify-start md:justify-center">
          {["Tất cả", "Nấm Nguyên Tai", "Nấm Thái Lát", "Chế Phẩm Khác"].map((tab, index) => (
            <button
              key={index}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-colors border ${index === 0
                ? "bg-[#3E1C16] text-white border-[#3E1C16]"
                : "bg-white text-foreground hover:bg-[#D4A373]/10 border-black/10"
                }`}
            >
              {tab}
            </button>
          ))}
        </FadeIn>

        {/* Product Grid */}
        <FadeIn delay={0.2} className="w-full max-w-[95%] 2xl:max-w-[1440px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {[
            { tag: "Nổi bật", cat: "Nấm Khúc", title: "Nấm Lim Xanh Nguyên Tai", img: "/images/BoxGift.jpg" },
            { tag: "Bán chạy", cat: "Thái Lát", title: "Nấm Lim Xanh Thái Lát", img: "/images/BoxGift.jpg" },
            { tag: "Mới", cat: "Chế Phẩm", title: "Trà Túi Lọc Nấm Lim Xanh", img: "/images/BoxGift.jpg" },
            { tag: "Cao cấp", cat: "Chế Phẩm", title: "Bào Tử Nấm Lim Xanh", img: "/images/BoxGift.jpg" },
          ].map((item, index) => (
            <Link href="#" key={index} className="flex flex-col group">
              {/* Image Container */}
              <div className="relative w-full aspect-square bg-[#F7F7F7] rounded-3xl overflow-hidden mb-4 border border-black/5">
                <div className="absolute top-4 left-4 bg-white text-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm z-10">
                  {item.tag}
                </div>
                <Image src={item.img} alt={item.title} fill sizes="100vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Text Info */}
              <div className="flex flex-col px-2">
                <span className="text-foreground/50 text-xs font-medium uppercase tracking-wider mb-1.5">
                  {item.cat}
                </span>
                <h3 className="text-foreground font-bold text-lg md:text-xl leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </FadeIn>
      </section>



      {/* FAQ Section */}
      <section className="w-full py-20 md:py-32 bg-primary/5 flex flex-col items-center">
        <div className="w-full max-w-[800px] flex flex-col items-center px-4">
          <FadeIn className="flex flex-col items-center w-full">
            <h2 className="text-3xl md:text-5xl font-bold  mb-4 text-center">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-foreground/70 text-center mb-12 md:mb-16 text-sm md:text-base">
              Giải đáp những thắc mắc phổ biến về nấm lim xanh và sản phẩm Trường Lâm.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="w-full flex flex-col gap-2 mb-12">
            {[
              {
                q: "Nấm lim xanh sử dụng thế nào để đạt hiệu quả tốt nhất?",
                a: "Cách tốt nhất là thái lát nấm lim xanh, sau đó sắc lấy nước uống hằng ngày (khoảng 10-20g nấm với 2 lít nước sắc cạn còn 1.5 lít). Nên uống trước bữa ăn 30 phút. Có thể hãm như trà uống trong ngày.",
                open: true
              },
              {
                q: "Người bình thường không có bệnh có dùng được không?",
                a: "Hoàn toàn được. Người bình thường sử dụng nấm lim xanh giúp tăng cường hệ miễn dịch, làm mát gan, giải độc cơ thể, chống lão hóa và ngăn ngừa bệnh tật vô cùng hiệu quả."
              },
              {
                q: "Trường Lâm bảo quản nấm lim xanh như thế nào?",
                a: "Nấm lim xanh tại Trường Lâm được sấy khô bằng công nghệ hiện đại, đóng gói trong túi chân không và hộp kín để chống ẩm mốc, giữ nguyên vẹn dược tính trong thời gian dài."
              }
            ].map((faq, index) => (
              <details key={index} className="group border-b border-black/10 pb-2" open={faq.open}>
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden py-4 text-lg md:text-xl text-foreground hover:text-primary transition-colors">
                  <span className="pr-4">{faq.q}</span>
                  <span className="relative h-6 w-6 shrink-0 text-primary">
                    {/* Plus Icon (shown when closed) */}
                    <svg className="absolute inset-0 h-6 w-6 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    {/* Minus Icon (shown when open) */}
                    <svg className="absolute inset-0 h-6 w-6 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>
                  </span>
                </summary>
                <div className="text-foreground/70 pb-6 leading-relaxed text-sm md:text-base mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <Link href="/faq" className="inline-block border border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-widest text-sm font-bold px-8 py-3.5 rounded-md transition-colors duration-300 shadow-sm">
              Xem thêm các câu hỏi thường gặp
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
