import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Tag, ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import FadeIn from "@/components/ui/FadeIn";

export default async function BlogPostPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const post = BLOG_POSTS.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  // Generate contextual content based on title and excerpt if no content field is provided
  const articleContent = post.content || `
    <p class="text-lg md:text-xl font-medium text-[#5C3A21] leading-relaxed mb-8 italic border-l-4 border-[#C67C4E] pl-6 py-2 bg-[#F8F3ED]/50 rounded-r-lg">
      ${post.excerpt}
    </p>
    <h2 class="text-2xl font-bold text-[#3E1C16] mt-10 mb-6">1. Tổng quan vấn đề</h2>
    <p class="text-foreground/80 leading-loose mb-6">
      Chủ đề <strong>"${post.title}"</strong> hiện đang thu hút sự quan tâm lớn từ cả cộng đồng và giới chuyên môn. Trong bối cảnh nhu cầu chăm sóc sức khỏe ngày càng nâng cao, việc hiểu rõ bản chất và áp dụng đúng đắn các kiến thức này đóng vai trò then chốt giúp tối ưu hóa hiệu quả sử dụng.
    </p>
    <p class="text-foreground/80 leading-loose mb-6">
      Các tài liệu nghiên cứu y khoa hiện đại cũng như y học cổ truyền đều nhấn mạnh rằng, việc khai thác đúng cách những giá trị thảo dược mang tính bản địa không chỉ là giải pháp phòng ngừa bệnh tật hiệu quả mà còn mở ra hướng đi bền vững cho ngành dược liệu nước nhà.
    </p>

    <h2 class="text-2xl font-bold text-[#3E1C16] mt-10 mb-6">2. Phân tích chuyên sâu và ứng dụng thực tiễn</h2>
    <p class="text-foreground/80 leading-loose mb-6">
      Dựa trên những đặc điểm chính yếu đã được đề cập, tiềm năng ứng dụng của phương pháp này là vô cùng to lớn. Tuy nhiên, sự khác biệt so với các dòng sản phẩm đại trà nằm ở chỗ: quá trình khai thác, chế biến và sử dụng đòi hỏi sự tỉ mỉ, khắt khe nhằm bảo toàn trọn vẹn cấu trúc của các hoạt chất sinh học quý hiếm.
    </p>
    <p class="text-foreground/80 leading-loose mb-6">
      Cụ thể, sự tham gia của các hợp chất như Beta-glucan, Ganoderic acid hay Triterpenoid đòi hỏi một môi trường chiết xuất lý tưởng (nhiệt độ, thời gian đun sắc) để không bị phân hủy. Các chuyên gia y tế khuyến cáo, người tiêu dùng cần chủ động trang bị kiến thức, ưu tiên lựa chọn các thương hiệu uy tín, có quy trình chuẩn GACP-WHO và minh bạch về nguồn gốc.
    </p>

    <h2 class="text-2xl font-bold text-[#3E1C16] mt-10 mb-6">3. Kết luận</h2>
    <p class="text-foreground/80 leading-loose mb-6">
      Nhìn chung, bài viết đã phác họa bức tranh toàn cảnh về <strong>${post.title.split(':')[0]}</strong>. Việc kết hợp hài hòa giữa tri thức bản địa và công nghệ khoa học hiện đại chính là chìa khóa để bảo vệ sức khỏe toàn diện. Đừng quên tham vấn ý kiến bác sĩ chuyên khoa trước khi áp dụng bất kỳ liệu trình thảo dược nào vào quá trình điều trị chuyên sâu.
    </p>
  `;

  // Get related posts (same category, exclude current)
  const relatedPosts = BLOG_POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <div className="w-full bg-[#FAFAFA] pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="w-full max-w-[95%] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Main Article Content */}
          <article className="flex-1">

            <FadeIn direction="up">
              <Link href="/blog" className="inline-flex items-center gap-2 text-[#8B6E53] hover:text-[#C67C4E] font-medium mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Quay lại danh sách
              </Link>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[#8B6E53] font-medium mb-6">
                <span className="px-4 py-1.5 bg-[#F8F3ED] rounded-full uppercase tracking-wider text-xs">
                  {post.category.replace(/-/g, ' ')}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E1C16] leading-[1.3] mb-8">
                {post.title}
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.1} className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </FadeIn>

            {/* Content Injection */}
            <FadeIn direction="up" delay={0.2}>
              <div
                className="prose prose-lg max-w-none prose-headings:text-[#3E1C16] prose-a:text-[#C67C4E] hover:prose-a:text-[#A66336] prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: articleContent }}
              />
            </FadeIn>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-[#EBE0D3] flex items-center gap-4">
              <span className="font-bold text-[#3E1C16]">Thẻ:</span>
              <div className="flex flex-wrap items-center gap-2">
                {post.tags.map(tag => (
                  <Link key={tag} href={`/blog?tag=${tag}`} className="text-sm text-[#8B6E53] font-medium px-4 py-2 bg-[#F8F3ED] rounded-full hover:bg-[#C67C4E] hover:text-white transition-colors">
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 pt-8 border-t border-[#EBE0D3]">
              <h3 className="text-2xl font-bold text-[#3E1C16] mb-6">Câu Hỏi Thường Gặp</h3>
              <details className="group border border-[#EBE0D3] rounded-xl bg-white overflow-hidden shadow-sm" open>
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none [&::-webkit-details-marker]:hidden p-5 md:p-6 text-lg text-[#3E1C16] hover:text-[#C67C4E] transition-colors bg-[#F8F3ED]/30">
                  <span className="pr-4">{post.title}</span>
                  <span className="relative h-6 w-6 shrink-0 text-[#C67C4E]">
                    <svg className="absolute inset-0 h-6 w-6 opacity-100 group-open:opacity-0 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    <svg className="absolute inset-0 h-6 w-6 opacity-0 group-open:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>
                  </span>
                </summary>
                <div className="p-5 md:p-6 text-foreground/80 leading-relaxed border-t border-[#EBE0D3] bg-white">
                  {post.excerpt} <br/><br/>
                  <em>(Xem chi tiết trong nội dung bài viết phía trên để hiểu rõ hơn về vấn đề này).</em>
                </div>
              </details>
            </div>
          </article>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[350px] shrink-0 space-y-8">

            {/* Related Posts */}
            <FadeIn direction="left" delay={0.1} className="bg-white rounded-[24px] p-8 shadow-sm border border-[#EBE0D3]/50">
              <div className="flex items-center gap-3 mb-8 border-b border-[#EBE0D3] pb-4">
                <div className="w-1.5 h-5 bg-[#5C3A21] rounded-full"></div>
                <h3 className="text-xl font-bold text-[#3E1C16]">Bài viết liên quan</h3>
              </div>

              <div className="flex flex-col gap-6">
                {relatedPosts.map(rp => (
                  <Link key={rp.id} href={`/blog/${rp.id}`} className="group flex gap-4 items-start">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#3E1C16] group-hover:text-[#C67C4E] line-clamp-2 transition-colors leading-tight mb-2">
                        {rp.title}
                      </h4>
                      <span className="text-xs text-[#8B6E53]">{rp.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>

            {/* Popular Topics */}
            <FadeIn direction="left" delay={0.2} className="bg-[#F8F3ED] rounded-[24px] p-8 lg:sticky lg:top-32">
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
                    href={`/blog?tag=${tag}`}
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
    </div>
  );
}
