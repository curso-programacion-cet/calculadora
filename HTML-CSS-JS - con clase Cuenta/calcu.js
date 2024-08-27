// Variables Globales
let resultado = 0;
let operacion = '';
let cuenta = '';
let num1 = '';
let num2 = '';
let yaSeIngresoOperacion = false;
let yaSeIngresoIgual = false;
let historial = [];

// Clase para la cuenta a realizar
class Cuenta {
    constructor(numero1, numero2, operacion){
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.operacion = operacion;
    }
    sumar() {
        return this.numero1 + this.numero2;
    }   
    restar() {
        return this.numero1 - this.numero2;
    }
    multiplicar() {
        return this.numero1 * this.numero2;
    }
    dividir() {
        return this.numero1 / this.numero2;
    }

    calcular() {
        // La estructura switch es una forma más prolija de escribir muchos "if"
        // Si intentan escribir este código con un "if" por cada operación, verán que queda bastante mas largo!
        switch (this.operacion) {
            case "+":
                return this.sumar();
            case "-":
                return this.restar();
            case "*":
                return this.multiplicar();
            case "/":
                return this.dividir();
            default:
                alert("Operación inválida. Solo se permiten +, -, *, /");
                return;
        }
    }
}

// Elementos del DOM
const botonIgual = document.getElementById("boton-igual");
const botonReset = document.getElementById("boton-reset");
const textoCuenta = document.getElementById("cuenta");
const inputResultado = document.getElementById("resultado");
const textoHistorial = document.getElementById("historial");
const botonesNumeros = document.getElementsByClassName("boton-numero");
const botonesOperaciones = document.getElementsByClassName("boton-operacion");

// Escuchadores de eventos
for (const boton of botonesNumeros) {
    boton.addEventListener("click", function(evento) {
        if (yaSeIngresoIgual) {
            mostrarAlerta();
            return;
        }

        cuenta += evento.target.value;
        textoCuenta.innerText = cuenta;

        if (!yaSeIngresoOperacion) {
            num1 += evento.target.value;
            console.log("Primer numero: " + num1);
        } 
        else {
            num2 += evento.target.value;
            console.log("Segundo numero: " + num2);
        }
    });
}

for (const boton of botonesOperaciones) {
    boton.addEventListener("click", function(evento) {
        if (yaSeIngresoIgual) {
            mostrarAlerta();
            return;
        }

        cuenta += evento.target.value;
        textoCuenta.innerText = cuenta;

        operacion = evento.target.value;
        yaSeIngresoOperacion = true;
        console.log("Ya se ingresó la operación, ahora se ingresará el siguiente número");
    });
}

botonIgual.addEventListener("click", () => calcular);
botonReset.addEventListener("click", () => reset);


// Nuestras funciones
function calcular() {    
    yaSeIngresoIgual = true;

    // El '+' delante de las variables, transforma el tipo texto en tipo numero
    // Recuerden que en este caso queremos hacer 
        // 1 + 1 = 2
    // que no es lo mismo que 
        // '1' + '1' = '11'

    let objetoCuenta = new Cuenta(+num1, +num2, operacion);
    
    resultado = objetoCuenta.calcular();

    inputResultado.value = resultado;

    actualizarHistorial();
}

function actualizarHistorial() {
    historial.push(cuenta + " = " + resultado);

    let textoActualizado = "";

    for (const cuentaEntera of historial) {
        textoActualizado += cuentaEntera + "<br>";
    }

    textoHistorial.innerHTML = textoActualizado;
}

function reset() {
    // Vuelvo todas las variables a los valores originales
    resultado = 0;
    operacion = '';
    cuenta = '';
    num1 = '';
    num2 = '';
    yaSeIngresoOperacion = false;
    yaSeIngresoIgual = false;

    textoCuenta.innerText = cuenta;
    inputResultado.value = resultado;
}

function mostrarAlerta() {
    alert("Debés clickear 'Reset' para una nueva cuenta");
}
