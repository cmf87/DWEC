//document.write("<h1>"+ "HOLA" +"</h1>");

var cabeceras = ["<h1>",,"<h2>","<h3>",,"<h4>",,"<h5>",,"<h6>", ];
var cierres = ["</h1>","</h2>","</h3>","</h4>","</h5>","</h6>"]; 

function cierre(arr) {
    for ( j in arr){
    document.write(arr[j]);
}
}

var texto = "Sueño contigo princesa ";
function headers(arr1,arr2){
    for (i in arr1){
        document.write(arr1[i]+ texto + cierre(arr2));
    }
}
headers(cabeceras, cierres);


/* var cabeceras = ["<h1>","<h2>","<h3>","<h4>","<h5>","<h6>", ];
var cierres = ["</h1>","</h2>","</h3>","</h4>","</h5>","</h6>"]; 
var texto = "Karaoke Pub Groucho SIUUUU";


function ponerHeaders(arr1, arr2){
    let x;
    let y;
    for (i in arr1){
        x = (arr1[i]+ texto);

        for (j in arr2){
            y = (x + arr2[j]);
        }
        document.write(x + y);
    }
}

ponerHeaders(cabeceras, cierres);



 */