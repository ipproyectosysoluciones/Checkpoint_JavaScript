/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */
// EJERCICIO 10
// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, object) {
    // Tu código acá
    let keys = Object.keys(object);
    let values = array.concat(keys.reduce((acc, value) => {
        acc.push(object[value]);
        return acc;
    }, []));
    let n = values.length;
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; j++) {
            if (values[j] < values[i]) {
                [values[j], values[i]] = [values[i], values[j]];
            }
        }
    }
    return values;
}

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
