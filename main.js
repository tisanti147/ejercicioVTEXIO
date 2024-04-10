const numeros = [1, 3, 2, 4, 2, 1, 3];

function numeroUnico (numeros) {
    // Comprobando que N sea impar y mayor o igual a 3. La función termina de no ser el caso
    try {
        if (numeros.length < 3 || numeros.length % 2 === 0) {
            throw new Error("Conjunto de números inválido");
        }
    } catch (error) {
        console.log(error.message);
        return;
    }

    // Declarando variables auxiliares
    let isUnique = false
    let i = 0
    let contador = 0
    let unique = 0

    // Bucle que continua hasta que se encuentre el número único
    while(isUnique == false) {
        // aux es el número que se va a comparar con el resto del arreglo
        aux = numeros[i]
        numeros.forEach(n => {
            // Por cada vez que aux sea igual a n, se incrementa el contador
            if(n == aux) {
                contador++
            }
        });

        // Si el contador es 1, significa que el número solo esta presente una vez
        if(contador == 1) {
            isUnique = true
            unique = aux
        }else{
            // i se incrementa, pasamos al siguiente número en el arreglo
            i++
            // Se reinicia el contador para el próximo número
            contador = 0

            // Si llega al punto de que i sea igual al tamaño del arreglo, significa que no se encontró un número único
            if(i == numeros.length) {
                console.log("No existe un número único");
                return;
        }
        }
    }
    return unique;
}

console.log(numeroUnico(numeros));