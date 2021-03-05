var lado1 = prompt("Introduce el valor de un lado del cuadrado:");
while(lado1.length == 0){
    var lado1 = prompt("Introduce el valor de un lado del cuadrado:");
    
}
lado1 = parseInt(lado1);



function perimetro(l1) {
    return l1*4;
}

function superficie(l1) {
    return Math.pow(l1,2)
}

document.write(`<h2> El perimetro del cuadrado es: ${perimetro(lado1)}<h2> <h2>El area del cuadrado es:${superficie(lado1)} `)




