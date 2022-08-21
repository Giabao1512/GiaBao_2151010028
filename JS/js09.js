function taoMang(){
    var i;
    var n = parseInt(document.getElementById("sopt").value);
    arr = new Array(n); // khởi tạo mảng toàn cục
    for (i = 0; i < n; i++)
        arr[i] = Math.floor(Math.random() * 100) % 50;
    document.getElementById("txtArr1").value = arr.join(" ");
}
function tang(a, b){
    return a - b;
}
function arrTang(){
    arr.sort(tang);
    document.getElementById("txtArr2").value = arr.join(" ");
}
function giam(a, b){
    return b - a;
}
function arrGiam(){
    arr.sort(giam);
    document.getElementById("txtArr3").value = arr.join(" ");
}