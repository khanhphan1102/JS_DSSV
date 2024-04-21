

let dssv = []

function themSv() {

    let maSv = document.querySelector("#txtMaSV").value;
    let tenSv = document.querySelector("#txtTenSV").value;
    let email = document.querySelector("#txtEmail").value;
    let pass = document.querySelector("#txtPass").value;
    let diemToan = document.querySelector("#txtDiemToan").value * 1;
    let diemLy = document.querySelector("#txtDiemLy").value * 1;
    let diemHoa = document.querySelector("#txtDiemHoa").value * 1;

    let sv = {
        ma: maSv,
        ten: tenSv,
        email: email,
        matkhau: pass,
        toan: diemToan,
        ly: diemLy,
        hoa: diemHoa,
        tinhDTB: function () {
            return ((this.toan + this.ly + this.hoa) / 3);
        },
    }

    // dssv.push(sv);
    dssv.unshift(sv);

    //convert Array to Json
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV", dataJson);
    renderDssv(dssv);
};

//convert JSON to Array
var dataJson = localStorage.getItem("DSSV");
if (dataJson !== null) {

    dssv = JSON.parse(dataJson);
    renderDssv(dssv);
}

function xoaSV(id) {

    let indexSv = dssv.findIndex(function (item) {


        return item.ma == id;

    });
    dssv.splice(0, 1);

    //update dssv
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV", dataJson);
    renderDssv(dssv);

}