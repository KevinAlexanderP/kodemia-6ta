/*
var numbers = [1,2,3,4,5]

var i=0 ;

while(i<= numbers.length){
  console.log(numbers[i]);
  i++


}
while(i>=0){
  console.log(numbers[i]);
  i--



var numbers = [1,2,3,4,5[6,7,8,9,10]]

i=0
while(numbers > 0 ){
  console.log(numbers);


}
while(numbers.length)
{
  console.log(numbers.length-1)
}

for( var count=0;count<numbers.length; count ++){
c
var palabra = 'woeard'
var counter = 0
var vowels = ["a","e","i","o","u"]
for (var count = 0; count <= palabra.length-1;count++ ){
   if(vowels.indexOf(palabra[count]) > -1) {
       console.log(palabra[count])
       counter++
   }

}
if (counter >2 ){
  console.log("tiene al menos tres vocales")
}


var lista = [ ["David", 4], ["Jose", 2] ]
var sueldo = 450




for( var i=0, i<lista.length, i++){
  console.log(lista[i])
  
  
}
var lista = [ ["David", 4], ["Jose", 2] ]
var sueldo = 450
for( i=0; i<lista.length;i++){
  var hola=i-1
  console.log(lista[i][i--])
  

  
}

}*/


var data = [
    ['a', 'b'],
    ['c', 'd'],
    ['e', 'f']
]

for (var index = 0; index < data.length; index++) {
    var firstName = data[index][0]
    var secondName = data[index][1]
    var fullName = `${firstName}, ${secondName}`
    console.log(fullName)
}

var letra1 = palabra[0]
var letra2 = palabra[1]
var letra3 = palabra[2]
var letra4 = palabra[3]
var letra5 = palabra[4]
var palabraCompleta = letra1 + letra2 + letra3 + letra4 + letra5

console.log(palabraCompleta)



// Input 

var wordArray = ['p', 'e', 'r', 'r', 'o']

// Output

// 'perro'




// Input 

var wordArray = ['p', 'e', 'r', 'r', 'o']

// Output

// 'perro'

function joinWord(wordArray) {

    var word = ''

    for (var index = 0; index < wordArray.length; index++) {

        var letter = wordArray[index]

        word += letter

    }

    return word

}


const PI = 3.1416

function circleArea(radius) {
    return PI * (radius ** 2)

}

circleArea(10)

var circle = function(radius) {
    return PI * (radius ** 2)

}