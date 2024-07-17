// Event (Sự kiện)
// setTimeout
// setInterval

// Event: là những thứ tác động lên các thẻ html
// Một số event: onclick, onmouseover, onmouseout, onkeyup, onchange
//
function demSo() {
  for (let i = 0; i <= 10; i++) {
    alert(i);
  }
}

// setTimeout: Dùng để thực hiện 1 hàm nào đó sau 1 khoảng
// thời gian
// Cú pháp setTimeout(tên_hàm, khoảng thời gian)
// - Tên_hàm: hàm do mình tự định nghĩa
// - thời gian: tính theo mili giây (2000 = 2s)

// VD: Hàm sayHello sẽ chạy sau 5 giây
// function sayHello() {
//   alert("Hello world...");
// }

// setTimeout(sayHello, 5000);

// // Lưu ý: sau khi sử dụng setTimeout thì phải gọi hàm clearTimeout
// // Cú pháp: clearTimeout(tên_hàm)
// clearTimeout(sayHello);

// setInterval: Dùng để thực hiện 1 hàm lặp đi lặp sau 1 khoảng
// thời gian
// Cú pháp setInterval(tên_hàm, khoảng thời gian)
// - Tên_hàm: hàm do mình tự định nghĩa
// - thời gian: tính theo mili giây (2000 = 2s)

// VD: Cứ sau 3s hàm sayGoodbye sẽ chạy
function sayGoodbye() {
  alert("Say goodbye ....");
}

let timer = setInterval(sayGoodbye, 3000);

// Lưu ý: sau khi sử dụng setInterval muốn dừng việc lặp lại
// thì phải viết 1 hàm xử lý dừng
// trong hàm gọi tới hàm clearInterval(tên_biến)

function stop() {
  clearInterval(timer);
}
