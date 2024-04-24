

function Sinhvien(maSv, tenSv, email, matKhau, toan, ly, hoa) {
    
    this.ma = maSv;
    this.ten = tenSv;
    this.email = email;
    this.matKhau = matKhau;
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;

    this.tinhDTB = function () {
        return ((this.ly + this.toan + this.hoa) / 3).toFixed(2);
    }
}
