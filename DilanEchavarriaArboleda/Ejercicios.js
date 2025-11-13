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

let edad = añoActual - añoNacimiento;

alert("Tu edad es: " + edad + " años.");

/*Quiero un script que **salude formalmente** a un cliente. Pide el nombre y el apellido del usuario y
 muestra en consola el mensaje: "Bienvenido, [Nombre Completo]".*/
let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");

let nombreCompleto = nombre + " " + apellido;

alert("Bienvenido, " + nombreCompleto + ".");

/*Necesito calcular el **promedio de notas** de un estudiante. Pide las 3 notas (de 0 a 5) y muestra el promedio final.*/
let nota1 = parseFloat(prompt("Ingresa la primera nota:"));
let nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
let nota3 = parseFloat(prompt("Ingresa la tercera nota:"));

let promedio = (nota1 + nota2 + nota3) / 3;

alert("El promedio final es: " + promedio);

/*Debo calcular el **salario semanal** de un empleado. Pide el número de horas trabajadas
 en la semana y el precio que se paga por hora. Muestra el salario total.*/
let horasTrabajadas = parseFloat(prompt("Ingresa el número de horas trabajadas en la semana:"));
let precioPorHora = parseFloat(prompt("Ingresa el precio que se paga por hora:"));

let salarioSemanal = horasTrabajadas * precioPorHora;

alert("El salario semanal es: $" + salarioSemanal);

/*Estoy planeando un viaje y el mapa está en millas. Pide una **distancia en millas** y
 muéstrala convertida a **kilómetros**. (1 milla = 1.60934 km).*/
let millas = parseFloat(prompt("Ingresa la distancia en millas:"));

let kilometros = millas * 1.60934;

alert("La distancia en kilómetros es: " + kilometros + " km.");

/*Un sistema registra el tiempo de trabajo en minutos. Pide un **total de minutos** y
 calcula cuántas **horas y minutos** representa (ej. 130 minutos = 2 horas y 10 minutos).*/
let totalMinutos = parseInt(prompt("Ingresa el total de minutos trabajados:"));

let horas = Math.floor(totalMinutos / 60);
let minutos = totalMinutos % 60;

alert("El tiempo trabajado es: " + horas + " horas y " + minutos + " minutos.");

/*Necesito calcular el **precio final** de un producto que tiene descuento. Pide el precio
 original y el porcentaje de descuento (ej. 20 para 20%) y muestra el precio final a pagar.*/
let precioOriginal = parseFloat(prompt("Ingresa el precio original del producto:"));
let porcentajeDescuento = parseFloat(prompt("Ingresa el porcentaje de descuento:"));

let descuento = (porcentajeDescuento / 100) * precioOriginal;
let precioFinal = precioOriginal - descuento;

alert("El precio final a pagar es: $" + precioFinal);














