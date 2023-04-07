/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */
// 6️⃣ ***** EJERCICIO 6 ALGORITMOS***** - ordenarRopa() 6️⃣ Se desordenó todo
// el inventario de ropa! hay prendas por todas partes. Por el momento tendremos
// que solucionar el problema creando la función 🧦 ordenarRopa() 🧦, la cual
// recibirá por parámetros un array de objetos anidados, que representarán cada
// prenda. Cada objeto tendrá dentro una propiedad nombre y un precio entero.
// Tendrás que implementar un algoritmo de ordenamiento para poder organizar
// toda la ropa de MAYOR a MENOR según el precio.
//
//
// EJEMPLOS: Dado el siguiente arreglo: [{ nombre: 'Camiseta', precio: 12}, {
// nombre: 'Pantalon', precio: 2 }, { nombre: 'Saco', precio: 23 }, { nombre:
// 'Gorra', precio: 4 }]
//
// ordenarRopa(array) Devuelve ➡ [{ nombre: 'Saco', precio: 23 }, { nombre:
// 'Camiseta', precio: 12 }, { nombre: 'Gorra', precio: 4 }, { nombre:
// 'Pantalon', precio: 2 }]
//
// REQUISITOS: 🟢 Implementar algún algoritmo de ordenamiento para ordenar el
//  arreglo de MAYOR a MENOR 🟢 NO utilizar el método sort de array!

function mergeSort(array) {
    let n = array.length;
    if (n <= 1) return [...array];
    let half = parseInt(n / 2);
    let left = mergeSort(array.slice(0, half));
    let rigth = mergeSort(array.slice(half));
    let merged = Array.from(Array(n), x => 0);
    let i = 0, j = 0, k = 0;
    while (k < n) {
        if (i >= left.length) {
            while (j < rigth.length) {
                merged[k] = rigth[j];
                j++;
                k++;
            }
            break;
        }
        if (j >= rigth.length) {
            while (i < left.length) {
                merged[k] = left[i];
                i++;
                k++;
            }
            break;
        }
        if (left[i]["precio"] > rigth[j]["precio"]) {
            merged[k] = left[i];
            i++;
        } else {
            merged[k] = rigth[j];
            j++;
        }
        k++;
    }
    return merged;
}

function ordenarRopa(ropa) {
    // Tu código aquí:
    let ordered = mergeSort(ropa);
    return ordered;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
    ordenarRopa
};
