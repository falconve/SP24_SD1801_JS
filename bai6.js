// [SWITCH .. CASE]
// DO .. WHILE
// FUNCTION
// - HÀM LÀ GÌ ?
// - THAM SỐ VÀ ĐỐI SỐ
// - HÀM CÓ TRẢ VỀ

// [SWITCH .. CASE]
// Tương tự như if .. else
// Sử dụng khi có nhiều hơn 3 điều kiện

let luaChon = "abc";

// Lưu ý khi sử dụng swtich .. case:
// - PHẢI CÓ DEFAULT
// - PHẢI CÓ BREAK TRONG TỪNG CASE
switch (luaChon) {
  case "play":
    console.log("Bạn đang chơi game");
    break;
  case "setting":
    console.log("Bạn đang cài đặt game");
    break;
  case "quit":
    console.log("Bạn đã thoát game");
    break;
  default:
    console.log("Bạn không chọn gì cả ...");
    break;
}

// VÒNG LẶP DO .. WHILE
let num1 = 1;
do {
  console.log(num1);
  num1++;
} while (num1 < 3);

// ĐỐI SỐ: KHI TRUYỀN GIÁ TRỊ VÀO HÀM THÌ GỌI LÀ ĐỐI SỐ
// THAM SỐ: LÀ BIẾN ĐƯỢC ĐỊNH NGHĨA TRONG HÀM

// FUNCTION (HÀM): DÙNG ĐỂ TÁI SỬ DỤNG 1 ĐOẠN CODE NHIỀU LẦN
// CÁCH KHAI BÁO 1 HÀM:
// SỬ DỤNG FUNCTION TÊNHÀM() {}

// Khai báo hàm tính tổng
// Hàm không có tham số nhưng có trả về kết quả
// function tinhTong() {
//   let num2 = 3;
//   let num3 = 4;
//   return num2 + num3;
// }

// Chạy hàm (thực thi hàm)
// Hiển thị kết quả
// console.log(tinhTong());

// // Muốn sử dụng kết quả của hàm tinhTong thì phải gán vào 1 biến
// let ketQua = tinhTong(); // 7
// let ketQua2 = ketQua + 3; // 10
// console.log(ketQua2);

// // Hàm có tham số
// function phepNhan(so1, so2) {
//   return so1 * so2;
// }

// console.log(phepNhan(6, 4));

// LƯU Ý:
// HÀM PHẢI CÓ RETURN
// NÊN SỬ DỤNG HÀM CÓ THAM SỐ
// MUỐN LẤY KẾT QUẢ CỦA HÀM THÌ GÁN HÀM VÀO 1 BIẾN

//BT:
// Bài 1: Viết hàm tính chu vi và diện tích của hcn
function tinhChuViHCN(chieuDai, chieuRong) {
  return (chieuDai + chieuRong) * 2;
}

function tinhDienTichHCN(chieuDai, chieuRong) {
  return chieuDai * chieuRong;
}

alert(`Chu vi HCN la: ${tinhChuViHCN(2, 3)}`);
alert(`Dien tich HCN la: ${tinhDienTichHCN(2, 3)}`);

// Bài 2: Viết hàm tính tổng 2 số a và b
// - Cho người dùng nhập vào 2 số (sử dụng prompt)
// Gợi ý: function input() {
//   let a = prompt("Nhập số 1");
// }
// input();

function tinhTong() {
  let soThuNhat = +prompt("Nhap so thu 1: ");
  let soThuHai = +prompt("Nhap so thu 2: ");
  return soThuNhat + soThuHai;
}

alert(`Tong 2 so la: ${tinhTong()}`);
