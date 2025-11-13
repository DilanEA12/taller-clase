/*Necesito un programa que calcule el total de mi compra en el supermercado.
 Pide el precio de tres productos diferentes y muestra el total a pagar.*/

let producto1 = Number(prompt("Ingresa el precio del primer producto:"));
let producto2 = Number(prompt("Ingresa el precio del segundo producto:"));
let producto3 = Number(prompt("Ingresa el precio del tercer producto:"));

let total = producto1 + producto2 + producto3;

alert("El total a pagar es: $" + total);

/*Para un evento, necesito un banner. Pide el **ancho y el alto** de una pared
 (en metros) y calcula su **área** para saber cuánto material comprar.*/
let ancho = parseFloat(prompt("Ingresa el ancho de la pared (en metros):"));
let alto = parseFloat(prompt("Ingresa el alto de la pared (en metros):"));

let area = ancho * alto;

alert("El área de la pared es: " + area + " metros cuadrados.");

/*Debo calcular cuánto **perímetro** tiene un potrero rectangular. Pide el largo
 y el ancho del potrero y muestra el resultado.*/
let largoPotrero = parseFloat(prompt("Ingresa el largo del potrero (en metros):"));
let anchoPotrero = parseFloat(prompt("Ingresa el ancho del potrero (en metros):"));

let perimetro = 2 * (largoPotrero + anchoPotrero);

alert("El perímetro del potrero es: " + perimetro + " metros.");

/* Mi app del clima solo muestra la temperatura en grados Fahrenheit. Pide la **temperatura en °F**
 y conviértela a **grados Celsius**.*/
let fahrenheit = parseFloat(prompt("Ingresa la temperatura en grados Fahrenheit:"));

let celsius = (fahrenheit - 32) * 5 / 9;

alert("La temperatura en grados Celsius (°C) es: " + celsius + "°C.");

/*Necesito saber la **edad de un usuario**. Pide su año de nacimiento y, asumiendo que el año actual
 es 2024, calcula cuántos años tiene.*/
let añoNacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));
let añoActual = 2024;

let edad = añooActual - añoNacimiento;

alert("Tu edad es: " + edad + " años.");









