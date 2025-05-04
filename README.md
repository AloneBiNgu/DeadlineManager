Document

# 📚 Deadline Manager - README (Tiếng Việt)

---

## 🏠 Giới thiệu

**Deadline Manager** là một ứng dụng quản lý deadline nhẹ, được xây dựng trên nền Electron.
Ứng dụng lưu trữ dữ liệu cục bộ bằng SQLite, có giao diện thân thiện và hỗ trợ sắp xếp, nhắc nhở linh hoạt.

---

## 🚀 Cài đặt

1. **Clone repository:**

```bash
git clone https://github.com/AloneBiNgu/DeadlineManager.git
cd DeadlineManager
```

2. **Cài đặt dependencies:**

```bash
npm install
```

3. **Chạy chế độ phát triển:**

```bash
npm run start
```

4. **Build bản phát hành:**

```bash
npm run make
```

5. **Dọn sạch trước khi build:**

```bash
npm run clean
```

---

## 📂 Cấu trúc dự án

```
root/
├── forge.config.js
├── package.json
├── webpack.main.config.js
├── webpack.preload.config.js
├── dist/ (Webpack output)
├── src/
│   ├── app.js
│   ├── core.js
│   ├── database.js
│   ├── index.js
│   ├── ipcHandler.js
│   ├── preload.js
│   ├── models/
│   │   └── deadline.js
│   ├── controllers/
│   │   ├── deadline.controller.js
│   │   └── page.controller.js
│   ├── utils/
│   │   └── shutdown.js
│   └── views/
│       └── home.ejs
```

---

## 📦 Các lệnh npm hỗ trợ

| Lệnh              | Ý nghĩa                                                          |
| :---------------- | :--------------------------------------------------------------- |
| `npm run start`   | Chạy ứng dụng ở chế độ phát triển.                               |
| `npm run make`    | Dọn sạch và build ra bộ cài đặt.                                 |
| `npm run package` | Đóng gói app mà không tạo bộ cài.                                |
| `npm run publish` | Publish app (nếu có cấu hình).                                   |
| `npm run clean`   | Xóa thư mục `dist/`, `out/`, và file `src/database/database.db`. |

---

## ⚙ Yêu cầu hệ thống

-   Node.js >= 18.x
-   npm >= 9.x
-   Electron Forge >= 7.8.0

---

## 🔐 Bảo mật và tối ưu

-   Sử dụng Electron Fuses để tối ưu kích thước app và tăng bảo mật.
-   Cơ sở dữ liệu SQLite lưu ở thư mục `userData`, tách khỏi app.asar.
-   Đóng gói với Webpack giúp app nhẹ và nhanh.
-   Quản lý native module `better-sqlite3` đúng chuẩn.

---

# 📄 Hướng dẫn dành cho người fork dự án

## 1. Điều chỉnh thông tin dự án

-   Chỉnh `package.json`:
    -   `name`, `productName`, `description`, `author`

## 2. Setup môi trường

```bash
npm install
```

## 3. Chạy thử ứng dụng

```bash
npm run start
```

## 4. Nếu muốn chỉnh sửa giao diện

-   Sửa file tại `src/views/home.ejs`
-   Nếu muốn thêm API IPC ➔ thêm vào `src/ipcHandler.js`

## 5. Build bộ cài

```bash
npm run make
```

File output nằm trong `out/make/`

## 6. Ghi chú

-   Mỗi lần sửa mã nguồn cần chạy lại `npm run build` nếu cần.
-   Xóa database cũ bằng `npm run clean` để tránh lỗi dữ liệu.

---

# 🏁 Cảm ơn bạn đã sử dụng Deadline Manager!

> Được xây dựng bởi Jacky 🚀
