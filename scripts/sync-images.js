const fs = require('fs/promises');
const path = require('path');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const BACKUP_IMAGES_DIR = path.join(process.cwd(), '_uploaded_backup');
const PRODUCTS_JSON_PATH = path.join(process.cwd(), 'data', 'products.json');
const BLOG_TS_PATH = path.join(process.cwd(), 'data', 'blog.ts');

async function ensureBackupDir() {
  try {
    await fs.access(BACKUP_IMAGES_DIR);
  } catch {
    await fs.mkdir(BACKUP_IMAGES_DIR, { recursive: true });
  }
}

async function uploadToCloudinary(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'final-namlim',
    });
    return result.secure_url;
  } catch (error) {
    console.error(`❌ Lỗi khi upload ${path.basename(filePath)}:`, error.message);
    return null;
  }
}

async function processFile(filePath) {
  try {
    // Check if the target data file exists
    try {
      await fs.access(filePath);
    } catch {
      console.log(`⚠️ Bỏ qua: Không tìm thấy file ${path.basename(filePath)}`);
      return;
    }

    let content = await fs.readFile(filePath, 'utf8');
    
    // Tìm tất cả các đường dẫn ảnh dạng "/images/ten-file.jpg"
    const regex = /\/images\/([^"'\s]+)/g;
    
    let matches;
    let modified = false;
    const replacements = [];
    
    while ((matches = regex.exec(content)) !== null) {
      replacements.push(matches[0]); // matches[0] is "/images/filename.jpg"
    }

    const uniqueReplacements = [...new Set(replacements)];

    for (const match of uniqueReplacements) {
      const localImagePath = path.join(process.cwd(), 'public', match);
      
      // Kiểm tra xem ảnh thực tế có tồn tại trong thư mục public/images không
      try {
        await fs.access(localImagePath);
      } catch {
        // Ảnh không có ở local (có thể đã xoá, bỏ qua)
        continue;
      }

      console.log(`⏳ Đang upload ${match}...`);
      const secureUrl = await uploadToCloudinary(localImagePath);
      
      if (secureUrl) {
        console.log(`✅ Thành công: ${secureUrl}`);
        // Thay thế tất cả các chuỗi giống nhau trong file
        content = content.split(match).join(secureUrl);
        modified = true;
        
        // Di chuyển ảnh đã upload vào thư mục backup để giải phóng public/images
        const filename = path.basename(localImagePath);
        const backupPath = path.join(BACKUP_IMAGES_DIR, filename);
        
        try {
          await fs.rename(localImagePath, backupPath);
          console.log(`📦 Đã dọn dẹp file cũ vào: _uploaded_backup/${filename}`);
        } catch (renameErr) {
          console.error(`⚠️ Không thể di chuyển ${filename}: ${renameErr.message}`);
        }
      }
    }

    if (modified) {
      await fs.writeFile(filePath, content, 'utf8');
      console.log(`📝 Đã cập nhật xong file ${path.basename(filePath)}\n`);
    } else {
      console.log(`✨ Không có ảnh cục bộ mới nào trong ${path.basename(filePath)}\n`);
    }

  } catch (error) {
    console.error(`❌ Lỗi khi xử lý ${path.basename(filePath)}:`, error);
  }
}

async function main() {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error("❌ THIẾU THÔNG TIN BẢO MẬT!");
    console.error("Vui lòng đảm bảo bạn đã tạo file .env.local và điền đủ 3 biến môi trường của Cloudinary.");
    process.exit(1);
  }

  console.log("=========================================");
  console.log("🚀 BẮT ĐẦU ĐỒNG BỘ ẢNH LÊN CLOUDINARY");
  console.log("=========================================\n");

  await ensureBackupDir();

  await processFile(PRODUCTS_JSON_PATH);
  await processFile(BLOG_TS_PATH);

  console.log("=========================================");
  console.log("🎉 ĐÃ HOÀN TẤT ĐỒNG BỘ!");
  console.log("=========================================");
}

main();
