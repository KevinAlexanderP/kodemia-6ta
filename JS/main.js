var yearsOflife = 23;
var monthsOflife = 7
var daysoflife = 2;
var secondsLiving = "I have lived this seconds " + ((yearsOflife * 365) + (monthsOflife * 30) + daysoflife) * (24 * 60 * 60)
console.log(secondsLiving);

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