# My Shadowrocket Modules

Kho lưu trữ module cá nhân cho Shadowrocket (chuẩn `.sgmodule`).

## Cấu trúc thư mục

```text
shadowrocket-modules/
├── modules/
│   └── custom.sgmodule      # File cấu hình module chính
├── scripts/
│   └── handler.js           # Script xử lý HTTP response JSON
└── README.md
```

## Cách sử dụng sau khi upload lên GitHub

1. Đẩy toàn bộ thư mục này lên repository GitHub của bạn.
2. Mở file `modules/custom.sgmodule`, thay `<USERNAME>/<REPO>` bằng tên tài khoản và tên repo GitHub của bạn ở 2 dòng `#!url=` và `script-path=`.
3. Cập nhật `pattern`, `hostname` trong `[MITM]` và logic xử lý JSON trong `scripts/handler.js` theo API bạn cần can thiệp.
4. Copy link **Raw** của `modules/custom.sgmodule`, vào **Shadowrocket → Module → `+`** và dán link vào.
5. Nếu module dùng `[MITM]` hoặc `[Script]`, bật **Settings → HTTPS Decryption** và tin cậy chứng chỉ trong **Cài đặt iOS → Cài đặt chung → Giới thiệu → Cài đặt tin cậy chứng chỉ**.
