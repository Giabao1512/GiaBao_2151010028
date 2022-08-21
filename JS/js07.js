function reverse()
{
    var s = document.getElementById("txtS1").value;
    arr = s.split(" ");
    var i, kq="";
    for (i = arr.length - 1; i >= 0; i--)
    kq += arr[i].trim() + " ";
    document.getElementById("txtS1").value = kq.trim();
}
function normal()
{
    var s = document.getElementById("txtS1").value;
    arr = s.split(" ");
    var i, kq ="", tmp;
    for (i = 0; i < arr.length; i++)
    {
        tmp = arr[i].trim().toLowerCase();
        if(tmp != "")
        {
            tmp = tmp.substr(0, 1).toUpperCase() + tmp.substr(1);
            kq += tmp + " ";
        }
    }
    document.getElementById("txtS1").value = kq.trim();
}
function reset()
{
    document.getElementById("txtS1").value = strOrigin;
}
function insert()
{
    var s1 = document.getElementById("txtS1").value;
    var s2 = document.getElementById("txtS2").value;
    var pos = document.getElementById("txtPos").value;
    if (pos =="")
    {
        alert("Vị trí chưa nhập");
        return false;
    }
    pos = Number(pos);
    if (isNaN(pos) || pos < 0 || pos > s1.length)
    {
        alert("Vị trí không hợp lệ");
        return false;
    }
    if (s2 == "")
    {
        alert("Chưa nhập chuỗi S2");
        return false;
    }
    var result = insertAt(s1,s2,pos);
    if(result)
        s1 = document.getElementById("txtS1").value = result;
}
function insertAt(main_string, ins_string, pos)
{
    return main_string.slice(0,pos) + ins_string + main_string.slice(pos);
}
function replaceAll()
{
    var s1 = document.getElementById("txtS1").value;
    var s2 = document.getElementById("txtS2").value;
    var s3 = document.getElementById("txtS3").value;
    var token = new RegExp(s2,"ig");
    s1 = s1.replace(token, s3);
    document.getElementById("txtS1").value = s1;
}
function deleteAll()
{
    var s1 = document.getElementById("txtS1").value;
    var s2 = document.getElementById("txtS2").value;
    var s3 = document.getElementById("txtS3").value;
    var token = new RegExp(s2, "ig");
    s1 = s1.replace(token,"");
    document.getElementById("txtS1").value = s1;

}
