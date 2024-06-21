let numero1 = pedirAlUsuarioUnNumero();
let operacion = pedirAlUsuarioOperacion();
let numero2 = pedirAlUsuarioUnNumero();  

let resultado; 

if (operacion == "+") {
    resultado = sumar(+numero1, +numero2);
}

else if (operacion == "-") {
    resultado = restar(+numero1, +numero2);
}

else if (operacion == "*") {
    resultado = multiplicar(+numero1, +numero2);
}

else if (operacion == "/") {
    resultado = dividir(+numero1, +numero2);
}

mostrarResultado(resultado);


// Declaro funciones
function pedirAlUsuarioUnNumero() {
    let numero = prompt("Ingresá un numero");

    while (numero != 0 && numero != 1 && numero != 2 && numero != 3 && numero != 4
        && numero != 5 && numero != 6 && numero != 7 && numero != 8 && numero != 9
    ) {
        numero = prompt("No ingresaste un numero válido. Ingresá un numero");
    }

    return numero;
}

function pedirAlUsuarioOperacion() {
    let operacion = prompt("Ingresá una operación. Para sumar, ingresá + | Para restar, ingresá -  | Para multiplicar, ingresá *  | Para dividir, ingresá /");

    while (operacion != '+' && operacion != '-' && operacion != '*' && operacion != '/') {
        operacion = prompt("No ingresaste una operación válido. Ingresá una operación");
    }

    return operacion;
}

function sumar(numero1, numero2) {
    return numero1 + numero2;
}   
function restar(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
function dividir(numero1, numero2) {
    return numero1 / numero2;
}


function mostrarResultado(resultadoCuenta) {
    alert("El resultado de la cuenta es: " + resultadoCuenta);
}