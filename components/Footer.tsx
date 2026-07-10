import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#4A1612] text-[#F3E5D8] pt-16 pb-8 border-t-[8px] border-secondary-500 px-6 flex justify-center">
      <div className="w-full max-w-[95%] 2xl:max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl font-bold text-white mb-6">
              Trường Lâm
            </h2>
            <p className="text-sm opacity-90 leading-relaxed font-light">
              Nấm Lim Xanh Trường Lâm - Mang đến giải pháp
              sức khỏe toàn diện cho cộng đồng.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-500 hover:text-primary-900 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-500 hover:text-primary-900 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:flex lg:justify-center">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                Liên Kết
              </h3>
            <ul className="space-y-3 font-light">
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary-400 transition-colors inline-block"
                >
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary-400 transition-colors inline-block"
                >
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="hover:text-secondary-400 transition-colors inline-block"
                >
                  Sản Phẩm
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge"
                  className="hover:text-secondary-400 transition-colors inline-block"
                >
                  Kiến Thức
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary-400 transition-colors inline-block"
                >
                  Liên Hệ
                </Link>
              </li>
            </ul>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-2 lg:flex lg:justify-end">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                Thông Tin Liên Hệ
              </h3>
              <div className="space-y-4 font-light">
                <p className="font-bold text-secondary-400">
                  HTX Thương mại và Dịch vụ Hải Nam
                </p>
                <p className="text-sm opacity-80 mb-4">
                  GPKD / MST: 0109756450
                </p>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 text-secondary-500 mt-1" />
                  <div>
                    <p>Trụ sở: Đội 1, thôn Võng La, xã Thiên Lộc, Đông Anh, Hà Nội</p>
                    <p className="text-sm text-white/70 mt-1">Vùng nguyên liệu: Xã Phúc Thịnh, Đông Anh, Hà Nội</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0 text-secondary-500" />
                  <p>+84 943 363 363 (Mr Lê Văn Hợp)</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0 text-secondary-500" />
                  <p>hophit90@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light opacity-80">
          <p>
            © {new Date().getFullYear()} Nấm Lim Xanh Trường Lâm. Bảo lưu mọi
            quyền.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Điều khoản dịch vụ
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
