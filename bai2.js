// 1. BIẾN
// - BIẾN DÙNG ĐỂ LÀM GÌ ?
// - KHAI BÁO BIẾN
// - PHẠM VI CỦA BIẾN
// 2. KIỂU DỮ LIỆU STRING (CHUỖI)
// - PHƯƠNG THỨC
// - THUỘC TÍNH

// 1. Biến
// - Biến dùng để lưu trữ dữ liệu
// - Để khai báo biến dùng var / let / const

// [QUY TẮC ĐẶT TÊN BIẾN]
// 1. Đặt tên biến theo dạng camelCase
// VD: myClass, myAddress
// 2. Đối với dữ liệu dạng danh sách
// VD: danh sách sinh viên, động vật, ...
// animalList, studentList
// 3. Đối với những biến lưu dữ liệu quan trọng, không thay đổi
// và đặc biệt thì viết hoa toàn bộ
// VD: CCCD, PI, DISCOUNT_PERCENT

// [KHAI BÁO VIẾN VỚI var]
// Khai báo biến myName có giá trị là Tuan Anh
// var myName = "Tuan Anh";
// // Khai báo biến age có giá trị là 26
// var age = 26;

// myName = "Thắng"; // Gán lại giá trị cho biến
// age = 2.6;

// console.log(myName);
// console.log(age);

// // [KHAI BÁO VIẾN VỚI let]
// let myAddress = "Hai Phong";
// console.log(myAddress);

//
// console.log("KHAI BÁO BIẾN VỚI VAR");
// // Global scope
// {
//   var x = 10;
//   {
//     var x = 20;
//     console.log(x); // block scope
//   }
//   console.log(x);
// }

// console.log("KHAI BÁO BIẾN VỚI LET");
// // Global scope
// {
//   let y = 10;
//   {
//     let y = 20;
//     console.log(y); // block scope
//   }
//   console.log(y);
// }

// [KHAI BÁO VIẾN VỚI const]
// Khai báo biến với const sẽ không
// làm giá trị bị thay đổi
// const CCCD = 123;
// CCCD = 456;
// console.log(CCCD);

// [KIỂU DỮ LIỆU STRING (CHUỖI)]
let text = "Đây là đoạn văn bản";
// Thuộc tính của kiểu string
// Thuộc tính .length lấy độ dài của chuỗi
console.log(text.length); // Kết là 1 số nguyên
// Lấy ra chữ cái đầu tiên của biến text
console.log(text[0]);
console.log(text[2]);
// Lấy ra vị trí cuối cùng
console.log(text[text.length - 1]);

// [NỐI CHUỖI, NỐI BIẾN]
let text2 = "Đoạn văn 1";
let text3 = "Đoạn văn 2";

console.log(text2 + " " + text3); // Nối Biến

// Sử dụng backtick trong JS
// Dấu huyền dưới nút ESC
console.log(`It's ... "abc"`);
// console.log("Đây là đoạn văn bản: " + text2 + " " + text3); // Nối Biến
console.log(`Đây là đoạn văn bản ${text2} ${text3}`);

// [PHƯƠNG THỨC (METHOD)]
// substring: dùng để cắt chuỗi
let myString = "Tôi là string aa";
console.log(myString.substring(0, 4)); // KQ: Tôi
// BT: dùng substring để lấy chữ "là" trong biến myString
console.log(myString.substring(4, 6));
// BT: lấy ra từ cuối cùng trong biến myString
// Để lấy ra đc từ cuối cùng sử dụng .length - số ký tự từ cần lấy
console.log(myString.substring(myString.length - 2)); // aa

// toLowerCase: dùng để chuyển chữ hoa thành chữ thường
let text5 = "ĐANG VIẾT HOA ĐÂY";
console.log(text5.toLowerCase());

// toUpperCase: dùng để chuyển chữ thường thành chữ hoa
let text6 = "đang viết thường";
console.log(text6.toUpperCase());
