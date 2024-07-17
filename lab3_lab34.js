let soThuNhat = null;
let soThuHai = null;
let phepTinh = null;

function thuc_hien() {
  switch (phepTinh) {
    case "+":
      let tong = soThuNhat + soThuHai;
      alert(`Tổng 2 số a và b: ${tong}`);
      break;
    case "-":
      let hieu = soThuNhat - soThuHai;
      alert(`Hiệu 2 số a và b: ${hieu}`);
      break;
    case "x":
      let tich = soThuNhat * soThuHai;
      alert(`Tích 2 số a và b: ${tich}`);
      break;
    case ":":
      let thuong = soThuNhat / soThuHai;
      alert(`Thương 2 số và b: ${thuong}`);
    default:
      alert(`không phải toán tử"`);
  }
  lam_lai();
}

function toan_hang(x) {
  if (soThuNhat == null) {
    soThuNhat = x;
  } else {
    soThuHai = x;
  }
}

function toan_tu(x) {
  phepTinh = x;
}

function lam_lai() {
  soThuNhat = null;
  soThuNhat = null;
  phepTinh = null;
}
