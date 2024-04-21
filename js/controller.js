

function renderDssv(svArr) {

    let contentHTML = "";
    for (let i = 0; i < svArr.length; i++) {

        let trStrings = `<tr> 
                            <td>${svArr[i].ma}</td>
                            <td>${svArr[i].ten}</td>
                            <td>${svArr[i].email}</td>
                            <td>${svArr[i].matkhau}</td>
                            <td>0</td>
                            <td class="btn btn-danger ml-3 mt-1 p-2" onclick="xoaSV('${svArr[i].ma}')">Xóa</td>
                        </tr>`

        contentHTML += trStrings;
    }

    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

