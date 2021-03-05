var numero1 = prompt("Introduce el primer numero:");
while(numero1.length == 0){
    var numero1 = prompt("Introduce el primer numero:");
    
}
numero1 = parseInt(numero1);


var numero2 = prompt("Introduce el segundo numero:");


while(numero2.length == 0){
    var numero2 = prompt("Introduce el segundo numero:");
}

numero2 = parseInt(numero2);


var numero3 = prompt("Introduce el tercer numero:");
while(numero3.length == 0){
    var numero3 = prompt("Introduce el tercer numero:");
}
numero3 = parseInt(numero3);

function maximo(x1,x2,x3) {
   if (x1>x2 && x1>x3) {
       return x1;
   }
   if (x2>x1 && x2>x3) {
        return x2
   }

   if (x3>x1 && x3>x2) {
        return x3
   }
       
   
}

document.write(`<h2> El mayor de los tres numero es: ${maximo(numero1,numero2,numero3)}`)
