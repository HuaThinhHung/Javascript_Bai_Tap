/**----------------------Bài 1-------------------- */
let tongTien = document.getElementById("tongTien");
tongTien.onclick = function () {
    let luongNgay = document.getElementById("luongNgay").value * 1;   
    let soNgayLam = document.getElementById("soNgayLam").value * 1;

    let tongTien = luongNgay * soNgayLam;


    let output = `Tổng lương tháng này là: ${tongTien}`;
    let pInfo_1 = document .getElementById("pInfo_1");
    pInfo_1.innerHTML = output;

    pInfo_1.classList.add("info");
}

/**----------------------Bài 2-------------------- */
let dtb = document.getElementById("dtb");
dtb.onclick = function () {
    let soThuc1 = document.getElementById("soThuc1").value * 1;
    let soThuc2 = document.getElementById("soThuc2").value * 1;   
    let soThuc3 = document.getElementById("soThuc3").value * 1;   
    let soThuc4 = document.getElementById("soThuc4").value * 1;   
    let soThuc5 = document.getElementById("soThuc5").value * 1;

    let dtb = 0;
    dtb = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5 ) /5 ;


    let output = `Điểm trung bình là: ${dtb}`;
    let pInfo_2 = document .getElementById("pInfo_2");
    pInfo_2.innerHTML = output;

    pInfo_2.classList.add("info");
}

/**----------------------Bài 3-------------------- */
let soTienVND = document.getElementById("soTienVND");
soTienVND.onclick = function () {
    let soLuongUSD = document.getElementById("soLuongUSD").value * 1;   
    let tiGiaUSD = document.getElementById("tiGiaUSD").value * 1;

    let soTienVND = soLuongUSD * tiGiaUSD;

    const convertNumber = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });


    let output = `Số tiền VNĐ bạn có là: ${convertNumber.format(soTienVND)}`;
    let pInfo_3 = document .getElementById("pInfo_3");
    pInfo_3.innerHTML = output;

    pInfo_3.classList.add("info");
}

/**----------------------Bài 4-------------------- */
let tinh = document.getElementById("tinh");
tinh.onclick = function () {
    let dai = document.getElementById("dai").value * 1;   
    let rong = document.getElementById("rong").value * 1;

    let dienTich = dai * rong ;
    let chuVi = ( dai*1 + rong*1 ) * 2 ;

    let output = `Diện /tích: ${dienTich}, Chu Vi: ${chuVi}`;    let pInfo_4 = document .getElementById("pInfo_4");
    pInfo_4.innerHTML = output;

    pInfo_4.classList.add("info");
}

/**----------------------Bài 5-------------------- */
let tong2So = document.getElementById("tong2So");
tong2So.onclick = function () {
    // Lấy giá trị từ input
    let so = document.getElementById("soHangDV").value * 1;

    // Tách chữ số hàng đơn vị và hàng chục
    let soHangDV = so % 10;
    let soHangChuc = Math.floor(so / 10);

    // Tính tổng hai chữ số
    let tong2So = soHangChuc + soHangDV;

    // Hiển thị kết quả ra giao diện
    let output = `Tổng hai chữ số là: ${tong2So}`;
    let pInfo_5 = document.getElementById("pInfo_5");
    pInfo_5.innerHTML = output;

    pInfo_5.classList.add("info");
};