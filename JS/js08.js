function Statistic() {
    var s = document.getElementById("txtS").value;
    var arr = s.split(" ");
    var i, words = 0;
    var arrKq = [];
    for (i = 0; i <= 128; i++) {
        arrKq[i] = 0;
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i].trim() != "")
            words++;
    }
    var kq = "Characters: " + s.length + "<br>" + "Words: " + words + "<br>";
    for (i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 'a' && s.charCodeAt(i) <= 'z')
            arrKq[s.charCodeAt(i) - 32]++;
        else
            arrKq[s.charCodeAt(i)]++;
    }
    for (i = 0; i < arrKq.length; i++) {
        if (arrKq[i] > 0)
            kq += "Character ' " + String.fromCharCode(i) + " ': " + arrKq[i] + "<br>";
    }
    document.getElementById("kq").innerHTML = kq;
}
