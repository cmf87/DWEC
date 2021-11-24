//1
//Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

/* function suma(){
    acum = 0;
    for(let i = 0; i < arguments.length; i++){
        acum += arguments[i];
    }
    return acum;
}

document.write(suma(20, 5, 10)); */

//2
//Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers

/* function addOnlyNums(){
    acum = 0;
    for(let i = 0; i <arguments.length; i++){
        if(typeof arguments[i] === 'number'){
            acum += arguments[i];
        }
    }
    return acum;
}

document.write(addOnlyNums('Pepe', 2, 58, true)); */

//3
//Write a function called countTheArgs that can take any number of arguments, and returns the number of arguments that are passed in.

/* function countTheArgs(){
    return arguments.length;
}

console.log(countTheArgs(1, 2, 3, 4, 'Pepe')); */
//4
//Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).
/* 
function combineTwoArrays(arr1, arr2){
    let combinado = [...arr1,...arr2];
    return combinado;
}

console.log(combineTwoArrays([1, 2, 3], ['pepe', 'johny'])); */

//5
//Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.

/* function sumEveryOther(){
    acum = 0;
    for(let i = 0; i <arguments.length; i++){
        if (arguments[i] % 2 == 1)
        acum += arguments[i];
    }
    return acum;
}

console.log(sumEveryOther(1, 4, 1, 2, 1)); */

//6
//Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.

function onlyUniques(){
    let arr = [];
    for (let i = 0; arguments.lenght; i++){
        arr.push(arguments[i]);
    }
    return arr;
}

console.log(onlyUniques(1, 4, [45, 76], 24));

