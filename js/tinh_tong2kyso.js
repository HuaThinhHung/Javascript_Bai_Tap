/** ------------Bài 5----------
 ** Đầu vào :
    - Nhập 1 số có 2 chữ số
** Xử lý :
    - Tính tổng 2 ký số vừa nhập
    - Lấy hàng đơn vị : soHangDV = so % 10
    - Lấy hàng đơn chục : soHangChuc = so / 10
** Đầu ra :
    - In ra Tổng 2 ký số
 */

let so = prompt("nhập 1 số có 2 chữ số: ") ;
let soHangDV = so % 10 ;
let soHangChuc = Math.floor (so / 10) ;
let tong2So = soHangChuc + soHangDV ;

console.log(tong2So);