var yearsOflife = 23;
var monthsOflife = 7
var daysoflife = 2;
var secondsLiving = "I have lived this seconds " + ((yearsOflife * 365) + (monthsOflife * 30) + daysoflife) * (24 * 60 * 60)
console.log(secondsLiving);

//Ej palabra perro
console.log(perros[0] + perros[1] + perros[2] + perros[3] + perros[4]);

//Ej 3
var number = -300
if (number >= 0 && number <= 100 && number % 10 === 0) {
    console.log("entre 0 y 100 y es multiplo de 10")
} else if (number % 10 === 0) {
    console.warn("Solo es multiplo de 10")
} else {
    console.error('No esta en el rango ni es multiplo perro')
}

word = "Perros";
if (word.length % 2 === 0) {
    console.log("la condicion de par se cumple")
}
if (word.length > 0) {
    console.log("la condicion es mayor que 0")
}
if (word.length < 10) {
    console.log("la condicion es menor que 10")
}
if (word.length > 10) {
    console.log("Se cumple la condición >10")
}
if (word.length < 15) {
    console.log("Se cumple la condición <15")
}