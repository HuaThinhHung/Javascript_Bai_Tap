/** ------------Bài 3----------
 ** Đầu vào :
    - tạo promt nhập số tiền usd
    - tỷ giá usd = 25.000
** Xử lý :
    - Nhập vào số tiền việt và đổi qua usd
    - Tính số tiền usd = số tiền việt / tỷ giá usd
** Đầu ra :
    - In ra số tiền usd
 */

// let soLuongUSD = prompt("Nhập số tờ USD bạn muốn đổi: ");
// let tiGiaUSD = 25000;
// let soTienVND = soLuongUSD * tiGiaUSD;

// console.log("Số tiền VNĐ bạn có là :"+ soTienVND + " VNĐ");

let soLuongUSD = prompt("Nhập số tờ USD bạn muốn đổi: ");
let tiGiaUSD = 25000;
let soTienVND = soLuongUSD * tiGiaUSD;

// Định dạng số tiền VNĐ
let formattedVND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
}).format(soTienVND);

console.log("Số tiền VNĐ bạn có là: " + formattedVND);