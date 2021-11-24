/* //SWITCH 
//1
let mes = prompt("Introduce un mes");
switch (mes){
    case 'Enero':
    case 'Marzo':
    case 'Mayo':
    case 'Julio':
    case 'Agosto':
    case 'Octubre':
    case 'Diciembre':
        document.write(mes+ ' tiene 31 días');
        break;
    case 'Abril':
    case 'Junio':
    case 'Septiembre':
    case 'Noviembre':
        document.write(mes+ ' tiene 30 días');
        break;
    case 'Febrero':
        document.write(mes + ' tiene 28 días, 29 si es año bisiesto');

} */
//2
/* var numero;
numero = parseInt(prompt("Introduce un número"));

switch(numero){
    case numero % 2 == 0:
        document.write(numero + ' es par');
        break;
    case numero % 2 == 1:
        console.log(numero + ' es impar');
        break;
    case numero % 3 == 0:
        console.log(numero + ' es múltiplo de 3');
        break;
    case numero % 5 == 0:
        console.log(numero + ' es múltiplo de 5');
        break;
}  */

//3
let num1 = parseInt(prompt("Introduce un número"));
let num2 = parseInt(prompt("Introduce un número"));
let operacion = prompt("introduce operador");

switch(operacion){
    case "+":
        document.write(num1+num2);
        break;
    case "-":
        document.write(num1-num2);
        break;
    case "*":
        document.write(num1*num2);
        break;
    case "/":
        document.write(num1/num2);
        break;
    
}