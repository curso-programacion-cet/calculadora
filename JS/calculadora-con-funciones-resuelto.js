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

    let elNumeroEsValido = validarNumero(numero);

    while (!elNumeroEsValido) {
        numero = prompt("No ingresaste un numero válido. Ingresá un numero");
        elNumeroEsValido = validarNumero(numero);
    }

    return numero;
}

function validarNumero(numeroIngresado) {
    let elNumeroEsValido = true; // suponemos que es válido salvo que se demuestre lo contrario

    // Recorremos lo ingresado. Por ejemplo, 123 es válido pero 12abc no
    for (const caracter of numeroIngresado) {
        // ¿Se les ocurre como cambiar esta validacion usando arrays?
        if (caracter != 0 && caracter != 1 && caracter != 2 && caracter != 3 && caracter != 4
            && caracter != 5 && caracter != 6 && caracter != 7 && caracter != 8 && caracter != 9
        ) {
            elNumeroEsValido = false;
            break;
        }
    }

    return elNumeroEsValido;
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