// [KIỂU DỮ LIỆU NUMBER (SỐ)]
// - Cách khai báo
// - Phương thức (METHOD): Hàm tính toán
// - CÁC PHÉP TOÁN
// [KIỂU DỮ LIỆU BOOLEAN (TRUE / FALSE)]
// - Giá trị truthy / falsy
// [KIỂU DỮ LIỆU UNDEFINED / NULL]

// CÁCH KHAI BÁO KIỂU DỮ LIỆU SỐ
let num1 = 1; // Khai báo biến num1 có giá trị là 1 (số nguyên)
let num2 = 1.5; // Khai báo biến num2 có giá trị là 1.5 (số thực)
let num3 = "2";

console.log(num1);
console.log(num2);
console.log(num3);

// Kiểm tra kiểu dữ liệu của biến sử dụng typeof
console.log(typeof num1); // number
console.log(typeof num3); // string

// CÁC PHÉP TOÁN
console.log(5 + 6); // PHÉP CỘNG
console.log(5 - 6); // PHÉP TRỪ
console.log(5 * 6); // PHÉP NHÂN
console.log(6 / 2); // PHÉP CHIA
console.log(4 % 2); // PHÉP CHIA LẤY DƯ

// CÁC PHƯƠNG THỨC
// isNaN: Hàm kiểm tra chữ hay số
// CÚ PHÁP: isNaN()
// Trước khi trả về true/false hàm isNaN sẽ ép kiểu từ string sang number
// - True: là chữ (không phải là số)
// - False: là số
console.log(isNaN("7")); // false
console.log(isNaN("7a")); // true
console.log(isNaN("abc")); // true
console.log(isNaN(8)); //false

// isInteger: hàm kiểm tra số nguyên
// CÚ PHÁP: Number.isInteger()
// Nếu số truyền vào là số nguyên sẽ trả về true
// Còn lại là false

let x = 3;
let str = "integer";
console.log(Number.isInteger(x));
console.log(Number.isInteger(str));

// Math.floor(): Hàm làm tròn số xuống
console.log(Math.floor(3.9)); // 3

// Math.ceil(): Hàm làm tròn lên
console.log(Math.ceil(3.1)); // 4

// Math.round(): Hàm làm tròn tới số gần nhất
console.log(Math.round(7.6)); // 8
console.log(Math.round(5.3)); // 5

// Math.random(): Hàm tạo ra số ngẫu nhiên từ 0 tới nhỏ hơn 1
console.log(Math.random());
// BT: Sử dụng Math.random(), hàm làm tròn, và phép nhân để tạo ra
// số ngẫu nhiên là số nguyên < 10
console.log(Math.floor(Math.random() * 10));

// Math.abs: Hàm giá trị tuyệt đối
console.log(Math.abs(-1)); // 1

// Math.sqrt: Hàm tính căn bậc hai
console.log(Math.sqrt(4)); // 2

// Math.pow: Hàm tính số mũ
console.log(Math.pow(2, 3)); // 2 mũ 3 = 8

// .toFixed: Hàm giữ lại số thập phân sau dấu phẩy
let number = 5.5608;
let number1 = number.toFixed(3);

console.log(number);
// NÊN KIỂM TRA KIỂU DỮ LIỆU TRƯỚC KHI TÍNH TOÁN
// SỬ DỤNG typeof
console.log(typeof number1);
// Để ép kiểu từ string sang number: viết dấu "+" trước tên biến
console.log(+number1 + 1);

// BT: tìm số lớn nhất trong 3 số
// let a = 1;
// let b = 99;
// let c = 0;
// let numberMax = a; // giá trị ở đây là gì ?

// if (b > numberMax) {
//   // logic
//   numberMax = b;
// }

// if (c > numberMax) {
//   // logic
//   numberMax = c;
// }

//console.log(numberMax); // Hiển thị ra số lớn nhất

// Math.max: tìm ra số lớn nhất
console.log(Math.max(1, 100, 1000, 9, 0));

// Math.min: tìm ra số nhỏ nhất
console.log(Math.min(1, 100, 1000, 9, 0));

// [KIỂU DỮ LIỆU BOOLEAN (TRUE / FALSE)]
// Giá trị true: là giá trị còn lại
// Giá trị false (HỌC THUỘC):
// false, 0, -0, 0n, "", null, undefined, NaN, document.all.
if ("") {
  console.log("ok");
} else {
  console.log("not ok");
}

// [KIỂU DỮ LIỆU UNDEFINED / NULL]
// - Kiểu dữ liệu Undefined: Khai báo biến và không gán giá trị
// - Kiểu dữ liệu null: Khai báo biến và gán trị là giá trị null
let newString = null;
let newText; // undefined
