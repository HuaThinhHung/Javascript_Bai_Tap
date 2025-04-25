/** ------Bài 1----------
 ** Đầu vào :
    - 1 ngày = 100.000
** Xử lý :
    - lnv  = số ngày làm * 100.000
** Đầu ra :
    - In TongTien
 */

let luongNgay = 100000 ;
let soNgayLam = prompt("Nhập số ngày làm việc trong tháng: ");
let tongTien = 0;
tongTien = luongNgay * soNgayLam ;

console.log("Tổng lương tháng này là: " + tongTien + " VNĐ");

