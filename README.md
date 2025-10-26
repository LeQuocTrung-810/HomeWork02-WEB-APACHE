# Bài tập 02 - Lập trình WEB 
# Lê Quốc Trung - K225480106065
# DEADLINE: 26/10/2025
# =============================================
# 1. YÊU CẦU:
1. Sử dụng github để ghi lại quá trình làm, tạo repo mới, để truy cập public, edit file `readme.md`:
   chụp ảnh màn hình (CTRL+Prtsc) lúc đang làm, paste vào file `readme.md`, thêm mô tả cho ảnh.
# 2. NỘI DUNG BÀI TẬP:
## 2.1. Cài đặt Apache web server:
1. Vô hiệu hoá IIS: nếu iis đang chạy thì mở cmd quyền admin để chạy lệnh: iisreset /stop

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/c4d6c40a-1b92-4001-9045-ae20069f03b5" />

- Download apache server, giải nén ra ổ C, cấu hình các file:
   
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6095241a-da45-4da2-bb0f-a9b7effefda5" />

 Vì chỉ có 1 ổ cứng nên em tải và giải nén file trong ổ C

- Vào Start Menu => Tìm kiếm Notepad
  
- Chuột phải vào Notepad và chạy Notepad với quyền admin (Run as administrator)
  
- Trong Notepad chọn File => Open
  
- Điều hướng đường dẫn đến: C:\apache\Apache24\conf\httpd.conf (ở phần "File type" chọn định dạng "All Files" thì mới thấy file ".conf").
  
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2cb8862d-96cd-4961-9379-5d303a7befbc" />
2. Cấu hình và sửa thông tin trong các files:
  
- C:\apache\Apache24\conf\httpd.conf

   + Define SRVROOT "c:/Apache24/LeQuocTrung"
     
   + ServerName www.LungQuocTre.com:80
  
   + Include conf/extra/httpd-vhosts.conf
   
- C:\apache\Apache24\conf\extra\httpd-vhosts.conf

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/abe101e9-6246-46f6-884d-96668f23cb6f" />

- Fake domain vào hosts

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5a38cb74-5d7d-4101-9044-fb9067bc3a79" />

3. Cài dịch vụ và khởi động Apache

- Mở CMD (Admin) tại C:Apache\Apache24\bin

httpd.exe -k install -n "Apache24" 
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6128bba1-f208-4e59-9481-8c4f43c7c0cf" />

httpd.exe -w -k start -n "Apache24"
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7ce5db2b-5452-49b2-a791-d9e9fca6d939" />
Test: chạy thử trên trình duyệt http://lungquoctre.com
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/ae90c1e5-a5a7-4c0f-8d89-27ed46137243" />

## 2.2. Cài đặt nodejs và nodered
1. Tải nodejs quả link: https://nodejs.org/dist/v20.19.5/node-v20.19.5-x64.msi

Sau khi tải và cài nodejs vào ổ C:/nodejs 
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/4caf749f-e976-476f-94a1-8be3b44335e6" />
Cài đặt service và chạy service
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/515669be-b3ff-4d28-b5d9-f1155e47f8e1" />
## 2.3. Tạo csdl tuỳ ý trên mssql (sql server 2022), nhớ các thông số kết nối: ip, port, username, password, db_name, table_name
1. CSDL tùy ý:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/df92d07a-1812-480a-9c65-c1a65d10eabf" />
2. các thông số kết nối:

Server: 127.0.0.1

Port: 1433

Username: sa

Password: (do bạn đặt)

Database: QuanLyNhanKhauDB

Các bảng: HoKhau, NhanKhau, TamTruTamVang

## 2.4. 2.4. Cài đặt thư viện trên nodered
- truy cập giao diện nodered bằng url: http://localhost:1880
- cài đặt các thư viện: node-red-contrib-mssql-plus, node-red-node-mysql, node-red-contrib-telegrambot, node-red-contrib-moment, node-red-contrib-influxdb, node-red-contrib-duckdns, node-red-contrib-cron-plus
- Sửa file `D:\nodejs\nodered\work\settings.js` : 
  tìm đến chỗ adminAuth, bỏ comment # ở đầu dòng (8 dòng), thay chuỗi mã hoá mật khẩu bằng chuỗi mới
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "chuỗi_mã_hoá_mật_khẩu",
            permissions: "*"
        }]
    },   

  với mã hoá mật khẩu có thể thiết lập bằng tool: https://tms.tnut.edu.vn/pw.php
  - chạy lại nodered bằng cách: mở cmd, vào thư mục `D:\nodejs\nodered` và chạy lệnh `nssm restart a1-nodered`
  khi đó nodered sẽ yêu cầu nhập mật khẩu mới vào được giao diện cho admin tại: http://localhost:1880
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ab7a8ba2-59bc-4cbe-9279-1341facef40e" />
## 2.5. tạo api back-end bằng nodered:
API sẽ gồm 4 node chính:

[HTTP in] → [Function: xử lý tham số] → [MSSQL-PLUS] → [HTTP response]

Mỗi node đảm nhiệm:

HTTP in → Nhận request từ trình duyệt (GET /timkiem).

Function → Chuẩn bị câu SQL và tham số (query string).

MSSQL-PLUS → Thực thi truy vấn trong SQL Server.

HTTP response → Trả kết quả JSON cho client.

1. Tạo từng note
- "http in" note tìm kiếm
<img width="1919" height="981" alt="image" src="https://github.com/user-attachments/assets/184daca0-8286-479d-b3fc-8a6ab28e0a29" />
- "Function" note Xử lý dữ liệu
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/54eae523-26c4-4464-94f8-b097dbb9cdca" />
- "MSSQL-PLUS" note truy vẫn thông tin trong sql server
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/532d51bb-8a79-4c35-9161-f14e7c95950f" />
- "http response" note trả kết quả Json cho client
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8a7f2294-7881-46c5-80df-f7e61bcc989c" />
2. Kiểm thử API
  - Trình duyệt: http://localhost:1880/timkiem?q=trung
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b00616aa-d3e1-49ae-aa83-8965ecbe23aa" />
## 2.6. Tạo giao diện front-end:

* tuy rằng đã tạo giao diện front-end nhưng do 1 số lỗi mà em chưa tìm ra được nên front-end và back-end chưa link được với nhau, nên em đành ngậm ngùi nhận điểm thấp <img width="30" height="30" alt="image" src="https://github.com/user-attachments/assets/a9a0c300-b171-4473-95cc-e18567d6004a" />

## 2.7. Nhận xét bài làm
- Em đã nắm được cách cài đặt các thành phần cần thiết cho hệ thống, bao gồm Apache (dùng làm web server), Node.js và Node-RED (dùng làm backend), cùng với các thư viện hỗ trợ như node-red-contrib-mssql-plus, node-red-node-mysql,… Đồng thời hiểu được vai trò và cách cấu hình từng phần (chọn cổng, sửa file cấu hình, cấp quyền, khởi chạy dịch vụ,…).
- Em đã biết cách tạo luồng xử lý (flow) gồm các node http in, function, MSSQL và http response để xây dựng API. Biết sử dụng function để xử lý dữ liệu đầu vào và truy vấn SQL, biết cách kết nối đến cơ sở dữ liệu SQL Server, và test API bằng đường dẫn như http://localhost:1880/timkiem.
- Em chưa hiểu hết được cách thức hoạt động của front-end gửi yêu cầu đến API Nodered do đang gặp một số lỗi khiến cho file httpd.conf bị lỗi làm cho Apache không liên kết được với API của Nodered
