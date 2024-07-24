// Lấy ra 1 thẻ
// document.querySelector => <h1></h1>
// Lấy ra nhiều thẻ
// document.querySelectorAll
// => trả về về mảng [] => vòng lặp for

// .textContent
// .value
// .createElement & appendChild
// .innerHTML

// .textContent:
// - dùng để lấy ra văn bản của các thẻ trong HTML
// ngoại trừ thẻ input
// - thay đổi nội dung văn bản của thẻ trong HTML
// let theP = document.querySelector("p");
// console.log(theP);
// let noiDungTheP = theP.textContent;
// console.log(noiDungTheP);
// theP.textContent = "Nội dung mới";

// BT: lấy ra nội dung của tất cả các thẻ p
// GỢI Ý:
// B1: dùng ... truy xuất vào tất cả thẻ p
// B2: dùng vòng lặp
// B3: dùng ... lấy nội dung thẻ p

let allP = document.querySelectorAll("p");

for (let i = 0; i < allP.length; i++) {
  console.log(allP[i].textContent);
}

// .value:
// - Dùng để lấy nội dung văn bản trong thẻ input
// - Dùng để sửa nội dung văn bản trong thẻ input
let theInput = document.querySelector(".thong-tin input");
// Lấy ra nội dung văn bản của thẻ input
console.log(theInput.value);
// Thay đổi nội dung văn bản thẻ input
theInput.value = "thắng";

// createElement & appendChild:
// tạo thẻ và thêm vào trang html
// tạo mới thẻ p
let thePMoi = document.createElement("p");
thePMoi.textContent = "Hoa Cải";
// Cho thẻ p vào thẻ body
document.body.appendChild(thePMoi);
//  truy xuất div có id là hoa
let divHoa = document.querySelector("#hoa");
// Cho thẻ p vào div có id là hoa
divHoa.appendChild(thePMoi);

// Event (Sự kiện):
// - Phải khai báo hàm
// - Sử dụng bảng sự kiện (zalo)

// BT: ấn vào nút thêm mới thẻ p vào div id là hoa
function themMoi() {
  // Tạo mới thẻ p
  // thêm nội dung văn bản cho thẻ p
  // đưa thẻ p vào trong div có id là hoa
  // Tạo mới thẻ p
  let newP = document.createElement("p");
  // Thêm nội dung cho thẻ p
  newP.textContent = "Hoa hoè";
  // Tìm div id là hoa để thêm thẻ p vào
  let divHoa = document.querySelector("#hoa");
  // thêm thẻ p vào div id là hoa
  divHoa.appendChild(newP);
}

// BT: ấn vào nút lấy thông tin
// sẽ lấy thông tin: Họ tên, địa chỉ, sđt và hiển thị ở console.log
function layThongTin() {}
