// Object
// Cú pháp: Khai báo 1 object sử dụng dấu ngoặc {}
// và ngăn cách nhau bởi dấu phẩy

let obj = {}; // object rỗng
// Khai báo 1 object
let person = {
  // thuộc tính
  name: "Tuan Anh",
  age: 26,
  // phương thức
  noi: function () {
    return "Hello world";
  },
};

// Truy xuất vào key của object để lấy ra giá trị (value)
console.log(person.name);
console.log(person.age);

// Vòng lặp for .. in trong object
let newPerson = {
  name: "Thanghq12",
  age: 28,
  address: "Hai Phong",
};
// for ("khai báo 1 biến" in "tên object cần lặp") {}
for (const key in newPerson) {
  console.log(newPerson[key]);
}
