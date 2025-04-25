/** ------------Bài 2----------
 ** Đầu vào :
    - tạo promt có thể nhập 5 số thực
** Xử lý :
    - hãy tính giá trị dtb của 5 số thực đã nhập 
** Đầu ra :
    - In ra giá trị dtb của 5 số thực đã nhập
 */

let soThuc1 = prompt("Nhập số thực thứ nhất: ");
let soThuc2 = prompt("Nhập số thực thứ hai: ");
let soThuc3 = prompt("Nhập số thực thứ ba: ");
let soThuc4 = prompt("Nhập số thực thứ tư: ");
let soThuc5 = prompt("Nhập số thực thứ năm: ");

// Chuyển đổi kiểu dữ liệu từ string sang number
soThuc1= Number(soThuc1);
soThuc2= Number(soThuc2);
soThuc3= Number(soThuc3);
soThuc4= Number(soThuc4);
soThuc5= Number(soThuc5);

// typeof viết ra kiểu dữ liệu của biến

console.log(soThuc1); 
console.log(soThuc2);
console.log(soThuc3); 
console.log(soThuc4); 
console.log(soThuc5);


let dtb = 0;
dtb = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5 ) /5 ;

console.log("Điểm trung bình là: " + dtb );

// let dtb = 0;
// dtb = (soThuc1*1 + soThuc2*1 + soThuc3*1 + soThuc4*1 + soThuc5*1 ) /5 ;
// console.log("Điểm trung bình là: " + dtb );

