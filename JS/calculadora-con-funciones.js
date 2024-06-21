let numero1 = pedirAlUsuarioUnNumero();
let numero2 = pedirAlUsuarioUnNumero();  
// Extra: podemos validar que lo ingresado sea un numero, es decir:
// "repetir codigo de pedir un numero HASTA que lo ingresado sea igual a alguno de estos caracteres: 0-1-2-3-4-5-6-7-8-9"

let operacion = pedirAlUsuarioOperacion();
// Tip: indicarle al usuario lo que debe ingresar. Por ejemplo, ¿debe ser un '+' o la palabra 'sumar'?
// Tip 2: validar que el usuario haya ingresado un valor valido

let resultado; // La declaramos fuera de cada "if", 
              // porque su scope debe ser global, y no finalizar cuando finalice el "if"

if (operacion == "+") {
    resultado = sumar(numero1, numero2);
}

else if (operacion == "-") {
    resultado = restar(numero1, numero2);
}

else if (operacion == "*") {
    resultado = multiplicar(numero1, numero2);
}

else if (operacion == "/") {
    resultado = dividir(numero1, numero2);
}
// Nota: hay una estructura que nos permite reemplazar tantos "else if", manteniendo su funcionamiento: switch
// Para saber mas al respecto, pueden ver acá: https://www.freecodecamp.org/espanol/news/javascript-switch-case-ejemplo-de-sentencias-switch-en-js/

mostrarResultado(resultado);

/* 
    ESPACIO PARA DECLARAR LAS FUNCIONES

    ...

*/



