//metodo

var numbers = [1, 2, 3, 4, 5, 6]

numbers.map(function(number, index, arr) {
    return number % 2 > 0
})


var palabras = ["Arnold", "Jose"]

palabras.filter(element => element.match(/^a.+/gi))