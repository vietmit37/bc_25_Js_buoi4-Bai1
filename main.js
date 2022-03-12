// Bài 1
/**
 * +input
 * Cho người dùng nhập các số
 * In ra các số theo thứ tự tăng dần
 * + Các bước thực hiện
 * B1: Tạo biến các số người dùng nhập a,b,c
 * B2: Tạo biến lưu tạm thời d
 * B3: Nếu a>c
 * d=a
 * a=b
 * b=d
 * Nếu a>c
 * d=a
 * a=c
 * c=d
 * Nếu b>c
 * d=b
 * b=c
 * c=d
 * B4: in ra các số theo thứ tự tăng dần
 * +Kế quả mong muốn
 * Vd : 2 3 0
 * tăng dần: 0 3 2
 */
document.getElementById("kq1").onclick = function () {
  var a = document.getElementById("a").value * 1;
  var b = document.getElementById("b").value * 1;
  var c = document.getElementById("c").value * 1;
  var thongbao = document.getElementById("thongbao1");
  if (a > b) {
    var d = a;
    a = b;
    b = d;
  }
  if (a > c) {
    var d = a;
    a = c;
    c = d;
  }
  if (b > c) {
    var d = b;
    b = c;
    c = d;
  }
  thongbao.innerHTML = "Sắp xếp theo thứ tự tăng dần: " + a + ";" + b + ";" + c;
};
// Bài 2
/**
 * +input
 * Cho người dùng nhập ký tự để in ra câu xin chào
 * +Các bước thực hiện
 * B1: Tạo biến để người dùng nhập vào nguoiSd
 * B2: Nếu là Bố(B): Xin chào bố...
 * B3: In ra kết quả
 * +Kết quả mong muốn
 * Nhập B
 * Xin chào bố
 */
document.getElementById("kq2").onclick = function () {
  var nguoiSd = document.getElementById("nguoi").value;
  var thongbao = document.getElementById("thongbao2");
  switch (nguoiSd) {
    case "Bố":
      thongbao.innerHTML = "Xin chào Bố";
    case "bố":
      thongbao.innerHTML = "Xin chào Bố";
    case "B":
      thongbao.innerHTML = "Xin chào Bố";
    case "b":
      thongbao.innerHTML = "Xin chào Bố";
      break;
    case "mẹ":
      thongbao.innerHTML = "Xin chào Mẹ";
    case "Mẹ":
      thongbao.innerHTML = "Xin chào Mẹ";
    case "m":
      thongbao.innerHTML = "Xin chào Mẹ";
    case "M":
      thongbao.innerHTML = "Xin chào Mẹ";
      break;
    case "Anh":
      thongbao.innerHTML = "Xin chào Anh trai";
    case "anh":
      thongbao.innerHTML = "Xin chào Anh trai";
    case "a":
      thongbao.innerHTML = "Xin chào Anh trai";
    case "A":
      thongbao.innerHTML = "Xin chào Anh trai";
      break;
    case "Em":
      thongbao.innerHTML = "Xin chào Em gái";
    case "em":
      thongbao.innerHTML = "Xin chào Em gái";
    case "E":
      thongbao.innerHTML = "Xin chào Em gái";
    case "e":
      thongbao.innerHTML = "Xin chào Em gái";
      break;
    default:
      thongbao.innerHTML = "Vui lòng nhập lại";
  }
};
// Bài 3
/**
 * +input
 * Cho người dùng nhập vào số
 * In ra có bao nhiêu số chẵn và số lẻ
 * +Các bước thực hiện
 * B1: Tạo biến để người dùng nhập số so1,so2,so3
 * B2:Tạo biến để đếm số chẵn và số lẻ
 * B3: Nếu số chẵn: so%2 thì tăng soChan+=1
 * Th khác:soLe+=1
 *
 */
document.getElementById("kq3").onclick = function () {
  var so1 = document.getElementById("so1").value;
  var so2 = document.getElementById("so2").value;
  var so3 = document.getElementById("so3").value;
  var soChan = 0;
  var soLe = 0;
  var thongbao = document.getElementById("thongbao3");
  if (so1 % 2 == 0) {
    soChan += 1;
  } else {
    soLe += 1;
  }
  if (so2 % 2 == 0) {
    soChan += 1;
  } else {
    soLe += 1;
  }
  if (so3 % 2 == 0) {
    soChan += 1;
  } else {
    soLe += 1;
  }
  thongbao.innerHTML = `Số chẵn:${soChan} <br/> Số lẻ:${soLe}`;
};
// Bai 4:
/**
 * +input
 * Cho người dùng nhập vào các cạnh
 * In ra tam giác gì ứng với số các cạnh:
 * +Các bước thực hiện
 * B1:Tạo biến a, b,c tương ứng với các cạnh
 * B2: nếu 2 cạnh cộng lại < hơn cạnh còn lại thì không phải tam giác
 * Nếu 2 cạnh bằng nhau thì là tam giác cân
 * Nếu 3 cạnh bằng nhau là tam giác đều
 * Nếu bình phương 2 cạnh bằng bình phương cạnh còn lại là tam giác vuông
 * B3: In ra tên tam giác
 * +Kết quả mong muốn
 * Nhập vào: 3 4 5
 * Tam giác vuông
 */
document.getElementById("kq4").onclick = function () {
  var a = document.getElementById("canhA").value * 1;
  var b = document.getElementById("canhB").value * 1;
  var c = document.getElementById("canhC").value * 1;
  var thongbao = document.getElementById("thongbao4");
  if (a + b <= c || a + c <= b || b + c <= a) {
    thongbao.innerHTML = "day khong phai la tam giac";
  } else if (a == b && b == c) {
    thongbao.innerHTML = "Tam giac deu";
  } else if (a == b || b == c || a == c) {
    thongbao.innerHTML = "Tam giac can";
  } else if (a * a + b * b == c * c) {
    thongbao.innerHTML = "Tam giac vuong";
  } else {
    thongbao.innerHTML = "Tam giac thuong";
  }
};
