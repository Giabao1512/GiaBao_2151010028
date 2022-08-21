function Tinhtuoi()
{
    var ten = document.getElementById("txtTen").value;
    var namsinh = Number(document.getElementById("txtNamsinh").value);
    if(ten=="")
    {
        alert("Tên chưa nhập");
        return false;
    }
    if(namsinh==""||isNaN(namsinh))
    {
        alert("Năm sinh phải là số");
        return false;
    }
    var d=new Date;
    var tuoi = d.getFullYear() - namsinh;
    document.getElementById("ketqua").innerHTML="Chào bạn "+ten+"<br>Tuổi của bạn là " + tuoi;
}