
// DOM
function layThongTinTuForm() {
    let maSv = document.querySelector("#txtMaSV").value;
    let tenSv = document.querySelector("#txtTenSV").value;
    let email = document.querySelector("#txtEmail").value;
    let matKhau = document.querySelector("#txtPass").value;
    let toan = document.querySelector("#txtDiemToan").value * 1;
    let ly = document.querySelector("#txtDiemLy").value * 1;
    let hoa = document.querySelector("#txtDiemHoa").value * 1;

    let sv = new Sinhvien(maSv, tenSv, email, matKhau, toan, ly, hoa);
    
    return sv;
}

// RENDER DSSV
function renderDssv(svArr) {

    let contentHTML = "";

    for (let i = 0; i < svArr.length; i++) {
        let sv = svArr[i];
        let trString = `<tr>
                           <td>${sv.ma}</td>
                           <td>${sv.ten}</td>
                           <td>${sv.email}</td>
                           <td>${sv.tinhDTB()}</td>
                           <td><button class='btn btn-danger' onclick="xoaSv('${sv.ma}')"> Xóa </button></td>
                           <td><button class='btn btn-dark' onclick="suaSv('${sv.ma}')"> Sửa </button></td>
                        </tr>`

        contentHTML += trString;
    }

    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV", dataJson);

    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}


