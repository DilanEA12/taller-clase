/*Necesito un programa que calcule el total de mi compra en el supermercado.
 Pide el precio de tres productos diferentes y muestra el total a pagar.*/

 // Pedir el precio de tres productos
let producto1 = Number(prompt("Ingresa el precio del primer producto:"));
let producto2 = Number(prompt("Ingresa el precio del segundo producto:"));
let producto3 = Number(prompt("Ingresa el precio del tercer producto:"));

// Calcular el total
let total = producto1 + producto2 + producto3;

// Mostrar el resultado
alert("El total a pagar es: $" + total);
