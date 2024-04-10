const numeros = [1, 3, 5, 4, 2, 1, 3, 4];

function numeroUnico (numeros) {
    if(numeros.length < 3 || numeros.length%2 == 0) {
        console.log("Conjunto de números inválido");
        return;
    }
    let isUnique = false
    let i = 0
    let contador = 0
    let unique = 0
    while(isUnique == false) {
        aux = numeros[i]
        console.log("chequeando si " + aux + " es unico");
        numeros.forEach(n => {
            console.log("me encuentro en el elemento: " + n);
            if(n == aux) {
                contador++
            }
            console.log("contador: " + contador);
        });
        if(contador == 1) {
            console.log("numero unico encontrado");
            isUnique = true
            unique = aux
        }
        contador = 0
        i++
    }
    return unique;
}

console.log(numeroUnico(numeros));