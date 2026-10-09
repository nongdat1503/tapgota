Markdown
# 🎯 Typing Shooter - Game Luyện Gõ Phím & Học Tiếng Anh A1-B2

**Typing Shooter** là một ứng dụng web dạng game bắn súng gõ phím (Typing Game) tương tác cao, kết hợp giữa việc rèn luyện tốc độ gõ bàn phím và học Tiếng Anh toàn diện (Từ vựng, Câu giao tiếp, Ngữ pháp 12 thì). 

Ứng dụng được thiết kế theo cấu trúc modular gọn nhẹ, tối ưu cho việc triển khai trên **GitHub Pages** và hỗ trợ hiển thị mượt mà trên cả **Máy tính (Desktop)** lẫn **Điện thoại di động (Mobile)**.

---

## 📁 Cấu Trúc Dự Án (Project Structure)

Dự án được phân tách hoàn toàn thành các tệp HTML, CSS và JavaScript riêng biệt nằm trong thư mục `docs/` (hoặc `public/`) để dễ dàng quản lý và cập nhật dữ liệu:

```text
docs/ (hoặc public/)
│
├── css/
│   └── style.css         # Styling giao diện, Responsive CSS cho Mobile & Desktop
│
├── js/
│   ├── data.js            # Kho dữ liệu: 1000 từ vựng, 1000 câu giao tiếp, 12 thì Tiếng Anh
│   └── script.js          # Logic xử lý Game Canvas, vòng lặp game, tính điểm & UI
│
├── index.html             # Cấu trúc giao diện chuẩn Responsive & Bàn phím ảo Mobile
└── README.md              # Tài liệu hướng dẫn dự án
✨ Chức Năng Chính (Key Features)
1. 📚 Chế Độ Học & Luyện Gõ
Từ vựng A1-B2 (1,000 từ): Phân chia theo 20 chủ đề thông dụng (Gia đình, Đồ ăn, Nghề nghiệp, Thời tiết, Cảm xúc, Giao thông, Sức khỏe, Du lịch,...). Đi kèm phiên âm IPA, loại từ và dịch nghĩa Tiếng Việt.

Câu giao tiếp hàng ngày (1,000 câu): Mẫu câu từ A1 đến B2 thực tế (Chào hỏi, Mua sắm, Hỏi đường, Khách sạn, Ý kiến, Xin lỗi/Cảm ơn,...).

Ngữ pháp 12 thì Tiếng Anh:

Công thức chi tiết cho chủ ngữ số ít và số nhiều.

Mẹo nhớ nhanh thần tốc (ví dụ: "Ông Sáu Chạy Xe SH").

Bộ bài tập trắc nghiệm tự động chấm điểm và giải thích đáp án chi tiết cho từng thì.

2. 🎮 Cơ Chế Game (Typing Shooter Mechanics)
Tương tác Canvas linh hoạt: Các mục từ vựng/câu rơi từ trên xuống; người chơi gõ đúng ký tự để bắn hạ target.

Hệ thống điểm & Combo: Tính điểm chính xác, theo dõi chuỗi Combo gõ liên tục và tăng dần cấp độ (Level) theo độ khó.

Tích hợp Audio TTS (Text-to-Speech): Phát âm giọng chuẩn mỗi khi gõ đúng từ vựng.

3. 📱 Tối Ưu Hóa Điện Thoại & Đa Nền Tảng (Responsive)
Thẻ Viewport chuẩn Mobile: Tự động co giãn theo kích thước màn hình, ngăn hiện tượng tự động zoom khi chạm ô gõ phím.

Hỗ trợ Bàn phím Di động: Vô hiệu hóa chế độ tự động sửa (autocorrect) và tự động viết hoa (autocapitalize) để đảm bảo trải nghiệm gõ chính xác.

Nút kích hoạt bàn phím nhanh (⌨️ Bàn Phím): Giúp người dùng di động dễ dàng bật/tắt bàn phím ảo mà không che mất màn hình chơi.

🚀 Hướng Dẫn Cài Đặt & Triển Khai (Deployment)
1. Chạy Cục Bộ (Local)
Tải hoặc git clone repository này về máy.

Mở file docs/index.html (hoặc public/index.html) bằng bất kỳ trình duyệt web nào (Chrome, Firefox, Edge, Safari).

2. Triển Khai Lên GitHub Pages
Đẩy (push) toàn bộ mã nguồn lên repository trên GitHub.

Truy cập vào Settings > Pages trên giao diện GitHub của repository.

Tại mục Build and deployment > Branch: Chọn nhánh main (hoặc master) và chọn thư mục /docs.

Nhấn Save. Trang web sẽ được xuất bản tự động tại đường dẫn https://<your-username>.github.io/<repository-name>/.

🛠️ Công Nghệ Sử Dụng (Tech Stack)
HTML5 / HTML5 Canvas: Dựng khung giao diện & xử lý đồ họa game 2D.

CSS3: Flexbox, Responsive Web Design (Media Queries), Animation.

JavaScript (ES6+ Modular): Xử lý logic game, quản lý state và cấu trúc dữ liệu.
