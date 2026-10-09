🎯 Typing Shooter - Game Học Tiếng Anh Thực Chiến

Typing Shooter là một ứng dụng web học tiếng anh tương tác kết hợp giữa lối chơi bắn súng gõ phím (typing shooter) và các bài học từ vựng, đoạn câu giao tiếp, lý thuyết ngữ pháp tiếng Anh.

Dự án được tối ưu hóa để chạy trực tiếp trên GitHub Pages thông qua thư mục /docs.

🚀 Tính Năng Chính

1. ⚔️ Game Gõ Phím Bắn Từ Vựng & Cụm Câu

Gõ từ vựng: Xuất hiện các từ tiếng Anh di chuyển trên màn hình kèm nghĩa Tiếng Việt và chữ cái gợi ý xáo trộn. Người chơi nhập chính xác các ký tự để kích hoạt súng bắn hạ mục tiêu.

Gõ câu giao tiếp: Luyện phản xạ ghép câu và gõ cả câu tiếng Anh hoàn chỉnh theo ngữ cảnh.

Hệ thống âm thanh phát âm: Tích hợp công nghệ Text-to-Speech tự động phát âm chuẩn Anh - Mỹ mỗi khi bắn hạ thành công một từ/câu.

2. 📚 Học Từ Mới Theo Chủ Đề (Flashcard & Audio)

Xem danh sách từ vựng được phân loại theo chủ đề (Giáo dục, Thiên nhiên, Tính cách, Thực phẩm,...).

Cung cấp đầy đủ Phiên âm IPA, Từ loại, Nghĩa Tiếng Việt và Nút nghe phát âm chuẩn.

Hỗ trợ học thuộc trước khi bắt đầu lượt chơi thực chiến.

3. 📘 Học Lý Thuyết & Làm Bài Tập Các Thì (Grammar)

Tóm tắt lý thuyết chi tiết các thì cơ bản (Hiện tại đơn, Hiện tại tiếp diễn, Quá khứ đơn,...).

Cung cấp khái niệm, công thức chuẩn và các dấu hiệu nhận biết.

Hệ thống bài tập trắc nghiệm củng cố kiến thức ngay sau mỗi thì kèm giải thích đáp án chi tiết.

📂 Cấu Trúc Thư Mục Dự Án

Cấu trúc dự án được tổ chức gọn gàng trong thư mục docs/ để hỗ trợ xuất bản trực tiếp qua GitHub Pages:

.
├── docs/                   # Thư mục chứa mã nguồn chạy web chính (GitHub Pages)
│   ├── css/
│   │   └── style.css       # Toàn bộ giao diện, hiệu ứng & giao diện card/thì
│   ├── js/
│   │   ├── data.js         # Dữ liệu từ vựng, câu giao tiếp, lý thuyết & bài tập
│   │   └── script.js       # Logic xử lý game Canvas, gõ phím, bài tập & phát âm
│   └── index.html          # File HTML cấu trúc giao diện chính
│
└── README.md               # Tài liệu hướng dẫn và giới thiệu dự án


🛠️ Công Nghệ Sử Dụng

HTML5 & CSS3: Thiết kế giao diện hiện đại với hiệu ứng Arcade Game, hỗ trợ Grid/Flexbox và tùy biến Responsive.

JavaScript (ES6+): Xử lý logic tương tác, xử lý chuỗi nhập từ bàn phím, tính toán tọa độ bắn đạn.

HTML5 Canvas API: Dựng hình ảnh con tàu/khẩu súng, di chuyển kẻ thù, đạn và các hiệu ứng trực quan trong game.

Web Speech API: Hỗ trợ phát âm chuẩn tiếng Anh mà không cần thư viện bên ngoài.
