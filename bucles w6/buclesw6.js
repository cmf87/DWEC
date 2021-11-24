//4.10

/* var cabeceras = ["<h1>","<h2>","<h3>","<h4>","<h5>","<h6>", ];
var cierres = ["</h1>","</h2>","</h3>","</h4>","</h5>","</h6>"]; 
var texto = "La guagua está repartiendo jamón";
alert("Julia se está sacando mocos y luego tirándolos ")

function ponerHeaders(arr1){
    for (i in arr1){
        document.write(arr1[i]+ texto + cierres[i]);
    }
}

ponerHeaders(cabeceras); */

//4.11 

/* var columnas = parseInt(prompt("Introduce número de columnas: "));
var ancho = prompt("Introduce ancho en píxeles");
var alto = prompt("Introduce alto en píxeles");


document.write("<table border =" +"0", " cellspacing =" + "2"," bgcolor = "+ "black" , " width = " + "200", ">");
document.write("<tr bgcolor = " +"white", " height = "+ alto ,">");

for (let j = 0; j < columnas; j++){
    document.write("<td width ="+ ancho +">" , "&nbsp;" , "</td>");
}

document.write("</tr>");
document.write("</table>"); 

//4.12


for (let i = 0; i < columnas; i++){
    if(i % 2 == 1){
        document.write("<td width ="+ ancho , " bgcolor = "+ "white" ,">", "&nbsp;" , "</td>");
        }
    if(i % 2 == 0){
        document.write("<td width ="+ ancho , " bgcolor = "+ "black", ">" , "&nbsp;" , "</td>");
        }
}
    

document.write("</tr>");
document.write("</table>"); */

//4.13

/* var columnas = parseInt(prompt("Introduce número de columnas: "));
var ancho = prompt("Introduce ancho en píxeles");
var alto = prompt("Introduce alto en píxeles");
var i = 0;

document.write("<table border =" +"0", " cellspacing =" + "2"," bgcolor = "+ "black" , " width = " + "200", ">");
document.write("<tr bgcolor = " +"white", " height = "+ alto ,">");

while (i < columnas){
    i++;
    document.write("<td width ="+ ancho , " bgcolor = "+ "white" ,">", "&nbsp;" , "</td>");
}
document.write("</tr>");
document.write("</table>");  */

//4.14

/* var columnas = parseInt(prompt("Introduce número de columnas: "));
var ancho = prompt("Introduce ancho en píxeles");
var alto = prompt("Introduce alto en píxeles");
var i = 1;

document.write("<table border =" +"0", " cellspacing =" + "2"," bgcolor = "+ "black" , " width = " + "200", ">");
document.write("<tr bgcolor = " +"white", " height = "+ alto ,">");

while (i < columnas){
    i++;
    if (i % 2 == 1){
        document.write("<td width ="+ ancho , " bgcolor = "+ "white" ,">", "&nbsp;" , "</td>");
    }
    if (i % 2 == 0){
        document.write("<td width ="+ ancho , " bgcolor = "+ "black" ,">", "&nbsp;" , "</td>");
    }   
}
document.write("</tr>");
document.write("</table>");  */

//4.15
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

/* let numero = parseInt(prompt("Introduce número"));
let numeroAdivina = getRandomInt(0, 101);
let intentos = 0;

while (numero != numeroAdivina){
    intentos++;
    if (numero < numeroAdivina){
        alert("Más alto");
        numero = parseInt(prompt("Introduce número"));
    }
    if (numero > numeroAdivina){
        alert("Más bajo")
        numero = parseInt(prompt("Introduce número"));
    }
}
alert("Enhorabuena, el número era : " + numeroAdivina +" . "+ intentos + " intentos"); */

//4.16 
/* let numero ;
let numeroAdivina = getRandomInt(0, 101);
let intentos = 0;

do {
    numero = parseInt(prompt("Introduce número"));
    intentos++;
    if (numero < numeroAdivina){
        alert("Más alto");
    }
    if (numero > numeroAdivina){
        alert("Más bajo")
    }
}
while (numero != numeroAdivina);

alert("Enhorabuena, el número era : " + numeroAdivina +" . "+ intentos + " intentos"); */

//4.17

/* let i;
let j;

for (i = 1; i < 10; i++){
    document.write("Tabla del "+ i + ":", "</br>");
    document.write("</br>");
    for(j = 1; j <= 10; j++){
        document.write( i + " x " + j +" = " + i*j + "</br>");
        if (j == 10){
            document.write("</br>");  
        }
    }
} */

//4.18

/* var filas = parseInt(prompt("Introduce número de filas: "));
var columnas = parseInt(prompt("Introduce número de columnas: "));
var ancho = prompt("Introduce ancho en píxeles");
var alto = prompt("Introduce alto en píxeles");

document.write("<table border =" +"0", " cellspacing =" + "2"," bgcolor = "+ "black" , " width = " + "200", ">");


for (let j = 0; j < columnas; j++ ){
    document.write("<tr bgcolor = " +"white", " height = "+ alto ,">");
    for (let i = 0; i < filas; i++){
        document.write("<td width ="+ ancho , " bgcolor = "+ "white" ,">", "&nbsp;" , "</td>");
    }
    document.write("</tr>");
}
document.write("</table>"); */

//4.19

let medida = prompt("Introduce medida");

document.write(`<table border = ”0” cellspacing = ”2” bgcolor = ”black” width = ”200”>`);

for (let i = 0; i < 8; i++ ){

    document.write(`<tr bgcolor = "white" height = "${medida}" >`);

    for ( let j = 0; j < 8; j++)
    {
        if (i % 2 == 0)
        {

            if ( j % 2 == 0){
            document.write(`<td width = "${medida}" bgcolor = "white"> &nbsp; </td>`);
            }
            else {
                document.write(`<td width = "${medida}" bgcolor = "black"> &nbsp; </td>`);
            }
        }
        else {
            if (j % 2 != 0){
                document.write(`<td width = "${medida}" bgcolor = "white"> &nbsp; </td>`);
            }
            else {
                document.write(`<td width = "${medida}" bgcolor = "black"> &nbsp; </td>`);
            }
            
        }  
    }
    document.write("</tr>");

}
document.write("</table>"); 