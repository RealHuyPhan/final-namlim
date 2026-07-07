"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Heart, Activity, FileText, PhoneCall, MessageCircle, ArrowRight } from "lucide-react";
import productsData from "@/data/products.json";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const product = productsData.products.find(p => p.id === productId);

  const otherProducts = productsData.products.filter(p => p.id !== productId);
  const gallery = product ? [product.image, "/images/HomeBG.jpg", product.image, "/images/HomeBG.jpg"] : [];
  const [activeTab, setActiveTab] = useState("loi-ich");
  const [mainImage, setMainImage] = useState(gallery[0]);

  if (!product) {
    return (
      <div className="w-full min-h-[50vh] flex flex-col items-center justify-center bg-[#FAFAFA]">
        <h1 className="text-3xl font-bold text-[#3E1C16]">Không tìm thấy sản phẩm</h1>
        <Link href="/products" className="mt-4 text-[#D4A373] hover:underline">Quay lại danh sách</Link>
      </div>
    );
  }

  // Lấy text hiển thị category ngắn (ví dụ NGUYÊN TAI)
  const shortCategory = product.category.split(" ").slice(-2).join(" ");

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen flex flex-col items-center">
      {/* Top Bar */}
      <div className="w-full max-w-[95%] 2xl:max-w-[1440px] flex items-center justify-between py-6 md:py-10 px-4 border-b border-black/5 mt-[80px] md:mt-[100px]">
        <Link href="/products" className="flex items-center gap-2 text-[#3E1C16] font-bold text-sm tracking-widest hover:text-[#D4A373] transition-colors uppercase">
          <ArrowLeft className="w-4 h-4" /> QUAY LẠI
        </Link>
        <div className="hidden md:flex items-center gap-2 text-sm text-foreground/50">
          <Link href="/" className="hover:text-[#3E1C16] transition-colors">Trang chủ</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#3E1C16] transition-colors">Sản phẩm</Link>
          <span>/</span>
          <span className="text-[#3E1C16] font-medium">{product.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[95%] 2xl:max-w-[1440px] flex flex-col lg:flex-row gap-10 lg:gap-16 py-10 md:py-16 px-4">
        
        {/* Left Column - Image */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[32px] overflow-hidden shadow-2xl bg-black/5 border-4 border-white">
            <div className="absolute top-6 left-6 bg-[#3E1C16] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md z-10">
              {product.tag}
            </div>
            <Image 
              src={mainImage} 
              alt={product.title} 
              fill 
              className="object-cover" 
            />
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3 md:gap-4">
            {gallery.map((img, idx) => {
              const isActive = mainImage === img;
              return (
                <button 
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 ${isActive ? "border-[#D4A373] shadow-md opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <Image src={img} alt={`${product.title} - thumbnail ${idx + 1}`} fill className="object-cover" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column - Info */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="text-[#D4A373] text-xs font-bold uppercase tracking-widest mb-3">
            {shortCategory}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E1C16] mb-6 leading-tight">
            {product.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#3E1C16]">Giá sản phẩm:</span>
              <span className="text-[#D4A373] font-bold">Liên hệ tư vấn</span>
            </div>
            <span className="hidden sm:block text-black/20">|</span>
            <div className="text-foreground/60 italic">
              {product.packing}
            </div>
          </div>

          <p className="text-foreground/70 leading-relaxed mb-10 text-sm md:text-base text-justify">
            Nấm lim xanh khô nguyên tai của Trường Lâm được sản xuất tại Vườn dược liệu Hợp tác xã Hải Nam (xã Phúc Thịnh, Đông Anh, Hà Nội). Sản phẩm là kết quả nghiên cứu chuyên sâu dựa trên đề tài khoa học cấp Bộ về phục tráng và phát triển nguồn gen nấm lim xanh bản địa do ông Lê Hợp chủ trì. Nấm được nuôi trồng khép kín mô phỏng sinh cảnh tự nhiên trong nhà màng kiểm soát khí hậu tự động. Sau khi thu hoạch thủ công vào đúng độ chín sinh lý khi hàm lượng hoạt chất đạt đỉnh, nấm được sơ chế tỉ mỉ và sấy khô bằng công nghệ sấy ở nhiệt độ thấp, giúp loại bỏ hoàn toàn tạp chất và vi sinh vật nhưng bảo toàn nguyên vẹn cấu trúc dược tính quý giá.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-6 md:gap-10 border-b border-black/10 mb-8">
            <button 
              onClick={() => setActiveTab("loi-ich")}
              className={`pb-4 text-sm font-bold tracking-widest uppercase flex items-center gap-2 transition-colors relative ${activeTab === "loi-ich" ? "text-[#3E1C16]" : "text-foreground/40 hover:text-[#3E1C16]/70"}`}
            >
              <Heart className="w-4 h-4" /> LỢI ÍCH NỔI BẬT
              {activeTab === "loi-ich" && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3E1C16]"></div>}
            </button>
            <button 
              onClick={() => setActiveTab("huong-dan")}
              className={`pb-4 text-sm font-bold tracking-widest uppercase flex items-center gap-2 transition-colors relative ${activeTab === "huong-dan" ? "text-[#3E1C16]" : "text-foreground/40 hover:text-[#3E1C16]/70"}`}
            >
              <Activity className="w-4 h-4" /> HƯỚNG DẪN SỬ DỤNG
              {activeTab === "huong-dan" && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3E1C16]"></div>}
            </button>
            <button 
              onClick={() => setActiveTab("thong-so")}
              className={`pb-4 text-sm font-bold tracking-widest uppercase flex items-center gap-2 transition-colors relative ${activeTab === "thong-so" ? "text-[#3E1C16]" : "text-foreground/40 hover:text-[#3E1C16]/70"}`}
            >
              <FileText className="w-4 h-4" /> THÔNG SỐ KỸ THUẬT
              {activeTab === "thong-so" && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3E1C16]"></div>}
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5">
            {activeTab === "loi-ich" && (
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A373] shrink-0 mt-0.5" />
                  <span className="text-foreground/70 leading-relaxed text-sm md:text-base">
                    Duy trì hàm lượng hoạt chất tối ưu (Adenosine, Beta-glucan, Ganoderic acid, Triterpenoid) tương đương nấm tự nhiên.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A373] shrink-0 mt-0.5" />
                  <span className="text-foreground/70 leading-relaxed text-sm md:text-base">
                    Hỗ trợ tăng cường sức đề kháng và nâng cao hệ miễn dịch tự nhiên của cơ thể.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A373] shrink-0 mt-0.5" />
                  <span className="text-foreground/70 leading-relaxed text-sm md:text-base">
                    Hỗ trợ giải độc gan, tăng cường chức năng gan và hỗ trợ điều hòa huyết áp ổn định.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A373] shrink-0 mt-0.5" />
                  <span className="text-foreground/70 leading-relaxed text-sm md:text-base">
                    Sản phẩm thuần tự nhiên, không sử dụng chất bảo quản hay chất kích thích tăng trưởng.
                  </span>
                </li>
              </ul>
            )}
            
            {activeTab === "huong-dan" && (
              <div className="text-foreground/70 leading-relaxed text-sm md:text-base">
                <p className="mb-4"><strong className="text-[#3E1C16]">Cách dùng:</strong> Thái lát mỏng khoảng 10-20g nấm lim xanh, đun sôi với 2 lít nước trong khoảng 30 phút, để nguội và uống thay nước lọc hằng ngày.</p>
                <p><strong className="text-[#3E1C16]">Lưu ý:</strong> Không dùng cho phụ nữ có thai và đang cho con bú. Người có huyết áp thấp nên sử dụng liều lượng nhỏ trong thời gian đầu.</p>
              </div>
            )}

            {activeTab === "thong-so" && (
              <div className="text-foreground/70 leading-relaxed text-sm md:text-base">
                <ul className="flex flex-col gap-3">
                  <li><strong className="text-[#3E1C16]">Thành phần:</strong> 100% Nấm lim xanh nguyên tai sấy khô.</li>
                  <li><strong className="text-[#3E1C16]">Độ ẩm:</strong> &lt; 12%</li>
                  <li><strong className="text-[#3E1C16]">Hạn sử dụng:</strong> 24 tháng kể từ ngày sản xuất.</li>
                  <li><strong className="text-[#3E1C16]">Bảo quản:</strong> Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Đậy kín sau khi sử dụng.</li>
                </ul>
              </div>
            )}
          </div>

          {/* CTA Banner */}
          <div className="mt-8 bg-[#3E1C16] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex flex-col gap-1 text-center md:text-left">
              <span className="text-[#D4A373] text-xs font-bold uppercase tracking-widest">ĐẶT MUA</span>
              <h4 className="text-white text-xl md:text-2xl font-bold">Nhận Báo Giá & Tư Vấn</h4>
              <span className="text-white/60 text-xs mt-1">Chuyên viên hỗ trợ trực tuyến 24/7</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link href="tel:0123456789" className="flex items-center justify-center gap-2 bg-[#D4A373] hover:bg-[#c39162] text-[#3E1C16] px-6 py-3 rounded-lg font-bold text-sm transition-colors whitespace-nowrap">
                <PhoneCall className="w-4 h-4" /> GỌI NGAY
              </Link>
              <Link href="#" className="flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors whitespace-nowrap">
                <MessageCircle className="w-4 h-4 text-[#0068FF]" /> TƯ VẤN ZALO
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Related Products Section */}
      <div className="w-full max-w-[95%] 2xl:max-w-[1440px] px-4 py-16 mt-8 border-t border-black/5 flex flex-col">
        <div className="mb-10">
          <span className="text-[#D4A373] text-xs font-bold uppercase tracking-widest mb-2 block">
            BỘ SƯU TẬP KHÁC
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E1C16]">Sản Phẩm & Chế Phẩm Khác</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {otherProducts.map((item, index) => {
            const shortCat = item.category.split(" ").slice(-2).join(" ");
            
            return (
              <Link href={`/products/${item.id}`} key={index} className="flex flex-col group cursor-pointer h-full bg-white p-5 md:p-6 rounded-[32px] shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300">
                {/* Image Container */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5 bg-black/5">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-grow px-1">
                  <span className="text-[#D4A373] text-[10px] font-bold uppercase tracking-widest mb-2">
                    {shortCat}
                  </span>
                  <h4 className="text-[#3E1C16] font-bold text-lg md:text-xl leading-snug mb-3 group-hover:text-[#D4A373] transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-foreground/50 text-xs md:text-sm leading-relaxed mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Footer / Meta */}
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-[#D4A373] text-[10px] font-bold uppercase tracking-widest">
                      LIÊN HỆ TƯ VẤN
                    </span>
                    <span className="flex items-center gap-1 text-[#3E1C16] text-xs font-bold group-hover:text-[#D4A373] transition-colors whitespace-nowrap">
                      Chi tiết <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
