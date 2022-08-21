var html = "<table><caption>BẢNG CỬU CHƯƠNG</caption>";
var count = 2, row, col, i;
for (row = 1; row <= 2; row++)
{
    html += "<tr>";
    for (col = 1; col <= 4; col++)
    {
        html += "<td>";
        for (i = 1; i <= 9; i++)
            html += count + " x " + i + " = " + count * i + "<br>";
        count++;
        html += "</td>";
    }
    html += "</tr>";
}
html += "</table>";
document.write(html);
