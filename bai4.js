// KIỂU DỮ LIỆU MẢNG (ARRAY)
// - MẢNG LÀ GÌ ?
// - KHAI BÁO MẢNG ?
// - TRUY XUẤT PHẦN TỬ TRONG MẢNG
// - PHƯƠNG THỨC (METHOD) CỦA MẢNG (ARRAY)

let a = "đây là 1 đoạn văn bản"; // string
let b = 1; // number

// Mảng dùng để lưu trữ nhiều kiểu dữ liệu trong 1 biến
let c = ["đây là 1 đoạn văn bản", 1, true, null, undefined, [1, 2]];

// KHAI BÁO MẢNG: sử dụng dấu đóng mở ngoặc vuông *
let arrEmptyList = []; // Mảng rỗng
// Các giá trị trong mảng gọi là phần tử (phần tử của mảng)
// Các phần tử trong mảng ngăn cách nhau bởi dấu phẩy
let arrList = ["Phần tử", "123", 1, 4, true];
console.log(arrList);

// TRUY XUẤT PHẦN TỬ TRONG MẢNG *
// - Gọi tới mảng và sử dụng dấu đóng mở ngoặc [vị trí của phần tử
// - arrList[vị trí của phần tử]
console.log(arrList[3]); // 4
console.log(arrList.length); // 5
console.log(arrList[arrList.length - 1]); // 5

// PHƯƠNG THỨC (METHOD)
// PHƯƠNG THỨC THÊM PHẦN TỬ VÀO CUỐI MẢNG (.push) *
arrList.push(false, 10, 3, 99);
// ["Phần tử", "123", 1, 4, true, false];
console.log(arrList);

// PHƯƠNG THỨC THÊM PHẦN TỬ VÀO ĐẦU MẢNG (.unshift)
arrList.unshift("phan tu dau mang");
console.log(arrList);

// XOÁ PHẦN TỬ CUỐI MẢNG (.pop)
arrList.pop();
console.log(arrList);

// XOÁ PHẦN TỬ ĐẦU MẢNG (.shift)
arrList.shift();
console.log(arrList);

// GÁN LẠI GIÁ TRỊ CỦA PHẦN TỬ TRONG MẢNG
arrList[1] = 456;
console.log(arrList);

// PHƯƠNG THỨC THÊM HOẶC XOÁ (.splice) *
// .splice(Đối số 1, Đối số 2, Đối số 3);
// - Đối số 1: vị trí (bắt buộc)
// - Đối số 2: số phần tử cần xoá (0: là không xoá)
// - Đối số 3: phần tử muốn thêm vào mảng (sẽ được thêm vào bên trái)

let arrList1 = ["Phần tử", 456, 1, 4, true, false, 10, 3];
//arrList1.splice(0, 0, "Phần tử 1", 678);
// Thêm phần tử
console.log(arrList1); // ['Phần tử 1', 678, 'Phần tử', 456, 1, 4, true, false, 10, 3]
// Xoá phần tử
//arrList1.splice(3, 1);
//console.log(arrList1);
// Xoá và thêm cùng lúc
arrList1.splice(2, 2, "text 1", "text 2", "text 3");
console.log(arrList1);

// BT:
// - Khai báo 1 mảng gồm 5 phần tử
// - Sử dụng phương thức .splice
// 1. Thêm "SD1801" vào vị trí số 2
// 2. Tại vị trí số 3 xoá đi 2 phần tử

// b1: khai báo mảng
let arrList2 = [
  "Tuan Anh",
  "Hoang Thang",
  "Quang Hieu",
  "Khanh Lam",
  "Van Tam",
];
console.log(arrList2);
// b2: gọi tới mảng và sử dụng phương thức .splice
// 1. Thêm "SD1801" vào vị trí số 2
arrList2.splice(2, 0, "SD1801");
console.log(arrList2);
// 2. Tại vị trí số 3 xoá đi 2 phần tử
arrList2.splice(3, 2);
console.log(arrList2);

// PHƯƠNG THỨC NỐI 2 MẢNG (.concat) *
let arrList3 = [1, 2, 3];
let arrList4 = [4, 5, 6];

let arrList5 = arrList3.concat(arrList4); // [1, 2, 3, 4, 5, 6]
console.log(arrList5);
// MONG MUỐN: [1, 2, 3, 4, 5, 6]

// PHƯƠNG THỨC CHUYỂN CHUỖI THÀNH MẢNG (.split)
let str1 = "Hôm";
let str2 = "nay";
let str3 = "hết nghỉ hè!!!";

// B1: Nối 3 biến thành 1 chuỗi
let str4 = `${str1},${str2},${str3}`;

// B2: Đổi chuỗi thành mảng
console.log(str4.split(","));

// MONG MUỐN ["Hôm", "nay", "hết nghỉ hè!!!"]

// PHƯƠNG THỨC CHUYỂN MẢNG THÀNH CHUỖI (.join)
let arrList6 = ["a", "b", "c"];
console.log(arrList6);
console.log(arrList6.join(""));

// PHƯƠNG THỨC TÌM KIẾM TRONG MẢNG (.indexOf) *
// - Nếu có phần từ trong mảng thì sẽ trả về vị trí của phần tử
// - Nếu không có phần tử trong mảng thì sẽ trả về -1
let arrList7 = ["d", 2, 1, "f"];
//  Vị trí của phần tử số 1 là vị trí số 2
console.log(arrList7.indexOf(1));
console.log(arrList7.indexOf(5)); //  -1
