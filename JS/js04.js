function Tinh()
{
    var a = parseInt(document.forms["myform"]["txtSo1"].value);
    var b = parseInt(document.forms["myform"]["txtSo2"].value);
    var op = document.forms["myform"]["op"].value;
    var kq;
    switch(op)
    {
        case "+": kq = a + b; break;
        case "-": kq = a - b; break;
        case "*": kq = a * b; break;
        case "/":
            if (b != 0)
                kq = a / b;
            else
                kq = "Không thể thực hiện phép chia cho 0";
            break;
    }
    document.forms["myform"]["kq"].value = kq;
    return false;
}
