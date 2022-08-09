console.log("Bienvenid@");

let numberOne = Number(prompt("Por favor, inserta tu primer número"));
    
let numberTwo = Number(prompt("Por favor, inserta un segundo número"));

let operation = prompt("¿Qué tipo de operación quieres realizar?");


function sumar(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function restar(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiplicación(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function división(numberOne, numberTwo) {
    return numberOne / numberTwo;
}

function exponente(numberOne, numberTwo) {
    return numberOne ** numberTwo;
}

function calculator(option, primerNum, segundoNum) {
    switch (option){
        case 'Suma':
            console.log(sumar(primerNum, segundoNum));
        case ('Resta'):
            console.log(restar(primerNum, segundoNum));
        case ('Multiplicación'):
            console.log(multiplicación(primerNum, segundoNum));
        case ('División'):
            console.log(división(primerNum, segundoNum));
        case ('Exponente'):
            console.log(exponente(primerNum, segundoNum));
        default:
        console.log ("La operación requerida no está soportada por la calculadora.")
  }
}


calculator(operation, numberOne, numberTwo);


// console.log("Bienvenid@");

// let numberOne = Number(prompt("Por favor, inserta tu primer número"));
    
// let numberTwo = Number(prompt("Por favor, inserta un segundo número"));

// let operation = prompt("¿Qué tipo de operación quieres realizar?");


// function sumar(numberOne, numberTwo) {
//     return numberOne + numberTwo;
// }

// function restar(numberOne, numberTwo) {
//     return numberOne - numberTwo;
// }

// function multiplicación(numberOne, numberTwo) {
//     return numberOne + numberTwo;
// }

// function división(numberOne, numberTwo) {
//     return numberOne / numberTwo;
// }

// function exponente(numberOne, numberTwo) {
//     return numberOne ** numberTwo;
// }

// function calculator(option, primerNum, segundoNum) {
//     let resultado = 0;
//     switch (option){
//         case 'Suma':
//             console.log(sumar(primerNum, segundoNum));
//         break;
//         case ('Resta'):
//             resultado = restar(primerNum, segundoNum);
//             console.log(resultado)
//         break;
//         case ('Multiplicación'):
//             resultado = multiplicación(primerNum, segundoNum);
//             console.log(resultado)
//         break;
//         case ('División'):
//             resultado = división(primerNum, segundoNum);
//             console.log(resultado)
//         break;
//         case ('Exponente'):
//             resultado = exponente(primerNum, segundoNum);
//             console.log(resultado)
//         break;
//         default:
//         console.log ("La operación requerida no está soportada por la calculadora.")
//         break;
//   }
// }


// calculator(operation, numberOne, numberTwo);
