// Làm quiz 4, lab 4
// [QUAN TRỌNG]
// ĐỂ TRUY XUẤT VÀO CÁC THẺ HTML
// SỬ DỤNG:
//(Tổng hợp của document.getElementById, getElementsByClassName, getElementsByTagName )
// document.querySelector('') và document.querySelectorAll('')
// VD: document.querySelector(''): nó chỉ lấy 1 thẻ đầu tiên
// - Truy xuất với tên class
// document.querySelector('.tên class')
// - Truy xuất với id
// document.querySelector('#tên id')
// - Truy xuất với thẻ
// document.querySelector('tên thẻ')

// VD: document.querySelectorAll(''): nó chỉ lấy ra tất cả các thẻ
// - Truy xuất với tên class
// document.querySelectorAll('.tên class')
// - Truy xuất với id
// document.querySelectorAll('#tên id')
// - Truy xuất với thẻ
// document.querySelectorAll('tên thẻ')

// VD: lấy ra thẻ thẻ h1 đầu tiên
console.log(document.querySelector("h1"));

// VD: lấy ra tất cả các thẻ h1
console.log(document.querySelectorAll("h1")); // kết quả là 1 mảng [h1, h1, h1]
// lưu vào 1 biến
let danhSachTheH1 = document.querySelectorAll("h1"); // [h1, h1, h1]: độ dài mảng là 3
// Để lấy ra các phần tử của mảng danhSachTheH1
for (let i = 0; i < danhSachTheH1.length; i++) {
  console.log(danhSachTheH1[i]);
}

// Bài 1:
// - Sử dụng document.querySelector kết hợp với tên class
// để truy xuất thẻ h2 có class là the-h2
// KẾT QUẢ MONG MUỐN: <h2 class="the-h2">Thẻ h2 thứ 1</h2>
console.log(document.querySelector(".the-h2"));

// - Sử dụng document.querySelector kết hợp với tên id
// để truy xuất thẻ h3 có id là the-h33
// KẾT QUẢ MONG MUỐN: <h3 id="the-h33">Thẻ h3 thứ 3</h3>
console.log(document.querySelector("#the-h33"));

// - Lấy ra tất cả các thẻ h2 và h3
// Lấy ra tất cả thẻ h2:
console.log(document.querySelectorAll("h2"));
let danhSachTheH2 = document.querySelectorAll("h2");
for (let i = 0; i < danhSachTheH2.length; i++) {
  console.log(danhSachTheH2[i]);
}

// Lấy ra tất cả thẻ h3:
//console.log(document.querySelectorAll("..."));
console.log(document.querySelectorAll("h3"));
let danhSachTheH3 = document.querySelectorAll("h3");
for (let i = 0; i < danhSachTheH3.length; i++) {
  console.log(danhSachTheH3[i]);
}
