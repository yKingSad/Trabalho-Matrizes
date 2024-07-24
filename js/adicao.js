var m2x21 = [], m2x22 = [], m3x31 = [], m3x32 = [];
var mResultado2x2 = [], mResultado3x3 = [];
//CRIACAO DAS VARIAVEIS DE TABELA

for (var i = 0; i < 2; i++) {
    m2x21.push([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]); //ADICIONANDO OS VALORES - 2x2 e 3x3
    m2x22.push([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
}

for (var i = 0; i < 3; i++) {
    m3x31.push([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
    m3x32.push([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
}

//-------------------------------------------------------------------------------------------------------------

document.write("<h1 class='subtitle'>2x2</h1>");
document.write("<div id='tabela-container-1'><table class='table-edit'>"); //CRIACAO TABELA 2x2 - 1
for (var i = 0; i < m2x21.length; i++) {
    document.write("<tr>");
    for (var c = 0; c < m2x21[1].length; c++) {
        document.write("<td class='edit'><p>" + m2x21[i][c] + "</p></td>");
    }
    document.write("</tr>");
}
document.write("</table><br>");
document.write("<h1 class='subtitle'>+</h1><br>");

document.write("<table class='table-edit'>"); //CRIACAO TABELA 2x2 - 2
for (var i = 0; i < m2x22.length; i++) {
    document.write("<tr>");
    for (var c = 0; c < m2x22[1].length; c++) {
        document.write("<td class='edit'><p>" + m2x22[i][c] + "</p></td>");
    }
    document.write("</tr>");
}
document.write("</table></div><div class='espaco-cima'><h1 class='subtitle'>Resultado</h1></div>");

mResultado2x2[0] = [];                                                  //CALCULO TABELA 2X2
mResultado2x2[1] = [];

mResultado2x2[0][0] = mResultado2x2[0][0] = m2x21[0][0] + m2x22[0][0];
mResultado2x2[0][1] = mResultado2x2[0][1] = m2x21[0][1] + m2x22[0][1];
mResultado2x2[1][0] = mResultado2x2[1][0] = m2x21[1][0] + m2x22[1][0];
mResultado2x2[1][1] = mResultado2x2[1][1] = m2x21[1][1] + m2x22[1][1];

document.write("<br><div id='tabela-container-1'><table class='table-edit'>"); //CRIACAO TABELA 2x2 - RESULTADO
for (var i = 0; i < m2x22.length; i++) {
    document.write("<tr>");
    for (var c = 0; c < m2x22[1].length; c++) {
        document.write("<td class='edit'><p>" + mResultado2x2[i][c] + "</p></td>");
    }
    document.write("</tr>");
}
document.write("</table></div>");
document.write("<div class='espaco-cima'><h1 class='subtitle'>3x3</h1></div>");

//-------------------------------------------------------------------------------------------------------------

document.write("<br><div id='tabela-container-1'><table class='table-edit'>"); //CRIACAO TABELA 3x3 - 1
for (var i = 0; i < m3x31.length; i++) {
    document.write("<tr>");
    for (var c = 0; c < m3x31[1].length; c++) {
        document.write("<td class='edit'><p>" + m3x31[i][c] + "</p></td>");
    }
    document.write("</tr>");
}
document.write("</table><br>");
document.write("<h1 class='subtitle'>+</h1><br>");

document.write("<table class='table-edit'>"); //CRIACAO TABELA 3x3 - 2
for (var i = 0; i < m3x32.length; i++) {
    document.write("<tr>");
    for (var c = 0; c < m3x32[1].length; c++) {
        document.write("<td class='edit'><p>" + m3x32[i][c] + "</p></td>");
    }
    document.write("</tr>");
}
document.write("</table></div><div class='espaco-cima'><h1 class='subtitle'>Resultado</h1></div>");


mResultado3x3[0] = [];                              //CALCULO TABELA 3X3
mResultado3x3[1] = [];
mResultado3x3[2] = [];

mResultado3x3[0][0] = m3x31[0][0] + m3x32[0][0];
mResultado3x3[0][1] = m3x31[0][1] + m3x32[0][1];
mResultado3x3[0][2] = m3x31[0][2] + m3x32[0][2];

mResultado3x3[1][0] = m3x31[1][0] + m3x32[1][0];
mResultado3x3[1][1] = m3x31[1][1] + m3x32[1][1];
mResultado3x3[1][2] = m3x31[1][2] + m3x32[1][2];

mResultado3x3[2][0] = m3x31[2][0] + m3x32[2][0];
mResultado3x3[2][1] = m3x31[2][1] + m3x32[2][1];
mResultado3x3[2][2] = m3x31[2][2] + m3x32[2][2];

document.write("<div id='tabela-container-1'><table class='table-edit'>"); //CRIACAO TABELA 3x3 - RESULTADO
for (var i = 0; i < m3x32.length; i++) {
    document.write("<tr>");
    for (var c = 0; c < m3x32[1].length; c++) {
        document.write("<td class='edit'><p>" + mResultado3x3[i][c] + "</p></td>");
    }
    document.write("</tr>");
}
document.write("</table></div><div class='espaco-cima'></div>");