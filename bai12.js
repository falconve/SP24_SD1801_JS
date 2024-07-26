// DÙNG JS ĐỂ CSS CHO CÁC THẺ
// Cách chuyển đổi thuộc tính CSS sang JS
// font-size => fontSize
// text-decoration => textDecoration
// display => display
// position => position

// Gọi tới thẻ h1 có id là the-h1
let theH1 = document.querySelector("#the-h1");
// CSS đổi font chữ cho thẻ h1
// CÚ PHÁP:
// tên-biến-chứa-thẻ.style.thuộc-tính-css
theH1.style.fontFamily = "Arial";

// BT:
// - gạch chân chữ (underline) cho thẻ h2
// - thay đổi font chữ sang 60px cho thẻ h3
let theH2 = document.querySelector("#the-h2");
let theH3 = document.querySelector("#the-h3");
// gạch chân chữ (underline) cho thẻ h2
theH2.style.textDecoration = "underline";
// thay đổi font chữ sang 60px cho thẻ h3
theH3.style.fontSize = "60px";

function anTheH1() {
  let theH1 = document.querySelector("#the-h1");
  // display = none là ẩn thẻ html
  // Sử dụng toán tử so sánh bằng để ktra css của thẻ h1

  if (theH1.style.display == "block") {
    theH1.style.display = "none";
  } else {
    theH1.style.display = "block";
  }
}

// Cách 1
// function doiMauTheP() {
//   let red = document.querySelector("#red");
//   red.style.color = "red";
//   // Đổi màu cho 3 thẻ p còn lại
//   let yellow = document.querySelector("#yellow");
//   yellow.style.color = "yellow";
//   let green = document.querySelector("#green");
//   green.style.color = "green";
//   let pink = document.querySelector("#pink");
//   pink.style.color = "pink";
// }

// Cách 2
function doiMauTheP() {
  let allP = document.querySelectorAll("p");
  for (let i = 0; i < allP.length; i++) {
    // .id: dùng để lấy ra tên của id
    allP[i].style.color = allP[i].id;
  }
}

// Thêm class vào thẻ
// CÚ PHÁP: .classList.add('tên class')
let theDiv = document.querySelector("div");
theDiv.classList.add("bg");

// Xoá class ở thẻ
// CÚ PHÁP: .classList.remove('tên class');
let theP = document.querySelector(".the-p");
theP.classList.remove("the-p");
