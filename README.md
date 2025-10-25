# Bài tập 02 - Lập trình WEB 
# Lê Quốc Trung - K225480106065
# DEADLINE: 26/10/2025
# =============================================
# 1. YÊU CẦU:
1. Sử dụng github để ghi lại quá trình làm, tạo repo mới, để truy cập public, edit file `readme.md`:
   chụp ảnh màn hình (CTRL+Prtsc) lúc đang làm, paste vào file `readme.md`, thêm mô tả cho ảnh.
# 2. NỘI DUNG BÀI TẬP:
## 2.1. Cài đặt Apache web server:
- Vô hiệu hoá IIS: nếu iis đang chạy thì mở cmd quyền admin để chạy lệnh: iisreset /stop  
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/c4d6c40a-1b92-4001-9045-ae20069f03b5" />  
- Download apache server, giải nén ra ổ C, cấu hình các file:  
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6095241a-da45-4da2-bb0f-a9b7effefda5" />
 Vì chỉ có 1 ổ cứng nên em tải và giải nén file trong ổ C
- Vào Start Menu => Tìm kiếm Notepad
- Chuột phải vào Notepad và chạy Notepad với quyền admin (Run as administrator)
- Trong Notepad chọn File => Open
- Điều hướng đường dẫn đến: C:\apache\Apache24\conf\httpd.conf (ở phần "File type" chọn định dạng "All Files" thì mới thấy file ".conf").
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2cb8862d-96cd-4961-9379-5d303a7befbc" />
