/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */
/*
  Importante: No modificar ni el nombre ni los argumetos que reciben las
  funciones, sólo deben escribir código dentro de las funciones ya definidas. No
  comentar la funcion
*/
// ---- Recursión ---- EJERCICIO 8 La función countDeep recibe por parámetro un
// arreglo que contiene numbers, strings, booleanos, undefined y/o arreglos
// (este ultimo contienen, a su vez, más numbers, strings, booleanos, undefined
// y/o arreglos). Deberas contar la cantidad de cada uno y realizar las
// siguientes operaciones para llegar al resultado final. la cantidad de arrays
// (contando el array padre) menos la cantidad de numbers, al resultado
// multiplicarlo por la cantidad de strings, al resultado dividirlo por la
// cantidad de booleanos y a ese resultado elevarlo a la cantidad de undefined.

// Ejemplo: countDeep( [ 1, 2, 3, ["hi"], [ undefined, "hola", [ true, "bye" ]
// ], undefined, [ false ], "9"] ) ----> Debería retornar 2 number = 3, string =
// 4, boolean = 2, undefined = 2, array = 5: la ecuacion quedaria 5-3 = 2, 2*4 =
// 8, 8/2 = 4, 42 ------> resultado = 16

function countType(array, type) {
    if (type == "array" && Array.isArray(array)) {
        return array.reduce((acc, value) => {
            return acc + countType(value, type)
        }, 1);
    }
    if (typeof array == type) {
        return 1;
    }
    if (Array.isArray(array)) {
        return array.reduce((acc, value) => {
            return acc + countType(value, type)
        }, 0);
    }
    return 0;
}

function countDeep(arraicito) {
    // Tu código aca:
    let numArrays = countType(arraicito, "array");
    let numNumbers = countType(arraicito, "number");
    let numStrings = countType(arraicito, "string");
    let numBooleans = countType(arraicito, "boolean");
    let numNulls = countType(arraicito, "undefined");

    return (((numArrays - numNumbers) * numStrings) / numBooleans) ** numNulls;

}

// No modifiques nada debajo de esta linea //

module.exports = countDeep;
