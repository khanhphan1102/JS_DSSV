

let dssv = [];
var dataJson = localStorage.getItem("DSSV");

if (dataJson !== null) {

    var dataRaw = JSON.parse(dataJson);

    for (let i = 0; i < dataRaw.length; i++) {

        let data = dataRaw[i];

        let sv = new Sinhvien(data.ma, data.ten, data.email, data.matKhau, data.toan, data.ly, data.hoa);

        dssv.push(sv);
    }

    renderDssv(dssv);
}


// THEM SV
function themSv() {

    let sv = layThongTinTuForm();
    dssv.unshift(sv);

    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV", dataJson);
    renderDssv(dssv);

    resetForm();
}

// XOA SV
function xoaSv(id) {

    let index = dssv.findIndex(function (sv) {
        return sv.ma == id;
    });

    dssv.splice(index, 1);

    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV", dataJson);
    renderDssv(dssv);
}

// SUA SV
function suaSv(id) {
    let index = dssv.findIndex(function (item) {
        return item.ma == id;
    });

    let sv = dssv[index]

    document.querySelector("#txtMaSV").value = sv.ma;
    document.querySelector("#txtTenSV").value = sv.ten;
    document.querySelector("#txtEmail").value = sv.email;
    document.querySelector("#txtPass").value = sv.matKhau;
    document.querySelector("#txtDiemToan").value = sv.toan;
    document.querySelector("#txtDiemLy").value = sv.ly;
    document.querySelector("#txtDiemHoa").value = sv.hoa;

    document.querySelector("#txtMaSV").readOnly = true;
}

// UPDATE SV
function capNhatSv() {

    let sv = layThongTinTuForm();

    let index = dssv.findIndex(function (item) {
    return item.ma == sv.ma;
    })
    dssv[index] = sv;

    renderDssv(dssv);
    resetForm();
}

// RESET INPUT
function resetForm() {
    document.getElementById("formQLSV").reset();
    document.querySelector("#txtMaSV").readOnly = false;
}
