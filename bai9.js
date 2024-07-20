// DOM (Document object model)
// - DOM DÙNG ĐỂ TRUY XUẤT VÀO CÁC THẺ HTML
// - ĐỂ DÙNG DOM THÌ PHẢI SỬ DỤNG JS
// - HTML DOM dùng để thay đổi, thêm, xoá
// các thành phần trong HTML
// - Các thành phần trong HTML:
//  + Các thẻ của html
//  + Các thuộc tính (style, href, class, id)
// TRUY XUẤT TRONG DOM
// - Truy xuất qua thẻ html: .getElementsByTagName('tên thẻ')
// - Truy xuất qua class: .getElementsByClassName('tên class')
// - Truy xuất qua id: .getElementById('tên id')

// Truy xuất thẻ h1:
// console.log(document.getElementsByTagName("h1"));

// // Truy xuất thẻ h1 qua class
// console.log(document.getElementsByClassName("header"));

// // Truy xuất qua id:
// console.log(document.getElementById("a_tag"));

// [QUAN TRỌNG]
// Phương thức truy xuất đc cả thẻ, id, class
// .querySelector()
console.log(document.querySelector(".header"));

// BT: Sử dụng phương thức .querySelector để lấy ra thẻ a hiển thị ở
// console.log
// Cách 1: lấy theo tên thẻ
console.log(document.querySelector("a"));
// Cách 2: lấy theo id
console.log(document.querySelector("#a_tag"));
