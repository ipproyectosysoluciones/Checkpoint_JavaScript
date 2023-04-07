/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */
//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
//
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de
// menor a mayor, retorne false si un número dentro del array no es primo
// EJEMPLOS: Dado el siguiente array: [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array: [61, 7, 13, 11, 29, 3] sortPrimeHouses() retorna => [3,
// 7, 11, 13, 29, 61] ⚠️ ATENCION ⚠️ NO utilizar el método sort() de Array!
// REQUISITOS: 🟢 Aplicar un algoritmo de ordenamiento de menor a mayor 🟢 Si
// numuero dentro del array no es primo, retornar false

function sortPrimeHouses(array) {
    // Tu código aquí:

    function isPrime(num) {
        for (let i = 2; i < num; ++i)if (num % i == 0) return false;
        return true;
    }

    let n = array.length;
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if (array[j] < array[i]) {
                [array[j], array[i]] = [array[i], array[j]];
            }
        }
        if (!isPrime(array[i])) return false;
    }
    return array;
    // console.log(array);
}

sortPrimeHouses([25, 3, 6, 8, 5, 12, 9, 18, 11, 7]);

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
    sortPrimeHouses
};