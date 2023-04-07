/**
 * Autor: Jamer José Rebolledo Quiroz
 * Github: https://github.com/jamerrq
 * Linkedin: https://linkedin.com/in/jamerrq
 */
const { BinarySearchTree } = require("../DS");

// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
//
// 🔟 ***** EJERCICIO 10 ***** - BinarySearchTree.spotHousePrices() 🔟 Agregar
// al prototype de BinarySearchTree el método spotHouseValues(), el cual deberá
// retornar un array con los valores del árbol que sean mayores al número
// recibido por parámetros.
//
// EJEMPLOS:
//
// Dado el siguiente árbol:
//                 6
//             /      \
//           4         8
//         /  \       /  \
//        3    5     7    9
//
// nuevaCasa.spotHousePrices(6, []) => [8, 7, 9] nuevaCasa.spotHousePrices(4,
// []) => [6, 5, 8, 7, 9]
//
//⚠️ ATENCION ⚠️
// - Para solucionar el ejercicio, deben recorrer el arbol de manera
//   depth-first/pre-order (o sea, lo recorren de izquierda a derecha)
// - El array sera provisto via parametros
//
// REQUISITOS: 🟢 Devolver un array con los numeros mayores al recibido por
//  parametros 🟢 Recorrer el arbol de manera depth-first pre-order

BinarySearchTree.prototype.spotHousePrices = function (num, arr = []) {
    // Tu código aquí:
    if (this.value > num) {
        arr.push(this.value);
        if (this.left) this.left.spotHousePrices(num, arr);
    }
    if (this.right) this.right.spotHousePrices(num, arr);
    return arr;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
    BinarySearchTree
};
