// TOÁN TỬ SO SÁNH
// - >, <, >=, <=, == , ===, !==
// TOÁN TỬ SO SÁNH LOGIC
// - && , ||, !
// TOÁN TỬ 3 NGÔI
// CẤU TRÚC ĐIỀU KIỆN
// - [IF .. ELSE]
// VÒNG LẶP
// - FOR
// - FOR .. OF
// - WHILE

// [TOÁN TỬ SO SÁNH]
// KẾT QUẢ: true hoặc false
let a = 3;
let b = 4;

console.log(a > b); // false

let c = 1;
let d = 2;
console.log(c < d); // true

let num1 = 1; // kiểu dữ liệu số
let num2 = "1"; // kiểu dữ liệu chuỗi
// So sánh ==: chỉ so sánh dữ liệu
console.log(num1 == num2); // true
// So sánh ===: sẽ kiểm tra dữ liệu và kiểu dữ liệu
console.log(num1 === num2); // true

// So sánh không bằng (so sánh khác)
let num3 = 1;
let str1 = "a";

console.log(num3 !== str1); // true

// [TOÁN TỬ LOGIC]: &&, ||, !
a = true;
b = false;
// Toán tử and (&&)
console.log(a && b); // false

// Toán tử or (||)
a = false;
b = true;
console.log(a || b); // true

// Toán tử phủ định
console.log(!a); // phủ định của false là true

// [IF .. ELSE]
if (1 > 2) {
  // Đúng (true) thì đoạn code sẽ chạy ở đây
  console.log("Điều kiện đúng");
} else {
  // Còn sai (false) thì đoạn code sẽ chạy ở đây
  console.log("Điều kiện sai");
}

// BT:
// Người dùng nhập vào điểm 3 môn toán, văn, anh
// Tính trung bình điểm 3 môn. Nếu:
// Điểm > 8: Giỏi
// Điểm 6 - 8: Khá
// Điểm < 6: Trung bình

// Gợi ý: sử dụng if .. else if .. else
// - Sử dụng toán tử >, &&
// let diemToan = +prompt("Nhập điểm toán");
// let diemVan = +prompt("Nhập điểm văn");
// let diemAnh = +prompt("Nhập điểm anh");
// // LƯU Ý: KHI SỬ DỤNG prompt phải ép kiểu từ
// // string sang number: dùng dấu + trước
// // biến cần ép kiểu

// let diemTb = (diemToan + diemVan + diemAnh) / 3;

// if (diemTb > 8) {
//   alert("Giỏi");
// } else if (diemTb >= 6 && diemTb <= 8) {
//   alert("Khá");
// } else {
//   alert("Trung bình");
// }

// [TOÁN TỬ 3 NGÔI] ?:
// - Sử dụng để viết ngắn lại if .. else
// CẤU TRÚC: điều kiện ? 'thông báo đúng' : 'thông báo sai'
let age = 18;

// if (age > 18) {
//   alert("Đủ tuổi đi tò...");
// } else {
//   alert("Chưa đủ tuổi");
// }

//alert(age > 18 ? "Đủ tuổi đi tò..." : "Chưa đủ tuổi");

// VÒNG LẶP
// - Cần lặp lại một việc gì đó nhiều lần thì dùng vòng lặp

// Vòng lặp for
// Cấu trúc:
//for(giá trị khởi tạo; điều kiện để lặp; bước nhảy) {logic code}

// In các số tự nhiên từ 1 tới 10
// for (let i = 1; i <= 10; i++) {
//   // In giá trị i từ 1 tới 10
//   console.log(i);
// }

let arrList = ["Tuan Anh", 10, true, false, 1000];

// Sử dụng vòng lặp for trong mảng
// for (let i = 0; i <= arrList.length; i++) {
//   // In các phần tử trong mảng
//   console.log(`${arrList[i]} nằm ở vị trí ${i}`);
// }

// Vòng lặp for .. of
// CẤU TRÚC:
// for ("khai báo 1 biến" of "tên mảng cần lặp") {}
for (const i of arrList) {
  console.log(i);
}

// VÒNG LẶP WHILE
// Thực hiện lặp cho tới khi điều kiện sai thì dừng lại

// VD: tính tổng các số từ 1 tới 5
let num = 1;
let sum = 0;

while (num <= 5) {
  sum = sum + num;
  // có thể viết gọn lại theo cách sau: sum += num;
  // Phải có bước nhảy trong vòng lặp
  num++;
}

console.log(sum); // 15

// BT 1:
// Sử dụng vào lặp while để in ra các số chẵn từ 1 - 20
// B1: sử dụng vào lặp while để in ra các số từ 1 - 20
// B2: trong vào lặp while sử dụng if .. else kết hợp với phép chia
// để tìm ra sỗ chẵn
let number1 = 1;
while (number1 <= 20) {
  if (number1 % 2 == 0) {
    console.log(number1);
  }
  number1++;
}

// BT 2:
// Sử dụng vào lặp while để tính tổng các số lẻ từ 1 - 15
let number2 = 1;
let tong = 0;
while (number2 <= 15) {
  if (number2 % 2 !== 0) {
    tong = tong + number2;
  }
  number2++;
}
console.log(`Tổng dãy sổ lẻ từ 1 - 15 là ${tong}`);
