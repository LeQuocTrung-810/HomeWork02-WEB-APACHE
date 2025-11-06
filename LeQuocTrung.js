document.getElementById("searchForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const keyword = document.getElementById("keyword").value.trim();
  const resultDiv = document.getElementById("result");

  if (!keyword) {
    resultDiv.innerHTML = "<p style='color:red;'>Vui lòng nhập tên cần tìm!</p>";
    return;
  }

  // Gửi yêu cầu đến Node-RED API
  try {
    const res = await fetch(`http://localhost:1880/timkiem?q=${encodeURIComponent(keyword)}`);
    if (!res.ok) throw new Error("Không thể kết nối API!");

    const data = await res.json();

    // Hiển thị dữ liệu JSON ra giao diện
    if (data.length === 0) {
      resultDiv.innerHTML = "<p>Không tìm thấy nhân khẩu nào!</p>";
    } else {
      let html = "<table border='1' cellpadding='6'><tr><th>ID</th><th>Họ tên</th><th>Địa chỉ</th></tr>";
      data.forEach(row => {
        html += `<tr><td>${row.ID}</td><td>${row.HoTen}</td><td>${row.DiaChi}</td></tr>`;
      });
      html += "</table>";
      resultDiv.innerHTML = html;
    }
  } catch (err) {
    resultDiv.innerHTML = `<p style='color:red;'>Lỗi: ${err.message}</p>`;
  }
});
