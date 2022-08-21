function Dangky()
{
    var ten = document.forms.reg["username"].value;
    var mk = document.forms.reg["password"].value;
    var ns = document.forms.reg["date"].value;
    var gt = document.forms.reg["gt"].value;
    var qt = document.forms.reg["qt"].value;
    document.forms.reg["thongtin"].value = "Chào mừng " + ten + "\nBạn là "+ gt + "\nMật khẩu của bạn có " + mk.length + " kí tự \n" + "Bạn sinh ngày " + ns + "\nVấn đề bạn quan tâm là: " + qt;
    return false;
}